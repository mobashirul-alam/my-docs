/**
 * This file handles all document-related database operations including:
 * - Creating new documents
 * - Retrieving documents with pagination and search
 * - Updating document titles
 * - Removing documents
 */

import { paginationOptsValidator } from "convex/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Creates a new document in the database.
 * Requires user authentication.
 */
export const create = mutation({
    args: {
        title: v.optional(v.string()),
        initialContent: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Verify user authentication status
        const user = await ctx.auth.getUserIdentity();

        // Prevent unauthorized access
        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        const organizationId = (user.organization_id ?? undefined) as
            | string
            | undefined;

        // Create new document with default title if not provided
        // and associate it with the authenticated user
        return await ctx.db.insert("documents", {
            title: args.title ?? "Untitled Document",
            ownerId: user.subject,
            organizationId,
            initialContent: args.initialContent,
        });
    },
});

/**
 * Retrieves documents based on search criteria and pagination.
 * Supports organization-wide and personal document searches.
 * Returns paginated results filtered by owner or organization.
 */
export const get = query({
    args: {
        paginationOpts: paginationOptsValidator, // For paginated results
        search: v.optional(v.string()), // Optional search term
    },
    handler: async (ctx, { search, paginationOpts }) => {
        // Verify user authentication status
        const user = await ctx.auth.getUserIdentity();

        // Prevent unauthorized access
        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        // Extract organization ID from user identity if available
        const organizationId = (user.organization_id ?? undefined) as
            | string
            | undefined;

        // Case 1: Search within organization documents
        // When both search term and organizationId are available
        if (search && organizationId) {
            return ctx.db
                .query("documents")
                .withSearchIndex("search_title", (q) =>
                    q
                        .search("title", search)
                        .eq("organizationId", organizationId)
                )
                .paginate(paginationOpts);
        }

        // Case 2: Search within user's personal documents
        // When only search term is available
        if (search) {
            return await ctx.db
                .query("documents")
                .withSearchIndex("search_title", (q) =>
                    q.search("title", search).eq("ownerId", user.subject)
                )
                .paginate(paginationOpts);
        }

        // Case 3: List all organization documents
        // When only organizationId is available
        if (organizationId) {
            return await ctx.db
                .query("documents")
                .withIndex("by_organization_id", (q) =>
                    q.eq("organizationId", organizationId)
                )
                .paginate(paginationOpts);
        }

        // Case 4: List all personal documents
        // Default case when no search or organization filter
        return await ctx.db
            .query("documents")
            .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
            .paginate(paginationOpts);
    },
});

/**
 * Removes a document by its ID.
 * Only the document owner can perform this operation.
 * Throws an error if unauthorized or document not found.
 */
export const removeById = mutation({
    args: { id: v.id("documents") }, // Document ID to remove
    handler: async (ctx, args) => {
        // Verify user authentication status
        const user = await ctx.auth.getUserIdentity();

        // Prevent unauthorized access
        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        // Fetch the document from database
        const document = await ctx.db.get(args.id);

        // Check if document exists
        if (!document) {
            throw new ConvexError("Document not found");
        }

        // Extract organization ID from user identity if available
        const organizationId = (user.organization_id ?? undefined) as
            | string
            | undefined;

        // Verify document ownership
        const isOwner = document.ownerId === user.subject;

        // Prevent non-owners & non-organization members from deleting the document
        if (!isOwner && document.organizationId !== organizationId) {
            throw new ConvexError("Unauthorized");
        }

        // Delete the document if all checks pass
        return await ctx.db.delete(args.id);
    },
});

/**
 * Updates a document's title by its ID.
 * Only the document owner can perform this operation.
 * Throws an error if unauthorized or document not found.
 */
export const updateById = mutation({
    args: { id: v.id("documents"), title: v.string() }, // Document ID and new title
    handler: async (ctx, args) => {
        // Verify user authentication status
        const user = await ctx.auth.getUserIdentity();

        // Prevent unauthorized access
        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        // Fetch the document from database
        const document = await ctx.db.get(args.id);

        // Check if document exists
        if (!document) {
            throw new ConvexError("Document not found");
        }

        // Extract organization ID from user identity if available
        const organizationId = (user.organization_id ?? undefined) as
            | string
            | undefined;

        // Verify document ownership
        const isOwner = document.ownerId === user.subject;

        // Prevent non-owners & non-organization members from updating the document
        if (!isOwner && document.organizationId !== organizationId) {
            throw new ConvexError("Unauthorized");
        }

        // Update the document title if all checks pass
        return await ctx.db.patch(args.id, { title: args.title });
    },
});

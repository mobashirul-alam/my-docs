import { Editor } from "./editor";

interface DocumentPageProps {
    params: Promise<{ documentId: string }>;
}
const DocumentPage = async ({ params }: DocumentPageProps) => {
    const { documentId } = await params;
    return (
        <div>
            <h1>Document: {documentId}</h1>
            <Editor />
        </div>
    );
};

export default DocumentPage;

import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentPageProps {
    params: Promise<{ documentId: string }>;
}
const DocumentPage = async ({ params }: DocumentPageProps) => {
    const { documentId } = await params;
    console.log(documentId);
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    );
};

export default DocumentPage;

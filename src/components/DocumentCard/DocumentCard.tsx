import { CiCalendarDate } from "react-icons/ci";
import type { TLegalDocument } from "../../types/types";
import { IoDocumentTextOutline } from "react-icons/io5";

type DocumentCardProps = {
    document: TLegalDocument;
    handleSelectDocument: (doc: TLegalDocument) => void;
    selectedDoc: TLegalDocument | null;
};

const DocumentCard = ({ document, handleSelectDocument, selectedDoc }: DocumentCardProps) => {
    console.log(selectedDoc)
    return (
        <div className="p-4 border border-purple-500 rounded-lg shadow" onClick={()=>handleSelectDocument(document)}>
            <div className="flex gap-2">
                <div className="bg-linear-to-r from-purple-500 to-pink-500 p-1 rounded font-bold">
                    <IoDocumentTextOutline className="text-white" />
                </div>
                <h2 className="font-bold text-white">{document.title}</h2>
            </div>
            <div className="mt-4 flex gap-2">
                <div className="px-2 py-1 text-sm rounded border border-purple-500">{document.type}</div>
                <div className="flex items-center"><CiCalendarDate />{document.dateCreated}</div>
            </div>
        </div>
    );
};

export default DocumentCard;

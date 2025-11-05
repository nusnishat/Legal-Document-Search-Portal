import { CiCalendarDate } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import type { TLegalDocument } from "../../types/types";

type DocumentCardProps = {
  document: TLegalDocument;
  handleSelectDocument: (doc: TLegalDocument) => void;
  selectedDoc: TLegalDocument | null;
};

const DocumentCard = ({ document, handleSelectDocument, selectedDoc }: DocumentCardProps) => {
  const isSelected = selectedDoc?.id === document.id;

  return (
    <div
      onClick={() => handleSelectDocument(document)}
      className={`border border-white/10 cursor-pointer p-4 rounded-xl shadow-lg transition-all duration-200
        ${isSelected ? "bg-purple-600/30 border-purple-500" : "bg-purple-900/30 border-transparent"}
        border hover:scale-105 hover:shadow-xl`}
    >
      <div className="flex items-center gap-2">
        <div className="bg-lineart-to-r from-purple-500 to-pink-500 p-2 rounded-full">
          <IoDocumentTextOutline className="text-white w-5 h-5" />
        </div>
        <h3 className="text-white font-semibold">{document.title}</h3>
      </div>
      <div className="flex items-center gap-4 mt-3 text-gray-300 text-sm flex-wrap">
        <span className="px-2 py-1 bg-purple-700/30 rounded">{document.type}</span>
        <span className="flex items-center gap-1">
          <CiCalendarDate className="font-bold"/> {document.dateCreated}
        </span>
      </div>
    </div>
  );
};

export default DocumentCard;

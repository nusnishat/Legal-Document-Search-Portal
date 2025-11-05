import { IoDocumentTextOutline } from "react-icons/io5";
import type { TLegalDocument } from "../../types/types";
import DocumentCard from "../DocumentCard/DocumentCard";

type DocumentsViewProps = {
    hasSearched: boolean;
    searchResults: TLegalDocument[];
    handleSelectDocument: (doc: TLegalDocument) => void;
    selectedDoc: TLegalDocument | null;
    isLoading: boolean;
};

const DocumentsView = ({ hasSearched, searchResults, handleSelectDocument, selectedDoc, isLoading }: DocumentsViewProps) => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                    {hasSearched ? `Documents (${searchResults.length})` : "Ready to Search"}
                </h2>
                {hasSearched && searchResults.length > 0 && (
                    <div className="px-3 py-1 bg-purple-700/20 text-purple-300 rounded-full text-xs font-semibold">
                        {searchResults.length} match{searchResults.length !== 1 ? "es" : ""}
                    </div>
                )}
            </div>

            {/* Document List */}
            {searchResults.length > 0 ? (
                <div className={`grid gap-4 ${isLoading ? "opacity-40 cursor-not-allowed" : ""} md:grid-cols-2 shadow-2xl p-8 border border-white/10 rounded-lg`}>
                    {searchResults.map((doc) => (
                        <DocumentCard
                            key={doc.id}
                            document={doc}
                            selectedDoc={selectedDoc}
                            handleSelectDocument={handleSelectDocument}
                        />
                    ))}
                </div>
            ) : hasSearched && (
                <div className="shadow-2xl p-8 border border-white/10 rounded-lg flex justify-center items-center min-h-[300px]">
                    <div className="flex flex-col items-center justify-center mt-10">
                        <div className="rounded-full flex items-center justify-center">
                            <IoDocumentTextOutline className="text-white w-8 h-8" />
                        </div>
                        <p className="text-gray-400 text-sm mt-3">No documents found</p>
                    </div>

                </div>
            )}
        </div>
    );
};

export default DocumentsView;

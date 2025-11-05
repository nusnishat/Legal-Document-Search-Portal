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
                {hasSearched &&
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-pink-500 to-purple-500"></div>
                        <h2 className="text-2xl font-bold text-white">
                            Documents ({searchResults.length})
                        </h2>
                    </div>
                }
                {hasSearched && searchResults.length > 0 && (
                    <div className="px-3 py-1 bg-purple-700/20 text-purple-300 rounded-full text-xs font-semibold">
                        {searchResults.length} match{searchResults.length !== 1 ? "es" : ""}
                    </div>
                )}
            </div>

            {/* Document List */}
            {isLoading ? (
                <div className="shadow-2xl p-8 border border-white/10 rounded-lg flex items-center justify-center flex-1 min-h-[300px]">
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white mb-1">Searching Document</p>
                        <div className="mt-6 space-y-2 w-full max-w-xs mx-auto">
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: "70%" }}></div>
                            </div>
                            <p className="text-xs text-gray-500">Processing legal document...</p>
                        </div>
                    </div>
                </div>)
                : searchResults.length > 0 ? (
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

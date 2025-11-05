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
    console.log(searchResults.length);
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        {hasSearched ? `Documents (${searchResults.length})` : 'Ready to Search'}
                    </h2>
                </div>
                {hasSearched && searchResults.length > 0 && (
                    <div className="px-3 py-1 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                        <p className="text-xs text-purple-300 font-semibold">{searchResults.length} match{searchResults.length !== 1 ? 'es' : ''}</p>
                    </div>
                )}
            </div>
            {searchResults.length !== 0 &&
                <div className="glass-effect shadow-2xl hover:border-white/30 transition-all duration-300">
                    <div className="p-6 space-y-4 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg shadow-2xl">
                        {
                            searchResults.map((document: TLegalDocument) => <DocumentCard key={document?.id} handleSelectDocument={handleSelectDocument} selectedDoc={selectedDoc} document={document} />)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default DocumentsView;

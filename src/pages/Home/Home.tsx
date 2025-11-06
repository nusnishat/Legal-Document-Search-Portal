import { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Searchbar from '../../components/Searchbar/Searchbar';
import DocumentsView from '../../components/DocumentsView/DocumentsView';
import Summary from '../../components/Summary/Summary';
import type { TLegalDocument } from '../../types/types';

const Home = () => {
    const [searchResults, setSearchResults] = useState<TLegalDocument[]>([]);
    const [selectedDoc, setSelectedDoc] = useState<TLegalDocument | null>(null);
    const [summary, setSummary] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (query: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://legal-document-search-portal-server.onrender.com/?query=${query}`)
            if (!response.ok) {
                setSearchResults([]);
                setSelectedDoc(null);
                setSummary(null);
                return;
            }
            const results = await response.json();
            console.log(results)
            setHasSearched(true);
            setSearchResults(results);
            setSelectedDoc(null);
            setSummary(null);
            setError(null);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectDocument = async (doc: TLegalDocument) => {
        setSelectedDoc(doc);
        setSummary(null);
        setError(null);
        try {
            const summarizedText = doc?.summary
            setSummary(summarizedText);
            setIsLoading(false);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Failed to generate summary. Please try again.'
            );
        } 
    };

    const handleRetry = () => {
        if (selectedDoc) {
            handleSelectDocument(selectedDoc);
        }
    };

    return (
        <div className="space-y-6 py-12 mx-4 md:mx-20">
            <HeroSection />
            <Searchbar
                onSearch={handleSearch}
                isDisabled={isLoading}
            />
            <DocumentsView
                searchResults={searchResults}
                hasSearched={hasSearched}
                isLoading={isLoading}
                selectedDoc={selectedDoc}
                handleSelectDocument={handleSelectDocument}
            />
            <Summary
                onRetry={handleRetry}
                error={error}
                summary={summary}
            />
        </div>
    );
};

export default Home;
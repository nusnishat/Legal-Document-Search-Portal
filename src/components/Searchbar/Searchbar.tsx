import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (query: string) => void;
    isDisabled?: boolean;
}

const Searchbar = ({ onSearch, isDisabled }: SearchBarProps) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="relative bg-slate-900 rounded-xl">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 opacity-60 shadow-2xl">
                        <FaSearch className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search legal documents (e.g., NDA, agreement, terms)..."
                        disabled={isDisabled}
                        className="w-full pl-12 pr-14 py-4 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-lg rounded-xl border border-white/10 focus:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button
                        type="submit"
                        disabled={isDisabled || !query.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-linear-to-r from-purple-500 to-pink-500 text-white cursor-pointer rounded-lg hover:shadow-lg  disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSearch className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Searchbar;

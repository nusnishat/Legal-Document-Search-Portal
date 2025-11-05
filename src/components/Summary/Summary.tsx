import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi2";

interface SummaryPanelProps {
  summary: string | null;
  isLoading: boolean;
  error: string | null;
  onRetry?: () => void;
}


const Summary = ({ summary, isLoading, error, onRetry }: SummaryPanelProps) => {

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-linear-to-r from-pink-500 to-purple-500"></div>
        <h2 className="text-2xl font-bold text-white">AI Summary</h2>
        {summary && !isLoading && !error && (
          <div className="ml-auto px-2 py-1 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
            <p className="text-xs text-green-300 font-semibold">Generated</p>
          </div>
        )}
      </div>

      {/* Card containing the summary panel */}
      <div className="glass-effect shadow-2xl hover:border-white/30 transition-all duration-300 p-6 md:p-8 h-full min-h-[400px] flex flex-col rounded-2xl relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center flex-1">
            <div className="text-center">
              <p className="text-lg font-semibold text-white mb-1">Analyzing Document</p>
              <p className="text-sm text-gray-400">Generating intelligent summary with AI...</p>
              <div className="mt-6 space-y-2 w-full max-w-xs mx-auto">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: "70%" }}></div>
                </div>
                <p className="text-xs text-gray-500">Processing legal document...</p>
              </div>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="flex items-start gap-4 p-6 bg-linear-to-br from-red-500/10 to-red-600/10 rounded-xl border border-red-500/30 backdrop-blur-xl">
            <div className="w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <FiAlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-red-300 mb-1">Summary Generation Failed</h3>
              <p className="text-sm text-red-200">{error}</p>
              <button
                onClick={onRetry}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <FiRefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Summary content */}
        {summary && !isLoading && !error && (
          <div className="flex-1 flex flex-col relative z-10">
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-bounce">
                  <HiCheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Summary Generated</h3>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-4 mb-4">
              <p className="text-gray-200 leading-relaxed text-base bg-linear-to-br from-white/5 to-transparent p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                {summary}
              </p>
            </div>
          </div>
        )}

        {/* Placeholder when nothing is selected */}
        {!summary && !isLoading && !error && (
          <div className="flex items-center justify-center flex-1 relative z-10">
            <div className="text-center">
              <p className="text-gray-300 font-medium mb-1">Select a Document</p>
              <p className="text-gray-400 text-sm">Choose a document from the list to generate an AI summary</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;

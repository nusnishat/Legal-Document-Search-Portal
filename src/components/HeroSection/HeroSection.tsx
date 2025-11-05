import { IoSparkles } from "react-icons/io5";

const HeroSection = () => {
    return (
        <div className="space-y-4">
            <div className="flex justify-center">
                <p className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-800 text-white border border-purple-500">
                    <IoSparkles className="inline me-2" />Powered by Advanced AI
                </p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
                    Analyze Legal Documents Instantly
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Harness the power of artificial intelligence to understand complex legal documents in seconds
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
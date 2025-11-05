
const Header = () => {
    return (
        <header className=" bg-slate-800 backdrop-blur-xl border-b border-white/10 p-4 md:0py-4 px-12">
            <div className='md:flex justify-between'>
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 cursor-pointer">
                        <span className="text-white font-bold text-lg">⚖️</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Legal AI
                        </h1>
                        <p className="text-xs text-purple-300">Smart Document Analysis</p>
                    </div>
                </div>
                {/* nav */}
                <div className='md:flex items-center justify-center mt-4 md:mt-0'>
                    <button className="cursor-pointer px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-white  text-sm font-medium">
                Get Started
              </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
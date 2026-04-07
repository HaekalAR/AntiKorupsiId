const Navbar = () => {
    return (
        <div className="z-10 h-[6vh] w-full top-0 bg-white/20 backdrop-blur-lg fixed md:px-7 px-4 py-2 font-inter flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
                <img src="/AntiKorupsi-Logo.svg" alt="AKID Logo" className="md:h-10 h-6"/>
                <p className="font-poppins font-bold md:text-base text-xs">AntiKorupsi<span className="text-red-500">.id</span></p>
            </div>
            <div className="md:block hidden">
                <ul className="flex items-center gap-4 font-medium font-poppins md:text-sm text-xs text-[#202020]">
                    <li><a href="#korupsi" className="hover:text-red-600 transition-all duration-200">Korupsi</a></li>
                    <li><a href="#dampak" className="hover:text-red-600 transition-all duration-200">Dampak</a></li>
                    <li><a href="#ciri" className="hover:text-red-600 transition-all duration-200">Ciri & Modus</a></li>
                    <li><a href="#lawan" className="hover:text-red-600 transition-all duration-200">Cara Melawan</a></li>
                    <li><a href="#lapor" className="hover:text-red-600 transition-all duration-200">Cara Lapor</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
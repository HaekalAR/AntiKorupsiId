const Footer = () => {
    return (
        <div className="bg-[#111827] w-full h-fit flex flex-col text-center items-center justify-center gap-4 py-7 px-7">
            <div className="flex items-center gap-2">
                <img src="/AntiKorupsi-Logo.svg" alt="AKID Logo" className="md:h-10 h-6"/>
                <p className="font-poppins font-bold md:text-base text-sm text-white">AntiKorupsi<span className="text-red-500">.id</span></p>
            </div>
            <div className="font-inter">
                <p className="text-gray-400 font-medium text-sm">Website edukasi anti korupsi untuk masyarakat Indonesia. Bersama kita lawan korupsi!</p>
                <p className="text-gray-500 font-medium text-xs pt-2">Dibuat untuk keperluan edukasi kewarganegaraan • 2026 • HaekalAR</p>
            </div>
        </div>
    )
}

export default Footer;
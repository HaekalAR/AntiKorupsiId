import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Tindakan = () => {
        useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div id='lapor' className="w-full h-fit bg-linear-to-b from-red-500 to-red-900 flex flex-col items-center justify-center gap-7 py-12 scroll-mt-30">
            <div className="text-center px-7">
                <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-100 tracking-widest">Ambil Tindakan</h4>
                <h1 className="font-poppins md:text-3xl text-2xl text-white font-bold capitalize">Cara Melaporkan Korupsi</h1>
                <p className="font-inter md:text-base text-sm text-white pt-2">Laporan kita bisa menyelamatkan uang rakyat miliaran rupiah</p>
            </div>
            <div data-aos="fade-up" className="md:w-2/4 w-full grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center px-7">
                {/* Grid */}
                <div className="w-full text-left border border-red-400 flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-[#E03C3C] transition-all duration-200 min-h-38">
                    <span className="bg-white size-14 flex items-center justify-center rounded-full shrink-0">
                        <h4 className="font-poppins text-2xl font-bold uppercase text-red-600 transition-all duration-200">01</h4>
                    </span>
                    <span>
                        <p className="font-bold text-white text-lg">Kumpulkan Bukti</p>
                        <p className="text-gray-200 text-base">Foto, dokumen, rekaman, atau saksi yang bisa mendukung laporanmu.</p>
                    </span>
                </div>
                <div className="w-full text-left border border-red-400 flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-[#E03C3C] transition-all duration-200 min-h-38">
                    <span className="bg-white size-14 flex items-center justify-center rounded-full shrink-0">
                        <h4 className="font-poppins text-2xl font-bold uppercase text-red-600 transition-all duration-200">02</h4>
                    </span>
                    <span>
                        <p className="font-bold text-white text-lg">Pilih Kanal Laporan</p>
                        <p className="text-gray-200 text-base">KPK (kpk.go.id), Ombudsman, atau LAPOR! (lapor.go.id).</p>
                    </span>
                </div>
                <div className="w-full text-left border border-red-400 flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-[#E03C3C] transition-all duration-200 min-h-38">
                    <span className="bg-white size-14 flex items-center justify-center rounded-full shrink-0">
                        <h4 className="font-poppins text-2xl font-bold uppercase text-red-600 transition-all duration-200">03</h4>
                    </span>
                    <span>
                        <p className="font-bold text-white text-lg">Isi Formulir</p>
                        <p className="text-gray-200 text-base">Jelaskan kronologi, pihak yang terlibat, dan dampak kerugian negara.</p>
                    </span>
                </div>
                <div className="w-full text-left border border-red-400 flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-[#E03C3C] transition-all duration-200 min-h-38">
                    <span className="bg-white size-14 flex items-center justify-center rounded-full shrink-0">
                        <h4 className="font-poppins text-2xl font-bold uppercase text-red-600 transition-all duration-200">04</h4>
                    </span>
                    <span>
                        <p className="font-bold text-white text-lg">Perlindungan Pelapor</p>
                        <p className="text-gray-200 text-base">UU No. 13/2006 melindungi whistleblower dari ancaman dan intimidasi.</p>
                    </span>
                </div>
                {/* --- */}
            </div>
                <div>
                    <div className="mt-4 flex gap-4">
                        <a href="https://kpk.go.id/id" target='_blank' rel='noopener noreferer' className="font-poppins font-bold border border-white bg-white md:px-7 px-4 py-3 text-red-600 hover:bg-transparent hover:text-white transition-all duration-200 rounded-full md:text-sm text-xs">KPK Online</a>
                        <a href="https://lapor.go.id/" target='_blank' rel='noopener noreferer' className="font-poppins font-bold border border-white bg-white md:px-7 px-4 py-3 text-red-600 hover:bg-transparent hover:text-white transition-all duration-200 rounded-full md:text-sm text-xs">LAPOR!</a>
                        <a href="https://ombudsman.go.id/" target='_blank' rel='noopener noreferer' className="font-poppins font-bold border border-white bg-white md:px-7 px-4 py-3 text-red-600 hover:bg-transparent hover:text-white transition-all duration-200 rounded-full md:text-sm text-xs">Ombudsman</a>
                    </div>
                </div>
        </div>
    )
}

export default Tindakan;
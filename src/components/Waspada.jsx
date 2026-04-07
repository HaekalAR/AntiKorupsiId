import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Waspada = () => {
        useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div id='ciri' className="bg-[#111827] w-full h-fit py-12 flex flex-col items-center justify-center gap-7 text-center md:scroll-mt-30">
            <div className='px-7'>
                <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-400 tracking-widest">Waspada</h4>
                <h1 className="font-poppins md:text-3xl text-2xl text-white font-bold capitalize">Modus Korupsi yang Sering Terjadi</h1>
                <p className="font-inter md:text-base text-sm text-gray-400 pt-2">Kenali cara-cara koruptor beraksi agar kamu tidak jadi korban atau tersangkut</p>
            </div>
            <div className="md:w-2/3 full grid md:grid-cols-2 grid-cols-1 place-items-center gap-4 px-7">
            {/* Grid */}
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 01</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Phantom Project</p>
                        <p className="text-gray-500 text-base">Proyek fiktif yang dicatat tapi tidak dikerjakan, dana langsung masuk kantong.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 02</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Kickback</p>
                        <p className="text-gray-500 text-base">Kontraktor mengembalikan sebagian nilai kontrak kepada pejabat sebagai komisi.</p>
                    </span>
                </div>
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 03</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Ghost Employee</p>
                        <p className="text-gray-500 text-base">Pegawai fiktif terdaftar di payroll, gaji diterima pejabat atau kroninya.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 04</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Pengadaan Fiktif</p>
                        <p className="text-gray-500 text-base">Barang/jasa dibeli di atas kertas saja, tidak pernah diterima instansi.</p>
                    </span>
                </div>
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 05</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Manipulasi Tender</p>
                        <p className="text-gray-500 text-base">Tender diatur agar pemenangnya sudah ditentukan sejak awal oleh orang dalam.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-700 flex flex-col justify-center gap-1 px-7 py-4 rounded-xl bg-[#181e2c] hover:bg-[#1D2432] transition-all duration-200 min-h-36">
                    <h4 className="font-poppins text-sm font-bold uppercase text-red-400">Modus 06</h4>
                    <span>
                        <p className="font-bold text-white text-lg">Over-invoicing</p>
                        <p className="text-gray-500 text-base">Tagihan dibesarkan melebihi nilai nyata, selisihnya dibagi antara vendor dan oknum.</p>
                    </span>
                </div>
            {/* --- */}
            </div>
        </div>
    )
}

export default Waspada;
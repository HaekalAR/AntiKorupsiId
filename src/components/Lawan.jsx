import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'   

const Lawan = () => {
        useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div id='lawan' className="bg-gray-100 h-fit w-full flex flex-col items-center justify-center py-12 gap-7 scroll-mt-30">
            <div className="text-center px-7">
                <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-600 tracking-widest">Aksi Nyata</h4>
                <h1 className="font-poppins md:text-3xl text-2xl text-[#202020] font-bold capitalize">Cara Melawan Korupsi</h1>
                <p className="font-inter md:text-base text-sm text-gray-600 pt-2">Pemberantasan korupsi bukan hanya tugas KPK karena kita semua punya peran</p>
            </div>
            <div  className="md:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center px-7">
            {/* Grid */}
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-200 flex flex-col justify-center group gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">01</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Laporkan Gratifikasi</p>
                        <p className="text-gray-500 text-base">Jika kamu PNS, laporkan setiap pemberian kepada KPK dalam 30 hari.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-200 flex flex-col group justify-center gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">02</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Gunakan e-Procurement</p>
                        <p className="text-gray-500 text-base">Dukung pengadaan barang/jasa pemerintah secara digital dan transparan.</p>
                    </span>
                </div>
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-200 flex flex-col group justify-center gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">03</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Pantau APBD Daerah</p>
                        <p className="text-gray-500 text-base">Akses informasi anggaran daerah melalui portal resmi dan tanya jika janggal.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-200 flex flex-col group justify-center gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">04</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Tolak Pungli</p>
                        <p className="text-gray-500 text-base">Jangan bayar pungutan liar. Laporkan ke ombudsman atau KPK.</p>
                    </span>
                </div>
                <div data-aos="fade-right" className="w-full h-full text-left border border-gray-200 flex flex-col group justify-center gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">05</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Edukasi Sekitar</p>
                        <p className="text-gray-500 text-base">Bagikan info anti korupsi ke keluarga dan komunitas. Mulai dari lingkup terkecil.</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="w-full h-full text-left border border-gray-200 flex flex-col group justify-center gap-1 px-7 py-4 rounded-xl bg-white hover:shadow-gray-200 hover:shadow-lg transition-all duration-200 min-h-38">
                    <h4 className="font-poppins text-3xl font-bold uppercase text-red-200 group-hover:text-red-600 transition-all duration-200">06</h4>
                    <span>
                        <p className="font-bold text-[#202020] text-lg">Gunakan Whistleblower</p>
                        <p className="text-gray-500 text-base">Manfaatkan kanal pelaporan anonim yang disediakan KPK dan instansi pemerintah.</p>
                    </span>
                </div>
            {/* --- */}
            </div>
        </div>
    )
}

export default Lawan;
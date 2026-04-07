import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Facts = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div id="korupsi" className="h-fit w-full py-12 flex flex-col items-center justify-center gap-7 md:scroll-mt-30 scroll-mt-20">
            <div className="font-poppins text-center px-4">
                <h1 className="md:text-3xl text-2xl text-[#202020] font-bold capitalize">Fakta yang Harus Kamu Tahu</h1>
                <p className="font-inter md:font-base text-sm text-gray-500 pt-2">Data nyata tentang korupsi di Indonesia</p>
            </div>
            <div className="md:w-2/3 w-full h-full grid grid-cols-2 gap-4 place-items-center px-4">
                {/* Data Korup */}
                <div data-aos="fade-up" className="w-full h-full border border-red-200/70 flex flex-col items-center justify-center gap-2 px-7 py-4 rounded-xl hover:bg-red-100 transition-all duration-200">
                    <h1 className="text-3xl font-poppins font-bold text-red-600">Rp238T</h1>
                    <span className="text-center">
                        <p className="font-medium">Kerugian Negara (2023)</p>
                        <p className="text-gray-600 text-xs font-medium">Triliun rupiah</p>
                    </span>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" className="w-full h-full border border-red-200/70 flex flex-col items-center justify-center gap-2 px-7 py-4 rounded-xl hover:bg-red-100 transition-all duration-200 ">
                    <h1 className="text-3xl font-poppins font-bold text-red-600">1384+</h1>
                    <span className="text-center">
                        <p className="font-medium">Kasus Ditangani KPK</p>
                        <p className="text-gray-600 text-xs font-medium">Sejak 2004</p>
                    </span>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="w-full h-full border border-red-200/70 flex flex-col items-center justify-center gap-2 px-7 py-4 rounded-xl hover:bg-red-100 transition-all duration-200 ">
                    <h1 className="text-3xl font-poppins font-bold text-red-600">34/100</h1>
                    <span className="text-center">
                        <p className="font-medium">Indeks Persepsi Korupsi</p>
                        <p className="text-gray-600 text-xs font-medium">Indonesia 2023 (CPI)</p>
                    </span>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="w-full h-full border border-red-200/70 flex flex-col items-center justify-center gap-2 px-7 py-4 rounded-xl hover:bg-red-100 transition-all duration-200 ">
                    <h1 className="text-3xl font-poppins font-bold text-red-600">22</h1>
                    <span className="text-center">
                        <p className="font-medium">Tersangka Kepala Daerah</p>
                        <p className="text-gray-600 text-xs font-medium">Ditangkap KPK 2023</p>
                    </span>
                </div>
                {/* --- */}
            </div>
        </div>
    )
}

export default Facts;
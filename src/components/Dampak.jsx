import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Dampak = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div id='dampak' className="h-fit w-full flex flex-col justify-center items-center py-12 md:scroll-mt-30">
            <div className="text-center px-4">
                <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-600 tracking-widest">Konsekuensi</h4>
                <h1 className="font-poppins md:text-3xl text-2xl text-[#202020] font-bold capitalize">Dampak Korupsi</h1>
                <p className="font-inter md:text-base text-sm text-gray-500 pt-2">Korupsi merusak setiap sendi kehidupan berbangsa dan bernegara</p>
            </div>
            <div data-aos="fade-up" className="md:w-2/3 w-full px-7 mt-7 flex flex-col gap-4">
                <div className="bg-gray-100 border hover:bg-gray-200 transition-all duration-200 border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Kesehatan</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Anggaran pendidikan bocor → sekolah rusak, guru tidak digaji, mutu menurun.</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Pendidikan</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Dana kesehatan dikorupsi → fasilitas buruk, obat langka, rakyat tidak terlayani.</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Infrastruktur</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Proyek dimark-up → jalan cepat rusak, jembatan roboh, merugikan nyawa.</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Ekonomi</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Investor kabur, pertumbuhan terhambat, kemiskinan struktural terus berlanjut.</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Hukum</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Kepercayaan publik terhadap hukum runtuh, impunitas pelaku korupsi merajalela.</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-gray-300 px-7 py-4 rounded-xl">
                    <h4 className="font-poppins text-base font-bold uppercase text-[#202020]">Reputasi Negara</h4>
                    <p className="font-inter font-medium text-sm text-gray-600">Indonesia dipandang sebagai negara korup, melemahkan daya saing global.</p>
                </div>
            </div>
        </div>
    )
}

export default Dampak;
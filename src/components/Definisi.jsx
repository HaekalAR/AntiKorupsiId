import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Definisi = () => {
        useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div className="bg-gray-100 h-fit w-full py-12 flex items-center justify-center">
            <div className="md:w-2/3 w-full px-7 md:flex flex md:flex-row flex-col gap-7">
                <div data-aos="fade-right" className="md:w-1/2 w-full flex flex-col justify-center gap-4">
                    <span>
                        <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-600 tracking-widest">Definisi</h4>
                        <h1 className="font-poppins md:text-3xl text-2xl text-[#202020] font-bold capitalize">apa Itu Korupsi?</h1>
                    </span>
                    <p className="font-inter text-base text-[#202020]">Korupsi adalah perbuatan yang dilakukan oleh seseorang atau sekelompok orang dengan cara menyalahgunakan wewenang atau jabatan untuk memperkaya diri sendiri, orang lain, atau korporasi yang merugikan keuangan atau perekonomian negara.</p>
                    <p className="font-inter text-base text-[#202020]">Berdasarkan UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001, terdapat 30 jenis tindak pidana korupsi yang dikelompokkan dalam 7 kelompok besar.</p>
                    <span className="bg-red-600/10 border-l-6 border-red-600 px-7 py-4 rounded-r-xl">
                        <p className="font-inter font-medium text-base text-red-800">"Korupsi bukan hanya kejahatan hukum, <br/>ini adalah kejahatan kemanusiaan."</p>
                    </span>
                </div>
                <div data-aos="fade-left" className="md:w-1/2 w-full flex flex-col gap-4">
                    <span className="flex flex-col gap-7">
                        <h4 className="font-poppins md:text-base text-sm font-bold uppercase text-red-600 tracking-widest">Jenis-jenis Korupsi</h4>
                    </span>
                    <div className="grid md:grid-cols-3 grid-cols-2 place-items-center gap-4">
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">💰</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Penyuapan</h3>
                        </div>
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">🎁</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Gratifikasi</h3>
                        </div>
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">📦</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Penggelapan</h3>
                        </div>
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">🏗️</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Mark-Up</h3>
                        </div>
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">🤝</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Kolusi</h3>
                        </div>
                        <div className="w-full h-32 bg-red-100 border border-red-300 flex flex-col items-center justify-center gap-2 rounded-xl">
                            <h1 className="text-4xl">👥</h1>
                            <h3 className="font-poppins font-bold text-md text-[#202020]">Nepotisme</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Definisi;
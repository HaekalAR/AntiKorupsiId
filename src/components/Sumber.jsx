import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sumber = () => {
        useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        })
    }, [])
    return (
        <div className="w-full h-fit flex items-center justify-center py-7">
            <div data-aos="fade-up" className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="font-poppins text-base text-[#202020] font-bold capitalize">Sumber dan Referensi</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 w-2/3 items-center justify-center font-inter gap-4 mt-4">
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">KPK RI (kpk.go.id)</p>
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">Transparency International</p>
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">UU No. 31/1999 jo. UU No. 20/2001</p>
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">LAPOR! (lapor.go.id)</p>
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">BPS Indonesia</p>
                    <p className="border border-gray-200 bg-gray-100 px-7 p-2 text-xs font-medium rounded-full text-gray-600">Ombudsman RI</p>
                </div>
            </div>
        </div>
    )
}

export default Sumber;
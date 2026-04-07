import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="h-full w-full font-inter md:mt-20 mt-18">
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-col gap-4 h-[86vh] md:m-10 m-4 px-4 items-center justify-center bg-linear-to-b from-red-500 to-red-900 rounded-2xl">
                <p className="border border-red-300 bg-red-300/40 px-4 py-1.5 text-xs font-bold rounded-full text-white">Edukasi Anti Korupsi</p>
                <div className="flex flex-col items-center font-poppins font-bold uppercase text-center">
                    <h1 className="md:text-5xl text-4xl text-white">Korupsi</h1>
                    <h1 className="md:text-5xl text-4xl text-yellow-300">Musuh Kita Bersama</h1>
                    <p className="font-inter pt-2 font-medium text-white capitalize md:text-base text-sm">Kenali, pahami, dan lawan korupsi. Karena setiap rupiah yang dikorupsi <br/> adalah hak rakyat yang dicuri.</p>
                </div>
                    <div className="mt-4">
                        <a href="#korupsi" className="md:text-base text-sm scroll-smooth font-poppins font-bold border border-white bg-white px-7 py-3 text-red-600 hover:bg-transparent hover:text-white transition-all duration-200 rounded-full">Pelajari Lebih Lanjut</a>
                    </div>
            </div>
        </div>
    )
}

export default Home;
import Button from "../components/Button.jsx";
import Gap from "../components/Gap.jsx"
import Footer from "../components/Footer.jsx"

export default function NotFound(){

    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
                <h1 className="text-9xl font-extrabold text-purple-800 ">404</h1>
                <Gap />
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="mt-2 mb-2 text-gray-600 max-w-md">
                    Maaf, halaman yang kamu cari ditemukan
                </p>
                <Gap />
                <Button to="/" text="Kembali ke Home" />
            </div>
        </>
    )
}
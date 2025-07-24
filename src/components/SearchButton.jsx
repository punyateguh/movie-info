import {Search} from "lucide-react"
import Button from "../components/Button.jsx"

export default function SearchButton(){

    return (
        <>
            <form className="max-w-full mx-auto">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search size={20} />
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movie..." required />
                    <Button text="Search" to="/" cls="absolute end-0 bottom-0" />
                </div>
            </form>
        </>

    )
}
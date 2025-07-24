export default function Title({label,labelBlack}){

    return(
        <>
            <h1 className="mb-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-blue-800">{label}</span>{labelBlack}</h1>
        </>
    )
}
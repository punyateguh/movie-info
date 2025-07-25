import useMovie from "../hooks/useMovie.js";

export default function Gallery(){
    const {movies, isLoading, isError, error} = useMovie();
    
    if (isLoading) return <div className="text-center p-4">Loading...</div>;
    if (isError) return <div className="text-center p-4">Error: {error.message}</div>;

    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map((item) => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 hover:scale-95" src={item.image} alt={item.title} loading="lazy" />
                    </div>
                ))}
            </div>
        </>
    )
}
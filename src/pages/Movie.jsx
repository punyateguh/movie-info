import useMovie from "../hooks/useMovie.js"
import Title from "../components/Title.jsx";

export default function Movie(){
    const {movies, isLoading, isError, error} = useMovie();

    if (isLoading) return <div className="text-center p-4">Loading...</div>;
    if (isError) return <div className="text-center p-4">Error: {error.message}</div>;

    
    return(
        <>
            <Title label="For" labelBlack=" You" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {movies.slice(0,10).map((item) => (
                    <div key={item.id}>
                        <img className="h-auto max-w-full rounded-lg object-cover transition-transform duration-500 hover:scale-95" src={item.image} alt={item.title} loading="lazy"/>
                    </div>
                ))}
            </div>

        </>
    )
}
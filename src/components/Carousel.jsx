import { useEffect } from "react";
import useMovie from "../hooks/useMovie.js";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


function MovieCarousel() {
    const {movies,error,isError,isLoading} = useMovie();

   
    const [sliderRef,slider] = useKeenSlider({
        loop: true,
        slides: {
        perView: 5,
        spacing: 20,
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                perView: 1.2,
                spacing: 10,
                },
            },
        },
    });

    useEffect(() => {
        if (!slider) return;
        const timer = setInterval(() => {
        slider.current?.next();
        }, 5000);

        return () => clearInterval(timer);
    }, [slider]);

    if (movies.length === 0) {
        return <div className="text-center p-4">Loading...</div>;
    }
    
    if (isLoading) return <div className="text-center p-4">Loading...</div>;
    if (isError) return <div className="text-center p-4">Error: {error.message}</div>;

    
  return (
    <>
        <div ref={sliderRef} className="keen-slider px-2">
        {movies.map((item) => (
            <a href="#" key={item.id} className="keen-slider__slide bg-white p-2 rounded">
            <img
                src={item.image ? item.image : "#"}
                alt={item.title}
                className="w-full rounded mb-2  object-cover transition-transform duration-500 hover:scale-95 "
            />
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.release_date || "Tahun tidak diketahui"}</p>
            </a>
        ))}
        </div>
    </>
  );
}
export default MovieCarousel;
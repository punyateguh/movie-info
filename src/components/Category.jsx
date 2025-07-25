import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Gap from "../components/Gap.jsx"
import Title from "../components/Title.jsx"
import Button from "./Button.jsx";

export default function Category(){
    const listGenre =  [{ id : "1",genre : "Adventure"},
        { id : "2",genre : "Crime"},
        {id : "3",genre : "Comedy"},
        {id : "4",genre : "Drama"},
        {id : "5",genre : "Fantasy"},
        {id : "6",genre : "Hunt"},
        {id : "7",genre : "Jail"},
        {id : "8",genre : "Korea"},
        {id : "9",genre : "Love"},
        {id : "10",genre : "Midnight"},
        {id : "11",genre : "Night"},
        {id : "12",genre : "Original"},
        {id : "13",genre : "Parody"},
        {id : "14",genre : "Rare"},
        {id : "15",genre : "Romance"},
        {id : "16",genre : "School"}];

         const [sliderRef] = useKeenSlider({
                slides: {
                perView: 10,
                spacing: 10,
                },
                breakpoints: {
                    "(max-width: 768px)": {
                        slides: {
                        perView: 4.2,
                        spacing: 10,
                        },
                    },
                },
            });
        
return(
<>
    <Gap />
    <Title label="Gen" labelBlack="re" />
    <div ref={sliderRef} className="keen-slider px-2 py-5">
        {listGenre.map((item,i)=>(
            <Button key={item.id} text={item.genre} className={i==0 ? "keen-slider__slide text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-100 rounded text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" : "keen-slider__slide text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded text-base font-medium px-5 py-2.5 text-center mb-3 dark:text-white dark:focus:ring-gray-800"} />
        ))}
    </div>
</>
)
}
import Carousel from "../components/Carousel.jsx";
import Category from "../components/Category.jsx";
import Title from "../components/Title.jsx";
import Gallery from "../components/Gallery.jsx"

export default function Home(){

    return(
        <>
            <Title label="Trend" labelBlack="ing" />
            <Carousel />
            <Category />
            <Gallery />
        </>
    )
}
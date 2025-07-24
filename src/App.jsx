import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Route, Routes } from "react-router";

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

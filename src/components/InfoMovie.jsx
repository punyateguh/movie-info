import { useEffect, useState } from "react";
import axios from "axios";

function InfoMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const urlBase = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(urlBase+"films");
        setMovies(res.data);
      } catch (err) {
        setError("Gagal mengambil data pengguna.");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;
  
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Daftar Pengguna</h2>
      <table className="min-w-full border rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Release</th>
            <th className="px-4 py-2 border">Score</th>
            <th className="px-4 py-2 border">Desc</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{movie.title} - {movie.original_title}</td>
              <td className="px-4 py-2 border">{movie.release_date}</td>
              <td className="px-4 py-2 border">{movie.rt_score}</td>
              <td className="px-4 py-2 border">{movie.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InfoMovie;
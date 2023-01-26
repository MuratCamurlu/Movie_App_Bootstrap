import { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  // console.log(movies);
  useEffect(() => {
    getMovies(FEATURED_API + counter);
  }, [counter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && currentUser) {
      getMovies(SEARCH_API + search);
      setSearch("");
    } else if (!currentUser) {
      toastWarnNotify("Please login to search");
    } else {
      toastWarnNotify("Please enter a movie");
    }
  };

  return (
    <div className="pb-5 ">
      <div className="row">
        <div className="col-sm-12 col-md-6 ">
          <div className="d-flex align-items-center ms-2  w-25">
            <i
              onClick={() => setToggle(!toggle)}
              className="fa-solid fa-bars ms-2 me-2 border border-dark rounded-5 bg-dark text-warning"
            ></i>
            <h4 className="">Categories</h4>
          </div>
          {toggle && (
            <div>
              <ul className="categories d-flex flex-column w-100 justify-content-around flex-wrap gap-1">
                <li onClick={() => getMovies(FEATURED_API + counter)}>Mix</li>
                <li onClick={() => getMovies(GENRE_API + 12)}>Adventure</li>
                <li onClick={() => getMovies(GENRE_API + 14)}>Fantasy</li>
                <li onClick={() => getMovies(GENRE_API + 16)}>Animation</li>
                <li onClick={() => getMovies(GENRE_API + 18)}>Drama</li>
                <li onClick={() => getMovies(GENRE_API + 27)}>Horror</li>
                <li onClick={() => getMovies(GENRE_API + 28)}>Action</li>
                <li onClick={() => getMovies(GENRE_API + 35)}>Comedy</li>
                <li onClick={() => getMovies(GENRE_API + 36)}>History</li>
                <li onClick={() => getMovies(GENRE_API + 80)}>Crime</li>
                <li onClick={() => getMovies(GENRE_API + 878)}>
                  Science Fiction
                </li>
                <li onClick={() => getMovies(GENRE_API + 10751)}>Family</li>
                <li onClick={() => getMovies(GENRE_API + 10752)}>War</li>
                <li onClick={() => getMovies(GENRE_API + 9648)}>Mystery</li>
              </ul>
            </div>
          )}
        </div>
        <div className="col-sm-12 col-md-6 d-flex  flex-column  justify-content-center">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center m-5  "
          >
            <input
              id="input"
              className="rounded-2  me-1 search   "
              type="search"
              placeholder="Search a movie.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" class="btn btn-dark ">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 ">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
      <div className=" d-flex justify-content-center align-items-center  ">
        <i
          onClick={() => counter > 1 && setCounter(counter - 1)}
          className="fa-solid fa-arrow-left"
        ></i>

        <p className="m-1 fs-2 fw-bold">{counter}</p>
        <i
          onClick={() => setCounter(counter + 1)}
          className="fa-solid fa-arrow-right "
        ></i>
      </div>
      <hr />
      <div className="footer d-flex w-100 justify-content-center flex-wrap  ">
        <p className="m-1">©️MRTCMRL</p>
        <div>
          <ul className="d-flex flex-wrap gap-5 ">
            <li>Email: mcamurlu1923@gmail.com</li>
            <li>
              Github
              <a href="https://github.com/MuratCamurlu">
                : https://github.com/MuratCamurlu
              </a>
            </li>
            <li>Linkedin: www.linkedin.com/in/muratcamurlu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

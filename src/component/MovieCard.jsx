import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, title, vote_average, id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const getVote = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div
      className="card rounded-5 bg-dark mb-5 "
      onClick={() => {
        navigate("details/" + id);
        !currentUser && toastWarnNotify("please log in to see details");
      }}
    >
      <img
        className="rounded-5"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="card"
      />

      <div className="d-flex justify-content-between align-items-center p-2 text-white">
        <h5 className=" text-center text-white">{title} </h5>
        <span className={`vote ${getVote(vote_average)}`}>{vote_average}</span>
      </div>
    </div>
  );
};

export default MovieCard;

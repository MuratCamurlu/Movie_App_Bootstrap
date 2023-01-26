import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const review = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    axios.get(review).then((res) => setDetails(res.data.results));
  }, [review]);
  console.log(details);
  return (
    <div>
      {details?.map((detail, index) => {
        return (
          <div key={index} className=" m-3 d-flex justify-content-center ">
            <div className="d-flex flex-column align-items-start  bg-dark text-warning  rounded-2 w-75 ">
              <div className="d-flex  align-items-center text-white ms-3 ">
                <i className="fa-solid fa-user-plus me-3"></i>
                <h3>{detail.author}</h3>
              </div>

              <div className="p-3">
                <p className="text-start">{detail.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;

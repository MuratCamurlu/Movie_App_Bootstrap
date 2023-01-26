import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../component/Review";
import VideoSection from "../component/VideoSection";
import { toastErrorNotify } from "../helpers/ToastNotify";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState("");
  const [videoKey, setVideoKey] = useState();
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios(movieDetailBaseUrl)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => toastErrorNotify(err.message));
    axios(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);
  // console.log(movieDetail);
  // console.log(videoKey);
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date,
  } = movieDetail;

  return (
    <div className=" d-flex justify-content-center align-items-center flex-wrap  pb-5 ">
      <h1 className="mt-5 mb-5">{title}</h1>
      <div className="row detailPost d-flex justify-content-start flex-wrap">
        <div className="col-sm-12 col-md-4 text-center ">
          <img
            className="detailPoster"
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="poster"
          />
        </div>
        <div className="col-sm-12 col-md-8  ">
          <ul className="d-flex flex-column justify-content-center align-items-start mt-2 me-5">
            <li>
              <span>Overview:</span> {overview}
            </li>
            <li>
              <span>Name:</span> {title}
            </li>

            <li>
              <span>Date:</span> {release_date}
            </li>
            <li>
              <span>Imdb:</span> {vote_average}
            </li>
            <li>
              <span>Vote Count:</span> {vote_count}
            </li>
          </ul>
        </div>
      </div>

      <div className="video ms-3 w-75">
        {videoKey && <VideoSection videoKey={videoKey} />}
      </div>
      <div className="text-center">
        <h1>Comments</h1>
        <Review />
      </div>
    </div>
  );
};

export default MovieDetail;

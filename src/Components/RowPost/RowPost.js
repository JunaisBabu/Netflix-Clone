import axios from "../../axios";
import Youtube from "react-youtube";
import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../../constants/constants";
// import { baseUrl } from '../../constants/constants'
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    // axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
    axios
      .get(props.url)
      .then((response) => {
        // console.log("teser",response.data.results[3]);
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert('Network Error')
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log("movieid", id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      });
  };
  return (
    <div className="row">
      <h2 className="category-title">{"🔖" + props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          //  return <img className='poster' src="https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w" alt="" />
          return (
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;

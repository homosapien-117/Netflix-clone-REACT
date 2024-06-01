import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import { imageUrl,API_KEY } from "../../constants/constants";
import axios from "../../axios";
import "./Rowpost.css";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
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
  const handlemovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      if (response.data.results.length!==0) {
        setUrlid(response.data.results[0])
        
      }
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handlemovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {
        urlid && <Youtube videoId={urlid.key} opts={opts}/>
      }
    </div>
  );
}

export default Rowpost;

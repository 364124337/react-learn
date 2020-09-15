import React, { useReducer, useEffect } from "react";
import { Header } from "./Header.js";
import Search from "./Search";
import { initialState, reducer } from "./store/reducer";
import spinner from "./assest/ajax-loader.gif";
import axios from "axios";
import Movie from "./Movie";
import "./assest/style.scss";

const MOVIE_API_URL = "init_movie";

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((res) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: res.data.Search,
      });
    });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    axios.post("search_movie").then((res) => {
      if (res.data.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: res.data.Error,
        });
      }
    });
  };

  const { movies, errorMessage, loading } = state;

  const renderMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loadding spinner" />
    ) : errorMessage ? (
      <div className="errormsg">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => <Movie key="index" movie={movie} />)
    );

  return (
    <div className="hook-movie">
      <Header title="Movie" />
      <Search search={search} />
      <p>Search Moives you like!</p>
      <div className="movies">{renderMovies}</div>
    </div>
  );
};

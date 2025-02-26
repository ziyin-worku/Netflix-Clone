import React from "react";
import SingleRow from "../SingleRow/SingleRow";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <SingleRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <SingleRow title="Trending now" fetchUrl={requests.fetchTrending} />
      <SingleRow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <SingleRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <SingleRow title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <SingleRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <SingleRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <SingleRow title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <SingleRow title="Science Fiction" fetchUrl={requests.fetchScienceFiction}
      />
    </>
  );
};

export default RowList;

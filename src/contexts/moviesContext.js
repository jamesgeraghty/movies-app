import React, { useState } from "react";


export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [playLists, setPlayList] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const playListAdd = (movie) => {
    setPlayList( [...playLists, movie.id])
    console.log(playLists)
     
  };


 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        playListAdd
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

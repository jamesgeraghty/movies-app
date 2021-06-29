import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayListAddIcon from "@material-ui/icons/Favorite";

const PlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.playListAdd(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <PlayListAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlaylistAddIcon;
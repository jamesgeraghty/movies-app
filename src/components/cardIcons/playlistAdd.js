import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddPlaylistAddIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPLayList = (e) => {
    e.preventDefault();
    context.playListAdd(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToPLayList}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddPlaylistAddIcon;
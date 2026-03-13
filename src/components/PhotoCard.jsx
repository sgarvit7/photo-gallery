function PhotoCard({ photo, favourites, dispatch }) {
  const isFav = favourites.some((p) => p.id === photo.id);

  const toggleFavourite = () => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  };

  return (
    <div className="bg-[#cc8b65] rounded-xl hover:bg-black hover:cursor-pointer hover:text-[#cc8b65]  shadow overflow-hidden">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 p-3 rounded-xl object-cover"
      />

      <div className="p-3 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={toggleFavourite}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
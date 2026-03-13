import { useState, useReducer, useMemo, useCallback, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer } from "../reducer/favouritesReducer";
import PhotoCard from "./PhotoCard";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const saved = localStorage.getItem("favourites");
      return saved ? JSON.parse(saved) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

const filteredPhotos = useMemo(() => {
  const filtered = photos.filter((photo) =>
    photo.author.toLowerCase().includes(search.toLowerCase())
  );

  const favIds = favourites.map((p) => p.id);

  const favPhotos = filtered.filter((p) => favIds.includes(p.id));
  const otherPhotos = filtered.filter((p) => !favIds.includes(p.id));

  return [...favPhotos, ...otherPhotos];
}, [photos, search, favourites]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="border-[#cc8b65] p-2 mb-4 w-full rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
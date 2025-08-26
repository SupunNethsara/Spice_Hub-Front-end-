function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
    >
      {isFavorite ? (
        <BsHeartFill className="text-red-500 text-xl" />
      ) : (
        <BsHeart className="text-gray-600 text-xl" />
      )}
    </button>
  );
}

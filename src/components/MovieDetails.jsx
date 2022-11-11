export const MovieDetails = ({ movie }) => {
  // const [movie, setMovie] = useState(null);
  const { original_title, overview, poster_path, release_date, vote_average } =
    movie;

  // console.log(movie);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      <p>{original_title}</p>
      <p>{overview}</p>
      <p>{release_date}</p>
      <p>{vote_average}</p>
    </div>
  );
};

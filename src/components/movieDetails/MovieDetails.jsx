import {
  MovieDetailsWrap,
  TextDetailsWrap,
  DescriptionTitle,
  Description,
} from './MovieDetails.styled';
export const MovieDetails = ({ movie }) => {
  // const [movie, setMovie] = useState(null);
  const { original_title, overview, poster_path, release_date, vote_average } =
    movie;

  // console.log(movie);
  return (
    <MovieDetailsWrap>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      <TextDetailsWrap>
        <h2>{original_title}</h2>
        <DescriptionTitle>
          Overview: <Description>{overview}</Description>
        </DescriptionTitle>
        <DescriptionTitle>
          Release date: <Description>{release_date}</Description>
        </DescriptionTitle>
        <DescriptionTitle>
          Average rating: <Description>{vote_average}</Description>
        </DescriptionTitle>
      </TextDetailsWrap>
    </MovieDetailsWrap>
  );
};


const img_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ title, poster_path, overview, vote_average }) => {

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green"

    } else if (vote >= 6) {
      return "orange"
    } else {
      return "red"
    }
  }

  return (
    <div className="movie">
      <div children="movie-header">
        <img src={poster_path ? img_API + poster_path : 'https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg'} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average.toFixed(1)}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>

      </div>

    </div>
  )

}

export default Movie
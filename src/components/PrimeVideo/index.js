// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <div className="page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="category-container">
          <h1 className="category-heading">Action Movies</h1>
          {/* <MoviesSlider actionMovies={actionMovies} /> */}
          <MoviesSlider filteredMovies={actionMovies} />
          <h1 className="category-heading">Comedy Movies</h1>
          {/* <MoviesSlider comedyMovies={comedyMovies} /> */}
          <MoviesSlider filteredMovies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo

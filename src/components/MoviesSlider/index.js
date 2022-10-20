// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  //   const {actionMovies, comedyMovies} = props
  const {filteredMovies} = props
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        {filteredMovies.map(each => (
          <MovieItem key={each.id} eachMovieItem={each} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider

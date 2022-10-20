// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {eachMovieItem} = props
  const {thumbnailUrl, videoUrl} = eachMovieItem

  return (
    <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
      {close => (
        <div className="popup-card">
          <button
            type="button"
            className="close-button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <div>
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem

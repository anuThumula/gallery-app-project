// Write your code here.
import './index.css'

import {Component} from 'react'

class ThumbnailsList extends Component {
  renderThumbnails = () => {
    const {imagesList, onClickId, selectedImgId} = this.props
    return imagesList.map(eactItem => {
      const {thumbnailUrl, id, thumbnailAltText} = eactItem
      const onClickThumbnail = () => {
        onClickId(id)
      }
      const button = id === selectedImgId ? 'select-list-item' : 'list-item'

      return (
        <li key={id} className={button} onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            className="thumbnail-img"
            alt={thumbnailAltText}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-cont">
        <h1 className="heading">Nature Photography</h1>
        <p className="para">Nature Photography by Rahul</p>
        <ul className="thumbnail-list-cont">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}
export default ThumbnailsList

const ReviewCard = ({ name, text }) => {
  return (
    <li className="review-card">
      <p className="review-author subtitle-small"><strong>{name}</strong></p>
      <p className="review-content body-small long">{text}</p>
    </li>
  )
}

export default ReviewCard
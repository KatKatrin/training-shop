import './ratingReview.scss';

function RatingReview ({ratingNumber, onChangeRating}) {
  // console.log('render')
  // console.log(ratingNumber)
 
  const stars = ['★','★','★','★','★'];



  
  const starsRewiew = stars.map((star,i) => {
    if ( i+1 <= ratingNumber) {
      return (<div style={{color: '#F0CC84'}} key={i} id={i+1} onClick={(e) => onChangeRating(e.target.id)}>★</div>) 
    }
    return (<div style={{color: 'lightgray'}} key={i} id={i+1} onClick={(e) => onChangeRating(e.target.id)}>★</div>);
  })

  return(
    <div className="rating-review">
      {starsRewiew}
    </div>
  )
};

export default RatingReview;
import './rating.scss';


function Rating ({ratingNumber}) {

 const stars = ['★','★','★','★','★'];

  
  const starsRewiew = stars.map((star,i) => {
    if ( i+1 <= ratingNumber) {
      return (<span style={{color: '#F0CC84'}} key={i}>★</span>) 
    }
    return (<span style={{color: 'lightgray'}} key={i}>★</span>);
  })

  return(
    <div className="rating-area">
      {starsRewiew}
    </div>
  )
};

export default Rating;
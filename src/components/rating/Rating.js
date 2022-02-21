import './rating.scss';

function Rating ({color}) {

  return(
    <div className="rating-area">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span style={{color: color}}>★</span>
    </div>
  )
};

export default Rating;
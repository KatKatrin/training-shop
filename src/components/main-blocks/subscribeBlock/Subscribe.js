import './subscribe.scss';

function Subscribe () {

  return(

    <div className="main-box subscribe-block">
      <form className="form main__form" action="#">
        <p>Special Offer</p>
        <h2>Subscribe <br /> And <span style={{color:'#E91E63'}} >Get 10% Off</span> </h2>
        <input class="form-control form_input" name="user_email" required type="email" placeholder="Enter your email" />
        <input className="button_submit" type="submit" value={"SUBSCRIBE"} />
      </form>
    </div>
  )
};

export default Subscribe;
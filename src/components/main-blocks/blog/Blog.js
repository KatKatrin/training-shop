import './blog.scss';

import blogOne from "./blogImg/1.jpg";
import blogTwo from "./blogImg/2.jpg";
import blogThree from "./blogImg/3.jpg";

function Blog () {

  return (
    <div className="main-box  blog">

        <div className="blog__header">
          <h3>LATEST FROM BLOG</h3>
          <button>SEE ALL</button>
        </div>

        
        <div className="blog__content">

          <div className="blog__content__item">
             <img src={blogOne} alt="break" />
             <div className="content__text">
               <p>The Easiest Way to Break</p>
               <span>
                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
              </span>
             </div>
          </div>
          <div className="blog__content__item">
            <img src={blogTwo} alt="weeding" />
            <div className="content__text">
              <p>Wedding Season</p>
              <span>
                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
              </span>
            </div>
          </div>
          <div className="blog__content__item">
            <img src={blogThree} alt="favourites" />
            <div className="content__text">
              <p>Recent Favorites On Repeat</p>
              <span>
                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
              </span>
            </div>
          </div>

        </div>

      </div>
      
      
  )
};

export default Blog;
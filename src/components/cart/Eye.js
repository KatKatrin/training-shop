import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


//library.add(faEye, faEyeSlash);

const Eye = ({openEye}) => {


  return(
    <>
    
    {
      !openEye ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
    }
      

    </>
    
  )
}

export default Eye;
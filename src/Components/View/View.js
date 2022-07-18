import React, {useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../../storage/firabaseContext';
import { PostContext } from '../../storage/postContext';

import './View.css';
function View() {

  const {postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);
  const [userDetails, setUserDetails] = useState([]);
 

  useEffect(() => {
  
      firebase.firestore().collection('clients').get().then((res)=>{
        res.forEach((doc)=>{

          if(doc.data().id == postDetails.userIdOfThisProduct)
          {
            setUserDetails(doc.data())
            console.log(doc.id, "=>", doc.data())

          }else{
            console.log('nodata');
          }

      
        })


      }).catch((error)=>{
        console.log("error getting docs : ", error);
      })
  


  }, [])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
       { userDetails ? <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.number}</p>
        </div> : 'No valid data'
        }
      </div>
    </div>
  );
}
export default View;

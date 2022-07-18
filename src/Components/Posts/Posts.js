import React, {useEffect, useState, useContext} from 'react';
import { FirebaseContext } from '../../storage/firabaseContext';
import { useHistory } from 'react-router-dom';

import Heart from '../../assets/Heart';
import './Post.css';

import {PostContext} from '../../storage/postContext'


function Posts() {

  const {firebase} = useContext(FirebaseContext)
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory();


  const [post, setPost]= useState([]); //to map you need to push objects into array
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPosts= snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          userIdOfThisProduct:product.data().userId,
          

        }
 

      })
      setPost(allPosts)
     
     
     
    })
    
  })

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {post.map((product)=>{

           
           return <div onClick={()=>{
            setPostDetails(product)
            history.push('/view')

           }}
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer"> {product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div> })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

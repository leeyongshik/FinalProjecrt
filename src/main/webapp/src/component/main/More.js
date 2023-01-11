import axios from 'axios';
import React, { useState } from 'react';
import Shoes1 from './data1.json';

const More = () => {
    let [ shoes, setShoes ] = useState(Shoes1);	
    let [ pageIdx, setPageIdx ]= useState(2);

    const more = () => {
      axios.get('/data1.json')
           .then((resp) => {
              setShoes([
                ...shoes,
                ...resp.data
              ]);
              setPageIdx(pageIdx + 1)})
           .catch((err) => console.log(err))
    }
    console.log(pageIdx)
   
    return (
        <div>

            {/* card contents */}	
      <div className='container'>	
        <div className='row'>	
          {	
            shoes.map((item, index) => {	
              return (
                <div className='col-md-4' key={index}>	
                  <img src={ item.image } alt="신발" width="100px" />	
                  <h3>{ item.title }</h3>	
                  <p>{ item.content } & { item.price }</p>	
                </div>	
              )	
            })	
          }	
        </div>
      </div>
          
      <a className="btn btn-secondary btn" role="button" onClick={ more } style={{cursor:'pointer'}}>더보기</a>
        </div>	
  );	
}	

export default More;
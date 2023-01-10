import axios from 'axios';
import React, { useState } from 'react';
import Shoes1 from './data1.json';

const More = () => {
    let [ shoes, setShoes ] = useState(Shoes1);	
    let [ pageIdx, setPageIdx ]= useState(2);
   
    return (
        <div>

            {/* card contents */}	
      <div className='container'>	
        <div className='row'>	
          {	
            shoes.map((obj, i) => {	
              return <Card key={i} i={i} shoes={shoes} />	
            })	
          }	
        </div>
      </div>
          
      <a class="btn btn-secondary btn" role="button" onClick={() => {
        axios.get('/data1.json').then((resp) => {
          setShoes([
            ...shoes,
            ...resp.data
          ]);
          setPageIdx(pageIdx + 1);
        }).catch((e) => {
          console.log(e);
        });
      }}>더보기</a>
        </div>	
  );	
}	

function Card(props) {	
    return (	
      <>	
        <div className='col-md-4'>	
          <img src={ props.shoes[props.i].image } alt="신발" width="100px" />	
          <h3>{ props.shoes[props.i].title }</h3>	
          <p>{ props.shoes[props.i].content } & { props.shoes[props.i].price }</p>	
        </div>	
      </>	
    )	
  }	

export default More;
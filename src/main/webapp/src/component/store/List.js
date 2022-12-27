import React from 'react';
import styles from '../../css/List.module.css'
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Index from './Index';
import Popcorn from './Popcorn';
import Drink from './Drink';
import Snack from './Snack';
import Combo from './Combo';
import StoreHeader from './StoreHeader';

const List = () => {
    return (
        <div >
            <div className={styles.big_banner_wrap}>
                <div className={styles.bx_wrapper}>
                    <div className="bx-viewport" style={{width: '100%', overflow: 'hidden', position: 'relative', height: '400px'}}>
                        <ul className="bxslider" style={{width: 'auto', position: 'relative'}}>
                            <li style={{float: 'none', listStyle: 'none' , position: 'absolute', width: '980px', display: 'block'}}>
                                <Link to='/store'>
                                    <img src="../img/store2.jpeg" alt="기프트샵" style={{width:'980px',height:'400px', margin:'auto'}}/> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
            </div>




            <StoreHeader/>
            


            <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/combo" element={<Combo />}></Route>
                <Route path="/popcorn" element={<Popcorn />}></Route>
                <Route path="/drink" element={<Drink />}></Route>
                <Route path="/snack" element={<Snack />}></Route>
            </Routes>



            
        </div>
    );
};

export default List;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/List.module.css'

const StoreHeader = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get(`http://localhost:8080/store/getCartList?userName=${sessionStorage.getItem("userName")}`)
         .then(res => setCount(res.data.length))
         .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className={styles.category_wrap}>
                <div className={styles.category_contents_wrap}>
                    <ul className={styles.category_content} style={{listStyle: 'none'}}>
                        <li id="cm4" name="categorymenu" className={ styles.active }>
                            <Link to='/store/combo'>콤보</Link>
                            |
                        </li>
                        <li id="cm5" name="categorymenu" className="">
                            <Link to='/store/popcorn'>팝콘</Link>
                            |
                        </li>
                        <li id="cm6" name="categorymenu" className="">
                            <Link to='/store/drink'>음료</Link>
                            |
                        </li>
                        <li id="cm7" name="categorymenu" className="">
                            <Link to='/store/snack'>스낵</Link>
                        </li>
                    </ul>
                    <ul className={styles.cart_content} style={{listStyle: 'none'}}>
                        <li>
                            <a href="#">장바구니</a>
                            <span id="cartviewcnt">{ count }</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StoreHeader;
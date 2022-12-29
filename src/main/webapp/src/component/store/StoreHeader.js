import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/List.module.css'

const StoreHeader = () => {
    return (
        <>
            <div className={styles.category_wrap}>
                <div className={styles.category_contents_wrap}>
                    <ul className={styles.category_content} style={{listStyle: 'none'}}>
                        <li id="cm2" name="categorymenu" className="">
                            <a href="#">영화관람권</a>
                        </li>
                        <li id="cm3" name="categorymenu" className="">
                            <a href="#">기프트카드</a>
                        </li>
                        <li id="cm4" name="categorymenu" className="">
                            <Link to='/store/combo'>콤보</Link>
                        </li>
                        <li id="cm5" name="categorymenu" className="">
                            <Link to='/store/popcorn'>팝콘</Link>
                        </li>
                        <li id="cm6" name="categorymenu" className="">
                            <Link to='/store/drink'>음료</Link>
                        </li>
                        <li id="cm7" name="categorymenu" className="">
                            <Link to='/store/snack'>스낵</Link>
                        </li>
                        <li id="cm10" name="categorymenu" className="">
                            <a href="#">플레이존</a>
                        </li>
                        <li>
                            <a href="#">상품권소개</a>
                        </li>
                    </ul>
                    <ul className={styles.cart_content} style={{listStyle: 'none'}}>
                        <li>
                            <a href="#">내 기프트콘</a>
                            <span id="giftconcnt">0</span>
                        </li>
                        <li>
                            <a href="#">장바구니</a>
                            <span id="cartviewcnt">0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StoreHeader;
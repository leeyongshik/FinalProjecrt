import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import popcornStyles from '../../css/Popcorn.module.css'

const StorePopcone = () => {
    const [list, setList] = useState([])
    const [popcorn, setPopcorn] = useState('popcorn')

  useEffect(() => {
    axios.get(`http://localhost:8080/store/getPopcornList?category=${popcorn}`)
         .then(res => setList(res.data))
         .catch(error => console.log(error))
  }, [])

    return (
        <>
            <div className={popcornStyles.category_product_list_wrap}>
    
                <strong className={popcornStyles.category_product_list_title}>팝콘
                    <span>고소, 달콤부터 고메팝콘까지, 안먹으면 서운해요</span>
                </strong>
                <ul className={popcornStyles.com_list_style}>

                {
                    list.map(item => {
                    return (
                        <li key={ item.store_seq }>
                            <Link to="/store/view?store_seq={ item.store_seq }" className={popcornStyles.btn_category_product}>
                                <span className={popcornStyles.com_list_img_wrap}>
                                    <img src="../storage/{ item.img }" alt={ item.subject }/>
                                </span>
                                <span className={popcornStyles.com_list_text_wrap}>
                                    <span className={popcornStyles.com_list_text_title}>{ item.subject }</span>
                                    <span className={popcornStyles.com_list_text_name}>{ item.subSubject }</span>
                                    <span className={popcornStyles.com_list_sale_price_wrap}>
                                        <span className={popcornStyles.store_deatail_source_price}>{ item.price }</span>
                                    </span>
                                </span>
                            </Link>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100332', '0', ''); return false;" className={popcornStyles.btn_category_product_cart}>1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100332', 0, '1'); return false;" className={popcornStyles.btn_category_product_gift}>2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100332', 0, '1'); return false;" className={popcornStyles.btn_category_product_buy}>3</a>
                        </li>
                    )
                    })
                }









                    <li className="">
                        <Link to="/store/view" className={popcornStyles.btn_category_product}>
                            <span className={popcornStyles.com_list_img_wrap}>
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680685701470.jpg" alt="더블치즈팝콘(M)"/>
                            </span>
                            <span className={popcornStyles.com_list_text_wrap}>
                                <span className={popcornStyles.com_list_text_title}>더블치즈팝콘(M)</span>
                                <span className={popcornStyles.com_list_text_name}>더블치즈팝콘(M)</span>
                                <span className={popcornStyles.com_list_sale_price_wrap}>
                                    <span className={popcornStyles.store_deatail_source_price}>6,000</span>
                                </span>
                            </span>
                        </Link>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100332', '0', ''); return false;" className={popcornStyles.btn_category_product_cart}>1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100332', 0, '1'); return false;" className={popcornStyles.btn_category_product_gift}>2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100332', 0, '1'); return false;" className={popcornStyles.btn_category_product_buy}>3</a>
                    </li>











                    <li className="">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100331" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680663726560.jpg" alt="바질어니언팝콘(M)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">바질어니언팝콘(M)</span>
                                <span className="com_list_text_name">바질어니언팝콘(M)</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">6,000</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100331', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100331', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100331', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="state01 ">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100330" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680652410380.jpg" alt="달콤팝콘(M)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">달콤팝콘(M)</span>
                                <span className="com_list_text_name">달콤팝콘(M)</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">6,000</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100330', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100330', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100330', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="state01 ">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100329" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680650063190.jpg" alt="고소팝콘(M)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">고소팝콘(M)</span>
                                <span className="com_list_text_name">고소팝콘(M)</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">5,000</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100329', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100329', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100329', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="state01 ">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100328" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16678974149360.jpg" alt="더블치즈팝콘(L)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">더블치즈팝콘(L)</span>
                                <span className="com_list_text_name">더블치즈팝콘(L)</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">6,500</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100328', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100328', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100328', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100327" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16678977589030.jpg" alt="바질어니언팝콘(L)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">바질어니언팝콘(L)</span>
                                <span className="com_list_text_name">바질어니언팝콘(L)</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">6,500</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100327', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100327', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100327', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="state01 ">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100326" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16678953625450.jpg" alt="달콤팝콘(L)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">달콤팝콘(L)</span>
                                <span className="com_list_text_name">달콤팝콘(L)1</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">6,500</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100326', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100326', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100326', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                    <li className="state01 ">
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100325" className="btn_category_product">
                            <span className="com_list_img_wrap">
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16678948574930.jpg" alt="고소팝콘(L)"/>
                            </span>
                            <span className="com_list_text_wrap">
                                <span className="com_list_text_title">고소팝콘(L)</span>
                                <span className="com_list_text_name">고소팝콘(L)1</span>
                                <span className="com_list_sale_price_wrap">
                                    <span className="store_deatail_source_price">5,500</span>
                                </span>
                            </span>
                        </a>
                        <a href="#none" onclick="javascript:fnMoveLink('1', '100325', '0', ''); return false;" className="btn_category_product_cart">1</a>
                        <a href="#none" onclick="javascript:fnMoveLink('2', '100325', 0, '1'); return false;" className="btn_category_product_gift">2</a>
                        <a href="#none" onclick="javascript:fnMoveLink('3', '100325', 0, '1'); return false;" className="btn_category_product_buy">3</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default StorePopcone;
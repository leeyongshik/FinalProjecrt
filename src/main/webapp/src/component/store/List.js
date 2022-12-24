import React from 'react';
import styles from '../../css/List.module.css'

const List = () => {
    return (
        <div >
            <div className={styles.big_banner_wrap}>
                <div className={styles.bx_wrapper}>
                    <div className="bx-viewport" style={{width: '100%', overflow: 'hidden', position: 'relative', height: '400px'}}>
                        <ul className="bxslider" style={{width: 'auto', position: 'relative'}}>
                            <li style={{float: 'none', listStyle: 'none' , position: 'absolute', width: '980px', display: 'block'}}>
                                <img src="http://img.cgv.co.kr/GiftStore/Display/PC/15468087168510.jpg" alt="기프트샵"/>   
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
            </div>





            <div className={styles.category_wrap}>
                <div className={styles.category_contents_wrap}>
                    <ul className={styles.category_content} style={{listStyle: 'none'}}>
                        <li id="cm2" name="categorymenu" className="">
                            <a href="#" onclick="javascript:fnCategoryData('2');">영화관람권</a>
                        </li>
                        <li id="cm3" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('3');">기프트카드</a>
                        </li>
                        <li id="cm4" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('4');">콤보</a>
                        </li>
                        <li id="cm5" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('5');">팝콘</a>
                        </li>
                        <li id="cm6" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('6');">음료</a>
                        </li>
                        <li id="cm7" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('7');">스낵</a>
                        </li>
                        <li id="cm10" name="categorymenu" class="">
                            <a href="#" onclick="javascript:fnCategoryData('10');">플레이존</a>
                        </li>
                        <li>
                            <a href="#" onclick="javascript:location.href='/culture-event/popcorn-store/introduce-gift-card.aspx?CategoryIdx=0';">상품권소개</a>
                        </li>
                    </ul>
                    <ul className={styles.cart_content} style={{listStyle: 'none'}}>
                        <li>
                            <a href="#" onclick="javascript:app.goLogin();return false;">내 기프트콘</a>
                            <span id="giftconcnt">0</span>
                        </li>
                        <li>
                            <a href="#" onclick="javascript:app.goLogin();return false;">장바구니</a>
                            <span id="cartviewcnt">0</span>
                        </li>
                    </ul>
                </div>
            </div>






            <div className="category_product_wrap">
                <ul className="category_product_list">
                    <li>
                        <strong className="category_product_title">영화관람권
                            <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=2" className="btn_category_product">더보기</a>
                        </strong>
                        <ul className="category_product_inner_list">
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100253" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16094706927780.jpg" alt="CGV 영화관람권"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">CGV 영화관람권</span>
                                        <span className="best_product_text_name">즐거운 경험은 CGV에서!</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">12,000</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100253', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100253', '0', '1'); return false;" className="btn_category_product_gift">2</a> 
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100253', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100026" className="btn_category_product">
                                    <span class="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15458911951520.jpg" alt="CGV 골드클래스"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">CGV 골드클래스</span>
                                        <span className="best_product_text_name">최고의 관람환경을 제공하는 프리미엄 상영관</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">40,000</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100026', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100026', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100026', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100255" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16105061088530.jpg" alt="4DX관람권"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">4DX관람권</span>
                                        <span className="best_product_text_name">오감만족 영화 속 주인공 되기</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">19,000</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100255', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100255', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100255', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100254" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16104445886810.jpg" alt="IMAX 관람권"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">IMAX 관람권</span>
                                        <span className="best_product_text_name">사람이 볼 수 있는 최대 영상, IMAX</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">18,000</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100254', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100254', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100254', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className="category_product_title">기프트카드
                            <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=3" className="btn_category_product">더보기</a>
                        </strong>
                        <ul className="category_product_inner_list">
                            <li className="state_giftcard">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100161" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15814124358590.jpg" alt="PACONNIE A형"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">PACONNIE A형</span>
                                        <span className="best_product_text_name">충전형 선불 카드</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price nowon">금액충전형</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100161', '0', '10000'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100161', '0', '10000'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className=" state_giftcard">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100162" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15814158039890.jpg" alt="PACONNIE B형"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">PACONNIE B형</span>
                                        <span className="best_product_text_name">충전형 선불 카드</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price nowon">금액충전형</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100162', '0', '10000'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100162', '0', '10000'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className="state_giftcard">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100163" className="btn_category_product">
                                    <span class="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15814162227570.jpg" alt="PACONNIE C형"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">PACONNIE C형</span>
                                        <span className="best_product_text_name">충전형 선불 카드</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price nowon">금액충전형</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100163', '0', '10000'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100163', '0', '10000'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className="category_product_title">음료
                            <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=6" className="btn_category_product">더보기</a>
                        </strong>
                        <ul className="category_product_inner_list">
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100083" className="btn_category_product">
                                    <span class="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680718728370.jpg" alt="탄산음료(M)"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">탄산음료(M)</span>
                                        <span className="best_product_text_name">시원한 탄산음료와 함께 스트레스도 날리세요</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">2,500</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100083', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100083', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100083', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className="">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100089" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15464096039760.jpg" alt="아메리카노(HOT)"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">아메리카노(HOT)</span>
                                        <span className="best_product_text_name">현대인의 필수품</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">3,500</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className=" ">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100090" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15464105893180.jpg" alt="아메리카노(ICE)"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">아메리카노(ICE)</span>
                                        <span className="best_product_text_name">현대인의 필수품</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">4,000</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100090', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100090', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100090', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className="category_product_title">스낵
                            <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=7" className="btn_category_product">더보기</a>
                        </strong>
                        <ul className="category_product_inner_list">
                            <li className=" ">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100017" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15459092398190.jpg" alt="칠리치즈나쵸"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">칠리치즈나쵸</span>
                                        <span className="best_product_text_name">바삭바삭 나쵸, 얼마나 맛있게요?</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">4,900</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100017', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100017', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100017', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className=" ">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100092" className="btn_category_product">
                                    <span className="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15464120856450.jpg" alt="플레인핫도그"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">플레인핫도그</span>
                                        <span className="best_product_text_name">플레인핫도그</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">4,500</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100092', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100092', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100092', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                            <li className=" ">
                                <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100015" className="btn_category_product">
                                    <span class="best_product_img_wrap">
                                        <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15459089330830.jpg" alt="오징어(완제품)"/>
                                    </span>
                                    <span className="best_product_text_wrap">
                                        <span className="best_product_text_title">오징어(완제품)</span>
                                        <span className="best_product_text_name">한봉지로는 모자라요</span>
                                        <span className="best_product_sale_price_wrap">
                                            <span className="store_deatail_source_price">3,500</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="#none" onclick="javascript:fnMoveLink('1', '100015', '0', ''); return false;" className="btn_category_product_cart">1</a>
                                <a href="#none" onclick="javascript:fnMoveLink('2', '100015', '0', '1'); return false;" className="btn_category_product_gift">2</a>
                                <a href="#none" onclick="javascript:fnMoveLink('3', '100015', '0', '1'); return false;" className="btn_category_product_buy">3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default List;
import React, { useEffect, useState } from 'react';
import StoreHeader from './StoreHeader';
import cartStyles from '../../css/StoreCart.module.css'
import axios from 'axios';

const StoreCart = () => {
    const [list, setList] = useState([])

    useEffect(() => {
    axios.get(`http://localhost:8080/store/getCartList?userName=${sessionStorage.getItem("userName")}`)
         .then(res => setList(res.data))
         .catch(error => console.log(error))
    
    }, [])

    return (
        <div>
            <StoreHeader/>

            <div className={cartStyles.cart_step_wrap}>
		        <ul className={cartStyles.cart_step}>
			        <li className={cartStyles.step0}>
                        <span>STEP 01</span>
                        <strong>장바구니</strong>
                    </li>
			        <li className={cartStyles.step1}>
                        <span>STEP 02</span>
                        <strong>선물정보 입력</strong>
                    </li>
			        <li className={cartStyles.step2}>
                        <span>STEP 03</span>
                        <strong>결제하기</strong>
                    </li>
			        <li className={cartStyles.step3}>
                        <span>STEP 04</span>
                        <strong>결제완료</strong>
                    </li>
		        </ul>
	        </div>





            <div className={cartStyles.com_cart_list_wrap}>
		        <p className={cartStyles.cart_allchecker_wrap}>
			        <input type="checkbox" id="checkboxall" className={cartStyles.com_custom_checkbox} checked="checked"/>
			        <label for="checkboxall">전체선택</label>
			        <strong className={cartStyles.com_custom_checkbox_product_name}>상품명</strong>
			        <strong className={cartStyles.stcom_custom_checkbox_sel_priceep0}>판매금액</strong>
			        <strong className={cartStyles.com_custom_checkbox_cnt}>수량</strong>
			        <strong className={cartStyles.com_custom_checkbox_price}>구매금액</strong>
			        <strong className={cartStyles.com_custom_checkbox_product_sel}>선택</strong>
		        </p>
		
        
                <ul className={cartStyles.com_list_style1}>

                    {
                    list.map(item => {

                        return (
                            <li className="" id="cart_item_idx_900734" key={ item.cart_seq }>
                        <input type="checkbox" id="checkbox900734" name="checkbox" value="900734" className={cartStyles.com_custom_checkbox} checked="checked"/>
                        <label for="checkbox900734"></label>
                        <a href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100083" className={cartStyles.product_info_img}>
                            <img src={`../storage/${ item.img }`} alt={ item.subject }/>
                            <strong className={cartStyles.product_info_name}>{ item.subject }</strong>
                            <span className={cartStyles.product_info_origin} id="spanOriginName900734">{ item.subSubject }</span>
                        </a>
                        <div className={cartStyles.product_info_wrap}>
                            <span className={cartStyles.product_info_one_price} id="product_info_one_price900734">{[item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        </div>
                        <input type="hidden" id="hid_PKAG_CNT" value="1"/>
                        <input type="hidden" id="hid_OrderCnt900734" className={cartStyles.goodscnt} value="1"/>
                        <div className={cartStyles.product_info_cnt_wrap}>
                            <span class={cartStyles.com_form_count} id="com_form_count900734">{ item.count }</span>
                            <a href="#none" className={cartStyles.com_btn_plus}>+</a>
                            <a href="#none" className={cartStyles.com_btn_minus}>-</a>
                            {/* <a href="#none" className={cartStyles.btn_change}>변경</a> */}
                        </div>
                        <span className={cartStyles.product_info_price} id="totalgoodsprice900734">{[item.price * item.count].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                        <div className={cartStyles.product_info_btn_wrap}>
                            <a href="#none" >바로구매</a>
                            {/* <a href="#none" >선물하기</a> */}
                        </div>
                        <a href="javascript:fn_Del('900734')" className={cartStyles.btn_product_delect}>삭제</a>
                    </li>
                        )
                    })
                }
                </ul>
                {/* <a href="#none" class="btn_del_selected">선택상품 삭제
                    <span id="spanSelCnt" style="display: inline;">3</span>
                </a> */}
                <span id="notimsg">장바구니에 담긴 상품은 최대 30일까지 보관됩니다.</span>

        
                <table className={cartStyles.com_cart_total_price_wrap} summary="총 상품 금액, 할인금액을 합산한 총 결제예정 금액 표기">
                    <caption>총 결제 예정금액 표</caption>
                    
                    <thead>
                        <tr>
                            <th>총 상품 금액</th>
                            <th>할인금액</th>
                            <th>총 결제 예정금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong><span id="sTot_Sales_Price">17,500</span></strong></td>
                            <td className={cartStyles.com_cart_calculator_marker}><strong><span id="s_Tot_Promotion">0</span></strong></td>
                            <td><strong className={cartStyles.cart_total_price}><span id="sTot_Promotion_Price">17,500</span></strong></td>
                        </tr>
                    </tbody>
                </table>

                <div className={cartStyles.com_btn_wrap }> {/* cartStyles.pT60 */}
                    <a href="#none" className={cartStyles.btn_style0 } onClick="javascript:fn_Buy(this, 'gift', '');">선물하기</a>
                    <a href="#none" className={cartStyles.btn_style0 }  >구매하기</a> {/* onClick="javascript:fn_Buy(this, 'purchase', '');" */}
                </div>
            </div>
        </div>
    );
};

export default StoreCart;
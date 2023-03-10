import React, { useEffect, useState } from 'react';
import StoreHeader from './StoreHeader';
import payStyles from '../../css/StorePayment.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StorePay = () => {
        const [ list, setList ] = useState([])
        const [ listCount, setListCount ] = useState(0)
        const [ basket, setBasket ] = useState('')
        const [ user, setUser ] = useState({
            userName: '',
            name: '',
            phoneNumber: ''
        })
        const { name, phoneNumber } = user

        const [ form, setForm ] = useState({
            subject: '',
            price: '',
            subSubject: '',
            count: '',
            img: '',
            state: '',
            cart_seq: '',
            store_seq: '',
            userName: ''
        })
        const { subject, price, subSubject, count, img, state, cart_seq, store_seq, userName } = form

        const now = new Date()
        const day = now.getFullYear() + '' + ((now.getMonth() + 1) < 10 ? '0'+(now.getMonth() + 1) : (now.getMonth() + 1)) + (now.getDate() < 10 ? '0'+now.getDate() : now.getDate())
    
        
        const [dayAfter, setDayAfter] = useState('')
        const [orderNumber, setOrderNumber] = useState(day + dayAfter)

        const payUpdate = () => {
            let listcartseq = 0;
            let listcount = 0;
            let liststoreseq = 0;
            let listsubject = 0;
            let listsubsubject = 0;
            let listprice = 0;
            let listimg = 0;
            let liststate = day + dayAfter;
    
            for (let i = 0; i < list.length; i++) {
                listcartseq = list[i].cart_seq
                listcount = list[i].count
                liststoreseq = list[i].store_seq
                listsubject = list[i].subject
                listsubsubject = list[i].subSubject
                listprice = list[i].price
                listimg = list[i].img
                liststate = day + dayAfter
    
                axios.post('http://localhost:8080/store/updateCart', null, {params: {
                                    cart_seq : listcartseq,
                                    count : listcount,
                                    store_seq : liststoreseq,
                                    subject : listsubject,
                                    subSubject : listsubsubject,
                                    price : listprice,
                                    userName : sessionStorage.getItem("userName"),
                                    img : listimg,
                                    state : day + dayAfter
    
                                  }}
                                  )
                     .then()
                     .catch(error => console.log(error))
                    }
                    alert('????????? ?????????????????????.')
                    navigate(`/store/paycomplete/${day+dayAfter}`)
    
        }

        useEffect(() => {
            axios.get(`http://localhost:8080/store/getCartList?userName=${sessionStorage.getItem("userName")}`)
                    .then(res => {setList(res.data) 
                    || 
                    setDayAfter(res.data[0].cart_seq < 10 ? '00000' + res.data[0].cart_seq : res.data[0].cart_seq < 100 ? '0000' + res.data[0].cart_seq : res.data[0].cart_seq < 1000 ? '000' + res.data[0].cart_seq : res.data[0].cart_seq < 10000 ? '00' + res.data[0].cart_seq : res.data[0].cart_seq < 100000 ? '0' + res.data[0].cart_seq : res.data[0].cart_seq)
                    ||
                    setBasket(res.data.length === 1 ? res.data[0].subject : `${res.data[0].subject} ??? ??? ${res.data.length - 1}???`)})
                    .catch(error => console.log(error))
        }, [])

        useEffect(() => {
            axios.post(`http://localhost:8080/store/getUser?userName=${sessionStorage.getItem("userName")}`)
                 .then(res => setUser(res.data))
                 .catch(error => console.log(error))
                }, [])

        const getTotalPrice = list => {
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                sum += list[i].count * list[i].price;
            }
            return sum;
            };

        const navigate = useNavigate()
        const payment = () => {
            const { IMP } = window;
            IMP.init('imp16543357')
            // IMP.request_pay(param, callback) ????????? ??????  
    
            IMP.request_pay(
                {
                    // param
                    pg: 'html5_inicis',
                    pay_method: 'card',
                    merchant_uid: day + dayAfter,
                    name: basket,
                    amount: getTotalPrice(list),
                    buyer_email: '',
                    buyer_name: name,
                    buyer_tel: [phoneNumber].toString().replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
                    buyer_addr: '',
                    buyer_postcode: '',
                },
                res => {
                    // callback
                    if (res.success) {
                        // ?????? ?????? ??? ??????,
    
                        axios.post('http://localhost:8080/store/insertPay', null, {params: {
                            userName: sessionStorage.getItem("userName"),
                            orderNumber: day + dayAfter,
                            subject: basket,
                            totalPrice: getTotalPrice(list)
                        }}
                        )
                            .then(
                                payUpdate()
                                    // axios.post('http://localhost:8080/store/updateCart', null, {params: {
                                    //         subject: subject,
                                    //         price: price,
                                    //         subSubject: subSubject,
                                    //         count: count,
                                    //         img: img,
                                    //         state: day + dayAfter,
                                    //         cart_seq: cart_seq,
                                    //         store_seq: store_seq,
                                    //         userName: sessionStorage.getItem("userName")
                                    //     }}
                                    // )
                                        // .then(alert('????????? ?????????????????????.') || navigate(`/store/paycomplete/${day+dayAfter}`))
                                        // .catch(error => console.log(error))
                                )
                            .catch(error => console.log(error))
                        //(???????????? => state??? orderNumber??? ????????? ???????????? ?????????)
                        
                    } else {
                        // ?????? ?????? ??? ??????,
                        alert('????????? ?????????????????????.');
                    }
                },
            );
        };



    return (
        <div>
            <StoreHeader/>

            <div className={payStyles.cart_step_wrap}>
            {/* step_unit3 */}
                <ul className={payStyles.cart_step}>
                    <li className={payStyles.step0}>
                        <span>STEP 01</span>
                        <strong>????????????</strong>
                    </li>
                    {/* active */}
                    <li className={payStyles.active}>
                        <span>STEP 02</span>
                        <strong>????????????</strong>
                    </li>
                    <li className={payStyles.step3}>
                        <span>STEP 03</span>
                        <strong>????????????</strong>
                    </li>
                </ul>
            </div>



            <div className={payStyles.com_cart_list_wrap}>
                <strong className={payStyles.com_box_design_title}>???????????? ??????</strong>
                <p className={payStyles.cart_allchecker_wrap}>
                    <strong className={payStyles.com_custom_checkbox_product_name}>?????????</strong>
                    <strong className={payStyles.com_custom_checkbox_sel_price}>????????????</strong>
                    <strong className={payStyles.com_custom_checkbox_cnt}>??????</strong>
                    <strong className={payStyles.com_custom_checkbox_price}>????????????</strong>
                </p>
                
                <ul className={payStyles.com_list_style1}>

                    {
                        list.map((item, index) => {
                            return (
                                <li key={ index }>
                                    <div className={payStyles.product_info_img}>
                                        <img src={`../storage/${ item.img }`} alt={ item.subject }/>
                                        <strong className={payStyles.product_info_name}>{ item.subject }</strong>
                                        <span className={payStyles.product_info_origin}>{ item.subSubject }</span>
                                    </div>
                                    <div className={payStyles.product_info_wrap}>
                                        <span className={payStyles.product_info_one_price}>{[item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                    </div>
                                    <div className={payStyles.product_info_cnt_wrap}>{ item.count }???</div>
                                    <span className={payStyles.product_info_price}>{[item.price * item.count].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <table className={payStyles.com_cart_total_price_wrap}>
                    <thead>
                        <tr>
                            <th>
                                ??? ?????? ????????????
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong className={payStyles.cart_total_price}>{ getTotalPrice(list).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>     




            <div className={payStyles.com_box_design_wrap}>
                <strong className={payStyles.com_box_design_title}>????????? ?????? ??????</strong>
                <ul className={payStyles.com_box_design}>
                    <li>
                        <label>??????</label>
                        <input type="text" value={ name } readOnly />
                        <label>???????????? ??????</label>
                        <input type="tel" value={[phoneNumber].toString().replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')} readOnly style={{width:'228px'}}/>
                    </li>
                </ul>
                <p className={payStyles.com_box_design_olist}>
                    ???????????? CGV ??????????????? ????????? ????????? ????????? ???????????? ????????? MMS??? ???????????????.<br/>
                    ????????? ???????????? ????????? ????????? ??? ???????????????.</p>
            </div>




            <div className={payStyles.com_box_design_wrap}>
                <strong className={payStyles.com_box_design_title}>?????? ??????</strong>
                <ul className={payStyles.com_box_design}>
                <li>
                        {/* <input type="radio" name="radio" className={payStyles.com_custom_radio} id="payment_kakaopay"/> */}
                        <input type="radio" defaultChecked/>
                        <label>
                            <img src="../../img/kg_inicis.jpg" alt="KG????????????" style={{ border: '1px solid gray', borderRadius: 5, marginTop: '15px', marginLeft: '-40px', width: 90, height: 40, boxShadow: '3px 3px 3px gray' }}/>
                        </label>
                    </li>
                </ul>
                
                <p className={payStyles.com_box_design_olist} id="pKKO">
                    ?????????????????? ???????????? ???????????? ????????? ???????????? ???????????? ??? ????????? ??????????????? ?????? ????????? ???????????? ??? ????????????.</p>
                
                <div className={payStyles.com_btn_wrap}>
                <a href="#none" onClick={ payment } className={payStyles.btn_style0} style={{width:'1000px'}}>????????????</a> 
                    {/* <a href="#none" className={payStyles.btn_prev} onClick="javascript:location.replace('http://www.cgv.co.kr/culture-event/popcorn-store/user-cart.aspx');">
                        <img src="./../../../CDN/R2014/images/giftstore/common/btn_prev.png" alt="?????????????????? ??????"/>????????????
                    </a> */}
                </div>
            </div>

        </div>
    );
};

export default StorePay;
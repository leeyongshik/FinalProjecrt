import React, { useEffect, useState } from 'react';
import StoreHeader from './StoreHeader';
import completeStyles from '../../css/PayComplete.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PayComplete = () => {
    const params = useParams().orderNumber;
    
    const [pay, setPay] = useState({
        pay_seq: '',
        subject: '',
        totalPrice: '',
        orderNumber: '',
        userName: ''
    })
    const { pay_seq, subject, totalPrice, orderNumber, userName } = pay
    
    useEffect(() => {
        
        axios.get(`http://localhost:8080/store/getPay?orderNumber=${params}`)
             .then(res => setPay(res.data))
             .catch()
             
    }, [])
    console.log(pay)

    const sendKakaoMessage = () => {
        window.Kakao.init(process.env.REACT_APP_ORDERNUMBER);
        console.log(process.env.REACT_APP_ORDERNUMBER)

        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: 'BITBOX에서 보내요!',
                description: '상품 결제 내역입니다.',
                imageUrl: 'bitbox',
                link: {
                    webUrl: 'http://localhost:3000/store/'
                },
            },
            buttons: [
                {
                    title: '함께 해보기',
                    link: {
                        webUrl: 'http://localhost:3000/store/'
                    },
                },
            ],
        });

        window.location.replace(`/store/paycomplete/${params}`)
    }

    return (
        <div>

            <StoreHeader/>
            <div className={completeStyles.cart_step_wrap}>
                <ul className={completeStyles.cart_step}>
                    <li className={completeStyles.step0}><span>STEP 01</span><strong>장바구니</strong></li>
                    <li className={completeStyles.step2}><span>STEP 02</span><strong>결제하기</strong></li>
                    <li className={completeStyles.active}><span>STEP 03</span><strong>결제완료</strong></li>
                </ul>
            </div>


            <div className={completeStyles.payment_complete_wrap}>
                <div className={completeStyles.payment_complete_contents_wrap}>
                    <p>
                        <strong>상품 결제가 완료되었습니다.</strong>
                        <span>{ orderNumber }</span></p>
                    <dl>
                        <dt className={completeStyles.payment_complete_total}>총 결제금액</dt>
                        <dd>
                            <span>{ [totalPrice].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</span></dd>
                    </dl>
                </div>
                <p className={completeStyles.com_box_design_olist}>
                    홈페이지 예매, 어플 예매는 쿠폰 번호 입력 후 이용이 가능하며, 현장 구매 시 상품별 바코드로 결제 가능합니다.</p>
                <p className={completeStyles.com_box_design_olist}>
                    친구에게 선물한 경우 입력하신 수신번호로 상품교환이 가능한 기프트콘이 발송됩니다.</p>
                <div className={completeStyles.com_btn_wrap}>
                    <a href="#none" onclick="fn_PaymentDetail();" className={completeStyles.btn_style1}>결제내역</a> 
                    <a href="store-category.aspx?CategoryIdx=1" className={completeStyles.btn_style0}>상품 더보기</a>
                    <a href="#" onClick={ sendKakaoMessage } className={completeStyles.btn_style0}>카카오톡으로 보내기</a>
                </div>
            </div>
        </div>
    );
};

export default PayComplete;
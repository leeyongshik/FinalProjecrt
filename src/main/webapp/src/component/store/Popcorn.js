import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import popcornStyles from '../../css/Popcorn.module.css'

const StorePopcone = () => {
    const [list, setList] = useState([])
    const [popcorn, setPopcorn] = useState('popcorn')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

  useEffect(() => {
    
    console.log(sessionStorage.getItem("userName"))
    
    axios.get(`http://localhost:8080/store/getPopcornList?category=${popcorn}`)
         .then(res => setList(res.data))
         .catch(error => console.log(error))
    
    }, [])

    const goToCart = (e) => {
        e.preventDefault()
        sessionStorage.getItem("userName") === null ? alert('로그인이 필요합니다.') : navigate('/store/cart');
    }

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
                                <Link to={`/store/view/${ item.store_seq }`} className={popcornStyles.btn_category_product}>
                                    <span className={popcornStyles.com_list_img_wrap}>
                                        <img src={`../storage/${ item.img }`} alt={ item.subject }/>
                                    </span>
                                    <span className={popcornStyles.com_list_text_wrap}>
                                        <span className={popcornStyles.com_list_text_title}>{ item.subject }</span>
                                        <span className={popcornStyles.com_list_text_name}>{ item.subSubject }</span>
                                        <span className={popcornStyles.com_list_sale_price_wrap}>
                                            <span className={popcornStyles.store_deatail_source_price}>{ item.price }</span>
                                        </span>
                                    </span>
                                </Link>
                            <a href="#" className={popcornStyles.btn_category_product_cart} onClick={ goToCart } style={{background:' url(/img/cart.svg) no-repeat center', backgroundSize:'20pt', backgroundColor:'gray', borderRadius:'50%', opacity:0.6}}>1</a>
                            <a href="#" className={popcornStyles.btn_category_product_gift}>2</a>
                            <a href="#" className={popcornStyles.btn_category_product_buy}>3</a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    );
};

export default StorePopcone;
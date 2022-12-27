import React from 'react';
import StoreHeader from './StoreHeader';
import viewStyles from '../../css/StoreView.module.css'

const View = () => {
    return (
        <>
            <StoreHeader/>

            <div className={viewStyles.category_product_detail_wrap}>
                <strong className={viewStyles.category_product_detail_title}>더블치즈팝콘(M)
                    <span>기프트콘</span>
                </strong>
                <div className={viewStyles.category_product_detail_contents}>
                    <div className={viewStyles.category_product_detail_contents_img_wrap}>
                        <ul className={viewStyles.bxslider}>
                            <li>
                                <img src="http://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16680685705700.jpg" alt="더블치즈팝콘(M)"/>
                            </li>
                        </ul>
                    </div>
                    <div className={viewStyles.category_product_detail_contents_wrap}>
                        <p className={viewStyles.category_product_detail_sale_price_wrap}>
                            <span className={viewStyles.store_deatail_sale_price} id="spnSalePrice">6,000</span>
                        </p>
                        <dl className={viewStyles.category_product_detail_add_info}>
                            <dt>상품구성</dt>
                            <dd>더블치즈팝콘(M)</dd>
                            <dt>유효기간</dt>
                            <dd>구매일로부터 6개월 이내</dd>
                            <dt>원산지</dt>
                            <dd>팝콘(옥수수: 미국산)</dd>
                            <dt>상품교환</dt>
                            <dd>
                                <a href="#none" className={viewStyles.btn_available_viewcgv} onclick="javascript:fnGetTheater(100332);">사용가능 CGV 보기</a>
                            </dd>
                        </dl>
                        <div className={viewStyles.category_product_detail_price_wrap}>
                            <div className={viewStyles.com_form_number}>
                                <a href="#none" onclick="javascript:$.fn.comFormNumberCnt('com_form_count0', 'com_total_price' ,'com_total_price0', -1, 1, 10);" className={viewStyles.com_btn_minus} style={{background:' url(/img/dash-lg.svg) no-repeat center', backgroundSize:'12pt'}}>-</a>
                                <span className={viewStyles.com_form_count}>1</span>
                                <a href="#none" onclick="javascript:$.fn.comFormNumberCnt('com_form_count0','com_total_price', 'com_total_price0', 1, 1, 10);" className={viewStyles.com_btn_plus} style={{background:' url(/img/plus.svg) no-repeat center', backgroundSize:'15pt'}}>+</a>
                                <span className={viewStyles.com_total_price} id="spantotalprice">6,000</span>
                            </div>
                            <div className={viewStyles.category_product_detail_total_price}>
                                <p className={viewStyles.com_form_total_price}>총 구매금액
                                    <span className={viewStyles.com_product_total_price}>6,000</span>
                                </p>
                            </div>
                        </div>
                        <div className={viewStyles.category_product_detail_btn_wrap}>
                            <a href="#" onclick="javascript:app.goLogin();return false;" className={viewStyles.btn_cart} style={{background:'#fb4357  url(/img/cart.svg) no-repeat center', backgroundSize:'30pt'}}>장바구니</a>
                            <a href="#" onclick="javascript:app.goLogin(); return false;">선물하기</a>
                            <a href="#" onclick="javascript:app.goLogin();return false;">구매하기</a>
                        </div>
                    </div>
                </div>
                <p className={viewStyles.category_product_detail_txtbox}>치즈매니아들이라면 놓칠 수 없는 바로 그 팝콘!</p>
                <dl className={viewStyles.category_product_detail_dlist}>
                    <dt>이용안내</dt>
                    <dd>
                        <p>• 극장 사정에 따라 일부 메뉴 제공이 어려울 수 있습니다.<br/>
                           • 해당 기프트콘은 오프라인 매점에서 실제 상품으로 교환할 수 있는 온라인 상품권입니다.<br/>
                           • 구매 후 전송받으신 기프트콘은,<br/>
                             사용가능한 CGV의 매점에서 지정된 해당 상품으로만 교환이 가능합니다.<br/>
                             (사용가능 CGV는 '상품교환'에서 확인 가능하며, 추가 상품을 포함하여 구매 시 지점에 따라 사용이 불가 할 수 있으니 발송되는 기프트콘의 정보를 확인해주시기 바랍니다.)<br/>
                             해당 상품 내에서 팝콘 맛 혹은 사이즈 변경 시 추가 비용 발생합니다.<br/>
                             교환 완료한 상품의 환불 및 반품은 불가합니다.<br/>
                           • 유효기간 연장을 신청하는 경우,<br/>
                             유효기간은 발급일로부터 5년 이내 횟수 제한 없이 기간 연장 가능하며, 1회 연장 시 3개월(92일) 단위로 유효기간이 연장됩니다.&nbsp;&nbsp;<br/>
                             단, 이벤트 경품 및 프로모션 상품의 경우 유효기간 연장이 불가할 수 있습니다.<br/>
                             유효기간 만료 이후에는 결제금액의 90% 환불이 가능합니다.&nbsp;&nbsp;<br/>
                           • 매점상품 기프트콘은 극장 매점에서 상품 교환 후 수령한 영수증으로 CJ ONE 적립이 가능합니다.<br/>
                             (모바일App,웹 &gt; MY &gt; 매점적립 or 홈페이지&gt; My CGV &gt; 매점이용 포인트 적립)<br/>
                           • 상기 이미지는 실제와 다를 수 있습니다.
                        </p>
                    </dd>
                    <dt>취소/환불</dt>
                    <dd>
                        <p>• 구매자는 최초 유효기간 이내에 결제금액의 100%에 대해 결제취소/환불이 가능하며, 최초 유효기간 만료 후에는 수신자가 결제금액의 90%에 대해 환불 요청 가능합니다.<br/>
                           • 단, 이미 사용된 기프트콘에 대해서는 결제취소/환불 신청이 불가합니다.&nbsp;<br/>
                           • 결제취소/환불 방법<br/>
                             결제취소는 모바일App,웹 &gt; MY &gt; 결제내역조회 &gt; 스토어 or 홈페이지 &gt; My CGV &gt; 스토어 &gt; 결제내역의 해당 주문 상세내역에서 가능합니다.<br/>
                             (기프트콘은 구매일로부터 60일 이내 결제취소 가능하며, 카드 결제취소 가능 기간이 경과하였을 경우, 고객센터로 연락주시면 됩니다)<br/>
                             환불은 모바일App,웹 &gt; MY &gt; 기프트콘 or 홈페이지 &gt; My CGV &gt; 스토어 &gt; 내 기프트콘에서 환불을 원하는 기프트콘 등록 후 진행 가능하며, 비회원의 경우 고객센터로 신청 가능합니다.<br/>
                             단 이 때, 본인 확인 및 계좌 확인 절차가 진행됩니다.<br/>
                           • 수신자는 선물받은 기프트콘의 수신거절을 요청할 수 있으며, 이 경우 구매자에게 취소 및 환불에 대한 안내가 이루어집니다.&nbsp;<br/>
                           • 결제취소 가능 기간이 경과한 후 수신자가 수신거절을 요청할 경우 구매자에게 기프트콘이 재발송됩니다.<br/>
                           • CGV고객센터 1544-1122
                        </p>
                    </dd>
                    <dt>미성년자 권리보호 안내</dt>
                    <dd>미성년자인 고객께서 계약을 체결하시는 경우 법정대리인이 그 계약에 동의하지 아니하면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있습니다.</dd>
                    <dt>분쟁 해결</dt>
                    <dd>1) 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해의 보상 등에 관한 처리를 위하여<br/> 
                        &nbsp;&nbsp;CGV고객센터(1544-1122)를 설치 운영하고 있습니다.<br/>
                        2) 회사는 고객센터를 통하여 이용자로부터 제출되는 불만사항 및 의견을 처리합니다. <br/> 
                        &nbsp;&nbsp;다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.<br/>
                        3) 전자상거래 분쟁(청약철회등)과 관련한 이용자의 피해구제는 이용약관 및 전자상거래법 등 관련 법령에 따릅니다.
                    </dd>
                </dl>
            </div>
        </>
    );
};

export default View;
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import List from './component/store/List';
import StoreIndex from './component/store/Index';
import WriteForm from './component/store/WriteForm';
import View from './component/store/View';
import WritreForm2 from './component/store/WritreForm2';
import StoreCart from './component/store/StoreCart';
import StorePayment from './component/store/StorePayment';
import LoginForm from './component/store/LoginForm';
import PayComplete from './component/store/PayComplete';
import StorePay from './component/store/StorePay';
import More from './component/main/More';

const App = () => {
  return (
    <BrowserRouter>
      <>
       {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/store/writeForm' element={<WriteForm/>}></Route>
          <Route path='/store/*' element={<List/>}></Route>
          <Route path='/store/view/:store_seq' element={<View/>}></Route>
          <Route path='/store/loginForm' element={<LoginForm/>}></Route>
          <Route path='/store/writeForm2' element={<WritreForm2/>}></Route>
          <Route path='/store/cart' element={<StoreCart/>}></Route>
          <Route path='/store/pay/:store_seq' element={<StorePayment/>}></Route>
          <Route path='/store/paycomplete/:orderNumber' element={<PayComplete/>}></Route>
          <Route path='/store/pay' element={<StorePay/>}></Route>
          <Route path='/store/more' element={<More/>}></Route>

        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
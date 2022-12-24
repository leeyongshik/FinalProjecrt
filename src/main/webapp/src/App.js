import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import List from './component/store/List';
import WriteForm from './component/store/WriteForm';

const App = () => {
  return (
    <BrowserRouter>
      <>
       {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/store/writeForm' element={<WriteForm/>}></Route>
          <Route path='/store/list' element={<List/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
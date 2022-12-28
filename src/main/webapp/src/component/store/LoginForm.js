import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({
    userName: '',
    password: ''
  })
  const { userName, password} = form

  const onInput = (e) => {
    const { name, value } = e.target
    console.log(e.target.value)

    setForm({
      ...form,
      [name]: value
    })
  }

  const onLogin = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8080/store/login', null, { params: form })
         .then(sessionStorage.setItem('userName', userName))
         .catch(error => console.log(error))
  }

  const navigate = useNavigate()

  const onLogout = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8080/store/login', null, { params: form })
         .then(() => {
          alert('로그아웃 되었어요!');
          sessionStorage.removeItem('userName', userName);
          navigate('/store/');
         })
         .catch(error => console.log(error))

  }

  return (
    <div>
      <h3>
        <Link to='/'>
          {/* <img src="../img/logo.jpg" width="50" height="50" style={{ cursor: 'pointer' }} /> */}
          <img src='../img/logo.jpg' width="100" height="100" style={{ cursor: 'pointer' }} />
        </Link>
        스토어 로그인
      </h3>
      <hr/>

      <form>
        아이디 : <input type="text" name="userName" value={ userName } onChange={ onInput } width= '120px' />
        <br/>
        비밀번호 : <input type="password" name="password" value={ password } onChange={ onInput } width= '120px' />
        <br/><br/>
        <button onClick={ onLogin }>스토어로그인</button>
        <button onClick={ onLogout }>로그아웃</button>
      </form>
    </div>
  );
};

export default LoginForm;
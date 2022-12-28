import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const onLoginSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8080/store/login', null, { params: form })
         .then(sessionStorage.setItem('userName', userName))
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
        <input type="text" name="userName" value={ userName } onChange={ onInput } width= '120px' />
        <br/>
        <input type="password" name="password" value={ password } onChange={ onInput } width= '120px' />
        <br/>
        <button onClick={ onLoginSubmit }>스토어로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainImg from '../../img/logo.jpg';
import styles from '../../css/writeForm.module.css';
import axios from 'axios';

 const WriteForm = () => {
  const [form, setForm] = useState({
    seq: '',
    subject: '',
    subSubject: '',
    simpleContent: '',
    content: '',
    price: '',
    country: '',
    img: ''
  })
  const { subject, content, price, country } = form //비구조할당

  const [subjectDiv, setSubjectDiv] = useState('')
  const [contentDiv, setContentDiv] = useState('')
  const [priceDiv, setPriceDiv] = useState('')
  const [countryDiv, setCountryDiv] = useState('')

  const onInput = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const navigate = useNavigate()

  const onWriteSubmit = (e) => {
    e.preventDefault()

    const sw = 1
    if(!subject) {
      setSubjectDiv('제목을 작성하세요!')
      sw = 0
    }
    if(!content) {
      setContentDiv('내용을 작성하세요!')
      sw = 0
    }
    if(!price) {
      setPriceDiv('가격을 입력하세요!')
      sw = 0
    }
    if(!country) {
      setCountryDiv('원산지를 입력하세요!')
      sw = 0
    }

    if(sw === 1) {
      //첫번째
      /*
      axios.post('http://localhost:8080/store/write', null, {
        params: {
          seq: seq,
          subject: subject,
          subSubject: subSubject,
          simpleContent: simpleContent,
          content: content,
          price: price,
          country: country,
          img: img
        }
      }).then(() => {
          alert('스토어에 품목이 등록되었어요!');
          navigate('/store/list');
      }).catch(error => console.log(error))
    */

        //두번째
        
        axios.post('http://localhost:8080/store/write', null, { params: form })
             .then(() => {
                alert('스토어에 품목이 등록되었어요!');
                navigate('/store/list');
            })
             .catch(error => console.log(error))
      
    }
  }

  const isExistSubject = () => {
    axios.get(`http://localhost:8080/user/isExistSubject?subject=${subject}`)
         .then(res => {
            setSubjectDiv(res.data === 'non_exist' ? '등록 가능' : '등록 불가능')
         })
         .catch(error => console.log(error))
  }

  const onReset = (e) => {
    e.preventDefault()

    setForm({
      seq: '',
      subject: '',
      subSubject: '',
      simpleContent: '',
      content: '',
      price: '',
      country: '',
      img: ''
    })
  }

  return (
    <div>
      <h3>
        <Link to='/'>
          {/* <img src="../img/logo.jpg" width="50" height="50" style={{ cursor: 'pointer' }} /> */}
          <img src={ mainImg } width="100" height="100" style={{ cursor: 'pointer' }} />
        </Link>
        스토어 제품등록
      </h3>
      <hr/>

      <form className={ styles.writeForm }>
        <input type="text" name="seq" value={ seq } width= '100px' />
        <br/>

        <table border="1">
          <thead>
            <tr>
              <td width="80px" align="center">제목</td>
              <td>
                <input type="text" name="subject" value={ subject } onChange={ onInput } onBlur={ isExistSubject } width= '120px' />
                <div id="subjectDiv">{ subjectDiv }</div>
              </td>
            </tr>

            <tr>
              <td width="50px" align="center">소제목</td>
              <td>
                <input type="text" name="subSubject" value={ subSubject } onChange={ onInput } width= '100px' />
              </td>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td width="50px" align="center">간략내용</td>
              <td>
                <input type="text" name="simpleContent" value={ simpleContent } onChange={ onInput } width= '150px' />
              </td>
            </tr>

            <tr>
              <td width="50px" align="center">내용</td>
              <td>
                <textarea name="content" value={ content } placeholder="이곳에&#13;&#10;입력하세요" onChange={ onInput } width= '200px' />
                <div id="contentDiv">{ contentDiv }</div>
              </td>
            </tr>

            <tr>
              <td width="50px" align="center">가격</td>
              <td>
                <input type="text" name="price" value={ price } onChange={ onInput } width= '120px' />
                <div id="priceDiv">{ priceDiv }</div>
              </td>
            </tr>

            <tr>
              <td width="50px" align="center">원산지</td>
              <td>
                <input type="text" name="country" value={ country } onChange={ onInput } width= '150px' />
                <div id="countryDiv">{ countryDiv }</div>
              </td>
            </tr>

            <tr>
              <td width="50px" align="center">첨부이미지</td>
              <td>
                <input type="text" name="img" value={ img } onChange={ onInput } width= '120px' />
              </td>
            </tr>
            
            <tr>
              <td colSpan='2' align='center'>
                <button onClick={ onWriteSubmit }>스토어등록</button>
                <button onClick={ onReset }>취소</button>
              </td>
            </tr>
          </tbody>
        </table>		
      </form>
    </div>
  );
};

export default WriteForm;
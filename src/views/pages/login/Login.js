import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import {loginAction, setToken} from '../../../actions/userAuth.action'
import { users } from 'src/reducers/users.reducer'
import { toast, ToastContainer } from 'react-toastify'
import {get} from 'lodash'
import LoaderComp from 'src/components/Loader'

const Login = () => {
let dispatch = useDispatch()
let history = useHistory();
const {loginRes, loading} = useSelector((states) => ({
  loginRes: states.users.loginRes,
  loading: states.users.loading,
}));

useEffect(() => {
 
    if (loginRes && get(loginRes,'data.user',{})) {
        localStorage.setItem('user', JSON.stringify(get(loginRes,'data.user',{})));
        localStorage.setItem('token', get(loginRes,'data.token','') );
        dispatch(setToken(get(loginRes,'data.token',null)))
    }
    
    
},[loginRes])

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

 const handleSubmit = (e) => {
   
  e.preventDefault();
  if (email && password) {
    // alert(email + " ::: " + password);
    dispatch(loginAction({
      email,
      password
  }))
  }else{
    toast("Please fill email & password first");
  }
    
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
         {/* <LoaderComp loading={loading} />  */}
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm name="form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted" >Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" name="password"  onChange={(e)=> setPassword(e.target.value)}value={password} autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type={'submit'}>Login</CButton>
                      </CCol>

                      
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white login-bg py-5 d-md-down-none" >
                <CCardBody className="text-center">
                <img src="logo.png" alt="time rider logo" height="150"/>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

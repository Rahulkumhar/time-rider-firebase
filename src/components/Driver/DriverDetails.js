import React, { useEffect } from 'react'
import { CCard, CCardBody, CCardHeader,CCol, CImg, CRow,CCallout } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getDriverDetailAction} from '../../actions/driverDetails.action'

import usersData from './UsersData'

const DriverDetails = ({match}) => {
  const {driverDetails,fullname, loading} = useSelector((states) => ({
    driverDetails: states.driverDetailsReducer,
    fullname: states.driverDetailsReducer.fullname,
    loading: states.driverDetailsReducer.loading,
  }));
  
  const history = useHistory()
  let dispatch = useDispatch()
  let Id = match.params.id;

  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]


    useEffect(()=>{
      dispatch(getDriverDetailAction(Id))
    },[])

  return (
    <CRow>
    <CCol lg={11}>
      <CCard>
        <CCardBody> 
          <div className="d-flex" >
                        <h6>ID: 
                        <span><strong> {driverDetails.driverDetails._id}</strong></span></h6>
            </div>

            <CRow>
      <CCol lg="2" className=" py-3">
      <CImg src={driverDetails.driverDetails.profile_img_url === "" ? "avatars/user-name.png" : driverDetails.driverDetails.profile_img_url } className="card-img1" alt="" />
      </CCol>
     <CCol lg="10" >
       <CRow>
       <CCol lg="6" className="py-1">
      <CCallout color="info" className={'bg-secondary  py-2'}>
           <small className="text-white h5">Driver Name : </small>
           <strong className="h5 text-white"> {fullname}</strong>
         </CCallout>
       {/* Email : {driverDetails.driverDetails.email} */}
      </CCol>
     <CCol lg="6" className="py-1">
      <CCallout color="info" className={'bg-secondary  py-2'}>
           <small className="text-white h5">Email : </small>
           <strong className="h5 text-white"> {driverDetails.driverDetails.email}</strong>
         </CCallout>
       {/* Email : {driverDetails.driverDetails.email} */}
      </CCol>
      <CCol lg="6" className=" py-1">
      <CCallout color="info" className={'bg-secondary  py-2'}>
           <small className="text-white h5">Mobile :</small>
           <strong className="h5 text-white"> {driverDetails.driverDetails.mobile}</strong>
         </CCallout>
       {/* Mobile : {driverDetails.driverDetails.mobile} */}
      </CCol>
      <CCol lg="6" className=" py-1">
      <CCallout color="info" className={driverDetails.driverDetails.is_verified === 0 ? "bg-warning  py-2" :"bg-success py-2" }>
           <small className="text-white h5">Verification :</small>
           <strong className="h5 text-white"> {driverDetails.driverDetails.is_verified === 0 ? "Not Verified" : "Verified"}</strong>
         </CCallout>
       {/* Mobile : {driverDetails.driverDetails.mobile} */}
      </CCol>
      <CCol lg="6" className=" py-1">
      <CCallout color="info" className={'bg-secondary  py-2'}>
           <small className="text-white h5">Refer Code :</small>
           <strong className="h5 text-white"> {driverDetails.driverDetails.refer_code }</strong>
         </CCallout>
       {/* Mobile : {driverDetails.driverDetails.mobile} */}
      </CCol>
      </CRow>
     </CCol>
    </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default DriverDetails;

import React, { useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CImg, CRow,CCallout,CWidgetBrand } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getRiderDetailsAction} from '../../actions/riderDetails.action'
import {get} from 'lodash'

import usersData from './UsersData'

const RiderDetails = ({match}) => {
  const {riderDetail,fullname, loading} = useSelector((states) => ({
    riderDetail: states.riderDetailsReducer,
    fullname: states.riderDetailsReducer.fullname,
    loading: states.riderDetailsReducer.loading,
  }));
  console.log(riderDetail,fullname, loading,'response');
  const history = useHistory()
  let dispatch = useDispatch()
 let Id = match.params.id;
  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    useEffect(()=>{
      dispatch(getRiderDetailsAction(Id))
    },[])


  return (
    <>
    <CRow>
      <CCol lg={11}>
        <CCard>
          <CCardBody> 
            <div className="d-flex" >
                          <h6>ID: 
                          <span><strong> {riderDetail.riderDetail._id}</strong></span></h6>
              </div>

              <CRow>
        <CCol lg="2" className=" py-3">
        <CImg src={riderDetail.riderDetail.profile_img_url === "" ? "avatars/user-name.png" : riderDetail.riderDetail.profile_img_url } className="card-img1" alt="" />
        </CCol>
       <CCol lg="10" >
         <CRow>
         <CCol lg="6" className="py-1">
        <CCallout color="info" className={'bg-secondary  py-2'}>
             <small className="text-white h5">Rider Name : </small>
             <strong className="h5 text-white"> {fullname}</strong>
           </CCallout>
         {/* Email : {riderDetail.riderDetail.email} */}
        </CCol>
       <CCol lg="6" className="py-1">
        <CCallout color="info" className={'bg-secondary  py-2'}>
             <small className="text-white h5">Email : </small>
             <strong className="h5 text-white"> {riderDetail.riderDetail.email}</strong>
           </CCallout>
         {/* Email : {riderDetail.riderDetail.email} */}
        </CCol>
        <CCol lg="6" className=" py-1">
        <CCallout color="info" className={'bg-secondary  py-2'}>
             <small className="text-white h5">Mobile :</small>
             <strong className="h5 text-white"> {riderDetail.riderDetail.mobile}</strong>
           </CCallout>
         {/* Mobile : {riderDetail.riderDetail.mobile} */}
        </CCol>
        <CCol lg="6" className=" py-1">
        <CCallout color="info" className={riderDetail.riderDetail.is_verified === 0 ? "bg-warning  py-2" :"bg-success py-2" }>
             <small className="text-white h5">Verification :</small>
             <strong className="h5 text-white"> {riderDetail.riderDetail.is_verified === 0 ? "Not Verified" : "Verified"}</strong>
           </CCallout>
         {/* Mobile : {riderDetail.riderDetail.mobile} */}
        </CCol>
        <CCol lg="6" className=" py-1">
        <CCallout color="info" className={'bg-secondary  py-2'}>
             <small className="text-white h5">Refer Code :</small>
             <strong className="h5 text-white"> {riderDetail.riderDetail.refer_code }</strong>
           </CCallout>
         {/* Mobile : {riderDetail.riderDetail.mobile} */}
        </CCol>
        </CRow>
       </CCol>
      </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
     {/* <CRow>
     <CCol lg={11}>
       <CCard>
         <CCardBody> 
           <div className="d-flex" >
                         <h6>Rider Wallet  </h6>
             </div>

             <CRow >
      <CCol lg="10" >
        
      </CCol>
     </CRow>
         </CCardBody>
       </CCard>
     </CCol>
   </CRow> */}
   </>
  )
}

export default RiderDetails;

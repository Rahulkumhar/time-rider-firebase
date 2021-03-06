import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CImg,
  CSwitch
} from '@coreui/react'

import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash';
import { getDeliverDocActiveAction } from 'src/actions/driver.action';
import { base_url } from 'src/util/constant';


const VerificationDriverDocxModal = (props) => {
  const { riderDocVerifyMessage, riderDocVerifyData, data, loading } = useSelector((states) => ({
    data: states.driverListReducer.driverDocData,
    // riderDocVerifyMessage:states.riderActiveReducer.riderDocVerifyMessage,
    // riderDocVerifyData:states.riderActiveReducer.riderDocVerifyData,
    // loading: states.riderReducer.loading,
  }));
  const { ID } = props
  console.log(ID, 'data');
  const history = useHistory()
  let dispatch = useDispatch()


  const { setSeeDocx, seeDocx } = props;
  const [isActive, setIsActive] = useState(false)
  const [zoomDims, setZoomDims] = useState({ height: 800, width: 800 })



  // useEffect(() => {
  //   const handleResize=()=> {
  //     setZoomDims({ height: 800, width: 800})
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return _ => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // })

  useEffect(() => {
    // dispatch(getDriverDocAction(ID))
  }, [])
  console.log("seeDocx>>>", seeDocx);
  const isActiveChange = (data) => {
    let obj = {
      id: data._id,
      status: data.status === 0 ? 1 : 0
    }
    dispatch(getDeliverDocActiveAction(obj))
    // setIsActive(data.status)

  }
  return (
    <CModal
      show={seeDocx}
      onClose={setSeeDocx}
      size="xl"
    >
      <CModalHeader closeButton>
        <CModalTitle>Documents Verification</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="container">
          {data.map((ele, index) => (
            <>
            <CRow>
             <CCol md="2">
               <h6 style={{ textTransform: "capitalize" }}>{ele.type.replace(/_/g, ' ')}</h6>
               </CCol>
               <CCol md="2">
                 <h6>{ele.status === 0 ? "Reject" : "Verify"}</h6>
               </CCol>
               <CCol md="2">
                 <CSwitch className={'mx-1'} onClick={() => isActiveChange(ele)} variant={'3d'}
                   color={ele.status === 1 ? 'success' : 'danger'} checked={ele.status === 1 ? true : false}
                   labelOn={'\u2713'} labelOff={'\u2715'} />

               </CCol>
              
             </CRow>
              <CRow>
                {/* <CCard> */}

                <CCol md="4" className="mt-2">
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: '',
                      isFluidWidth: true,
                      src: `${base_url}${ele.front_img_url}`,
                      sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                    },
                    largeImage: {
                      src: `${base_url}${ele.front_img_url}`,
                      width: zoomDims.width,
                      height: zoomDims.height
                    },
                    hintComponent: () => (<div>Zoom</div>),
                    isHintEnabled: true,
                    hintTextMouse: true,
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                    hintTextTouch: true,
                    shouldHideHintAfterFirstActivation: false,
                    enlargedImagePosition: 'over',
                    isActivatedOnTouch: true,
                  }} />
                </CCol>
                <CCol md="4" className="mt-2">
                  <ReactImageMagnify {...{
                    smallImage: {
                      alt: '',
                      isFluidWidth: true,
                      src: `${base_url}${ele.back_img_url}`,
                      sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                    },
                    largeImage: {
                      src: `${base_url}${ele.back_img_url}`,
                      width: zoomDims.width,
                      height: zoomDims.height
                    },
                    hintComponent: () => (<div>Zoom</div>),
                    isHintEnabled: true,
                    hintTextMouse: true,
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                    hintTextTouch: true,
                    shouldHideHintAfterFirstActivation: false,
                    enlargedImagePosition: 'over',
                    isActivatedOnTouch: true,
                  }} />
                </CCol>


                {/* <CCol md="4">PAN CARD </CCol> */}
                {/* </CCard> */}
              </CRow>
            </>
          ))}
        </div>
      </CModalBody>
      <CModalFooter>
        {/* <CButton color="primary" onClick={() => setSeeDocx(!seeDocx)}>Do Something</CButton>{' '} */}
        <CButton color="secondary" onClick={() => setSeeDocx(!seeDocx)}>Close</CButton>
      </CModalFooter>
    </CModal>

  );
}

export default VerificationDriverDocxModal;
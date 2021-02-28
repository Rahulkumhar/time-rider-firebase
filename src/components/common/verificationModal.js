import React, { useState } from 'react';
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
import CIcon from '@coreui/icons-react';


const VerificationModal = (props) => {
    const {setSeeDocx,seeDocx} = props;
    const [isActive,setIsActive] = useState(false)
    const [ zoomDims, setZoomDims ] = useState({ height: 700, width: 800})

    return ( 
        <CModal 
        show={seeDocx} 
        onClose={()=>setSeeDocx(!seeDocx)}
        size="xl"
      >
        <CModalHeader closeButton>
          <CModalTitle>Documents Verification</CModalTitle>
        </CModalHeader>
        <CModalBody>
      <div className="container">
    <CRow>
        <CCol md="4">
          <h6 className="mt-2">Aadhar Card</h6>
        <ReactImageMagnify {...{
                            smallImage: {
                                alt: '',
                                isFluidWidth: true,
                                src: "img/addhar.png",
                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                             },
                            largeImage: {
                                src: "img/addhar.png",
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
        <CCol md="2">
        <CSwitch className={'mx-1'} onClick={()=> setIsActive(!isActive)} variant={'3d'} 
        color={isActive === true ? 'success' : 'danger'} defaultChecked 
                    labelOn={'\u2713'} labelOff={'\u2715'}/>

        </CCol>
        <CCol md="2">
       <h6>{isActive === true ? "Reject" :  "Verify"}</h6>
        </CCol>
        <CCol md="4">Aadhar Card </CCol>
      
    </CRow>
    <CRow>
      {/* <CCard> */}
        <CCol md="4" className="mt-2">
          <h6>PAN CARD</h6>
        <ReactImageMagnify {...{
                            smallImage: {
                                alt: '',
                                isFluidWidth: true,
                                src: "img/pan_dummy.png",
                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                            },
                            largeImage: {
                                src: "img/pan_dummy.png",
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
        <CCol md="2">
        <CSwitch className={'mx-1'} onClick={()=> setIsActive(!isActive)} variant={'3d'} 
        color={isActive === true ? 'success' : 'danger'} defaultChecked 
                    labelOn={'\u2713'} labelOff={'\u2715'}/>

        </CCol>
        <CCol md="2">
       <h6>{isActive === true ? "Reject" :  "Verify"}</h6>
        </CCol>
        <CCol md="4">PAN CARD </CCol>
      {/* </CCard> */}
    </CRow>
    </div>
        </CModalBody>
        <CModalFooter>
           {/* <CButton color="primary" onClick={() => setSeeDocx(!seeDocx)}>Do Something</CButton>{' '} */}
          <CButton color="secondary" onClick={() => setSeeDocx(!seeDocx)}>Close</CButton> 
        </CModalFooter>
      </CModal>

     );
}
 
export default VerificationModal;
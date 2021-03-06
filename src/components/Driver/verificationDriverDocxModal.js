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
import CIcon from '@coreui/icons-react';
import { useDispatch, useSelector } from 'react-redux'
import LoaderComp from 'src/components/Loader'
import {getRiderDocVerifyAction,getRiderDocAction} from '../../actions/rider.action';
import { get } from 'lodash';


const VerificationDriverDocxModal = (props) => {
  const {riderDocVerifyMessage,riderDocVerifyData, data,loading} = useSelector((states) => ({
    data: states.driverListReducer.driverData[0],
    // riderDocVerifyMessage:states.riderActiveReducer.riderDocVerifyMessage,
    // riderDocVerifyData:states.riderActiveReducer.riderDocVerifyData,
    // loading: states.riderReducer.loading,
  }));
  const {ID} = props
  console.log(data,'data');
  const history = useHistory()
  let dispatch = useDispatch()


    const {setSeeDocx,seeDocx} = props;
    const [isActive,setIsActive] = useState(false)
    const [ zoomDims, setZoomDims ] = useState({ height: 800, width: 800})

 

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
    dispatch(getRiderDocAction(ID))
   },[])

      const isActiveChange =(data)=>{
        let obj = {
          id:ID,
          status:get(data,'driver.is_verified',0) === 0 ? 1 : 0
        }
        dispatch(getRiderDocVerifyAction(obj))
        // setIsActive(data.status)
       
      }
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
      {/* <CCard> */}
        <CCol md="4" className="mt-2">
          <h6>PAN CARD</h6>
        {/* <ReactImageMagnify {...{
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
                        }} /> */}
        </CCol>
        {/* <CCol md="2">
        <CSwitch className={'mx-1'} onClick={()=> isActiveChange(data)} variant={'3d'}
         color={get(data,'driver.is_verified',0) === 1 ? 'success' : 'danger'} checked={get(data,'driver.is_verified',0) === 1 ? true :false} 
                    labelOn={'\u2713'} labelOff={'\u2715'}/>

        </CCol> */}
        <CCol md="2">
       {/* <h6>{isActive === true ? "Reject" :  "Verify"}</h6> */}
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
 
export default VerificationDriverDocxModal;
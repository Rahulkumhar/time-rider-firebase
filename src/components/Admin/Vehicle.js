import React, { useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CImg, CRow,CCallout,CWidgetBrand, CHeader,CLabel, CSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Vehicle = () => {
    return ( 
       <>
       <CRow>
    <CCol xl={12}>
      <CCard>
          <CHeader className="px-3 py-3 h6">
              Vehicle Information
          </CHeader>
        <CCardBody> 

            <CRow>
     <CCol lg="10" >
       <CRow>
       <CCol lg="6" className="py-1">
       <CLabel htmlFor="select">Vehicle List</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                  <CCol lg="6" className="py-1">
       <CLabel htmlFor="select">Vehicle  List</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
      </CRow>
     </CCol>
    </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
 
       </>
   
     );
}
 
export default Vehicle;
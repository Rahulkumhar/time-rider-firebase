import React, { useState, useEffect,lazy } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CSwitch,
  CPagination
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import LoaderComp from 'src/components/Loader'
import {getRiderListAction} from '../../actions/rider.action';
import moment from 'moment'
import MainChartExample from '../../views/charts/MainChartExample'

const WidgetsDropdown = lazy(() => import('../../views/widgets/WidgetsDropdown'))
const WidgetsBrand = lazy(() => import('../../views/widgets/WidgetsBrand.js'))

const RiderDashboard = () => {
  const {riderData,totalPage, loading} = useSelector((states) => ({
    riderData: states.riderReducer.riderData,
    totalPage: states.riderReducer.totalPage,
    id: states.riderReducer.riderData.id,
    loading: states.riderReducer.loading,
  }));
  const history = useHistory()
  let dispatch = useDispatch()

 
  const [page, setPage] = useState(1)
  const [open,setOpen] = useState(false)
  const [info, setInfo] = useState(false)
  const [isActive,setIsActive] = useState(false)


  const pageChange = newPage => {
    setPage(newPage)
    dispatch(getRiderListAction(newPage))
  }

  useEffect(() => {
    dispatch(getRiderListAction(page))
    
  },[])


  return (
    <>
      <WidgetsDropdown />
      <CRow>
      <CCol md="9" sm="9">
      <CCard style={{maxHeight:'400px'}}>
        
        <CCardBody >
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Month Earning</h4>
              <div className="small text-muted">Feb 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
           
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
          
        </CCardBody>
       
       
      </CCard>
            </CCol>
            <CCol md sm="3">
<CCard style={{height: '400px',}}>      
  <CCardBody >
        <CCol md sm="3" className="mb-sm-2 mb-0">
              <div className="text-muted">Total Earning</div>
              <strong>29.703  (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="3" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Admin Earning</div>
              <strong>24.093  (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="3" className="mb-sm-2 mb-0">
              <div className="text-muted">Rider Earning</div>
              <strong>22.123  (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
           
            
        </CCardBody>
        </CCard>
            </CCol>
            </CRow>


      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Rider List
            </CCardHeader>
            <CCardBody>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    {/* <th className="text-center">Country</th> */}
                    <th>Active Rider</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {riderData && riderData.map((data,index)=>(
                  <tr key={index}>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/user-name.png'} className="c-avatar-img" alt="" />
                        <span className={isActive === true ? "c-avatar-status bg-success" : "c-avatar-status bg-danger" }></span>
                      </div>
                    </td>
                    <td>
                      <div>{data.fullname}</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: {data.created_at}
                        {/* {moment(data.created*1000).format('DD/MM/YYYY')} */}
                      </div>
                    </td>
                    <td>
                    <CSwitch className={'mx-1'} onClick={()=> setIsActive(!isActive)} variant={'3d'} color={isActive === true ? 'success' : 'danger'} defaultChecked 
                    labelOn={'\u2713'} labelOff={'\u2715'}/>

                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-mastercard" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>{data.date_last_login}</strong>
                    </td>
                  </tr>
                  ))}
                  
                </tbody>
                <tfoot>
                      <CPagination
                  activePage={page}
                  onActivePageChange={pageChange}
                  pages={totalPage}
                  doubleArrows={false} 
                  align="center"
                />
                </tfoot>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default RiderDashboard

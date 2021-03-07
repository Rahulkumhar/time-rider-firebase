import React, { useState, useEffect, lazy, useRef, createRef } from 'react'
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
import { getDriverActiveAction, getDriverDocAction, getDriverListAction } from '../../actions/driver.action';
import moment from 'moment'
import MainChartExample from '../../views/charts/MainChartExample'
import Pdf from "react-to-pdf";
import { getRiderActiveAction } from 'src/actions/rider.action'
import VerificationDriverDocxModal from './verificationDriverDocxModal';

const WidgetsDropdown = lazy(() => import('../../views/widgets/WidgetsDropdown'))
const WidgetsBrand = lazy(() => import('../../views/widgets/WidgetsBrand.js'))

const DriverVerification = () => {
  const { driverData, totalPage, loading } = useSelector((states) => ({
    driverData: states.driverListReducer.driverData,
    totalPage: states.driverListReducer.totalPage,
    loading: states.driverListReducer.loading,
  }));
  const history = useHistory()
  let dispatch = useDispatch()

  const ref = createRef();

  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [seeDocx, setSeeDocx] = useState(false);
  const [showId, setShowID] = useState(1);

  const handleVerification = (data) => {
    setSeeDocx(true);
    setShowID(data._id)
    dispatch(getDriverDocAction(data._id))
  }

  const onCloseModal = () => {
    setSeeDocx(false);
  }
  const pageChange = newPage => {
    setPage(newPage)
    dispatch(getDriverListAction(newPage))
  }

  useEffect(() => {
    dispatch(getDriverListAction(page))

  }, [])

  const isActiveChange = (data) => {

    console.log(data,'data');
    let obj = {
      id: data._id,
      status: data.is_active === 0 ? 1 : 0
    }
    dispatch(getDriverActiveAction(obj))

    // dispatch(getDriverListAction(1))
    // setIsActive(data.status)

  }
  if (seeDocx === true) {
    return (<VerificationDriverDocxModal ID={showId} seeDocx={true} setSeeDocx={onCloseModal} />)
  }

  return (
    <>
   
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Driver List
            </CCardHeader>
            <CCardBody>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    {/* <th className="text-center">Country</th> */}
                    <th>Active Driver</th>
                    {/* <th className="text-center">Payment Method</th> */}
                    <th className="text-center">Verification</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {driverData && driverData.map((data, index) => (
                    <>
                      <tr key={index}>
                        <td className="text-center">
                          <div className="c-avatar">
                            <img src={'avatars/user-name.png'} className="c-avatar-img" alt="" />
                            <span className={data.is_active === 1 ? "c-avatar-status bg-success" : "c-avatar-status bg-danger"}></span>
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
                          <CSwitch className={'mx-1'} onClick={() => isActiveChange(data)} variant={'3d'}
                            color={data.is_active === 1 ? 'success' : 'danger'} checked={data.is_active === 1 ? true : false}
                            labelOn={'\u2713'} labelOff={'\u2715'} />

                        </td>
                        {/* {data.is_doc===true ? */}
                         <td className="text-center" onClick={()=>handleVerification(data)}>
                      <CIcon  name="cil-file" />
                    </td>
                     {/* : <td></td>} */}
                        {/* <td className="text-center" onClick={() => handleVerification(data)}>
                          <CIcon name="cil-file" />
                        </td> */}
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>{data.date_last_login}</strong>
                        </td>
                      </tr>



                    </>
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

export default DriverVerification

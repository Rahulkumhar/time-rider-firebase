import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownItem,
  CDropdown
} from '@coreui/react'

import usersData from './UsersData'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import LoaderComp from 'src/components/Loader'
import {getDriverListAction} from '../../actions/driver.action'
import {get} from 'lodash'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const DriverList = () => {
  const {driverData,totalPage, loading} = useSelector((states) => ({
    driverData: states.driverListReducer.driverData,
    totalPage: states.driverListReducer.totalPage,
    loading: states.driverListReducer.loading,
  }));
  const history = useHistory()
  let dispatch = useDispatch()

 

  const [details, setDetails] = useState([])
  const [page, setPage] = useState(1)
  const [open,setOpen] = useState(false)
  const [info, setInfo] = useState(false)

  const fields = [
    { key: 'fullname', _style: { width: '40%'} },
    'mobile',
    { key: 'created_at', _style: { width: '20%'} },
    { key: 'status', _style: { width: '20%'} },
    
  ]

  const pageChange = newPage => {
    setPage(newPage)
    dispatch(getDriverListAction(newPage))
  }

  useEffect(() => {
    dispatch(getDriverListAction(page))
    
  },[])



  return (
    <CRow>
    {/* <LoaderComp loading={loading} /> */}
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
         Driver List
            {/* <small className="text-muted"> example</small> */}
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={driverData}
            fields={[
              { key: 'fullname', _classes: 'font-weight-bold' },
              'mobile', 'status','action'
            ]}
            columnFilter
           tableFilter
           itemsPerPageSelect
           itemsPerPage={5}
           hover
           sorter
            items={driverData}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
             scopedSlots = {{
              'status':
                (item,index)=>(
                  <>
                  <td >
                    <CBadge color={item.status === 0 ? "danger" : "success" } className="btn-1" icon='cil-options'>
             {item.status===0 ? "Not Verified" : "Verify" }
                    </CBadge>
                   
                  </td>
                  
                    </>
                ),
                'action' :
                (item,index)=>{
                return(
                  <td>
                  <CDropdown key={index} className="drop-down">
                        <CDropdownToggle >
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => history.push(`/driver-details/${item._id}`)}>Details</CDropdownItem>
                          <CDropdownItem onClick={() => history.push(`/driver-earning/${item._id}`)}>Earning</CDropdownItem>
                          <CDropdownItem onClick={() => history.push(`/driver-history/${item._id}`)}>History</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                      </td>
                )
                }
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={totalPage}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
     
        </CCard>
      </CCol>
    </CRow>
 )
}

export default DriverList;

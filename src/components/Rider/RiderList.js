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
import {getRiderListAction} from '../../actions/rider.action'
import {get} from 'lodash'

const getBadge = status => {
  switch (status) {
    case '1': return 'success'
    case '0': return 'warning'
    default: return ''
  }
}

const RiderList = () => {
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


  const pageChange = newPage => {
    setPage(newPage)
    dispatch(getRiderListAction(newPage))
  }

  useEffect(() => {
    dispatch(getRiderListAction(page))
    
  },[])




  return (
    <CRow>
    {/* <LoaderComp loading={loading} /> */}
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
         Rider List
            {/* <small className="text-muted"> example</small> */}
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={riderData}
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
            items={riderData}
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
                  {/* <CBadge color="success" className="btn-1">  Email : {item.status===0 ? "Not Verified" : "Verify" }</CBadge> */}
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
                          <CDropdownItem onClick={() => history.push(`/rider-details/${item._id}`)}>Details</CDropdownItem>
                          <CDropdownItem>Earning</CDropdownItem>
                          <CDropdownItem>History</CDropdownItem>
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

export default RiderList;

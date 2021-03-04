

const BASE_URL =  "https://timeriderdriver.herokuapp.com" 


const config = {
  login: `${BASE_URL}/auth/admin/login`,
  signUp: `${BASE_URL}/admin/create`,
  getRider: `${BASE_URL}/admin/rider-list`,
  getRiderDoc: `${BASE_URL}/rider/doc-list`,
  getRiderDocVerify: `${BASE_URL}/rider/verify-unverified-doc`,
  getRiderActive: `${BASE_URL}/user/active-deactive-user`,
  getRiderDetails: `${BASE_URL}/admin/rider-detail`,
  getDriver: `${BASE_URL}/admin/driver-list`,
  getDriverDoc: `${BASE_URL}/driver/doc-list`,
  getDriverDocVerify: `${BASE_URL}/driver/verify-unverified-doc`,
  getDriverDetails: `${BASE_URL}/admin/driver-detail`,
  
}



export const overrideLoaderCss = "display: block;margin:18% auto;border-color: #f4ae00;";
export const loaderColorCode = "#f4ae00";

const messages = {
  noResMsg: "NO RESPONSE FOUND",
  catchErr: { error: false, errors: 'Something went wron' },
}

export { config, messages } 
import { message } from 'antd'

import store from '../../store'
import { logout } from '../../services/auth/authSlice'

import { RESPONSE_API } from '../../constants/responseConstant'

export const validateResponse = ({ status }) => {
  message.error(RESPONSE_API[status])
  store.dispatch(logout())
}

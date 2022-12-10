import { Query, Mutation } from './core'
import { Methods } from '../utils/api/api.util'

//listado de endpoints, que se usaran en authService
const login = body => Mutation({ method: Methods.post, url: 'auth/login', body })

export default { login }

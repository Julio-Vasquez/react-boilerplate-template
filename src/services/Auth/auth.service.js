import api from '../../api'
import { useMutation } from '../../hooks/api'

//listado de ejecucion de endpoint,
export const loginService = ({ onCompleted }) => {
    const mutation = useMutation({ functionFetch: api.auth.login }, { onCompleted })
    return { ...mutation }
}

import { useState } from 'react'

import { errorNotification } from '../../utils/notifications/notification.action'

export const useMutation = (
    { functionFetch },
    { onCompleted, cancelError, onError }
) => {
    const [req, setReq] = useState({
        loading: false,
        error: false,
    })

    const execFunction = async variables => {
        setReq({ loading: true, error: false })
        try {
            const data = await functionFetch(variables)
            setReq({ data, loading: false })
            if (onCompleted) onCompleted({ data, variables })
            return data
        } catch (error) {
            if (!cancelError) errorNotification(error)
            setReq({ loading: false })
            if (onError) onError(error)
            return undefined
        }
    }

    return { execFunction, ...req }
}

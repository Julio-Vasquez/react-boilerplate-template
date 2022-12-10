import { useState, useEffect } from 'react'

import { errorNotification } from '../../utils/notifications/notification.action'

export const useGet = (
    { functionFetch },
    { cancelFirstEffect, cancelError, onError, variables }
) => {
    const [req, setReq] = useState({
        data: [],
        loading: false,
        error: false,
    })

    useEffect(() => {
        if (!cancelFirstEffect) getData()
    }, [cancelFirstEffect])

    const getData = async newVariables => {
        const fetchVariables = !newVariables ? variables : newVariables

        setReq({ data: [], loading: true, error: false })
        try {
            const data = await functionFetch(fetchVariables)
            setReq({ data, loading: false })
        } catch (error) {
            if (!cancelError) errorNotification(error)
            setReq({ data: [], loading: false, error: true })
            if (onError) onError(error)
        }
    }

    return { ...req, refetch: getData }
}

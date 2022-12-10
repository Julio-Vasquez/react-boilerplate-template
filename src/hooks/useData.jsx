import { useSelector } from 'react-redux'

export const useData = ({ reducer }) => {
    const data = useSelector(state => state[reducer])
    return { ...data }
}

export default useData

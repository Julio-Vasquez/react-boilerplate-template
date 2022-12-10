import { useTranslation } from 'react-i18next'

export const useIntl = () => {
    const { t } = useTranslation()

    const formatMessage = ({ id, objVars }) => (objVars ? t(id, objVars) : t(id))

    return { formatMessage }
}

export default useIntl

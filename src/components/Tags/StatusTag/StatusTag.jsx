import { Tag } from 'antd'
import propTypes from 'prop-types'

import { useIntl } from '../../../hooks/useIntl'
import { STATUS } from './../../../utils/constants/status.constant'

export const StatusTag = ({ status }) => {
    const { formatMessage } = useIntl()

    const statusValue = STATUS.find(ele => ele.text === status)

    return !!statusValue ? (
        <Tag color={statusValue.color}>{statusValue.text}</Tag>
    ) : (
        <Tag color='red'>{formatMessage({ id: 'text.noData' })}</Tag>
    )
}

StatusTag.defaultProps = {
    status: propTypes.oneOf(['active', 'inactive', 'pending']).isRequired,
}

StatusTag.propTypes = {
    status: 'Cargando',
}

export default StatusTag

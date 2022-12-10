import { Col } from 'antd'
import propTypes from 'prop-types'

import styles from './NoData.module.scss'

export const NoData = ({ title, icon }) => (
    <Col xs={24} className={styles['no-data__empty']}>
        <div className={styles['no-data__icon']}>{icon}</div>
        <span className={styles['no-data__description']}>
            You have no {title}, Use below button to add
        </span>
    </Col>
)

NoData.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.element.isRequired,
}

export default NoData

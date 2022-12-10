import propTypes from 'prop-types'

export const PrivateLayout = ({ children }) => {
    return <div>{children}</div>
}

PrivateLayout.propTypes = {
    children: propTypes.element.isRequired,
}

export default PrivateLayout

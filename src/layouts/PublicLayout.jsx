import propTypes from 'prop-types'

export const PublicLayout = ({ children }) => {
    return <div>{children}</div>
}

PublicLayout.propTypes = {
    children: propTypes.element.isRequired,
}

export default PublicLayout

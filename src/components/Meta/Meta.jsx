import { Helmet } from 'react-helmet-async'
import propTypes from 'prop-types'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} data-rh='true' />
            <meta name='keywords' content={keywords.join(', ')} data-rh='true' />
        </Helmet>
    )
}

Meta.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    keywords: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Meta

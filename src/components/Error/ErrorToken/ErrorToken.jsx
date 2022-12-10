import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ErrorToken.scss'

export const ErrorToken = ({ redirect, text, errorNumber, title }) => (
    <div id='notFound'>
        <div className='notFound'>
            <div className='notFound-404'>
                <h1>{errorNumber}</h1>
                <h2>{title}</h2>
            </div>
            <Link to={redirect} href='/'>
                {text}
            </Link>
        </div>
    </div>
)

Error404.propTypes = {
    redirect: propTypes.string,
    text: propTypes.string,
    title: propTypes.string.isRequired,
    errorNumber: propTypes.number.isRequired,
}

Error404.defaultProps = {
    redirect: '/',
    text: 'Page Not Found',
}

export default ErrorToken

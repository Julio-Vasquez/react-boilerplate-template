import propTypes from 'prop-types'

import './Loading.scss'

export const Loading = ({ message }) => {
    return (
        <div className='loading'>
            <div className='loading__content'>
                <div className='shape shape-1'></div>
                <div className='shape shape-2'></div>
                <div className='shape shape-3'></div>
                <div className='shape shape-4'></div>
            </div>
            <p>{message}...</p>
        </div>
    )
}

Loading.propTypes = {
    message: propTypes.string.isRequired,
}

Loading.defaultProps = {
    message: 'Cargando',
}

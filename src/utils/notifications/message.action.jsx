import { message } from 'antd'

const infoMessage = description => message.info(description)

const successMessage = description => message.success(description)

const warningMessage = description => message.warning(description)

const errorMessage = error =>
    message.error(
        error?.response ? error.response.data.message : error?.message || error,
        5
    )

export { infoMessage, successMessage, warningMessage, errorMessage }

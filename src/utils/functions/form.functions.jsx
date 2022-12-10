import { errorMessage } from '../notifications/message.action'

const requiredField = ({ field = 'Field' } = {}) => ({
    required: true,
    message: `${field} is required`,
})

const minLength = ({ field = 'Field', min = 3 }) => ({
    min: min,
    message: `${field} should be ${min} characters at least`,
})

const maxLength = ({ field = 'Field', max = 100 }) => ({
    max: max,
    message: `${field} should be less than ${max} digits`,
})

const emailField = () => ({ type: 'email', message: `Please enter valid Email` })

const phoneField = () => ({
    pattern: /^[1-9][0-9]*$/,
    message: 'Your Entered Phone number is not valid',
})

const postalCodeField = () => ({
    pattern: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/,
    message: 'Please enter valid Postal Code',
})

const numberField = () => ({
    pattern: /^[0-9.]+$/,
    message: 'This Field should be number',
})

const checkValidation = err => errorMessage({ error: err.errorFields[0].errors[0] })

const getSelectSearch = () => {
    const optionFilterProp = 'children'
    const filterOption = (input, option) => {
        try {
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        } catch (error) {
            return undefined
        }
    }

    return { showSearch: true, filterOption, optionFilterProp }
}

const inputToUpperCase = () => ({ normalize: value => (value || '').toUpperCase() })

const inputToLowerCase = () => ({ normalize: value => (value || '').toLowerCase() })

const selectFilterOptions = () => ({
    showSearch: true,
    optionFilterProp: 'children',
    filterOption: (input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
})

const selectFilterSort = () => ({
    optionFilterProp: 'children',
    filterSort: (optionA, optionB) =>
        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase()),
})

export {
    requiredField,
    emailField,
    phoneField,
    minLength,
    maxLength,
    numberField,
    checkValidation,
    postalCodeField,
    getSelectSearch,
    inputToUpperCase,
    inputToLowerCase,
    selectFilterOptions,
    selectFilterSort,
}

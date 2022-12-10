export const capitalize = str =>
    str
        .split(' ')
        .map(w => `${w[0].toUpperCase()}${w.substring(1).toLowerCase()}`)
        .join(' ')

export const reduceString = ({ value, maxLength, ellipsis = true }) => {
    if (!value || !maxLength) return value
    if (value?.length <= maxLength) return value
    return value.slice(0, maxLength).concat(ellipsis ? '...' : '')
}

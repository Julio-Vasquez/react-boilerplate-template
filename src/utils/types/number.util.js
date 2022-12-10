export const formatPrice = ({ value, decimalLength, location, type }) => {
    const formatter = new Intl.NumberFormat(location, {
        style: 'currency',
        currency: type,
        currencySign: 'standard',
        minimumFractionDigits: decimalLength || 2,
        maximumFractionDigits: decimalLength || 2,
    })

    return formatter.format(value)
}

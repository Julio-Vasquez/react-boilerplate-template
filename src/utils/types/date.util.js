export const basicDateConfig = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
}

export const basicDateConfigWithTime = {
    ...basicDateConfig,
    hour: 'numeric',
    minute: 'numeric',
}

export const formatDate = ({ date, includeTime = false, location }) =>
    new Date(date).toLocaleDateString(
        location,
        includeTime ? { ...basicDateConfigWithTime } : { ...basicDateConfig }
    )

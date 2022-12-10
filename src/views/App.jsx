import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import { PublicRoutes } from '../routes/PublicRoutes'
import { PrivateRoutes } from '../routes/PrivateRoutes'

import store from '../store'
import i18n from '../i18n/config'
import { useIntl } from '../hooks/useIntl'

const App = () => {
    const { formatMessage } = useIntl()

    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                {true === true ? <PublicRoutes /> : <PrivateRoutes />}
            </I18nextProvider>
        </Provider>
    )
}

export default App

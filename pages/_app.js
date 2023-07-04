import '../styles/globals.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import AuthContextProvider from '../context/AuthContextProvider'
import RouteProtection from '../components/RouteProtection'


function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <RouteProtection>
        <Component {...pageProps} />
      </RouteProtection>
    </AuthContextProvider>
  )
}


export default MyApp

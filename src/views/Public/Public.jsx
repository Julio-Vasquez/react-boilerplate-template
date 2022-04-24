import React, { lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { Loading } from '../../components/Loading'
import { Error404 } from '../../components/Error404'

const Login = lazy(() => import('./Login'))

export const Public = () => {
  console.log('hey')
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Login path="/" />
        <Error404 path="*" />
        {/*<Redirect from="*" to="/" noThrow /> */}
      </Router>
    </Suspense>
  )
}

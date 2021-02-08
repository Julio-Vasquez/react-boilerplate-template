import React, { lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { Loading } from './../../components/Loading'

const Dashboard = lazy( () => import('./Dashboard') )

const Dashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Dashboard path="/dashboard" />
        <Redirect from="*" to="/dashboard" noThrow />
      </Router>
    </Suspense>
  )
}

export default Dashboard
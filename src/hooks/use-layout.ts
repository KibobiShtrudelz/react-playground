import * as React from 'react'

import { useLocation } from 'react-router-dom'

import { pathnames } from '../constants'

const { useState, useEffect } = React

export function useLayout() {
  const [layoutType, setLayoutType] = useState<'common' | 'authentication'>('authentication')

  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
      case pathnames.authentication.signUp:
      case pathnames.authentication.signIn:
      case pathnames.authentication.forgetPassword: {
        setLayoutType('authentication')

        break
      }

      default: {
        setLayoutType('common')
        break
      }
    }
  }, [pathname])

  return layoutType
}

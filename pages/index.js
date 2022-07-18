import { CheckBox } from '@mui/icons-material'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
// import Dashboard from '../src/dashboard'
import { theme } from '../src/theme'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicHeader = dynamic(() => import('../src/Dashboard'), {
  suspense: true,
})


export default function Home() {
  return (
    <Suspense fallback={'Loading...'}>
      <DynamicHeader />
    </Suspense>
  )
}

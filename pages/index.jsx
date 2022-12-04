import { AppBar, Toolbar } from '@mui/material'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import TitlebarBelowImageList from '../components/TitlebarBelowImageList'

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <TitlebarBelowImageList />
    </>
  )
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';


function App() {

  const darkMode = useSelector(state => state.appDrawer.darkMode)

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </>
  )
}

export default App

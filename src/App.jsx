import React from 'react'
import './App.css'
import { createMuiTheme, } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'

import { Navbar } from './components'

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: "#f44336",
        }
    },
    typography: {
        fontFamily: "Comic Neue"
    }
})

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Navbar />
        </MuiThemeProvider>
    );
}

export default App

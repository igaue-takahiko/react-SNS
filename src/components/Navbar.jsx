import React from 'react'
import { withCookies } from 'react-cookie'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Badge,
} from '@material-ui/core'
import { Notifications } from '@material-ui/icons'
import { FiLogOut } from 'react-icons/fi'

const useStyles = makeStyles(theme => ({
    badge: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
    }
}))

const Navbar = (props) => {
    const classes = useStyles()
    const logout = () => {
        props.cookies.remove('current-token')
        window.location.href = '/'
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h5">Face Book</Typography>
                <Badge
                    className={classes.badge}
                    badgeContent={3}
                    color="secondary"
                >
                    <Notifications />
                </Badge>
                <button className="logOut" onClick={() => logout()}>
                    <FiLogOut />
                </button>
            </Toolbar>
        </AppBar>
    )
}

export default withCookies(Navbar)

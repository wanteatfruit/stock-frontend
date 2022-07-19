import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart.js';
import theme from './theme.js';
import { AppBar, Autocomplete, Button, ButtonGroup, Icon, ListItem, ListItemText, TextField } from '@mui/material';
import SearchAppBar from './TopAppBar.js';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const mdTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: 'rgb(220, 0, 78)',
        },
        background: {
            default: '#000000',
            paper: '#ffffff',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
    props: {
        AppBar: {
            color: 'transparent',
        },
    },
})

function DashboardContent() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        // <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position='absolute' color='transparent'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Stocks Dashboard
                    </Typography>
                    <Autocomplete
                        options={stocks}
                        size='small'
                        renderInput={(params) => <TextField {...params}
                            label="Stocks"
                            sx={{ width: 300, color: 'inherit' }}
                            variant='filled' />}
                        sx={{
                            padding: theme.spacing(1, 1, 1, 0),
                            [theme.breakpoints.up('sm')]: {
                                marginLeft: theme.spacing(1),
                                width: 'auto',
                            },
                        }}
                    >

                    </Autocomplete>
                    <Search />
                </Toolbar>
            </AppBar>
            {/* <MuiAppBar color="transparent" position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '12px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleOpen}
                            sx={{
                                marginRight: '36px',
                                
                            }}
                            
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                    </Toolbar>
                </MuiAppBar> */}
            <MuiDrawer variant='temporary' open={open} onClose ={handleClose}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <ListItem>
                        <ListItemText primary="placeHolder"></ListItemText>
                    </ListItem>
                    {/* {mainListItems} */}
                    <Divider sx={{ my: 1 }} />
                    {/* {secondaryListItems} */}
                </List>
            </MuiDrawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 300
                                }}
                            >

                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        {/* <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    
                                </Paper>
                            </Grid> */}
                        {/* Recent Orders */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',

                            }}>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Paper sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',

                            }}>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <Paper sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',

                            }}>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
        // </ThemeProvider>
    );
}
const stocks = [{ label: 'AAPL', market: 'US' },
{ label: '000123', market: 'CN' }]

export default function Dashboard() {
    return <DashboardContent />;
}
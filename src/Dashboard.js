import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
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
// import theme from './theme.js';
import { AppBar, Autocomplete, Button, ButtonGroup, Icon, ListItem, ListItemText, Tabs, TextField } from '@mui/material';
import SearchAppBar from './TopAppBar.js';
// import Deposits from './Deposits';
// import Orders from './Orders';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Tab from '@mui/material/Tab';
import ChartTab from './ChartTab.js';
import SpeedDialComp from './SpeedDial.js';


const dashTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ff1744',
        },
        secondary: {
            main: '#ff1744',
        },
        info: {
            main: '#2196f3',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            
        ]
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


// tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && value=== 0 && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
            {value === index && value === 1 && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
            {value === index && value === 2 && (
                <>
                    <ChartTab stock_name={children}></ChartTab>    
                </>
            )}
        </div>
    );
}

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function DashboardContent() {
    // states of side drawer
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    // states of auto complete, store a stock list in front end
    const [stockName, setStockName] = React.useState(stocks[0])

    const onValueChanged = (event, newStock) => {
        setStockName(newStock)
    }

    // states of tab
    const [tabValue, setTabValue] = React.useState(2)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    return (
        <ThemeProvider theme={dashTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar position='fixed' color='inherit' >
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
                        {/* options attribute use 'label' atrribute in .json 
                            or 1-D array elements. use getOptionLabel to customize option structrue.
                            value attribute is an json object, not a string (not to be confused while passing props) */}
                        <Autocomplete
                            getOptionLabel={(option)=>option.name}
                            options={stocks}
                            value={stockName}
                            onChange={onValueChanged}
                            size='small'
                            blurOnSelect
                            renderInput={(params) => <TextField {...params}
                                label="Stocks"
                                sx={{ width: 300 }}
                                variant='standard' />}
                            sx={{

                                padding: dashTheme.spacing(1, 1, 1, 0),
                                [dashTheme.breakpoints.up('sm')]: {
                                    marginLeft: dashTheme.spacing(1),
                                    width: 'auto',
                                },
                            }}
                            renderOption={(props, option, { inputValue }) => {
                                const matches = match(option.name, inputValue)
                                const parts = parse(option.name, matches)
                                return (
                                    <li {...props}>
                                        <div>
                                            {parts.map((part, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        fontWeight: part.highlight ? 700 : 400,
                                                    }}
                                                >
                                                    {part.text}
                                                </span>
                                            ))}
                                        </div>
                                    </li>

                                )
                            }}
                        >

                        </Autocomplete>
                    </Toolbar>

                </AppBar>
                <AppBar elevation={false} position='fixed' color='inherit' sx={{ display: 'flex', mt: '65px',}}>
                    
                        <Box sx={{ width: '100%', pl:2, pr:2}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider',pl:4 }}>
                            <Tabs value={tabValue} onChange={handleTabChange}>
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Stock Chart" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={tabValue} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            {stockName}
                        </TabPanel>
                    </Box>
                </AppBar>

                <MuiDrawer variant='temporary' open={open} onClose={handleClose}>
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
                
            </Box>
        </ThemeProvider>
    );
}
const stocks = [{id:1, name: 'AAPL', market: 'US' },
    { id:2, name: '000123', market: 'CN' }]

export default function Dashboard() {
    return <DashboardContent />;
}
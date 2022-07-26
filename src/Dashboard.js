import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from './Chart.js';
import { AppBar, Autocomplete, Checkbox,Button, ButtonGroup, Icon, ListItem, ListItemText, Tabs, TextField, Fade } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Tab from '@mui/material/Tab';
import ChartTab from './ChartTab.js';
import axios from 'axios';
import StockTable from './StockTable.js';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TableChartIcon from '@mui/icons-material/TableChart';
import Comparison from './ComparisonTab.js';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CompareIcon from '@mui/icons-material/Compare';
import GitHubIcon from '@mui/icons-material/GitHub';
export const stocks = [{ id: 1, name: 'AAPL', market: 'DOW50' },
{ id: 2, name: 'ABBV', market: 'DOW50' },
// { id: 3, name: 'ABI', market: 'DOW50' },
{ id: 4, name: 'ALV', market: 'DOW50' },
{ id: 5, name: 'AMGN', market: 'DOW50' },
{ id: 6, name: 'AMZN', market: 'DOW50' },
{ id: 7, name: 'BATS', market: 'DOW50' },
{ id: 8, name: 'BA', market: 'DOW50' },
{ id: 9, name: 'BHP', market: 'DOW50' },
{ id: 10, name: 'BP', market: 'DOW50' },
{ id: 11, name: 'CSCO', market: 'DOW50' },
{ id: 12, name: 'CVX', market: 'DOW50' },
{ id: 13, name: 'C', market: 'DOW50' },
{ id: 14, name: 'DD', market: 'DOW50' },
{ id: 15, name: 'DIS', market: 'DOW50' },
{ id: 16, name: 'GE', market: 'DOW50' },
{ id: 17, name: 'GOOG', market: 'DOW50' },
{ id: 18, name: 'GSK', market: 'DOW50' },
{ id: 19, name: 'HSBA', market: 'DOW50' },
{ id: 20, name: 'IBM', market: 'DOW50' },
{ id: 21, name: 'INTC', market: 'DOW50' },
{ id: 22, name: 'JNJ', market: 'DOW50' },
{ id: 23, name: 'JPM', market: 'DOW50' },
{ id: 24, name: 'KO', market: 'DOW50' },
{ id: 25, name: 'MA', market: 'DOW50' },
{ id: 26, name: 'MCD', market: 'DOW50' },
{ id: 27, name: 'META', market: 'DOW50' },
{ id: 28, name: 'MRK', market: 'DOW50' },
{ id: 29, name: 'MSFT', market: 'DOW50' },
{ id: 30, name: 'NESN', market: 'DOW50' },
{ id: 31, name: 'NOVN', market: 'DOW50' },
{ id: 32, name: 'NVDA', market: 'DOW50' },
{ id: 33, name: 'ORCL', market: 'DOW50' },
{ id: 34, name: 'PEP', market: 'DOW50' },
{ id: 35, name: 'PFE', market: 'DOW50' },
{ id: 36, name: 'PG', market: 'DOW50' },
{ id: 37, name: 'PM', market: 'DOW50' },
{ id: 38, name: 'ROG', market: 'DOW50' },
{ id: 39, name: 'RY', market: 'DOW50' },
{ id: 40, name: 'SAN', market: 'DOW50' },
{ id: 41, name: 'SHEL', market: 'DOW50' },
{ id: 42, name: 'SIE', market: 'DOW50' },
{ id: 43, name: 'SMSN', market: 'DOW50' },
{ id: 44, name: 'TM', market: 'DOW50' },
{ id: 45, name: 'TSM', market: 'DOW50' },
{ id: 46, name: 'TTE', market: 'DOW50' },
{ id: 47, name: 'V', market: 'DOW50' },
{ id: 48, name: 'WMT', market: 'DOW50' },
{ id: 49, name: 'XOM', market: 'DOW50' },
{ id: 50, name: 'MMM', market: 'DOW50' },
    { id: 51, name: 'PFYH_600000', market: 'SSE50' },
    { id: 52, name: 'MSYH_600016', market: 'SSE50' },
    { id: 53, name: 'BGGF_600019', market: 'SSE50' },
    { id: 54, name: 'ZGSH_600028', market: 'SSE50' },
    { id: 55, name: 'NFHK_600029', market: 'SSE50' },
    { id: 56, name: 'ZXZQ_600031', market: 'SSE50' },
    { id: 57, name: 'ZSYH_600036', market: 'SSE50' },
    { id: 58, name: 'BLFZ_600048', market: 'SSE50' },
    { id: 59, name: 'ZGLT_600050', market: 'SSE50' },
    { id: 60, name: 'SQJT_600104', market: 'SSE50' },
    { id: 61, name: 'FXYY_600196', market: 'SSE50' },
    { id: 62, name: 'HRYY_600276', market: 'SSE50' },
    { id: 63, name: 'WHHX_600309', market: 'SSE50' },
    { id: 64, name: 'HXXF_600340', market: 'SSE50' },
    { id: 65, name: 'GZMT_600519', market: 'SSE50' },
    { id: 66, name: 'HLSN_600585', market: 'SSE50' },
    { id: 67, name: 'HEZJ_600690', market: 'SSE50' },
    { id: 68, name: 'SAGD_600703', market: 'SSE50' },
    { id: 69, name: 'HTZQ_600837', market: 'SSE50' },
    { id: 70, name: 'YLGF_600887', market: 'SSE50' },
    { id: 71, name: 'ZXJT_601066', market: 'SSE50' },
    { id: 72, name: 'ZGSH_601088', market: 'SSE50' },
    { id: 73, name: 'ZGGH_601111', market: 'SSE50' },
    { id: 74, name: 'GYFL_601138', market: 'SSE50' },
    { id: 75, name: 'XYYH_601166', market: 'SSE50' },
    { id: 76, name: 'ZGTJ_601186', market: 'SSE50' },
    { id: 77, name: 'GTJA_601211', market: 'SSE50' },
    { id: 78, name: 'SHYH_601229', market: 'SSE50' },
    { id: 79, name: 'NYYH_601288', market: 'SSE50' },
    { id: 80, name: 'ZGPA_601318', market: 'SSE50' },
    { id: 81, name: 'ZGRB_601319', market: 'SSE50' },
    { id: 82, name: 'JTYH_601328', market: 'SSE50' },
    { id: 83, name: 'XHBX_601336', market: 'SSE50' },
    { id: 84, name: 'ZGZT_601390', market: 'SSE50' },
    { id: 85, name: 'GSYH_601398', market: 'SSE50' },
    { id: 86, name: 'ZGTB_601601', market: 'SSE50' },
    { id: 87, name: 'ZGRS_601628', market: 'SSE50' },
    { id: 88, name: 'ZGJZ_601668', market: 'SSE50' },
    { id: 89, name: 'HTZQ_601688', market: 'SSE50' },
    { id: 90, name: 'ZGZC_601766', market: 'SSE50' },
    { id: 91, name: 'ZGJJ_601800', market: 'SSE50' },
    { id: 92, name: 'GDYH_601818', market: 'SSE50' },
    { id: 93, name: 'ZGSY_601857', market: 'SSE50' },
    { id: 94, name: 'ZGGL_601888', market: 'SSE50' },
    { id: 95, name: 'JSYH_601939', market: 'SSE50' },
    { id: 96, name: 'ZGYH_601988', market: 'SSE50' },
    { id: 97, name: 'ZGZG_601989', market: 'SSE50' },
    { id: 98, name: 'YMKD_603259', market: 'SSE50' },
    { id: 99, name: 'LYMY_603993', market: 'SSE50' },
]

const sse = [
]

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
            "Montserrat"
            
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

const fixedOptions = [];

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
                    <StockTable stock_data={children} />
                </Box>
            )}
            {value === index && value === 1 && (
                
                    <ChartTab stock_data={children} ></ChartTab>  
                    
            )}
            {value === index && value === 2 && (
               <Comparison stock_list={children} />
            )}
        </div>
    );
}


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

    // states of selected stocks for comparison
    const [checked, setChecked] = React.useState([])


    // states of tab
    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const [stockData, setData] = React.useState()

    React.useEffect(() => {
        // console.log(stockName)
        var url = new URL("http://127.0.0.1:8000/stocks")
        axios.get(url.href + '/' + stockName.name).then((res) => {
            // console.log(res.data)
            setData(res.data)
            console.log(checked)
            console.log(typeof stockData) //undefined
            console.log(typeof {stockData}) //object
        })
    }, [stockName]) //triggers when stockName/range changes


    return (
        <ThemeProvider theme={dashTheme}>
            <Box sx={{ display: 'flex'}}>
                
                <CssBaseline />
                
                <AppBar position='fixed' color='inherit' sx={{overflow:'hidden'}} elevation={1} >
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{ mr: 2 }}
                            href='/'
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            sx={{ mr: 2 }}
                            href='https://github.com/Red-Nova/NASDAQ-SSE-ML-Stock-Predictions'
                        >
                            <GitHubIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Global Stock Database
                        </Typography>
                        {/* options attribute use 'label' atrribute in .json 
                            or 1-D array elements. use getOptionLabel to customize option structrue.
                            value attribute is an json object, not a string (not to be confused while passing props) */}
                        <Autocomplete
                            getOptionLabel={(option) => option.name}
                            groupBy={(option)=>option.market}
                            options={stocks}
                            value={stockName}
                            onChange={onValueChanged}
                            disableClearable
                            blurOnSelect
                            renderInput={(params) => <TextField {...params}
                                label="Choose one to view..."
                                sx={{ width: 300 }}
                                variant='standard' />}
                            sx={{
                                padding: dashTheme.spacing(1, 1, 1, 0),
                                [dashTheme.breakpoints.up('sm')]: {
                                    marginLeft: dashTheme.spacing(1),
                                    marginRight: dashTheme.spacing(1),
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
                        <Autocomplete
                            multiple disableCloseOnSelect
                            limitTags={2}
                            value={checked}
                            onChange={(event, value) => {
                                if (value.length <= 3) {
                                    setChecked(value)
                                }
                            
                            }}
                            id="multiple-limit-tags"
                            size='medium'
                            options={stocks}
                            getOptionLabel={(option) => option.name}
                            groupBy={(option) => option.market}
                            renderInput={(params) => (
                                <TextField {...params} variant='standard' label="...or compare up to 3 stocks"  />
                            )}
                            sx={{ width: 300 }}
                        />
                    </Toolbar>

                </AppBar>
                <AppBar elevation={false} position='relative' color='inherit' sx={{  mt: '65px',}}>
                    
                    <Box sx={{ width: '100%', pl:2, pr:2, height:'100vh', }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider',pl:4, }}>
                            <Tabs value={tabValue} onChange={handleTabChange}>
                                <Tab icon={<TableChartIcon />} label="Data Table" {...a11yProps(0)} />
                                <Tab icon={<TrendingUpIcon />} label="Stock Charts" {...a11yProps(1)} />
                                <Tab icon={<CompareIcon /> } label="Comparison" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        
                        <TabPanel value={tabValue} index={0}>
                            {stockData}
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            {stockData}
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            {checked}
                            </TabPanel>
                        
                    </Box>
                    
                </AppBar>                
            </Box>
        </ThemeProvider>
    );
}

//maintain a list of available stocks

export default function Dashboard() {
    return <DashboardContent />;
}
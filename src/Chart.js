import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Brush } from 'recharts';
import { Button, ButtonGroup, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { func } from 'prop-types';
import useSWR from 'swr';
import axios from 'axios';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', 1200),
];

const oneMonthData = [
    createData('1', 0),
    createData('2', 1),
    createData('3', 3600),
    createData('4', 400)
]

const oneYearData = [
    createData('1001', 1),
    createData('1002', 2)
]

const fiveYearData = [
    createData('1001', 1),
    createData('1002', 2)
]

//get data from backend
const fetcher = (url)=>axios.get(url).then((response)=>response.data)

//post to backend
const poster = (url)=> axios.post(url).then((response)=>response.data)

function requestData(stock_name) {
    const { data, error } = useSWR('http://127.0.0.1:8000/stocks/', fetcher)
    if (error) console.log(error)
    console.log(data)
    return data
}

function postData(stock_name) {
    const { data, error } = useSWR('api/${stock_name}', poster)
    if (error) console.log(error)
    console.log(data)
    return data
}

//change data range
function changeData(range) {
    switch (range) {
        case 'oneWeek':
            return data
        case 'oneMonth':
            return oneMonthData
        case 'oneYear':
            return oneYearData
        case 'fiveYear':
            return fiveYearData
    }
}

//change stock name
function changeStock(stock) {
    console.log(stock)
    if (stock === null) {
        return null
    }
    switch (stock.name) {
        
        case 'AAPL':
            return data
        case '000123':
            return oneMonthData
    }
}


export default function Chart({stock_name}) {
    const chartTheme = createTheme({
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
    })

    // change time range of displayed data
    const [range, setRange] = React.useState('oneWeek');

    const handleRange = (event, newRange) => {
        if (newRange !== null) {
            setRange(newRange)
        }
    }

    const stockName = stock_name

    return (
        <React.Fragment>
            {/* <Title>Today</Title> */}
            <Stack direction="row" spacing={4}>
                <ToggleButtonGroup
                    value={range}
                    exclusive
                    onChange={handleRange}
                    aria-label="time range"
                    color='primary'
                    sx={{ display: 'flex', p: 1 }}
                >
                    <ToggleButton value="fiveYears" aria-label="left aligned" sx={{ height: 30 }}>
                        5Y
                    </ToggleButton>
                    <ToggleButton value="oneYear" aria-label="centered" sx={{ height: 30 }}>
                        1Y
                    </ToggleButton>
                    <ToggleButton value="oneMonth" aria-label="right aligned" sx={{ height: 30 }}>
                        1M
                    </ToggleButton>
                    <ToggleButton value="oneWeek" aria-label="right aligned" sx={{ height: 30 }}>
                        1W
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <ResponsiveContainer>
                <LineChart
                    data={changeStock(stockName)}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
                        stroke={chartTheme.palette.text.secondary}
                        style={chartTheme.typography.body2}
                    />
                    <YAxis
                        stroke={chartTheme.palette.text.secondary}
                        style={chartTheme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: chartTheme.palette.text.primary,
                                ...chartTheme.typography.body1,
                            }}
                        >
                            Sales ($)
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Brush />
                    <Line
                        isAnimationActive={true}
                        type="linear"
                        dataKey="amount"
                        stroke={chartTheme.palette.primary.main}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
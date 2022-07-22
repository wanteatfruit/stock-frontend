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


export default function Chart({stock_data}) {
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

    const stockData = stock_data

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
                    data={stockData}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="current_date"
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
                        dataKey="price"
                        stroke={chartTheme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Area, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Brush, AreaChart, LineChart, CartesianGrid, Legend } from 'recharts';
import { Card, CardContent, ButtonGroup, createTheme, Typography, Box, FormGroup, FormControlLabel, Switch } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


//change data range




export default function SChart({ stock_data, stock_name }) {
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
    const [range, setRange] = React.useState('oneMonth');

    const handleRange = (event, newRange) => {
        if (newRange !== null) {
            setRange(newRange)
        }
    }


    function changeData(range, data) {
        if (data === undefined) {
            return null
        }
        if (show === false) {
            switch (range) {
                case 'oneWeek':
                    return data.slice(-14, -7)
                case 'oneMonth':
                    return data.slice(-39, -7)
                case 'oneYear':
                    return data.slice(-373, -7)
                case 'fiveYears':
                    return data.slice(0, data.length - 7)
            }
        }
        else {
            switch (range) {
                case 'oneWeek':
                    return data.slice(-14, -1)
                case 'oneMonth':
                    return data.slice(-39, -1)
                case 'oneYear':
                    return data.slice(-373, -1)
                case 'fiveYears':
                    return data.slice(0, data.length - 1)
            }
        }

    }

    const [show, setShow] = React.useState(true)
    function handleChange() {
        setShow(!show)
    }

    const [showOpen, setShowOpen] = React.useState(true)
    function handleOpenChange() {
        setShowOpen(!showOpen)
    }
    const [showClose, setShowClose] = React.useState(true)
    function handleCloseChange() {
        setShowClose(!showClose)
    }

    const [cur_data, setCurData] = React.useState()
    function clickLine(active) {
        setCurData()
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    pl: 3,
                    margin: '0 auto'
                }}>
                <Typography variant='h6'>{stock_name}</Typography>

            </Box>
            <Stack direction="row" spacing={1} sx={{ pl: 2 }}>
                <ToggleButtonGroup
                    value={range}
                    exclusive
                    onChange={handleRange}
                    aria-label="time range"
                    color='primary'
                    sx={{ display: 'flex', }}
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
                    data={changeData(range, stock_data)}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="Date"
                        stroke={chartTheme.palette.text.secondary}
                        style={chartTheme.typography.body2}
                    />
                    <YAxis
                        domain={['auto', 'dataMax']}
                        stroke={chartTheme.palette.text.secondary}
                        style={chartTheme.typography.body2}
                    >
                    </YAxis>
                    <Tooltip />
                    <Brush />
                    <Legend />
                    <Line
                        isAnimationActive={true}
                        type="linear"
                        dataKey={showOpen === true ? "Open" : ""}
                        stroke={chartTheme.palette.primary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={true}
                        type="linear"
                        dataKey={showClose === true ? "Close" : ""}
                        stroke="orange"
                        dot={false}
                    />
                    <Line
                        isAnimationActive={true}
                        type="linear"
                        dataKey={show === true ? "Predicted" : ""}
                        stroke={chartTheme.palette.primary.secondary}
                        dot={false}
                    />

                    <Card>
                        <CardContent>
                            <Typography variant='h5'>Close</Typography>
                        </CardContent>
                        <CardContent>
                            {cur_data}
                        </CardContent>
                    </Card>
                </LineChart>

            </ResponsiveContainer>
            <Stack direction="row" spacing={1} sx={{ pl: 2 }}>
                <FormGroup row >
                    <FormControlLabel control={<Switch size='small' defaultChecked color={chartTheme.palette.primary.warning} onChange={handleOpenChange}></Switch>} label='Open' labelPlacement='bottom'></FormControlLabel>
                    <FormControlLabel control={<Switch size='small' defaultChecked color={chartTheme.palette.primary.primary} onChange={handleCloseChange}></Switch>} label='Close' labelPlacement='bottom'></FormControlLabel>
                    <FormControlLabel control={<Switch size='small' defaultChecked color="secondary" onChange={handleChange}></Switch>} label='Predictions (Open)' labelPlacement='bottom'></FormControlLabel>

                </FormGroup>
            </Stack>


        </React.Fragment>
    );
}
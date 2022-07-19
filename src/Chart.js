import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Brush } from 'recharts';
import Title from './Title';
import RowRadioButtonsGroup from './TimeRadioButtons'
import { Button, ButtonGroup } from '@mui/material';
import TimeToggleButtons from './TimeToggleButtons';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

const clicked = () =>{alert('clicked')}

function changeData(range) {
    switch (range) {
        case 'oneWeek':
            return data
        case 'oneMonth':
            return oneMonthData
        case 'oneYear':
            return oneYearData
    }
}


export default function Chart() {
    const theme = useTheme();
    const [range, setRange] = React.useState('oneWeek');

    const handleRange = (event, newRange) => {
        if (newRange !== null) {
            setRange(newRange)
        }
    }

    // const [timeRange, setTimeRange] = React.useState('oneWeek')
    // const changeMonthData = () => {
    //     setTimeRange('oneMonth')
    // }
    return (
        <React.Fragment>
            {/* <Title>Today</Title> */}
            {/* <RowRadioButtonsGroup /> */}
            {/* <TimeToggleButtons /> */}
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
                    data={changeData(range)}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Sales ($)
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Brush />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
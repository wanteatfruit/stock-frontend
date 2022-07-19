import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TimeToggleButtons() {
    const [range, setRange] = React.useState('oneYear');

    const handleRange = (event, newRange) => {
        if (newRange !== null) {
            setRange(newRange)
        }
    }
    return (
        <Stack direction="row" spacing={4}>
            <ToggleButtonGroup
                value={range}
                exclusive
                onChange={handleRange}
                aria-label="time range"
                color='primary'
                sx={{display: 'flex', p:1}}
            >
                <ToggleButton value="fiveYears" aria-label="left aligned" sx={{height: 30}}>
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
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { createTheme, ThemeProvider } from '@mui/system';

const actions = [{ icon: <FileCopyIcon />, name: 'copy' }]

const speedDialTheme = createTheme({
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


export default function SpeedDialComp() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
       
        <Box sx={{
           
            flexGrow: 1
        }}>

            <SpeedDial 
                ariaLabel='Sp'
                sx={{ position: 'absolute', bottom: 32, right: 32,  }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                
            >
                {actions.map((action => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen onClick={handleClose}/>
                )))}
                
                </SpeedDial>

            </Box>
        
    )
}

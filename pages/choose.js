import {IconButton, CssBaseline, Grid, Card, CardMedia, CardContent,Typography, CardActions,Button, Toolbar, CardActionArea, Checkbox } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import React from "react";
export default function Choose() {

    const [checked, setChecked] = React.useState([])
    const handleToggle = (value) => {
        const current_index = checked.indexOf(value)
        const new_checked = [...checked]
        if (current_index === -1) { // toggle on
            new_checked.push(value)
        }
        else { new_checked.splice(current_index, 1) } // remove from checked
        
        // setChecked(new_checked)
    }

    return (
        <>
            <AppBar position='fixed' color='inherit' sx={{ overflow: 'hidden' }} elevation={1} >
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
                </Toolbar>

            </AppBar>
        <Grid container spacing={3} sx={{px:6, mt:10}}>
                <CssBaseline />

            {stocks.map((stock) => (
                <Grid item key={stock.id} xs={2}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent disableSpacing >
                            <Typography gutterBottom variant="h4" component="h1">
                                {stock.name}
                            </Typography>
                            <Typography gutterBottom >
                                {stock.market}
                            </Typography>
                            <Typography>
                                closing price
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Checkbox
                                icon={<StarBorderOutlinedIcon />}
                                checkedIcon={<StarOutlinedIcon />}
                                onChange={ handleToggle()} />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
            </>
    )
}

//maintain a list of available stocks
const stocks = [{ id: 1, name: 'AAPL', market: 'NASDAQ' },
{ id: 2, name: '000123', market: 'SSE' },
{ id: 3, name: 'A', market: 'SSE' },
{ id: 4, name: 'B', market: 'SSE' },
{ id: 5, name: 'C', market: 'SSE' }]
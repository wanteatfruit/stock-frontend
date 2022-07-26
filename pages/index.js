import React from 'react';
import Head from 'next/head'
import { Grid,Box, TextField,Typography, CssBaseline, Autocomplete,Container,Stack,Button, createTheme, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Suspense } from "react";
import { ThemeProvider } from '@emotion/react';
import { NextLinkComposed } from '../src/Link.tsx';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import styles from '../styles/Home.module.css'
import Image from '../src/pexels-david-mcbee-730564.jpg';

const GradientTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'linear-gradient(45deg, #A22FCE, #FF7000)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'linear-gradient(45deg, #A22FCE, #FF7000)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'linear-gradient(45deg, #A22FCE, #FF7000)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'linear-gradient(45deg, #A22FCE, #FF7000)',
    },
  },
});

export default function Home() {

  

  const homeTheme = createTheme(
    {
      typography: {
        fontFamily: [
          'Montserrat'
        ]
      },
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
      

    }
  )

  // states of auto complete, store a stock list in front end
  const [stockName, setStockName] = React.useState(stocks[0])
  const onValueChanged = (event, newStock) => {
    setStockName(newStock)
  }

  return (

    <Suspense>
      <ThemeProvider theme={homeTheme}>
      <Head>
          <title>Homepage</title>
        </Head>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid item
            xs={12}  alignItems='center' >
            <Box
              sx={{
                pt: 14,
                pb: 6,
                height: '100%',
                
              }}

            >
              <Typography
                variant="h1"
                align="center"
                gutterBottom
                fontWeight='bold'
                sx={{
                  // background: "linear-gradient(45deg, #A22FCE, #FF7000)",
                  // backgroundClip: 'text',
                  // WebkitTextFillColor: 'transparent'
                }}
                className={styles.text}
              >
                Global Stock Predictions
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Based on LSTM, Sentiment Analysis and SVM
              </Typography>
              
              <Stack
                direction='row'
                sx={{ pt: 4, }}
                spacing={2}
                justifyContent='center'
              >
                <Autocomplete
                  getOptionLabel={(option) => option.name}
                  groupBy={(option) => option.market}
                  options={stocks}
                  value={stockName}
                  onChange={onValueChanged}
                  size='large'
                  blurOnSelect
                  renderInput={(params) => <GradientTextField {...params}
                    label="Available stocks"
                    sx={{
                      width: 300,
                    }}
                    variant='standard' />}
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
                <Button
                  component={NextLinkComposed}
                  to={{ pathname: '/stocks' }}
                  variant="contained"
                  size='medium'
                  sx={{
                    // background: 'linear-gradient(45deg, #A22FCE, #FF7000)',
                  }}>Go!</Button>
              </Stack>


            </Box>

          </Grid>
        </Grid>
        

        
      </ThemeProvider>
    </Suspense>
  )
}

//maintain a list of available stocks
export const stocks = [{ id: 1, name: 'AAPL', market: 'DOW50' },
{ id: 2, name: 'ABBV', market: 'DOW50' },
{ id: 3, name: 'ABI', market: 'DOW50' },
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
{ id: 51, name: 'AAPL', market: 'DOW50' },
{ id: 52, name: '000123', market: 'SSE50' },
{ id: 53, name: 'A', market: 'SSE50' },
{ id: 54, name: 'B', market: 'SSE50' },
{ id: 55, name: 'C', market: 'SSE50' },
{ id: 56, name: 'AAPL', market: 'SSE50' },
{ id: 57, name: '000123', market: 'SSE50' },
{ id: 58, name: 'A', market: 'SSE50' },
{ id: 59, name: 'B', market: 'SSE50' },
{ id: 60, name: 'C', market: 'SSE50' },
{ id: 61, name: 'AAPL', market: 'SSE50' },
{ id: 62, name: '000123', market: 'SSE50' },
{ id: 63, name: 'A', market: 'SSE50' },
{ id: 64, name: 'B', market: 'SSE50' },
{ id: 65, name: 'C', market: 'SSE50' },
{ id: 66, name: 'AAPL', market: 'SSE50' },
{ id: 67, name: '000123', market: 'SSE50' },
{ id: 68, name: 'A', market: 'SSE50' },
{ id: 69, name: 'B', market: 'SSE50' },
{ id: 70, name: 'C', market: 'SSE50' },
{ id: 71, name: 'AAPL', market: 'SSE50' },
{ id: 72, name: '000123', market: 'SSE50' },
{ id: 73, name: 'A', market: 'SSE50' },
{ id: 74, name: 'B', market: 'SSE50' },
{ id: 75, name: 'C', market: 'SSE50' },
{ id: 76, name: 'AAPL', market: 'SSE50' },
{ id: 77, name: 'AAPL', market: 'SSE50' },
{ id: 78, name: 'AAPL', market: 'SSE50' },
{ id: 79, name: 'AAPL', market: 'SSE50' },
{ id: 80, name: 'AAPL', market: 'SSE50' },
{ id: 81, name: 'AAPL', market: 'SSE50' },
{ id: 82, name: 'AAPL', market: 'SSE50' },
{ id: 83, name: 'A', market: 'SSE50' },
{ id: 84, name: 'B', market: 'SSE50' },
{ id: 85, name: 'C', market: 'SSE50' },
{ id: 86, name: 'AAPL', market: 'SSE50' },
{ id: 87, name: 'AAPL', market: 'SSE50' },
{ id: 88, name: 'AAPL', market: 'SSE50' },
{ id: 89, name: 'AAPL', market: 'SSE50' },
{ id: 90, name: 'AAPL', market: 'SSE50' },
{ id: 91, name: 'AAPL', market: 'SSE50' },
{ id: 92, name: 'AAPL', market: 'SSE50' },
{ id: 93, name: 'A', market: 'SSE50' },
{ id: 94, name: 'B', market: 'SSE50' },
{ id: 95, name: 'C', market: 'SSE50' },
{ id: 96, name: 'AAPL', market: 'SSE50' },
{ id: 97, name: 'AAPL', market: 'SSE50' },
{ id: 98, name: 'AAPL', market: 'SSE50' },
{ id: 99, name: 'AAPL', market: 'SSE50' },
{ id: 100, name: 'AAPL', market: 'SSE50' },
{ id: 101, name: 'AAPL', market: 'SSE50' },
{ id: 102, name: 'AAPL', market: 'SSE50' },
{ id: 103, name: 'AAPL', market: 'SSE50' },
{ id: 104, name: 'AAPL', market: 'SSE50' },
{ id: 105, name: 'AAPL', market: 'SSE50' },

]
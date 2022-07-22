import React from 'react';
import Head from 'next/head'
import { Link,Box, TextField,Typography, CssBaseline, Autocomplete,Container,Stack,Button, createTheme, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Suspense } from "react";
import { ThemeProvider } from '@emotion/react';
import { NextLinkComposed } from '../src/Link.tsx';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

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
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 14,
          pb: 6,
          
        }}
      >
        
        <Container maxWidth="md" >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
              fontWeight='bold'
              sx={{
                background: "linear-gradient(45deg, #A22FCE, #FF7000)",
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
          >
            Stock Price Predictions
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Maybe some brief introduction of our project
          </Typography>
            <Stack
              direction='row'
            sx={{ pt: 4,  }}
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
                    width: 300,  }}
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
                  background: 'linear-gradient(45deg, #A22FCE, #FF7000)',
              }}>Go!</Button>
          </Stack>
        </Container>
        </Box>
      </ThemeProvider>
    </Suspense>
  )
}

//maintain a list of available stocks
const stocks = [{ id: 1, name: 'AAPL', market: 'NASDAQ' },
{ id: 2, name: '000123', market: 'SSE' },
{ id: 3, name: 'A', market: 'SSE' },
{ id: 4, name: 'B', market: 'SSE' },
{ id: 5, name: 'C', market: 'SSE' }]

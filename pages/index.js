
import Head from 'next/head'
import { Link,Box, Typography, CssBaseline, Grid,Container,Stack,Button, createTheme, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Suspense } from "react";
import { ThemeProvider } from '@emotion/react';
import { NextLinkComposed } from '../src/Link.tsx';

export default function Home() {

  const homeTheme = createTheme(
    {
      typography: {
        fontFamily: [
          'Montserrat'
        ]
      }
    }
  )
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
        
        <Container maxWidth="md">
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
              divider={<Divider flexItem/>}
            sx={{ pt: 4,  }}
            spacing={2}
              alignItems='center'
          >
            <Button component={NextLinkComposed} to={{pathname:'/stocks'}} variant="contained">Go!</Button>
            <Button variant="outlined">Maybe other stuff</Button>
          </Stack>
        </Container>
        </Box>
      </ThemeProvider>
    </Suspense>
  )
}


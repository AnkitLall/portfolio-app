import styled from '@emotion/styled';
import { Box, Container, Divider, Grid, Paper, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import profile from '../assets/profile.png';
import { StyledToolbar } from '../styledComponents/styledToolBar';



export default function Home() {
    return(
        <Container maxWidth='xxl' sx={{bgcolor: 'black'}}>
            <StyledToolbar />
            <Grid 
                container 
                spacing={2} 
                sx={{ flexDirection: { xs: "column", md: "row"}, height:'calc(100vh - 90px)' }}
            >
                <Grid 
                    item 
                    xs={12} 
                    md={6}
                    sx={{
                        display:'flex',
                        alignItems:'center'
                    }}
                >
                    <Box
                        sx={{
                            ml: 5,
                            backgroundColor: 'black',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize:"3.5rem",
                                textAlign:{xs: 'center', sm:'center', md:'left'}
                            }}
                        >
                            Software Developer & 
                            <Typography 
                                display={'inline'}
                                sx={{
                                    fontSize:"3.5rem",
                                    color:'pink'
                                }}
                            > Cloud</Typography> 
                            <Typography 
                                display={'inline'}
                                sx={{
                                    fontSize:"3.5rem",
                                    color:'pink'
                                }}
                            > Engineer</Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    md={6}
                    sx={{
                        display:'flex',
                        alignItems:'center'
                    }}
                >
                    <Box
                        component={'img'}
                        sx={{
                            backgroundColor: 'primary.dark',
                            width:'100%'
                        }}
                        src={profile}
                    >
                    </Box>
                </Grid>
            </Grid>

            <Divider />

            <Grid container  sx={{ flexDirection: { xs: "column", md: "row"} }}>
                <Grid item xs={12} md={6}>
                    <Typography>
                        Text
                    </Typography>
                </Grid>   
                <Grid container xs={12} md={6} direction={'column'}>
                    <Typography>
                        text2
                    </Typography>
                    <Typography>
                        text3
                    </Typography>
                </Grid>
            </Grid>

            <Divider />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Typography>xs=2</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
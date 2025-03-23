import React from 'react';
import './LoginPage.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LoginPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    minWidth: 500,
                    height: 500,
                    textAlign: 'center',
                    background: 'white',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: 'rgba(252, 181, 138, 1)'
                }}
            >
                <CardContent sx={{
                    background: 'rgba(255, 121, 40, 1)', color: 'white', borderRadius: 4, p: 2,
                    marginTop: -4.5,
                    width: 390,
                    marginLeft: 5
                }}>
                    <Typography sx={{
                        fontSize: 44, fontWeight: 'bold',
                        padding: 0
                    }}>
                        Welcome Back
                    </Typography>
                </CardContent>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 6, width: '25ch' },
                        mt: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        type="userName"
                        sx={{ minWidth: '350px', backgroundColor: 'rgb(252, 220, 201)',borderRadius:3, border:'solid 1'}}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ minWidth: '350px' , backgroundColor: 'rgb(252, 220, 201)',borderRadius:3, border:'solid 1'}}
                
                    />

                    <Button variant="contained"
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgba(255, 121, 40, 1)',
                            height: 40,
                            borderRadius: 37,
                            fontSize: 14,
                            padding: 0,
                            minWidth: '50px',
                            width: '100px'
                        }}
                    >
                        Login
                    </Button>

                </Box>
            </Card>
        </Box>
    );
}

import { Card, CardContent, TextField, Button, Divider, Typography } from '@mui/material';
import React from 'react'
import {Link } from 'react-router-dom';

const css = {
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: '25%',
        backgroundColor: "white",
        height: "640px",
        border: "1px solid darkgray"
    },
    body: {
        padding: 10,
    },
    logo: {
        width: "40%",
        marginLeft: "30%",
        marginTop: "20px",
    },
    heading: {
        color: "grey",
        textAlign: "center",
        fontSize: "18",
        fontWeight: 600,
    }
}

function SignupPage() {
    return (
        <div style={css.container}>
            <div style={css.box}>
                <div style={css.body}>
                    <div style={css.logo}>
                        <img src="assets/homePage/logo.png" width="100%" alt="logo" />
                    </div>
                    <h4 style={css.heading}>Sign up to see photos and videos from your friends.</h4>
                    <Button fullWidth sx={{ width: "91%", ml: 2, mr: 2 }} size="small" color="primary" variant="contained">Login With Facebook</Button>
                    <Divider sx={{ color: "#202020", mt: 1, width: "91%", ml: 2, mr: 2 }}>OR</Divider>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardContent>
                            <TextField fullWidth="xl" InputProps={{ disableUnderline: true }} size="small" id="filled-basic" label="Mobile Number or Email" variant="filled" />
                            <TextField fullWidth="xl" sx={{ marginTop: 1 }} InputProps={{ disableUnderline: true }} size="small" id="filled-basic" label="Full Name" variant="filled" />
                            <TextField fullWidth="xl" sx={{ marginTop: 1 }} InputProps={{ disableUnderline: true }} size="small" id="filled-basic" label="User Name" variant="filled" />
                            <TextField sx={{ marginTop: 1 }} InputProps={{ disableUnderline: true }} size="small" fullWidth="xl" id="filled-basic" label="Password" variant="filled" />
                            <p style={{ fontSize: "12px", textAlign: "center" }}>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                            <p style={{ fontSize: "12px", textAlign: "center" }}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                            <Button fullWidth sx={{ mt: 1 }} color="primary" variant="contained">Sign Up</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{border:"1px solid gray",mt:3}}>
                        <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            <Typography>Have an account?</Typography>
                            <Button variant='text' LinkComponent={Link} to="/" sx={{ fontSize: 14, color: "blue", mt: 1, ml: 1 }}>Login</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
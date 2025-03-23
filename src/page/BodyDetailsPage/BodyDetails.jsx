import React from "react";
import { TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BodyDetailsForm = () => {
    const handleClose = () => {
        window.location.href = '/login';
    };
    return (
        <Card sx={{ maxWidth: 550, mx: "auto", mt: 5, p: 3, borderRadius: 3, bgcolor: 'rgb(255, 255, 255)' }}>
            <Container maxWidth="xs" sx={{ position: "relative", p: 3 }}>
                <CardContent
                    sx={{
                        background: "rgba(255, 121, 40, 1)",
                        color: "white",
                        borderRadius: 4,
                        p: 2,
                        textAlign: "center",
                        position: "relative",
                        marginTop: -8,
                        width: 450,
                        marginLeft: -5
                    }}
                >
                    <Typography sx={{ fontSize: 44, fontWeight: "bold", p: 0, fontFamily: "Squada One" }}>
                        Body Details
                    </Typography>


                    <IconButton
                        onClick={handleClose}
                        sx={{
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            color: 'rgba(255, 121, 40, 1)',
                            marginLeft:54,
                            marginTop:-14,
                            width:25,
                            height:25,
                            '&:hover': {
                                backgroundColor: '#d32f2f',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </CardContent>


                <Grid container spacing={2} mt={4}>
                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: -4 }}>
                            Weight
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                }}
                            />
                            <Typography variant="body1">kg</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: 4 }}>
                            Height
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: -4 }}>
                            BMI
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                    marginLeft: 3
                                }}
                            />
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: 4 }}>
                            Chest
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: -4 }}>
                            West
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                    marginLeft: 3
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: 4 }}>
                            Hip
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: -4 }}>
                            Arm
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                    marginLeft: 3
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>


                    <Grid item xs={6} display="flex" gap={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ minWidth: 50, marginLeft: 4 }}>
                            Leg
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#FFEDE3",
                                    borderRadius: 1,
                                    width: "100px",
                                    mx: 1,
                                }}
                            />
                            <Typography variant="body1">cm</Typography>
                        </div>
                    </Grid>
                </Grid>



                {/* Checkboxes */}


                <Box mt={3}>
                    <Box display="flex" alignItems="center" marginLeft="90px" marginTop="40px">
                        <Typography variant="body1" fontWeight="bold" sx={{ mr: 1 }}>Heart Attack Problem</Typography>
                        <Checkbox size="small" sx={{ color: "black" }} />
                    </Box>
                    <Box display="flex" alignItems="center" mt={0} marginLeft="90px">
                        <Typography variant="body1" fontWeight="bold" sx={{ mr: 7 }}>Sugar Problem</Typography>
                        <Checkbox size="small" sx={{ color: "black" }} />
                    </Box>
                    <Box display="flex" alignItems="center" mt={0} marginLeft="90px">
                        <Typography variant="body1" fontWeight="bold" sx={{ mr: 4 }}>Cholesterol Problem</Typography>
                        <Checkbox size="small" sx={{ color: "black" }} />
                    </Box>
                </Box>



                {/* <Box mt={3}>
                    {["Heart attack problem", "Sugar problem", "Colostral problem"].map((problem, index) => (
                        <Box display="flex" alignItems="center" key={index}>
                            <Typography variant="body1" fontWeight="bold" sx={{ mr: 1 }}>{problem}</Typography>
                            <Checkbox size="small" sx={{ color: "black" }} />
                        </Box>
                    ))}
                </Box> */}


                {/* Save Button */}
                <Box mt={3} display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: 5,
                            width: 350,
                            border: "1px solid red",
                            textTransform: "none",
                            px: 3,
                            fontWeight: "bold",
                            marginLeft: "350px",
                            "&:hover": { backgroundColor: "#f8d7da" },
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Container>
        </Card>
    );
};


export default BodyDetailsForm;

import React from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RepeatIcon from '@mui/icons-material/LaptopMac';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent, timelineOppositeContentClasses } from '@mui/lab';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typed from 'typed.js';

const FrontPage = () => {


    const arr = [
        {
            icons: "https://cdn-icons-png.flaticon.com/128/1240/1240981.png",
            name: "HTML"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/732/732028.png",
            name: "CSS"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/721/721791.png",
            name: "JS"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/767/767953.png",
            name: "REACT"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/2491/2491475.png",
            name: "NODE.Js"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/460/460653.png",
            name: "SASS"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/2057/2057945.png",
            name: "Tailwind"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/9543/9543857.png",
            name: "SQL"
        },
        {
            icons: "https://cdn-icons-png.flaticon.com/128/2807/2807494.png",
            name: "C#"
        },
    ]

    return <>

        <Box sx={{ height: "100vh", position: "relative", backgroundColor: "coral" }}>


            <Box sx={{ position: "absolute", height: "7rem", width: "7rem", backgroundColor: "black", color: "white", borderBottomRightRadius: "20rem" }}>

                <Avatar sx={{ height: '5rem', width: "5rem", rotate: "315deg" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV42ikr2UR7zq-EYqyFoUuKGdhM0_1d7s68g&usqp=CAU' />
            </Box>
            <Stack
                sx={{ height: "100vh" }}
                flexDirection={'column'}
                justifyContent="center"
                textAlign="center"

            >
                <Box >
                    <LaptopMacIcon sx={{ fontSize: 150 }} />
                    <Typography variant='h4'>SKILLHUB</Typography>
                    <Typography sx={{ marginY: "1rem" }} variant='h5'>MOBILE APP DEVELOPER   </Typography>
                    <Switch />
                </Box>
            </Stack>
            <Avatar sx={{ position: "absolute", bottom: "0", paddingX: "1rem", paddingBottom: "1rem", left: "45%", borderRadius: "0" }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwlCGI66p4v3sK2DGfN29VQQIYEm0xvQ4lQ&usqp=CAU'
            />

            <Avatar sx={{ position: "absolute", paddingBottom: "1rem", bottom: "0", left: "51%", borderRadius: "0" }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwlCGI66p4v3sK2DGfN29VQQIYEm0xvQ4lQ&usqp=CAU'
            />
        </Box>
        <Box>
            <Stack
                sx={{ padding: "5rem", letterSpacing: "1rem", fontSize: "1.7rem" }}
                flexDirection={'column'}
                justifyContent="center"
                textAlign="center"
            >
                <Typography variant=''>ABOUT ME</Typography>
            </Stack>
            <Container>
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    spacing={3}
                    alignItems="center">
                    <Grid item xs={8} md={3} spacing={{ xs: 3, sm: 5 }} >
                        <Box>
                            <Paper>
                                <Card >
                                    <Avatar
                                        sx={{ borderRadius: "0", minHeight: "20rem", minWidth: "18rem" }}
                                        src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/myProfile.jpg"
                                    />
                                    <CardContent >
                                        <Stack
                                            flexDirection={'row'}
                                            justifyContent="space-between"
                                        >
                                            <Avatar sx={{ borderRadius: "0", paddingTop: "1rem", minHeight: "5rem", minWidth: "4rem" }}
                                                src='https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png'
                                            />
                                            <Avatar sx={{ borderRadius: "0", minHeight: "6rem", minWidth: "5rem" }}
                                                src='https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png'
                                            />
                                            <Avatar sx={{ borderRadius: "0", paddingTop: "1rem", minHeight: "5rem", minWidth: "4rem" }}
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF7cffn8-R5HxU5KqvAaBmDcTaMeL3qitXA&usqp=CAU'
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper  >
                            <Card>
                                <Box sx={{ backgroundColor: "lightpink", padding: "8px" }}>

                                    <FiberManualRecordIcon sx={{ color: "red" }} />
                                    <FiberManualRecordIcon sx={{ color: "coral" }} />
                                    <FiberManualRecordIcon sx={{ color: "green" }} />
                                </Box>
                                <CardContent>
                                    <Typography sx={{ padding: "2rem" }}>Hi :)

                                        👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                        <Paper>


                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box sx={{ height: "", backgroundColor: "coral", marginTop: "6rem", paddingBottom: "3rem" }}>
            <Stack
                sx={{ padding: "4rem", letterSpacing: "1rem", fontSize: "1.7rem" }}
                flexDirection={'column'}
                justifyContent="center"
                textAlign="center"
            >
                <Typography variant=''>PROJECTS</Typography>
            </Stack>

            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch"
                    spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 340, padding: ".5rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
                                    alt="green iguana"
                                />

                                <Stack
                                    flexDirection={'column'}
                                    justifyContent="center"
                                    textAlign="center"

                                >
                                    <Box>
                                        <Button sx={{ borderStartStartRadius: "0", borderTopRightRadius: "0", marginBottom: "1rem" }} variant="contained" size="small">
                                            2023
                                        </Button>
                                    </Box>
                                    <Typography sx={{ letterSpacing: ".3rem", fontSize: "1.5rem", paddingBottom: "1rem" }}>
                                        ANIMAL SHELTER
                                    </Typography>
                                </Stack>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 340, padding: ".5rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/photography/p1.jpg"
                                    alt="green iguana"
                                />
                                <Stack
                                    flexDirection={'column'}
                                    justifyContent="center"
                                    textAlign="center"

                                >
                                    <Box>
                                        <Button sx={{ borderStartStartRadius: "0", borderTopRightRadius: "0", marginBottom: "1rem" }} variant="contained" size="small">
                                            2023
                                        </Button>
                                    </Box>
                                    <Typography sx={{ letterSpacing: ".3rem", fontSize: "1.5rem", paddingBottom: "1rem" }}>
                                        PHOTOGRAPHY
                                    </Typography>
                                </Stack>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} >
                        <Card sx={{ maxWidth: 340, padding: ".5rem" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/adventure/p1.jpg"
                                    alt="green iguana"
                                />
                                <Stack
                                    flexDirection={'column'}
                                    justifyContent="center"
                                    textAlign="center"

                                >
                                    <Box>
                                        <Button sx={{ borderStartStartRadius: "0", borderTopRightRadius: "0", marginBottom: "1rem" }} variant="contained" size="small">
                                            2023
                                        </Button>
                                    </Box>
                                    <Typography sx={{ letterSpacing: ".3rem", fontSize: "1.5rem", paddingBottom: "1rem" }}>
                                        OBJECT VIEWER
                                    </Typography>
                                </Stack>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{
                height: "",
                backgroundColor: "black",
                marginTop: "6rem"
            }}>
                <Stack
                    sx={{ padding: "5rem", letterSpacing: "1rem", color: 'white', fontSize: "1.7rem" }}
                    flexDirection={'column'}
                    justifyContent="center"
                    textAlign="center"
                >
                    <Typography variant=''>SKILLS</Typography>
                </Stack>
                <Container>
                    <Stack
                        sx={{ color: 'white', }}
                        flexDirection={'row'}
                        justifyContent="space-evenly"
                    >
                        <Grid container>
                            {
                                arr.map(item => <Grid item xs={4} sm={3} md={2} lg
                                    sx={{ padding: ".4rem" }}
                                >
                                    <CardContent sx={{ backgroundColor: "darkgray", borderRadius: ".5rem" }} >
                                        <Stack justifyContent='center' direction="row" alignContent="end" >
                                            <Avatar sx={{ borderRadius: "0", height: "3rem", width: "3rem" }} src={item.icons} />
                                        </Stack>
                                        <Box sx={{ textAlign: "center", color: "black", marginTop: "5px" }} >{item.name}</Box>
                                    </CardContent>
                                </Grid>)
                            }
                        </Grid>
                    </Stack>
                </Container>

                <Box sx={{ height: "", backgroundColor: "coral", marginTop: "5rem" }}>

                    <Stack
                        sx={{ padding: "5rem", letterSpacing: "1rem", color: 'white', fontSize: "1.7rem" }}
                        flexDirection={'column'}
                        justifyContent="center"
                        textAlign="center"
                    >
                        <Typography variant=''> EXPERIENCE</Typography>
                    </Stack>
                    <Grid container>
                        <Grid xs={12} md={6}  >
                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.2,
                                    },
                                }}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        12:30 am
                                    </TimelineOppositeContent>
                                    <TimelineSeparator >
                                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKToOByk50dG-I8mmEe24jDe4NCUaNaQi2cg&usqp=CAU' />
                                        <TimelineConnector sx={{ height: "13rem" }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card sx={{ height: "14rem" }}>
                                            <CardActions>
                                                <Stack>
                                                    <Typography sx={{
                                                        backgroundColor: "chocolate",
                                                        width: "9rem", borderRadius: "15px",
                                                        textAlign: "center",
                                                        marginY: ".3rem"
                                                    }}
                                                    >Angular 8/9/10
                                                    </Typography>
                                                    <Box>
                                                        <Typography variant='h6'>Front-End Developer</Typography>
                                                        <Typography variant='h6'>
                                                            DefOpenSource</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations.
                                                        </Typography>


                                                    </Box>
                                                </Stack>
                                            </CardActions>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        07/2023
                                    </TimelineOppositeContent>
                                    <TimelineSeparator >
                                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKToOByk50dG-I8mmEe24jDe4NCUaNaQi2cg&usqp=CAU' />
                                        <TimelineConnector sx={{ height: "12rem" }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card sx={{ height: "15rem" }}>
                                            <CardActions>
                                                <Stack>
                                                    <Typography sx={{
                                                        backgroundColor: "chocolate",
                                                        width: "9rem", borderRadius: "15px",
                                                        textAlign: "center",
                                                        marginY: ".3rem"
                                                    }}
                                                    >React 8/9/10
                                                    </Typography>
                                                    <Box>
                                                        <Typography variant='h6'>Front-End Developer</Typography>
                                                        <Typography variant='h6'>
                                                            DefOpenSource</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            React is a free and open-source front-end JavaScript library for building user interfaces based on components.  React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js
                                                        </Typography>


                                                    </Box>
                                                </Stack>
                                            </CardActions>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </Grid>
                        <Grid xs={12} md={6}  >
                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.2,
                                    },
                                }}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        12:30 am
                                    </TimelineOppositeContent>
                                    <TimelineSeparator >
                                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKToOByk50dG-I8mmEe24jDe4NCUaNaQi2cg&usqp=CAU' />
                                        <TimelineConnector sx={{ height: "13rem" }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card sx={{ height: "14rem" }}>
                                            <CardActions>
                                                <Stack>
                                                    <Typography sx={{
                                                        backgroundColor: "chocolate",
                                                        width: "9rem", borderRadius: "15px",
                                                        textAlign: "center",
                                                        marginY: ".3rem"
                                                    }}
                                                    >JavaScript 8/9/10
                                                    </Typography>
                                                    <Box>
                                                        <Typography variant='h6'>Front-End Developer</Typography>
                                                        <Typography variant='h6'>
                                                            DefOpenSource</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
                                                        </Typography>


                                                    </Box>
                                                </Stack>
                                            </CardActions>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        07/2023
                                    </TimelineOppositeContent>
                                    <TimelineSeparator >
                                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKToOByk50dG-I8mmEe24jDe4NCUaNaQi2cg&usqp=CAU' />
                                        <TimelineConnector sx={{ height: "12rem" }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card sx={{ height: "15rem" }}>
                                            <CardActions>
                                                <Stack>
                                                    <Typography sx={{
                                                        backgroundColor: "chocolate",
                                                        width: "9rem", borderRadius: "15px",
                                                        textAlign: "center",
                                                        marginY: ".3rem"
                                                    }}
                                                    >Redux 8/9/10
                                                    </Typography>
                                                    <Box>
                                                        <Typography variant='h6'>Front-End Developer</Typography>
                                                        <Typography variant='h6'>
                                                            DefOpenSource</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography>
                                                            Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
                                                        </Typography>


                                                    </Box>
                                                </Stack>
                                            </CardActions>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </Grid>

                    </Grid>

                </Box>

            </Box>

        </Box >
        <Box sx={{ backgroundColor: "black", height: "" }}>

            <Stack
                direction={"row"}
                spacing={4}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ paddingY: "2rem" }}
            >
                <InstagramIcon sx={{ color: "white", fontSize: "3rem" }} />
                <GitHubIcon sx={{ color: "white", fontSize: "3rem" }} />
            </Stack>
            <Stack justifyContent={'center'}
                alignItems={'center'} sx={{ color: "white", fontSize: "3rem", paddingBottom: "3rem", }}>
                <Typography>Copyright © Ishwar Rajput</Typography>
            </Stack>
        </Box>
    </>
}

export default FrontPage
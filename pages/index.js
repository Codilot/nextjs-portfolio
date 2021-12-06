import Head from '../components/Head'
import Logo from '../components/Logo'
import Hero from '../components/Hero'
import HeroDetails from '../components/HeroDetails'
import Footer from '../components/Footer'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#864cff',
        },
        text: {
            primary: '#333333',
        },
    },
    typography: {
        fontFamily: [
            '"Montserrat"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
        ].join(','),
        fontWeightRegular: 300,
        fontWeightMedium: 900,
        fontWeightBold: 900,
    },
})
const linkStyles = {
    textDecoration : "none"
}
const cardStyles = {
    color: 'text.primary',
    border: '1px solid #eaeaea',
    borderRadius: '4px',
    transition: `color 0.15s ease, border-color 0.15s ease`,
    minHeight: "150px",
    ":hover": {
        color: 'primary.main',
        borderColor: 'primary.main',
    },
    ":focus": {
        color: 'primary.main',
        borderColor: 'primary.main',
    },
    ":active": {
        color: 'primary.main',
        borderColor: 'primary.main',
    },
    '& h3': {
        fontSize: "1.5rem",
        fontWeight: 900
    },
}

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Head />
            <Container maxWidth="lg">
                <Logo />
                <Hero />

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Link href="#" rel="noreferrer" sx={linkStyles}>
                            <Card variant="outlined" sx={cardStyles}>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        gutterBottom
                                    >
                                        Prototypes &rarr;
                                    </Typography>
                                    <Typography variant="body1">
                                        Coming soon: Have a look at some
                                        prototypes I've built recently.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="#" rel="noreferrer" sx={linkStyles}>
                            <Card variant="outlined" sx={cardStyles}>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        gutterBottom
                                    >
                                        Designs &rarr;
                                    </Typography>
                                    <Typography variant="body1">
                                        Coming soon: Learn more about my
                                        projects in graphic and editiorial
                                        design.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link
                            href="https://github.com/Codilot"
                            rel="noreferrer"
                            sx={linkStyles}
                        >
                            <Card variant="outlined" sx={cardStyles}>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        gutterBottom
                                    >
                                        Experiments &rarr;
                                    </Typography>
                                    <Typography variant="body1">
                                        I have worked on some extra-curriculum
                                        projects and coding experiments. You can
                                        take a look at these on my GitHub
                                        account.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link
                            href="https://github.com/Codilot"
                            rel="noreferrer"
                            sx={linkStyles}
                        >
                            <Card variant="outlined" sx={cardStyles}>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        gutterBottom
                                    >
                                        Hackergarden &rarr;
                                    </Typography>
                                    <Typography variant="body1">
                                        I also combine tech with growing
                                        open-pollinated vegetable varieties in
                                        my “hackergarden” for seed saving
                                        projects.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    )
}

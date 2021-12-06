import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Hero = () => {
    const headlineStyles = {
        fontWeight: 900,
        fontSize: '2.5rem',
        color: 'text.primary',
        sm: {
            lineHeight: 1.15,
            fontSize: '4rem',
        },
    }
    const sublineStyles = {
        fontSize: '1.2rem',
        color: 'text.primary',
        sm: {
            lineHeight: 1.5,
            fontSize: '1.5rem',
        },
    }
    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '400px',
    }

    return (
        <Box sx={boxStyles}>
            <Typography
                sx={headlineStyles}
                variant="h1"
                component="h1"
                gutterBottom
                align="center"
            >
                I build interfaces, <br />
                prototypes and design systems.
            </Typography>

            <Typography
                sx={sublineStyles}
                variant="h2"
                gutterBottom
                component="h2"
                align="center"
            >
                And help your software products grow fast.
            </Typography>
        </Box>
    )
}

export default Hero

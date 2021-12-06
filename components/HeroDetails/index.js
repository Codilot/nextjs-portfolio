import Grid from '@mui/material/Grid'

const HeroDetails = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                left
            </Grid>
            <Grid  item xs={12} sm={6}>
                right
            </Grid>
        </Grid>
    )
}

export default HeroDetails

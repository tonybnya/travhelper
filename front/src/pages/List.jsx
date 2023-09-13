import {Grid, Typography, InputLabel, MenuItem, FormControl, Select, CircularProgress} from '@material-ui/core';
import useStyles from './lisStyles';
import PlaceDetails from './PlaceDetails'
const List = ({places, type, setType, rating, setRating, isLoading}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Restaurants, Hotels and Attractions around you
                </Typography>
                {isLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress size="5rem"/>
                    </div>
                ): (
                <>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.label}>Type</InputLabel>
                    <Select className={classes.label} value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value='restaurants'>Restaurants</MenuItem>
                        <MenuItem value='hotels'>Hotels</MenuItem>
                        <MenuItem value='attractions'>Attractions</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.label}>Rating</InputLabel>
                    <Select className={classes.label} value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value={0}>ALL</MenuItem>
                        <MenuItem value={3}>Above 3.0</MenuItem>
                        <MenuItem value={4}>Above 4.0</MenuItem>
                        <MenuItem value={4.5}>Above 4.5</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places ?.map((place, i) => (
                        <Grid item key={i} xs={12}>
                            <PlaceDetails place={place}/>
                        </Grid>
                    ))}
                    </Grid> 
                </>
                )}
        </div>
    )
}

export default List;
// import { Autocomplete } from '@material-ui/lab';
import { GoogleMap, OverlayView } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating'
import useStyles from './mapStyles';
import { useLocation } from 'react-router-dom';
// import useStyles from './styles.js';

const Map = ({coordinates, places, handleChildClick, setCoordinates, onBoundsChanged, handleLoad}) => {
  // if (props) {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    if(data) {
      setCoordinates(data);
    }
  // }
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
  <div className="col-span-2 rounded shadow-inner border-4 border-black">
    <GoogleMap
      defaultCenter={coordinates}
    center={coordinates} 
    zoom={14}
    margin={[50, 50, 50, 50]}
    mapContainerStyle={{width: '100%', height: '100%'}}
    onLoad={handleLoad}
    onBoundsChanged={onBoundsChanged}
    onChildClick={handleChildClick}
    onChange={(e) => {
      setCoordinates({lat: e.center.lat, lng: e.center.lng});
    }}
    >
      {places?.map((place, i) => (
        <>
          <OverlayView key={i} 
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          position={{lat:Number(place.latitude), lng:Number(place.longitude)}}>
              {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large' /> 
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img className={classes.pointer}
                      src={place.photo? place.photo.images.large.url : 'https://planetcode.in/assets/images/default-image-png-9-300x200.png'}
                      alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )
            }
          </OverlayView>
        </>
      ))}
    </GoogleMap>
  </div>
  )
};

export default Map;
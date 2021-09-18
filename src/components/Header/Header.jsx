import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";

import useStyles from './styles';

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
    // const [autocomplete, setAutocomplete] = useState(null);

    // const onLoad = (autoC) => setAutocomplete(autoC);

    // const onPlaceChanged = () => {
    //     const lat = autocomplete.getPlace().geometry.location.lat();
    //     const lng = autocomplete.getPlace().geometry.location.lng();

    //     setCoordinates({lat, lng});
    // }

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title} >
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="mode"
                  target="_blank" href="https://github.com/vanisingh-24/Travelogue"
                  className={classes.button}
                >
                <GitHubIcon/>
                </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        Explore New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
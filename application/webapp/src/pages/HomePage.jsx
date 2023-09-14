/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  Autocomplete, Box, FormGroup, TextField,
} from '@mui/material';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SecurityIcon from '@mui/icons-material/Security';
import NavBar from '../assets/NavBar';
import SimpleDialog from '../Components/DetailsDialog';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(-1);
  const [data, setData] = useState(
    [],
  );
  const [county, setCounty] = useState([]);
  const [weather, setWeather] = useState(true);
  const [health, setHealth] = useState(true);
  const [fire, setFire] = useState(true);
  const [security, setSecurity] = useState(true);
  const [eventDetail, setEventDetail] = useState({});

  const [viewport, setViewport] = useState({
    latitude: 37.445538,
    longitude: -120.195728,
    zoom: 5,
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = async (e) => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/event/${e.id}`);

    const body = await res.json();
    setOpen(true);
    setEventDetail(body.body);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createMarker = () => {
    const iconMap = {
      WeatherEvent: <ThunderstormIcon sx={{ color: '#00c0fa' }} />,
      WildfireEvent: <LocalFireDepartmentIcon sx={{ color: 'orange' }} />,
      CovidEvent: <CoronavirusIcon sx={{ color: '#ff003c' }} />,
      SecurityEvent: <SecurityIcon sx={{ color: 'yellow' }} />,
    };
    if (!data || data.length === 0) {
      return [];
    }

    return data.map((event) => (
      <Marker
        key={event.id}
        latitude={+event.lat}
        longitude={+event.lon}
      >
        <IconButton onClick={() => handleClickOpen(event)}>
          {iconMap[event.type]}
        </IconButton>
      </Marker>
    ));
  };

  const onSearchClick = () => {
    const filter = [];

    if (weather) { filter.push('WeatherEvent'); }
    if (health) { filter.push('CovidEvent'); }
    if (fire) { filter.push('WildfireEvent'); }
    if (security) { filter.push('SecurityEvent'); }

    fetch(`${process.env.REACT_APP_BASE_URL}/event/all?location=${searchQuery === -1 || undefined ? '-1' : searchQuery}&type=${filter.join(',')}`)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.body);
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/event/all`)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.body);
      })
      .catch(() => {
      });
    fetch(`${process.env.REACT_APP_BASE_URL}/counties`)
      .then((response) => response.json())
      .then((apiData) => {
        setCounty(apiData.body);
      })
      .catch(() => {
      });
  }, []);

  return (
    <>
      <NavBar />
      <div
        className="content-container"
        style={{
          display: 'grid',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '350px 2fr',
          minHeight: '100vh',
          flex: 'center',
        }}
      >
        <div style={{
          border: 'solid black',
          backgroundColor: '#004466',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
          minHeight: '100vh',
        }}
        >
          <div>
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                width: '300px',
                paddingRight: '20px',
              }}
            >
              <Autocomplete
                id="county-select"
                sx={{ width: 300 }}
                options={county}
                autoHighlight
                getOptionLabel={(option) => option.name || ''}
                onChange={(_, newValue) => {
                  setSearchQuery(newValue !== null ? newValue.id : '');
                }}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a county"
                    sx={{
                      '& label.Mui-focused': {
                        color: 'black',
                        fontSize: '16px',
                        top: '5px',
                      },
                    }}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Paper>
            <div style={{
              width: '300px',
              margin: '10px',
              align: 'left',
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked value={health} onChange={() => setHealth(!health)} />} label="Health/Infections" />
                <FormControlLabel control={<Checkbox defaultChecked value={weather} onChange={() => setWeather(!weather)} />} label="Weather" />
                <FormControlLabel control={<Checkbox defaultChecked value={fire} onChange={() => setFire(!fire)} />} label="Wildfire" />
                <FormControlLabel control={<Checkbox defaultChecked value={security} onChange={() => setSecurity(!security)} />} label="Security" />
              </FormGroup>
            </div>
            <div>
              <IconButton
                sx={{
                  ml: 1,
                  flex: 1,
                  color: 'black',
                  backgroundColor: '#282c34',
                  '&:hover': { backgroundColor: '#1976d2' },
                  width: '200px',
                  height: '40px',
                  border: 'none',
                  borderRadius: 1,
                  boxShadow: 2,
                }}
                type="button"
                onClick={onSearchClick}
              >
                <span style={{ p: '2px 4px', color: '#ffbf00', fontSize: '20px' }}>
                  Search
                </span>
                <SearchIcon sx={{ color: '#ffbf00', padding: '5px' }} />
              </IconButton>
            </div>
          </div>
        </div>
        <div
          style={{
            border: 'solid black',
            overflow: 'hidden',
          }}
        >
          <ReactMapGL
            reuseMaps
            {...viewport}
            mapStyle="mapbox://styles/mapbox/dark-v11"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onMove={(event) => setViewport(event.viewState)}
          >
            {createMarker()}
          </ReactMapGL>
        </div>
      </div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        event={eventDetail}
      />
    </>
  );
}

export default HomePage;

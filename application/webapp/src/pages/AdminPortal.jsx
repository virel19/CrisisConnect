/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  TextField, FormGroup, RadioGroup, Button, Box, Autocomplete, Alert,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../assets/NavBar';
import WeatherForm from '../Components/WeatherForm';
import SecurityForm from '../Components/SecurityForm';
import HealthForm from '../Components/HealthForm';
import WildfireForm from '../Components/WildfireForm';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function AdminPortal() {
  const [marker, setMarker] = useState({ lng: 90, lat: 90 });
  const [viewport, setViewport] = useState({
    latitude: 37.445538,
    longitude: -120.195728,
    width: '100vw',
    height: '100vh',
    zoom: 5,
  });
  const [eventType, setEventType] = useState('health');
  const [childData, setChildData] = useState({});
  const [searchQuery, setSearchQuery] = useState(-1);
  const [county, setCounty] = useState([]);
  const [error, setError] = useState({ field: undefined, message: undefined, state: false });
  const [save, setSave] = useState({ saved: false, message: undefined });
  const [title, setTitle] = useState('');

  const getDataForm = (data) => {
    setChildData({
      ...childData,
      [data.key]: data[data.key],
    });
  };

  const addAddress = async () => {
    if (marker.lat === 90 && marker.lng === 90) {
      return { status: false };
    }
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/address`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...marker,
      }),
    });

    return res.json();
  };

  const addWeatherEvent = async () => {
    const address = await addAddress();
    if (!address.status) {
      setError({ field: 'address', message: 'Address must be selected on the map', state: true });
      return;
    }

    if (searchQuery < 0) {
      setError({ field: 'county', message: 'No county choosen', state: true });
      return;
    }

    if (!childData.name) {
      setError({ field: 'title', message: 'title must be a string', state: true });
      return;
    }

    if (Number.isNaN(+childData.temperature)) {
      setError({ field: 'temperature', message: 'temperature must be a number', state: true });
      return;
    }

    if (Number.isNaN(+childData.wind_speed)) {
      setError({ field: 'wind speed', message: 'wind speed must be a number', state: true });
      return;
    }

    if (Number.isNaN(+childData.precipitation)) {
      setError({ field: 'precipitation', message: 'precipitation must be a number', state: true });
      return;
    }

    if (Number.isNaN(+childData.uv_index)) {
      setError({ field: 'uv index', message: 'uv index must be a number', state: true });
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/event/weather`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: childData.name,
        CountyId: +searchQuery,
        county_name: county[searchQuery].name,
        AddressId: address.body.id,
        temperature: childData.temperature,
        wind_speed: childData.wind_speed,
        precipitation: childData.precipitation,
        uv_index: childData.uv_index,
      }),
    });

    const body = await res.json();

    if (!body.status) {
      setError({ field: 'api', message: body.error, state: true });
    } else {
      setSave({ saved: true, message: body.message });
      setError({ state: false });
    }
  };

  const addSecurityEvent = async () => {
    const address = await addAddress();
    if (!address.status) {
      setError({ field: 'address', message: 'Address must be selected on the map', state: true });
      return;
    }

    if (searchQuery < 0) {
      setError({ field: 'county', message: 'No county choosen', state: true });
      return;
    }

    if (!childData.name) {
      setError({ field: 'title', message: 'title must be a string', state: true });
      return;
    }

    if (!childData.incident) {
      setError({ field: 'incident', message: 'incident must be a number', state: true });
      return;
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(dateRegex.test(childData.date))) {
      setError({ field: 'date', message: 'date must be in this form: mm/dd/year', state: true });
      return;
    }

    const date = new Date(childData.date);

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/event/security`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: childData.name,
        county_name: county[searchQuery - 1].name,
        CountyId: +searchQuery,
        AddressId: address.body.id,
        reported_incident: childData.incident,
        date: date.toISOString().slice(0, 19).replace('T', ' '),
      }),
    });

    const body = await res.json();

    if (!body.status) {
      setError({ field: 'api', message: body.error, state: true });
    } else {
      setSave({ saved: true, message: body.message });
      setError({ state: false });
    }
  };

  const addHealthEvent = async () => {
    const address = await addAddress();
    if (!address.status) {
      setError({ field: 'address', message: 'Address must be selected on the map', state: true });
      return;
    }

    if (searchQuery < 0) {
      setError({ field: 'county', message: 'No county choosen', state: true });
      return;
    }

    if (!childData.name) {
      setError({ field: 'title', message: 'title must be a string', state: true });
      return;
    }

    if (Number.isNaN(+childData.cases)) {
      setError({ field: 'covid_cases', message: 'cases must be a number', state: true });
      return;
    }

    if (Number.isNaN(+childData.death)) {
      setError({ field: 'death', message: 'death must be a number', state: true });
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/event/health`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: childData.name,
        county_name: county[searchQuery].name,
        CountyId: +searchQuery,
        AddressId: address.body.id,
        covid_cases: childData.cases,
        covid_death: childData.death,
      }),
    });

    const body = await res.json();

    if (!body.status) {
      setError({ field: 'api', message: body.error, state: true });
    } else {
      setSave({ saved: true, message: body.message });
      setError({ state: false });
    }
  };

  const addFireEvent = async () => {
    const address = await addAddress();
    if (!address.status) {
      setError({ field: 'address', message: 'Address must be selected on the map', state: true });
      return;
    }

    if (searchQuery < 0) {
      setError({ field: 'county', message: 'No county choosen', state: true });
      return;
    }

    if (!childData.name) {
      setError({ field: 'title', message: 'title must be a string', state: true });
      return;
    }

    if (Number.isNaN(+childData.evac_level)) {
      setError({ field: 'evac_level', message: 'evac level must be a number', state: true });
      return;
    }

    if (Number.isNaN(+childData.wildfire_count)) {
      setError({ field: 'wildfire_count', message: 'wildfire count must be a number', state: true });
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/event/wildfire`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: childData.name,
        county_name: county[searchQuery].name,
        CountyId: +searchQuery,
        AddressId: address.body.id,
        wildfire_count: childData.wildfire_count,
        evac_level: childData.evac_level,
      }),
    });

    const body = await res.json();

    if (!body.status) {
      setError({ field: 'api', message: body.error, state: true });
    } else {
      setSave({ saved: true, message: body.message });
      setError({ state: false });
    }
  };

  const createEventMap = {
    weather: addWeatherEvent,
    health: addHealthEvent,
    fire: addFireEvent,
    security: addSecurityEvent,
  };

  const createMarker = () => (
    <Marker
      latitude={marker.lat}
      longitude={marker.lng}
    />
  );

  const onMapClick = (event) => {
    setMarker({ lat: event.lngLat.lat, lng: event.lngLat.lng });

    return createMarker();
  };

  const eventFormMap = {
    weather: WeatherForm,
    security: SecurityForm,
    health: HealthForm,
    fire: WildfireForm,
  };

  useEffect(() => {
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        minWidth: '96dvw',
        minHeight: '75dvh',
        paddingTop: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
      >
        <div style={{
          border: 'black solid',
          backgroundColor: '#004466',
          height: 'auto',
          padding: '20px',
        }}
        >
          <h3>Push Alert</h3>
          <div>
            <form>
              <TextField
                name="title"
                label="Title"
                key="title"
                value={title}
                defaultValue={title}
                margin="normal"
                sx={{
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                }}
                style={{
                  width: '100%',
                }}
                onChange={(e) => {
                  setChildData({
                    ...childData,
                    name: e.target.value,
                  });
                  setTitle(e.target.value);
                }}
              />
              <Autocomplete
                id="county-select"
                key="country_select"
                options={county}
                autoHighlight
                sx={{
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                }}
                getOptionLabel={(option) => option.name || ''}
                onChange={(_, newValue) => {
                  console.log(newValue);
                  setSearchQuery(newValue !== null ? newValue.id : '');
                }}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    key="country"
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
              {eventType !== 'none' ? eventFormMap[eventType]({ getDataForm }) : <div />}
              <FormGroup>
                <RadioGroup defaultValue="Health/Infections" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <FormControlLabel
                    value="Health/Infections"
                    control={<Radio />}
                    label="Health/Infections"
                    onClick={() => {
                      setEventType('health');
                      setTitle('');
                    }}
                  />
                  <FormControlLabel
                    value="Weather"
                    control={<Radio />}
                    label="Weather"
                    onClick={() => {
                      setEventType('weather');
                      setTitle('');
                    }}
                  />
                  <FormControlLabel
                    value="Wildfire"
                    control={<Radio />}
                    label="Wildfire"
                    onClick={() => {
                      setEventType('fire');
                      setTitle('');
                    }}
                  />
                  <FormControlLabel
                    value="Security"
                    control={<Radio />}
                    label="Security"
                    onClick={() => {
                      setEventType('security');
                      setTitle('');
                    }}
                  />
                </RadioGroup>
              </FormGroup>
              <Button
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
                  marginTop: '40px',
                }}
                onClick={() => {
                  createEventMap[eventType]();
                  setChildData({});
                }}
              >
                <span style={{
                  p: '2px 4px',
                  color: '#ffbf00',
                  fontSize: '20px',
                }}
                >
                  Send Alert
                </span>
              </Button>
            </form>
            {(error.state) ? <Alert onClose={() => { setError({ state: false }); }} severity="error">{ error.message }</Alert> : <div />}
            {(save.saved && !error.state) ? <Alert onClose={() => { setSave({ saved: false }); }} severity="success">{ save.message }</Alert> : <div />}
          </div>
        </div>
        <ReactMapGL
          reuseMaps
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onMove={(event) => setViewport(event.viewState)}
          onClick={(event) => onMapClick(event)}
        >
          {createMarker()}
        </ReactMapGL>
      </div>
    </>
  );
}

export default AdminPortal;

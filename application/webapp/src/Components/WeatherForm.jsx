import React from 'react';
import { TextField } from '@mui/material';

function WeatherForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getDataForm } = props;

  return (
    <>
      <TextField
        name="temperature"
        label="Temperature"
        variant="outlined"
        margin="normal"
        key="temperature"
        onChange={(event) => {
          getDataForm({
            temperature: event.target.value,
            key: 'temperature',
          });
        }}
        sx={{
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
        style={{
          width: '100%',
        }}
      />
      <TextField
        name="wind_speed"
        label="Wind speed"
        variant="outlined"
        margin="normal"
        key="wind_speed"
        onChange={(event) => {
          getDataForm({
            wind_speed: event.target.value,
            key: 'wind_speed',
          });
        }}
        sx={{
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
        style={{
          width: '100%',
        }}
      />
      <TextField
        name="precipitation"
        label="Precipitation"
        variant="outlined"
        margin="normal"
        key="precipitation"
        onChange={(event) => {
          getDataForm({
            precipitation: event.target.value,
            key: 'precipitation',
          });
        }}
        sx={{
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
        style={{
          width: '100%',
        }}
      />
      <TextField
        name="uv_index"
        label="UV Index"
        key="uv_index"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          getDataForm({
            uv_index: event.target.value,
            key: 'uv_index',
          });
        }}
        sx={{
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
        style={{
          width: '100%',
        }}
      />
    </>
  );
}

export default WeatherForm;

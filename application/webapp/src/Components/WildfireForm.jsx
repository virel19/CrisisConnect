import React from 'react';
import { TextField } from '@mui/material';

function WildfireForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getDataForm } = props;

  return (
    <>
      <TextField
        name="evac_level"
        label="Evacuation level"
        variant="outlined"
        margin="normal"
        key="evac_level"
        sx={{
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
        onChange={(event) => {
          getDataForm({
            evac_level: event.target.value,
            key: 'evac_level',
          });
        }}
        style={{
          width: '100%',
        }}
      />
      <TextField
        name="wildfire_count"
        label="Wildfire count"
        key="wildfire_count"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          getDataForm({
            wildfire_count: event.target.value,
            key: 'wildfire_count',
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

export default WildfireForm;

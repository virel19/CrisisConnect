import React from 'react';
import { TextField } from '@mui/material';

function SecurityForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getDataForm } = props;
  return (
    <>
      <TextField
        name="incident"
        label="Incident"
        variant="outlined"
        margin="normal"
        key="incident"
        onChange={(event) => {
          getDataForm({
            incident: event.target.value,
            key: 'incident',
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
        name="date"
        label="Date"
        variant="outlined"
        margin="normal"
        key="date"
        onChange={(event) => {
          getDataForm({
            date: event.target.value,
            key: 'date',
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

export default SecurityForm;

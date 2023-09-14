import React from 'react';
import { TextField } from '@mui/material';

function HealthForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getDataForm } = props;

  return (
    <>
      <TextField
        name="cases"
        label="Cases"
        variant="outlined"
        key="cases"
        margin="normal"
        onChange={(event) => {
          getDataForm({
            cases: event.target.value,
            key: 'cases',
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
        name="death"
        label="Death"
        key="death"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          getDataForm({
            death: event.target.value,
            key: 'death',
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

export default HealthForm;

/* eslint-disable react/prop-types */
import React from 'react';
import {
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

function Weather(props) {
  const {
    event,
  } = props;

  return (
    <DialogContent>
      <DialogContentText>
        County name:
        {' '}
        {event.county_name}
        <br />
        Temperature:
        {' '}
        {event.temperature}
        {' '}
        °F
        <br />
        Wind speed:
        {' '}
        {event.wind_speed}
        {' '}
        mph
        <br />
        Precipitation:
        {' '}
        {event.precipitation}
        {' '}
        mm
        <br />
        UV Index:
        {' '}
        {event.uv_index}
      </DialogContentText>
    </DialogContent>
  );
}

function Wildfire(props) {
  const {
    event,
  } = props;

  return (
    <DialogContent>
      <DialogContentText>
        County name:
        {' '}
        {event.county_name}
        <br />
        Wilfire count:
        {' '}
        {event.wildfire_count}
        <br />
        Evacuation level:
        {' '}
        {event.evac_level}
      </DialogContentText>
    </DialogContent>
  );
}

function Security(props) {
  const {
    event,
  } = props;

  return (
    <DialogContent>
      <DialogContentText>
        County name:
        {' '}
        {event.county_name}
        <br />
        Reported incident:
        {' '}
        {event.reported_incident}
        <br />
        Date:
        {' '}
        {Date(event.date).toString()}
      </DialogContentText>
    </DialogContent>
  );
}

function Covid(props) {
  const {
    event,
  } = props;

  return (
    <DialogContent>
      <DialogContentText>
        Covid Case:
        {' '}
        {event.covid_cases}
        <br />
        Covid Death:
        {' '}
        {event.covid_death}
        <br />
        Date:
        {' '}
        {Date(event.createdAt).toString()}
      </DialogContentText>
    </DialogContent>
  );
}

function SimpleDialog(props) {
  const {
    onClose, open, event,
  } = props;

  const typeMap = {
    WeatherEvent: <Weather event={event} />,
    WildfireEvent: <Wildfire event={event} />,
    SecurityEvent: <Security event={event} />,
    CovidEvent: <Covid event={event} />,
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {event.name}
      </DialogTitle>
      {typeMap[event.type]}
    </Dialog>
  );
}

export default SimpleDialog;

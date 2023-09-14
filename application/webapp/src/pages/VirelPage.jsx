import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, GitHub } from '@mui/icons-material';
import profileVirel from '../assets/profileVirel.jpg';

function VirelPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <IconButton
        style={{
          color: 'white',
          position: 'absolute',
          left: 20,
          top: 20,
        }}
        onClick={() => { navigate('/about'); }}
      >
        <ArrowBackIosNew />
        Back
      </IconButton>
      <h1>Virel Patel</h1>
      <Avatar
        src={profileVirel}
        style={{
          margin: '10px',
          width: '120px',
          height: '120px',
        }}
      />
      <h4 style={{
        width: '50%',

      }}
      >
        {`Hello my name is Virel I am a senior and I am born and raised here in the Bay Area. I love to hang out 
        with my friends and play basketball on my free time.` }
      </h4>

      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/virel19', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        virel19
      </IconButton>
    </div>
  );
}

export default VirelPage;

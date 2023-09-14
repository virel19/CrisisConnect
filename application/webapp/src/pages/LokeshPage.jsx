import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, GitHub } from '@mui/icons-material';
import profileLokesh from '../assets/profileLokesh.jpeg';

function LokeshPage() {
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
      <h1> Lokesh Telaprolu </h1>
      <Avatar
        src={profileLokesh}
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
        {'Hello! I\'m lokesh, born and brought up in India. Currently, I\'m pursuing masters in SFSU. I love to play cricket on my free time.' }
      </h4>

      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/lokeshklu', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        lokesh957
      </IconButton>
    </div>
  );
}

export default LokeshPage;

import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, GitHub } from '@mui/icons-material';

function RaqPage() {
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
      <h1>Raquel Lutges</h1>
      <Avatar
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
        {' My name is Raquel, im a senior interested in pursuing a career in AI, I like going on outdoor adventures '}
      </h4>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/rlutges', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        rlutges
      </IconButton>
    </div>
  );
}

export default RaqPage;

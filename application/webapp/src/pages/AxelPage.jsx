import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew, LinkedIn, GitHub } from '@mui/icons-material';
import profile from '../assets/profileAxel.jpeg';

function AxelPage() {
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
      <h1>Axel Biehler</h1>
      <Avatar
        src={profile}
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
        {`My name is Axel I'm from France in my 4th year of study at Epitech, Currently I'm in San Francisco for my abroad year,
              I'm a Back end developer and I love skiing`}
      </h4>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://www.linkedin.com/in/axel-biehler-b00938197/', '_blank', 'noreferrer'); }}
      >
        <LinkedIn style={{
          color: 'blue',
          margin: '10',
        }}
        />
        Axel Biehler
      </IconButton>
      <IconButton
        style={{
          color: 'white',
        }}
        onClick={() => { window.open('https://github.com/biles2', '_blank', 'noreferrer'); }}
      >
        <GitHub style={{
          color: 'white',
          margin: '10',
        }}
        />
        biles2
      </IconButton>
    </div>
  );
}

export default AxelPage;

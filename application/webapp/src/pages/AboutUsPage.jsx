import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileAxel from '../assets/profileAxel.jpeg';
import profileNicholas from '../assets/profileNicholas.jpg';
import profileVirel from '../assets/profileVirel.jpg';
import profileLokesh from '../assets/profileLokesh.jpeg';
import profileMarc from '../assets/profileMarc.jpg';
import profileMo from '../assets/profileMo.jpg';
import NavBar from '../assets/NavBar';

function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      >
        <h1>Software Engineering Class SFSU Spring 2023 Section 02 Team 4</h1>
      </div>
      <h2>Team Members</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100vw',
      }}
      >

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <IconButton
            onClick={() => navigate('/axel')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileAxel}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Axel Biehler</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/virel')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileVirel}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Virel Patel</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/marc')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileMarc}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Marc Castro</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/nicholas')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileNicholas}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Nicholas Chan</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/lokesh')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileLokesh}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Lokesh Telaprolu</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/mo')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src={profileMo}
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Mo Moses</h4>
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => navigate('/raquel')}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar
              style={{
                width: '120px',
                height: '120px',
              }}
            />
            <h4 style={{ color: 'white' }}>Raquel Lutges</h4>
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;

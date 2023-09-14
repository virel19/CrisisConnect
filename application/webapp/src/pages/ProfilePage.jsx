import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NavBar from '../assets/NavBar';
import placeholderAvatar from '../assets/fire.png';

export default function ProfilePage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeField, setActiveField] = useState(null);
  const handlePasswordClick = () => {
    setIsChangingPassword(true);
  };

  const handlePasswordChange = () => {
    setIsChangingPassword(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePasswordChanging = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChanging = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFieldClick = (field) => {
    setActiveField(field);
  };

  const handleFieldChange = () => {
    // Handle field change logic
  };

  const renderFieldOrText = (field, text) => {
    if (activeField === field) {
      return (
        <input
          type="text"
          value={text}
          onChange={handleFieldChange}
          placeholder={text}
        />
      );
    }
    return (
      <>
        {text}
        <button type="button" onClick={() => handleFieldClick(field)}>
          <EditIcon fontSize="small" />
        </button>
      </>
    );
  };
  return (
    <>
      <NavBar />
      <div
        className="content-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '360px 2fr',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            backgroundColor: '#004466',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '10px',
            paddingLeft: '20px',
            position: 'sticky',
            top: '0',
            maxHeight: 'calc(100vh - 64px)',
            overflow: 'auto',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '300px',
              backgroundColor: 'white',
              padding: '15px',
              paddingTop: '100px',
              borderRadius: '5px',
            }}
          >
            <Avatar
              src={placeholderAvatar}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <div style={{ marginBottom: '5px', color: 'black' }}>
                <b>{renderFieldOrText('name', 'John Doe')}</b>
              </div>

              <div style={{ marginBottom: '5px', color: 'black' }}>
                {renderFieldOrText('location', 'San Francisco')}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '300px',
              backgroundColor: 'white',
              padding: '15px',
              paddingTop: '20px',
              borderRadius: '5px',
              marginTop: '10px',
              color: 'black',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <b>Email: </b>
              <div style={{ marginBottom: '5px', color: 'black' }}>
                {renderFieldOrText('email', 'email@email.com')}
              </div>
            </div>
          </div>

        </div>
        <div
          style={{
            backgroundColor: '#004466',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '10px',
            position: 'sticky',
            top: '0',
            maxHeight: 'calc(100vh - 64px)',
            overflow: 'auto',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '95%',
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '5px',
              color: 'black',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <b>Biography:</b>
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'left' }}>
              {renderFieldOrText('biography', 'This is my biography.')}
            </div>
            <hr style={{ width: '100%', marginBottom: '10px' }} />
            {isChangingPassword ? (
              <div>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={handlePasswordChanging}
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChanging}
                />
                <button type="button" onClick={handlePasswordChange}>Save</button>
              </div>
            ) : (
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  padding: '0',
                  fontSize: '24px',
                }}
                onClick={handlePasswordClick}
              >
                Change Password
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const styles = {
  cardContainer: {
    borderRadius: '5px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    padding: '20px',
    margin: '20px auto',
    backgroundColor: '#004466',
    border: 'solid 1px black',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '90vw',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '10px',
    color: '#ffbf00',
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    color: '#ffffff',
  },
  cardType: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0',
    color: '#000000',
  },
  cardUpdatedAt: {
    fontSize: '14px',
    margin: '0',
    color: '#ffffff',
  },
  cardCounty: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0',
    color: '#ffffff',
  },
  cardPublishedAt: {
    fontSize: '14px',
    fontStyle: 'italic',
    margin: '0',
    color: '#ffffff',
  },
};

function getTimeDifference(updatedAt) {
  const now = new Date();
  const updated = new Date(updatedAt);
  const diff = now.getTime() - updated.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Updated ${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (hours > 0) {
    return `Updated ${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (minutes > 0) {
    return `Updated ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  return 'Updated just now';
}

function NewsCard({
  type, name, publishedAt, updatedAt, county,
}) {
  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.cardTitle}>{name}</h2>
      <p style={styles.cardType}>{`${type} - ${county}`}</p>
      <div style={styles.cardDetails}>
        <p style={styles.cardUpdatedAt}>{getTimeDifference(updatedAt)}</p>
        <p style={styles.cardPublishedAt}>{new Date(publishedAt).toDateString()}</p>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  county: PropTypes.string.isRequired,
};

export default NewsCard;

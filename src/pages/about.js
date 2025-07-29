
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is the About Page</h2>
      <h1 className={styles.heading}>Welcome to the About Page</h1>
      <Button
        label="Back to Home"
        variant="primary"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default About;
/*
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>This is the About Page</h2>
    </div>
  );
};

export default About;
*/
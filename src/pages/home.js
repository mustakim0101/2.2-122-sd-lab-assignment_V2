// src/pages/home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      {/* Primary Button */}
      <Button label="Click Me" variant="primary" />

      <br /><br />

      {/* Navigation Button to About */}
      <Button
        label="Go to About"
        variant="secondary"
        onClick={() => navigate('/about')}
      />

      <br /><br />

      {/* Navigation Button to Notification */}
      <Button
        label="Go to Notification"
        variant="secondary"
        onClick={() => navigate('/notification')}
      />
    </div>
  );
};

export default Home;
/*
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import styles from '../css/kopa.module.css';
import Button from '../part_by_part/button'; // ✅ Ensure button export/import is correct

const Home = () => {
  const navigate = useNavigate(); // ✅ Hook for programmatic navigation

  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>

      {}
      <Button label="Click Me" variant="primary" />

      <br /><br />

      {}
      <Button
        label="Go to About"
        variant="secondary"
        onClick={() => navigate('/about')}
      />
    </div>
  );
};

export default Home;
*/
/*
import React from 'react';
import styles from '../css/kopa.module.css';
import MyButton from '../part_by_part/button'; // ✅ make sure name matches export

const Home = () => {
  return (
    <div>
      <h2>This is the Home Page</h2>
      <h1 className={styles.heading}>This is the home page</h1>
      <MyButton label="Click Me" variant="primary" />
    </div>
  );
};

export default Home;
*/
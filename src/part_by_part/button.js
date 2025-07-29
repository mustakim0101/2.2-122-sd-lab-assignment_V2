// src/part_by_part/button.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const MyButton = ({ label, variant, onClick }) => {
  return <Button variant={variant} onClick={onClick}>{label}</Button>;
};

export default MyButton;
/*import React from 'react';
import Button from 'react-bootstrap/Button'; // ✅ correct import

const MyButton = ({ label, variant }) => {
  return <Button variant={variant}>{label}</Button>;
};

export default MyButton; // ✅ export your custom wrapper
*/
/**
 * Primary UI component for user interaction
 *
 * @param {Object} props
 * @param {string} props.label - Text to display on the button
 * @param {function} props.onClick - Click event handler
 */
import React from 'react';

const Button = ({ label, onClick }) => {
  return <button onClick={onClick} className="btn">{label}</button>;
};

export default Button;
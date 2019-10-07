import React from 'react';
import loadingGif from '../../assets/loading.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <img src={loadingGif} alt="loading animation" />
    </div>
  );
};

export default Loader;

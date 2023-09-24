import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get('message');
  return (
    <div className='gap-5'>
      <div>Payment was {message} !</div>
      <Link className='text-cyan-500' to='/'>
        back to home
      </Link>
    </div>
  );
};

export default Error;

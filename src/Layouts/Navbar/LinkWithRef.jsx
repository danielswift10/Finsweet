import React, { useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../contexts';

const LinkWithRef = ({ to, children, ...rest }) => {
  const appContext = useContext(AppContext);
  const location = useLocation();
  const linkRef = useRef(null);
  
  // Check if basename property exists before destructuring
  const { basename = '' } = appContext || {};

  const href = `${basename}${to}`;
  
  const handleClick = (e) => {
    if (linkRef.current && linkRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };
  
  return (
    <Link
      to={to}
      {...rest}
      onClick={handleClick}
      ref={linkRef}
    >
      {children}
    </Link>
  );
}

export default LinkWithRef;

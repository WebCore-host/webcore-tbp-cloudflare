import React from 'react';

const PlumbingBg: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <img src="/plumbing.jpg" alt="Texas Built Plumbing Background" className={className} />;
};

export default PlumbingBg;
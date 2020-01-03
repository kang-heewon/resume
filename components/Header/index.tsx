import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-progress-bar-plus';
import './index.scss';

const Navigation: React.FC = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(100);
  }, []);
  return (
    <nav>
      <ProgressBar percent={percent} />
    </nav>
  );
};
export default Navigation;

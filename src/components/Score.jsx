import { useEffect, useRef, useState } from 'react';

import useIncrement from '../hooks/useIncrement';

const Score = ({ score }) => {
  const prev = useRef(score);

  const { show, updating } = useIncrement(prev.current, score);

  useEffect(() => {
    prev.current = score;
  }, [score]);

  return <div className={`${updating ? 'updating' : ''}`}>{show}</div>;
};

export default Score;

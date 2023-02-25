import { useState, useRef, useEffect } from 'react';

const useIncrement = (min, max) => {
  const timer = useRef();
  const count = useRef(min);
  const [show, setShow] = useState(count.current);
  const [updating, setUpdating] = useState(false);

  const update = () => {
    setUpdating(true);

    if (count.current < max) {
      count.current += 1;
      setShow(count.current);
    } else {
      clearInterval(timer.current);
      setUpdating(false);
    }
  };

  useEffect(() => {
    if (timer.current) {
      clearInterval(timer.current);
      // setUpdating(false);
    }
    timer.current = setInterval(() => {
      update();
    }, 50);
  }, [update]);

  return { show, updating };
};

export default useIncrement;

import { useEffect, useRef, useState } from 'react';

const useGetList = (data) => {
  const timer = useRef(undefined);
  const [list, setList] = useState(data);

  const update = () => {
    const mock = [...list];
    const len = list.length;
    const idx = Math.floor(Math.random() * len);
    mock[idx].score += 10;
    setList(mock);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      update();
    }, 1000 * 2);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return { list };
};

export default useGetList;

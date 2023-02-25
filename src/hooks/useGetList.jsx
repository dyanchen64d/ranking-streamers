import { useEffect, useRef, useState } from 'react';

const useGetList = (data) => {
  const timer = useRef(undefined);
  const [list, setList] = useState(data);

  const update = () => {
    const mock = [...list];
    mock[0].score += 10;
    // console.log('update', mock);

    setList(mock);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      update();
    }, 1000 * 3);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return { list };
};

export default useGetList;

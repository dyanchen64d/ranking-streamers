import { useEffect, useState } from 'react';

const RankStreamer = ({ data }) => {
  const [list, setList] = useState(data);

  // useEffect(() => {
  //   console.log('RankStreamer', data);
  // }, [data]);

  return (
    <>
      <div className="item">
        <div>Rank</div>
        <div>Name</div>
        <div>Score</div>
      </div>
      {data.map((item, idx) => {
        return (
          <div key={item.id} className="item">
            <div>{idx + 1}</div>
            <div>{item.name}</div>
            <div>{item.score}</div>
          </div>
        );
      })}
    </>
  );
};

export default RankStreamer;

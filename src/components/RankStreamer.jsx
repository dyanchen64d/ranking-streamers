import { useEffect, useState } from 'react';

const RankStreamer = ({ data }) => {
  const [list, setList] = useState(data);

  // sort
  useEffect(() => {
    const mock = [...list];
    mock.sort((a, b) => b.score - a.score);
    setList(mock);
  }, [data]);

  return (
    <div className="wrapper">
      <div className="item">
        <div>Rank</div>
        <div>Name</div>
        <div>Score</div>
      </div>
      {list.map((item, idx) => {
        return (
          <div
            key={item.id}
            className="item"
            style={{ top: `${24 * (idx + 1)}px` }}
          >
            <div>{idx + 1}</div>
            <div>{item.name}</div>
            <div>{item.score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RankStreamer;

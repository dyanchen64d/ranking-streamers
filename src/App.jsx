import './App.css';

import RankStreamer from './components/RankStreamer';
import useGetList from './hooks/useGetList';
import { data } from './data';

const App = () => {
  const { list } = useGetList(data);

  return (
    <div className="App">
      <RankStreamer data={list} />
    </div>
  );
};

export default App;

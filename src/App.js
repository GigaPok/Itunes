import './App.css';
import Search from './components/Search';
import Itunes from './components/Itunes';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState()

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <Itunes search={search} />

    </div>
  );
}

export default App;

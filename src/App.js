import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Albums from './components/Albums/Albums';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1 className='shopTitle' style={{textAlign: 'center', marginTop: '-4em'}}>Shop Records</h1>
      <Albums />
    </div>
  );
}

export default App;

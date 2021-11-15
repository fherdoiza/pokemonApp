import './App.scss';
import { HomeScreen } from './components/home/HomeScreen';

import Header from './components/ui/Header';

function App() {
  return (
    <div className="App">
      {
        <>
          <Header></Header>
          <div className="container my-4">
            <HomeScreen></HomeScreen>
          </div>
        </>
      }
    </div>
  );
}

export default App;

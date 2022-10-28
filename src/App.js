import './App.css';

import LayoutNav from './layoutNav';





function App() {


  const container = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '1px 1px 10px 5px grey',
    justifyContent: 'space-between',
  }

  return (
    <div className="App">



      <LayoutNav/>
      

      


    </div>
  );
}

export default App;

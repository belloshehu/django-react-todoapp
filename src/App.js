import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationRouter from './components/NavigationRouter';


function App() {
  return (
    <div className="App mb-5">
        <div 
          className="container-fluid"
          style={{backgroundColor:"#ffffff"}}
            >
            <NavigationRouter />
        </div>
    </div>
  );
}

export default App;

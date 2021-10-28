//import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message.jsx'

const text = 'I am prop';

function App(props) {


  const newClick = () => {
    alert('opa-na');
  }


  const topColor = 'blue';
  return (
    <div className="App">
      <header className="App-header" style={{ color: topColor }}>
        <Message message={text} onMessageClick={newClick} />
        <h3>Hi! {props.name}</h3>
      </header>
    </div>
  );
}

export default App;

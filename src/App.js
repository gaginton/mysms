import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/title/Title';
import NewMessage from './components/new-message/NewMessage';
import MessageHistory from './components/message-history/MessageHistory';

function App() {
  return (
    <div className="App">
      <Title>MY SMS MESSENGER</Title>

      <div className='form-container'>
        <div className="row">
          <div className="col-sm-6">
            <NewMessage />
          </div>

          <div className="col-sm-6">
            <MessageHistory />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
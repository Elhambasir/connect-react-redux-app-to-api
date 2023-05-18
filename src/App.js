import { Provider } from 'react-redux';
import store from './store';
import Users from './components/fetchedUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>,
    </div>
  );
}

export default App;

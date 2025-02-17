
import { Provider} from 'react-redux';
import './App.css';
import { store } from './app/store';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <Provider store={store}>
 
      <AppRouter/>
 
    </Provider>
   
  );
}

export default App;

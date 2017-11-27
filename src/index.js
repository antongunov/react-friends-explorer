import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import Sorry from './components/Sorry';
import friends from './assets/js/friends';

const FRIENDS_URL = 'https://raw.githubusercontent.com/antongunov/react-friends-explorer/master/friends.json';
const root = document.getElementById('root');

friends.count()
  .then(cnt => {
    if (cnt > 0) {
      return Promise.resolve();
    } else {
      root.textContent = 'Loading data...';
      return friends.load(FRIENDS_URL);
    }
  })
  .then(() => ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), root))
  .catch((err) => {
    console.error(err);
    ReactDOM.render(<Sorry but="something is wrong" />);
  });

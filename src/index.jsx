import React from 'react';
import { render } from 'react-dom';

import Routes from './routes';

const App = () => (
  <div>
    <Routes />
  </div>
);

render(<App />, document.getElementById('app'));

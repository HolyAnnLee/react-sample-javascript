import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {routes.map((route) => {
        <Route {...route}>
          <Layout style={{ height: '100%' }} />
        </Route>;
      })}
    </BrowserRouter>
  );
}
export default App;

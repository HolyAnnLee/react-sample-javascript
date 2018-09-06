import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100%' }}>
        {routes.map((route) => {
          console.log('route', route);
          return (
            <Route key={route.name} path="/home" exact component={route} />
          );
        })}
      </Layout>
    </BrowserRouter>
  );
}

export default App;

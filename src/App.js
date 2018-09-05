import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100%' }}>
        {/*{routes.map(route => (*/}
        <Route key="1" path="/home" exact component={Home} />
        {/*))}*/}
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import routes from './config/routes';

function App() {
  return (
    <div className="container">
      {/* Header component will show up across all of our app's pages */}
      <Header />
      { routes }
    </div>
  );
}

export default App;

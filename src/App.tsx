import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { LastLocationProvider, useLastLocation, withLastLocation, LastLocationType } from 'react-router-last-location';
import './App.css';

function Home() {
  const lastLocation = useLastLocation();

  return (
    <div>
      <h1>Home</h1>
      <pre>
        {JSON.stringify(lastLocation, undefined, 2)}
      </pre>
    </div>
  );
}

type AboutProps = {
  lastLocation: LastLocationType,
}

const About: React.FC<AboutProps> = ({ lastLocation }) => (
  <div>
    <h1>About</h1>
    <pre>
      {JSON.stringify(lastLocation, undefined, 2)}
    </pre>
  </div>
);

const AboutWithLastLocation = withLastLocation(About);

function App() {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutWithLastLocation} />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

export default App;

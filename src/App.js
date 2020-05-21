import React from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headline';

const tempArr = [{
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />,
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render props.'
                  tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;

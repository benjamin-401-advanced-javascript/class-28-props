import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Components/message'

import './styles.css';

class App extends React.Component {
  render() {
    return (
        <>
          <Message />
        </>
    );
  }
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

const React = require('react');
const ReactDOM = require('react-dom');
const Resume = require('./components/Resume');

ReactDOM.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById('root')
);
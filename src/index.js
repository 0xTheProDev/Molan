import React from 'react';
import ReactDOM from 'react-dom';
import App from 'container/App';
import registerServiceWorker from 'util/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

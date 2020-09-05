/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const SSR_DATA = document.getElementById('__CRSGC_SSR_DATA').innerText;
const groups = JSON.parse(SSR_DATA);

ReactDOM.render(<>App goes here!</>, document.getElementById('root'));

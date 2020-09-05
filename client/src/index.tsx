/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App, GroupData } from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const SSR_DATA = document.getElementById('__CRSGC_SSR_DATA').innerText;
const data = JSON.parse(SSR_DATA) as GroupData[];

ReactDOM.render(<App data={data} />, document.getElementById('root'));

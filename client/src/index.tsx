/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { GroupData } from './models/GroupData';

const SSR_DATA = document.getElementById('__CRSGC_SSR_DATA').innerText;
const data = JSON.parse(SSR_DATA) as GroupData[];

ReactDOM.render(<App data={data} />, document.getElementById('root'));

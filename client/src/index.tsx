/* global document */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import { GroupData } from './models/GroupData';

const SSR_DATA = document.getElementById('__CRSGC_SSR_DATA').innerText;
const data = JSON.parse(SSR_DATA) as GroupData[];

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#74BDC4' 
        },
        secondary: {
            main: '#062631'
        }       
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App data={data} />
    </ThemeProvider>
    , document.getElementById('root'));

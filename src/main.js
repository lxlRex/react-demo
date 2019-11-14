import ReactDom from 'react-dom';
import { polyfill as ES6PromisePolyfill } from 'es6-promise';
import getRouter from './router';
ES6PromisePolyfill();
import 'normalize.css';
import './public/css/rem.css';
import './public/css/common.css';
ReactDom.render(getRouter(), document.getElementById('app'));

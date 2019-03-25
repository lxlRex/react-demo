import ReactDom from 'react-dom'

import getRouter from './router'

import 'normalize.css'
import './public/css/rem.css'
import './public/css/common.css'

ReactDom.render(getRouter(), document.getElementById('app'))

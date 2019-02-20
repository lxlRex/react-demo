import React from 'react'
import ReactDom from 'react-dom'

import getRouter from './router'

import '@public/css/rem.css'
import 'normalize.css'

ReactDom.render(getRouter(), document.getElementById('app'))

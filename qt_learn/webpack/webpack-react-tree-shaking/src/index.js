import { includes } from 'lodash'
import React from 'react'
import reactDom from 'react-dom'
// import { groupBy } from 'lodash'
// import includes from 'lodash/includes';
import { add, sub } from './utils';
import App from './App'

reactDom.render(<App/>, document.getElementById('app'))
console.log(add(1, 2));
console.log(add(3, 4));
console.log(includes([1, 2, 3], 1));

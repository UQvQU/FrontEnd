import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
// import'./app.scss'
import styleObj from './app.scss'
console.log(styleObj)

class App extends React.Component {
	render () {
		return (
			<div>
				<h2>hello world</h2>
				<p className={styleObj.item}>o(*￣︶￣*)o</p>
				{/* http://localhost:8080/asserts/mate.jpg  -->  在devServer中设置contentBase */}
				<img src="./asserts/image/mate.jpg"/>
        1234567998
			</div>
		)
	}
}

export default hot(module)(App);
// export default App;

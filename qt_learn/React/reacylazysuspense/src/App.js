import React, { lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

const Com1 = lazy(() => import('./com1'));
class App extends React.Component {
  render() {
    
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          {/* <Com1/> */}
          <BrowserRouter>
            <Route path="/" component={Com1}></Route>
          </BrowserRouter>
        </Suspense>
      </div>
    )
  }
}

export default App;

// import React, { Component } from 'react';

// class Com1 extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <div>123</div>
//      );
//   }
// }
 
// export default Com1;

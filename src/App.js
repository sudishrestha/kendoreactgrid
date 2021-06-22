import React from 'react';

class App extends React.Component {
  render() {
     return (
        <div>
           <ul>
           <li><a href="kendo">Kendo</a></li>
           <li><a href="mgrid">Material Grid</a></li>
           <li><a href="iscroll">Infinite Scroll</a></li>
           <li><a href="iMscroll">Infinite Material Grid  Scroll</a></li>
           </ul>
           {this.props.children}
        </div>
     )
  }
}
export default App;
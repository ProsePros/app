 import { MasterPage } from './pages/MasterPage';
 import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Router, IndexRoute, Route, browserHistory} from 'react-router';

 class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = {}
   }

   render() {
     return (
       <div>
         <code>
           <Request method="get" url="/api/request">
             {(error, response, isLoading) => {
               if(error) {
                 return (<div>Something bad happened: {error.message}</div>)
               } else if(isLoading) {
                 return (<div className="loader"></div>)
               } else if(response !== null) {
                 return (<div>{response.data.message}</div>)
               }
               return null
             }}
           </Request>
         </code>
       </div>
     )
   }
 }


 ReactDOM.render(
   <App />,
   document.getElementById('app')
 )

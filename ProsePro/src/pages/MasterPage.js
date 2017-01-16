/**
 * Created by juanitasoranno on 1/8/17.
 */
import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class MasterPage extends React.Component{
  render(){
    return (
      <DocumentTitle title='ProProse'>
        <div className="MasterPage">
          <Header />
          { this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}

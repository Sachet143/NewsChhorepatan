import React, { Component } from 'react';
import spinner from '../Spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={spinner} alt="loading" />
      </div>
    )
  }
}

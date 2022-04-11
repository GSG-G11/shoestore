import React, { Component } from 'react';
import Ad from '../../components/Ad/Ad';
import TopFilter from './Top/TopFilter';
import HomeLanding from '../../components/Home/home';
import CombinedFooter from '../../components/Footer/CombinedFooter';

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <HomeLanding />

        <TopFilter />
        <Ad />
        <CombinedFooter />
      </div>
    );
  }
}

import React, { Component } from 'react';
import EpicMenu from './EpicMenu';

import logo from './logo.png';

class App extends Component {
  render() {
    let links = [
      { label: 'ABOUT US', link: '#about', active: true },
      { label: ' BECOME A BLOOD DONOR', link: '#donor' },
      { label: 'BLOOD SEEKERS', link: '#acceptors' },
      { label: 'FAQ', link: '#faq' },
    ];

    return (
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>
    );
  }
}

export default App;

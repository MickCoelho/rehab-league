import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
// import { MiniInfoBar } from 'components';

export default class About extends Component {
  state = {
    showKitten: false
  }

  handleToggleKitten() {
    this.setState({showKitten: !this.state.showKitten});
  }

  render() {
    return (
      <div className="container">
        <DocumentMeta title="React Redux Example: About Us"/>
        Booom
      </div>
    );
  }
}

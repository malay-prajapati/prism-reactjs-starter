import React from 'react';
import { Button, FlexLayout } from 'prism-reactjs';
import 'prism-reactjs/dist/index.css';
import './HelloWorld.less';

export default class HelloWorld extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonMessage: 'Hello'
    };
  }

  handleOnClick = () => {
    this.setState({ buttonMessage: 'Hello World' });
  };

  render() {
    return (
      <FlexLayout className="hello-world"
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={ this.handleOnClick }>
          {this.state.buttonMessage}
        </Button>
      </FlexLayout>

    );
  }

}

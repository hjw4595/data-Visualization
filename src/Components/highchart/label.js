import React from "react";

export default class LabelComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      render: true
    };
  }

  handleClick() {
    this.setState({ render: this.state.render ? false : true });
  }

  render() {
    const tick = this.props.tick;

    return (
      <div>
        <div onClick={this.handleClick}>
            <div>React</div>
            {this.state.render ? tick.pos : null}
          </div>
      </div>
    );
  }
}

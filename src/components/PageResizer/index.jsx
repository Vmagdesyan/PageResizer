import React from 'react';
import PropTypes from 'prop-types';

export class PageResizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 500,
      height: 500,
    };
  }

  onChangeHeight = (event) => this.setState({ height: Number(event.target.value) });

  onChangeWidth = (event) => this.setState({ width: Number(event.target.value) });

  render() {
    const { childrenRender } = this.props;
    const {
      height,
      width,
    } = this.state;

    return (
      <div>
        <div>
          <div>
            Width
            <input
              onChange={this.onChangeWidth}
              value={width}
            />
            <div>
              Height
            <input
                onChange={this.onChangeHeight}
                value={height}
              />
            </div>
          </div>
        </div>
        {childrenRender(height, width)}
      </div>
    )
  }
}

PageResizer.propTypes = {
  childrenRender: PropTypes.func.isRequired,
}

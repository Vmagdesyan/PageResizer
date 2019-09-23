import React from 'react';
import PropTypes from 'prop-types';

export class PageResizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  onChangeWindowSize = () => this.setState({ height: window.innerHeight, width: window.innerWidth });

  componentDidMount() {
    window.addEventListener('resize', this.onChangeWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onChangeWindowSize);
  }

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
            <label>{width}</label>
          </div>
          <div>
            Height
            <label>{height}</label>
          </div>
        </div>
        {childrenRender(height / 2, width / 2)}
      </div>
    )
  }
}

PageResizer.propTypes = {
  childrenRender: PropTypes.func.isRequired,
}

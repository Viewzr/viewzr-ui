import React from 'react';

class RecentlyAddedVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numLargeVideos = props.largeVideos;
      numMediumVideos = props.mediumVideos;
      totalVideos = props.largeVideos + props.mediumVideos;
    };
  }

  render() {

  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
      return true;
  }

  componentWillUpdate() {

  }

  componentWillReceiveProps() {

  }

  componentDidUpdate() {

  }
};

export default RecentlyAddedVideos;

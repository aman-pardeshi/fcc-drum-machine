import React from 'react';
import './drumKeyEach.scss';

class DrumKeyEach extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay = () => {
    const audio = document.getElementById(this.props.keyTitle);
    audio.play();
  };

  render() {
    console.log(this.props);
    return (
      <div
        className='drum-pad'
        id={this.props.clipId}
        onClick={this.handlePlay}
      >
        <audio className='clip' id={this.props.keyTitle} src={this.props.url} />
        {this.props.keyTitle}
      </div>
    );
  }
}

export default DrumKeyEach;

import React from 'react';
import './DrumKeyPad.styles.scss';

import DrumKeyEach from '../drumKeyEach/drumKeyEach';

class DrumKeyPad extends React.Component {
  constructor(props) {
    super(props);
  }

  // handlePlaying(value) {
  //   console.log(value.keyTitle);
  //   if (this.props.power) {
  //     const audio = document.getElementById(this.props.data);
  //     audio.play();
  //   }
  // }

  render() {
    let set = this.props.data;
    let keys = [];
    if (this.props.power) {
      keys = set.map((element) => (
        <DrumKeyEach
          url={element.url}
          clipId={element.id}
          keyTitle={element.keyTitle}
        />
      ));
    }
    return <div>{keys}</div>;
  }
}

export default DrumKeyPad;

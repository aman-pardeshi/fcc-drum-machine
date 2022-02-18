import React from 'react';
import { bankOne, bankTwo } from './DrumKeys';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      power: false,
      bankValue: false,
      volumeSlider: 0.5,
      currentBank: bankOne,
      currentTitle: '',
    };
  }

  playAudio = (element) => {
    if (this.state.power) {
      this.setState({
        currentTitle: element.id,
      });

      const sound = document.getElementById(element.keyTitle);
      sound.play();
    }
  };

  render() {
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach((sound) => {
      // sound.volume = this.state.sliderVal / 100;
    });
    let bank = [];
    if (this.state.bankValue) {
      bank = [...bankTwo];
    } else {
      bank = [...bankOne];
    }
    return (
      <div id='drum-machine'>
        <div className='keys-container'>
          {bank.map((element, i) => (
            <div
              key={i}
              className='drum-pad'
              id={element.id}
              onClick={() => this.playAudio(element)}
            >
              <audio className='clip' id={element.keyTitle} src={element.url} />
              {element.keyTitle}
            </div>
          ))}
        </div>

        <div className='panel-container'>
          <div className='switch-holder'>
            <div className='switch-label'>
              <span>Power</span>
            </div>
            <div className='switch-toggle'>
              <input
                type='checkbox'
                id='power'
                onClick={() => this.setState({ power: !this.state.power })}
              />
              <label htmlFor='power'></label>
            </div>
          </div>

          <div className='switch-holder display-panel'>
            <div className='switch-display' id='display'>
              <span>{this.state.currentTitle.toUpperCase()}</span>
            </div>
          </div>

          <div className='switch-holder'>
            <div className='switch-label'>
              <span>Volume</span>
            </div>
            <input
              type='range'
              min='1'
              max='100'
              className='slider'
              id='myRange'
            />
          </div>

          <div className='switch-holder'>
            <div className='switch-label'>
              <span>Bank</span>
            </div>
            <div className='switch-toggle'>
              <input
                type='checkbox'
                id='bank'
                onClick={() =>
                  this.setState({ bankValue: !this.state.bankValue })
                }
              />
              <label htmlFor='bank'></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

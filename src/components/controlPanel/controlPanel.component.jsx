import React from 'react';
import './controlPanel.styles.scss';

const ControlPanel = () => (
  <div className='control-container'>
    <div className='switch-holder'>
      <div className='switch-label'>
        <span>Power</span>
      </div>
      <div className='switch-toggle'>
        <input type='checkbox' id='power' />
        <label htmlFor='power'></label>
      </div>
    </div>

    <div className='switch-holder'>
      <div className='switch-display'>
        <span>PLACEHOLDER DISPLAY</span>
      </div>
    </div>

    <div className='switch-holder'>
      <div className='switch-label'>
        <span>Volume</span>
      </div>
      <input type='range' min='1' max='100' className='slider' id='myRange' />
    </div>

    <div className='switch-holder'>
      <div className='switch-label'>
        <span>Bank</span>
      </div>
      <div className='switch-toggle'>
        <input type='checkbox' id='bank' />
        <label htmlFor='bank'></label>
      </div>
    </div>
  </div>
);

export default ControlPanel;

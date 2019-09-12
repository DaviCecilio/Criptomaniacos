import React, { Component } from 'react';

import Sky from 'react-sky';

import btcIcon from '../img/background-animation/btcIcon.png';
import ethIcon from '../img/background-animation/ethIcon.png';
import ltcIcon from '../img/background-animation/ltcIcon.png';
import zecIcon from '../img/background-animation/zecIcon.png';
import xrpIcon from '../img/background-animation/xrpIcon.png';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: btcIcon,
            1: ethIcon,
            2: ltcIcon,
            3: zecIcon,
            4: xrpIcon,
          }}
          how={
            130
          } /* Pass the number of images Sky will render chosing randomly */
          time={70} /* time of animation */
          size={'auto'} /* size of the rendered images */
          background="#002b4b" /* color of background */
        />
      </div>
    );
  }
}

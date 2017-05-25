import React from 'react';

import * as COLORS from '../../shared/style/colors';

class VersusIconSmall extends React.PureComponent {
  render = () => (
    <div className="Container">
      <div className="BigBall"></div>
      <div className="Line"></div>
      <div className="SmallBall"></div>
      <style jsx>{`
          .Container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 20px;
            margin-right: 15px;
          }

          .BigBall {
            background-color: ${COLORS.ColorForegroundOrange};
            height: 20px;
            width: 20px;
            border-radius: 50%;
          }

          .SmallBall {
            background-color: ${COLORS.ColorForegroundOrange};
            height: 10px;
            width: 10px;
            border-radius: 50%;
          }

          .Line {
            background-color:${COLORS.ColorVersusLightOrange};
            height: 20px;
            width: 2px;
          }
      `}</style>
    </div>
  )
}

export default VersusIconSmall;
import React, {useContext} from 'react';
import { JoinContext } from '../../Pages/Join/JoinProvider';

function Info(props) {
  const { text1, text2, color1, color2, fontSize1, fontSize2 } = props;

  const { UserInfo } = useContext(JoinContext);

  const textStyle1 = {
    color: color1 || "black",
    fontSize: fontSize1 || "1.5rem",
    fontWeight: "bold",
  };

  const textStyle2 = {
    color: color2 || "black",
    fontSize: fontSize2 || "1rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: text2 ? "9px" : "0",
      }}
    >
      <span style={textStyle1}>{text1}</span>
      {text2 && <span style={textStyle2}>{text2}</span>}
    </div>
  );
}

export default Info;

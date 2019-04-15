import React from "react";
import "./cookie.css";
export default class Scorebored extends React.Component {
  render() {
    return (
      <div>
        <table className="score">
          <caption>ScoreBored</caption>
          <tr className="playersname">
            <th>Player One:(name)</th>
            <th>Lastname</th>
            <th>Player two:(name)</th>
          </tr>
          <tr className="playersc">
            <td>Totall cookys:(num)</td>
            <td>Time left:</td>
            <td>Totall cookys:(num)</td>
          </tr>
          <tr>
            <td>Wining/losing</td>
            <td>(time)</td>
            <td>Wining/losing</td>
          </tr>
        </table>
      </div>
    );
  }
}

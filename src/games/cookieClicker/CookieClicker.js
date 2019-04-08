import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
export default class CookieClicker extends GameComponent {
  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{UserApi.getName(user_id)}</li>
    ));
    var creator = UserApi.getName(this.getSessionCreatorUserId());
    return (
      <div>
        <p>Session ID: {id}</p>
        <p>Session creator: {creator}</p>
        <p>Session users:</p>
        <ul> {users} </ul>
        <button id="fivem">5 minuts</button>
        <button id="tenm">10 minuts</button>
        <button id="fithteenm">15 minuts</button>
        <div>
          <table style="width:100%">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

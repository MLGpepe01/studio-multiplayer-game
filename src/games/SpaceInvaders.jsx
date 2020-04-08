import React from "react";
import GameComponent from ".././GameComponent.js";
import UserApi from ".././UserApi.js";

export default class SpaceInvaders extends GameComponent {
  constructor(props) {
    super(props);
    var myId = this.getMyUserId();
    var defaultValue = {};
    defaultValue[myId] = 0;
    this.state = defaultValue;
  }
  isCreator() {
    if (this.getSessionCreatorUserId() === this.getMyUserId) {
      return "Creator";
    }
  }
  render() {
    var id = this.getSessionId();
    this.isCreator();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{UserApi.getName(user_id)}</li>
    ));
    var creator = UserApi.getName(this.getSessionCreatorUserId());
    return (
      <div>
        <h1>{`id:${id} creator:${creator} users:`}</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

// #### Step 1.4: Determine if the current user is the session creator or "game host"

// **An exercise for the reader**

// Use the `this.getMyUserId()` and `this.getSessionCreatorUserId()` functions to
// determine if the current user is the session creator. Try adding this check to
// the `render()` function and conditionally display "I am the host" or "I am a
// guest".

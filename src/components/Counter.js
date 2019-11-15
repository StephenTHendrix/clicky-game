import React from "react";
import FriendCard from "./FriendCard";
// import Title from "./Title"
import friends from "../friends.json"
// import { restElement } from "@babel/types";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    friends
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  reset = () => {
    this.setState({ count: 0 })
  }

  checkClicked = id => {
    const chosen = this.state.friends.filter(friend => friend.id === id);
    if (chosen[0].clicked === false) {
      chosen[0].clicked = true;
      this.handleIncrement();
      
    } else {
      this.reset();
    }
  };


  render() {
    return (
        <div>
          <p className="card-text">Click Count: {this.state.count}</p>
          <div className = "d-flex flex-wrap justify-content-between">
          {this.state.friends.map(friend => (<FriendCard
          key = {friend.id} id = {friend.id}
          checkClicked = {this.checkClicked} image = {friend.image}/>))}
        </div>
        </div>
      
    );
  }

}


export default Counter;
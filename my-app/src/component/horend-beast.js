import React from "react";
import Heart from "react-animated-heart";



class HornedBeast extends React.Component {
constructor(props) {
super(props);
this.state = {
title: this.props.title,
images: this.props.images,
description: this.props.description,
value: 0,


  };
  }




upDateCounter = () => {
let count = this.state.value;
this.setState({
value: (count += 1),
  }
  );
  };

  render() {
  return (
  <div>
  <div>
  <h2>{this.state.title}</h2>
  <img src={this.state.images} alt="{this.state.title}"
   onClick={this.upDateCounter}
          />
  <p>{this.state.description}</p>

  <p>  <Heart />  {this.state.value} </p>
  </div>
  </div>
);
}
}

export default HornedBeast;
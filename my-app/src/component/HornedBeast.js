import React from 'react';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startingVoteValue:0
        }
    }
    
    vote=() => {
        let value = this.state.startingVoteValue;
        this.setState({startingVoteValue:value+=1})
    }

    render(){
        
        
        
        return(
        <div>
            <h2>{this.props.title}</h2>
            <p> {this.state.startingVoteValue}</p>
            <img src={this.props.img} alt={this.props.keyword} onClick={this.vote} />
            <p>{this.props.description}</p>
        </div>
        )
        }
} 




export default HornedBeast;

import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            dummy: "dummyvalue"
        }
        console.log("UserClass "+this.props.name +" constructor called")
    }
    componentDidMount(){
        setInterval(()=>{
            console.log("interval set")
        },1000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called in "+this.props.name+" with state value: "+this.state.count)
    }
    render(){
        console.log("UserClass "+this.props.name +" render called")
        const {name, place, age} = this.props;
        return (
            <div>
                <h2>Name: {name}</h2>
                <h2>Place: {place}</h2>
                <h2>Age: {age}</h2>
                <button onClick={()=>{
                    this.setState({count: this.state.count+1});
                }}>Counter</button>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

export default UserClass;


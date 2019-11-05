import React from 'react';
import "./App.scss";
import { Login } from "./login";
import { Register } from "./register";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogginActive: true
        };
    }

componentDidMount(){
    this.RightSide.classList.add("left");
}

changeState(){
    const{ isLogginActive }= this.state;
    if( isLogginActive) {
        this.RightSide.classList.remove("right");
        this.RightSide.classList.add("left");
    }else{
        this.RightSide.classList.remove("left");
        this.RightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive}));
}

    render(){
        const { isLogginActive }= this.state;
        const current= isLogginActive ? "Register" : "Login";
        const currentActive= isLogginActive ? "Login" : "Register"; 
        return(
         <div className="App">
            <div className="login">
                <div className= "container" ref={ref => (this.container = ref)}>
                { isLogginActive && (<Login containerRef={(ref)=>(this.current = ref)} />)}
                { !isLogginActive && (<Register containerRef={(ref)=>(this.current = ref)} />)}
                </div>
                <RightSide current={current} 
                    currentActive={currentActive} containerRef= {ref =>(this.RightSide =ref)} onClick={this.changeState.bind(this)}/>
            </div>
         </div>   
        );
    }
}
const RightSide= props=>{
    return (

     <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
        <div className="text">{props.current}</div>
    </div>
    </div>
    );
};

export default App;
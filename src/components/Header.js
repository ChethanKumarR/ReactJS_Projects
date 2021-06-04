//import React from "react";
import React, { Component, Fragment } from "react";
import "./Header.css"


// //ES 5 way of writing

//TODO: Needs Refractoring or something
// var React = require("react");
// function Header() {
//     return (
//         <div>
//             <center>
//                 <h2>Hi Edureka</h2>
//             </center>
//             <hr />
//         </div>
//     )
// }
// export default Header;
//module.exports = Header


//ES6 way of writing Normal export
// export const Header = (props) => {
//     return (
//         <div>
//             <center>
//                 <h2>Edureka</h2>
//             </center>
//             <hr/>
//         </div>
//     )
// }


//ES6 way of writing   Default Export
// const Header = () => {
//     return (
//         <div>
//             <center>
//                 <h2>Edureka</h2>
//             </center>
//             <hr />
//         </div>
//     )
// }

//Doing optimization Functional component
// const Header = (props) => {
//     return (
//         <Fragment>
//             <center>
//                 <h2>Edureka</h2>
//             </center>
//             <hr />
//         </Fragment>
//     )
// }

// export default Header;

//Class Based component
class Header extends Component {
    constructor() {
        console.log("Inside the constructor");
        super();
        this.state = {
            title: "Edureka React",
            keyword: "User Input Here"
        }
    }
   // a = "CHETHAN"; //we cannot update the value of variable if we are not defining the variable inside the state

    handleChange = (event) => {
       // console.log(event)
        console.log("Inside handleChange function");
        console.log(event.target.value);
        this.setState({
            keyword: event.target.value ? event.target.value :"User Input Here"
        })
        this.props.userText(event.target.value);
    }
    render() {
        console.log("Inside the render function");
        // const mystyle = {
        //     header: {
        //         backgroundColor: "teal"
        //     },
        //     logo: {
        //         fontSize: '30px',
        //         textAlign: 'center',
        //         color: "#fff"
        //     }
        // }
        return (
            <Fragment>
                {/* <center>
                    <h1>{this.state.text}</h1>
                    <p>{this.state.keyword}</p>
                    <p>{this.a}</p>
                </center> */}

                {/* <header style={mystyle.header} >
                    <div style={mystyle.logo}>{this.state.title}</div>
                    <center>
                        <input type="text"></input>
                        <div style={{ color: '#fff' }}>{this.state.keyword}</div>
                    </center>
                </header> */}

                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input type="text" onChange={this.handleChange}></input>
                        <div style={{ color: '#fff' }}>{this.state.keyword}</div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header; 


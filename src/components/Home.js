import React, { Component } from "react";        //Default Export
//import React, { Fragment } from "react";
import Header from "./Header";    //Default Export
//import { Header } from "./Header"; //Normal Export
import Footer from "./Footer";
import JSON from "./db.json";
import NewsDisplay from "./NewsDisplay";



//Creating a  functional component App
// const App = () => {
//   return (
//     <h1>Hi To React</h1>
//   )
// }

// const App = () => {
//   return (
//      <h1>Hi To React</h1>
//      <h2>Welcome To React</h2>  // Adjacent JSX Elements must be wrapped in an enclosing tag , Use <div> or JSX fragment <>...</>
//   )
// }



//Using <div>...</div> Adjacent JSX Elements must be wrapped in an enclosing tag
//component name must be start with capital letter ex: <Header>
// const Home = () => {
//   return (
//     // <div>
//     //   <Header />
//     //   <h1>Hi To React</h1>
//     //   <h2>Welcome to React</h2>
//     //   <Footer/>
//     // </div>

//     //Doing optimization
//     <React.Fragment>
//       <Header />
//       <h1>Hi To React</h1>
//       <h2>Welcome to React</h2>
//       <Footer year={2020} month={'Dec'} />
//     </React.Fragment>

//     // <Fragment>
//     //   <Header />
//     //   <h1>Hi To React</h1>
//     //   <h2>Welcome to React</h2>
//     //   <Footer />
//     // </Fragment>
//   )
// }

// export default Home;


//Class Based component
class Home extends Component {
  constructor() {
    super();
    this.state = {
      news: JSON,
      filtered: JSON
    }
  }
  filterNews=(userInput)=> {
    console.log(userInput ,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<USERINPUT>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    const output = this.state.news.filter((data) => {
      return data.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      // return data.feed.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    })
    this.setState({ filtered: output })
  }
  render() {
    console.log(this.state.news);
    return (
      <React.Fragment>
        <Header userText={(data) => { this.filterNews(data) }} />
        <NewsDisplay datalist={this.state.filtered} />
        <Footer year={2020} month={'Dec'} />
      </React.Fragment> 
    )
  }
}
export default Home;
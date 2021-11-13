import './App.css';
import { useState } from 'react';
import Tile from './components/Tile.js';

function App() {
  
  const [color, setColor] = useState("blue")

  function handleClick(){
    if (color === "blue"){
      setColor("red")
    }
    else{
      setColor("blue")
    }

  }
  
  
  
  return (
    <div className="App">
      <img className="qweb-logo" src="./img/qweb-logo.png"/>
      
      <div className="title-container" style={{marginTop: "10vh"}}>
        <img className="react-logo" src="./img/React-icon.svg"/>
        <h1 className="main-title">QWEB React.js Tutorial</h1>
        <img className="react-logo" src="./img/React-icon.svg"/>
      </div>

      <p className="info">
        Everything you need to know about the basics of React.js to start building dynamic web apps 
      </p>


      <h2> What is React?</h2>
      <ul className="info" style={{marginBottom: "25vh"}}>
        <li>React is a free and open-source front-end JavaScript library for building user interfaces</li>
        <li>It is maintained by Facebook and a community of individual developers and companies</li>
        <li>React can be used as a base in the development of single-page or mobile applications (with React Native) </li>
      </ul>

      <h3>some popular web apps that are built in React:</h3>
      <img src="./img/sites.png" style={{width: "75%", marginBottom: "25vh"}}/>

      <h3> why even use React</h3>
      <ul style={{display: "flex", justifyContent: "center",}}>
        <li className="info">Community-driven</li>
        <li className="info">Intuitiveness</li>
        <li className="info">Faster Iteration</li>
      </ul>



      <h3>How it works</h3>
      
      <p className="info">
        React maintains a tree of HTML elements for you, and allows for more efficient manipulation of DOM elements.
      </p>

      <img src="./img/virtualDOM.png" style={{width: "60%"}}/>

      <p className="info">
        Changes to elements in
        the DOM itself are not necessarily slow, but after updating an element ALL child elements have to be re-rendered ass which can take some time.
        React fixes this with a <span style={{fontWeight: "900"}}>Virtual DOM</span>
      </p>

      <p className="info">
        
        When new elements are added to a page, a new virtual DOM tree is created
      </p>

        <h4  style={{marginTop: "25vh"}}>JSX</h4>
        
        <p className="info">
          JSX === JavaScript XML   
        </p>

        <p className="info">
          React elements are written using JSX an extension of JS that gets translated into regular JS at runtime. It allows us to write HTML code in our JavaScript and place them in the DOM 
          without using performance costing DOM manipulation functions like 'createElement()' or 'appendChild()' for example
        </p>

          <p className="info">
            <code style={{fontSize: "1rem"}}>
              let jsxElement = {"<h1 className='title' style={{fontSize: '2rem'}}>Hello World</h1>"}
            </code>
          </p>
          vs.
          <p className="info" >
            <code style={{fontSize: "1rem"}}>
              let vanillaElement = {"<h1 class='title' style='font-size: 2rem;'>Hello World</h1>"}
            </code>
          </p>


      <h4 style={{marginTop: "25vh"}}>Components and Props</h4>
        <p className="info">The primary functionality of React is being able to split the UI into independent reusable pieces known as <span style={{fontWeight: "900"}}>Components</span></p>
        <code>
          {`function Tile(props){
              return(
                  <div className="tile">
                      <img src={props.img}/>
                      <h2>{props.title}</h2>
                      <p>{props.txt}</p>
                  </div>
              )
            }

          `}
        </code>
      
        <p className="info">
        In order to set the state of the component from the parent element, you need to pass properties or props to the child. This is done using function arguments in JS.
      </p>

      <div style={{display: "flex"}}>
        <Tile 
          img = "../img/monkey.jpeg"
          title = "Monkey"
          text = "This is a monkey"
        />
        <Tile 
          img = "./img/duck.jpeg"
          title = "Duck"
          text = "This is a duck"
        />
        <Tile 
          img = "./img/giraffe.jpeg"
          title = "Giraffe"
          text = "This is a Giraffe"
        />
        <Tile 
          img = "./img/dog.jpeg"
          title = "Dog"
          text = "This is a dog"
        />
      </div>

      <div className="background">
        <img className="react-logo background-logo" src="./img/React-icon.svg" />
      </div>
      
      <h2 style={{marginTop: "25vh"}}>State and Lifecycle</h2>
      <p className="info">
        Understanding the concept of state in react is fundamental to making fluid web apps as you need a way to handle
        dynamic changes to the dom. 
      </p>

      <p className="info">
        Understanding the concept of state in react is fundamental to making fluid web apps as you need a way to handle
        dynamic changes to the dom. 
      </p>

      <div className="state-container"> 
          <button onClick={handleClick} style={{backgroundColor: "blue", color: "white", fontSize: "2rem", borderRadius: "1rem", width: "15rem", border: "none", height: "5rem", marginRight: "3rem"}}>setState</button>
          ---->
          <p style={{color: color, fontSize: "3rem", marginLeft: "3rem"}}> This is a stateful element </p>
      </div>
      
      <p className="info">
          All components in react have a built in "state object"
      </p>

      <p className="info">
          It's where you store property values of a component like, color, text, any other attribute 
      </p>

      <p className="info">
          You can see this in chrome dev tools 
      </p>
      
      <h3>The useState Hook</h3>
      
      <div style={{display: "flex", width: "70%"}}>
        <img src="./img/hooks.png" style={{width: "50rem"}}/>
        <div style={{}}>
          <p className="info">
              <span style={{fontWeight: "900"}}>What's a hook even?</span> A Hook is a special function that lets you "hook into" React features.
          </p>
          <p className="info">
              <span style={{fontWeight: "900"}}>useState</span> lets you add React state to functional components. you should use it when updating the state
              of a UI element
          </p>
          <p className="info">
              <span style={{fontWeight: "900"}}>setState</span> is asynchronous
          </p>
        </div>
      </div>

      

    </div>
  );
}

export default App;

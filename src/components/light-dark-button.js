import React from "react"
import { ReactComponent as LightLogo } from '../images/candle.svg'
import "../styles/light_dark_button.css"

class LightDarkButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);

      if (typeof window !== 'undefined') {
        const currentTheme = localStorage.getItem("theme");
        console.log(currentTheme)
        
        if (currentTheme === "dark") {
            document.body.classList.toggle("dark-theme");
        } else if (currentTheme === "light") {
            document.body.classList.toggle("light-theme");
        }
      }
      
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));

      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    //   console.log(prefersDarkScheme)
    
    //   const currentTheme = localStorage.getItem("theme");
    //   console.log(currentTheme)

      var theme = null

      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var l_theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
        theme = l_theme;
        // console.log(theme)
      } else {
        document.body.classList.toggle("dark-theme");
        var d_theme = document.body.classList.contains("dark-theme")
          ? "dark"
          : "light";
        theme = d_theme;
        // console.log(theme)
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem("theme", theme);
      }
    //   console.log(currentTheme)
    }
  
    render() {
      return (
          <div className="light-dark-button-div">
            <LightLogo onClick={this.handleClick} className="inner-about-contact light-dark-icon"/>
            {/* style={{fill: '#BF5EFF'}} */}
            {/* <Button onClick={this.handleClick} classname="test">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button> */}
          </div>
      );
    }
  }

export default LightDarkButton

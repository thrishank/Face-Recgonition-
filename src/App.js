import React,{ Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js'; 

const ParticlesOptions = {
  Particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA901",
        blur: 5
      }
    }
  }
}
class App extends Component {
  render() {
  return (
    <div className="App">
    <Particles
      params={ParticlesOptions}
    />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
    {/* <FaceRecognition />  */}
    </div>
  );
}
}

export default App;

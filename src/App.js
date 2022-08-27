import React,{ Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import ParticlesComponent from  './components/Particles/Particles';


class App extends Component {
  render() {
  return (
    <div className="App">
    <ParticlesComponent /> 
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

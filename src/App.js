import React, { Component } from 'react';
// eslint-disable-next-line
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import ParticlesComponent from './components/Particles/Particles';

const app = new Clarifai.App({
  apiKey: '2069e1e8b8af454c92eb76249b2e2e58'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      ImageUrl: '',
      box: {},
      route: 'Signin'
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions_info.bounding_box;
    const image = Document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width,
      toprow: clarifaiFace.top_row * height,
      rightcol: width - (clarifaiFace.right_col * width),
      bottomrow: height - (clarifaiFace.bottomcol * height)
    }
  }

  displayFacebox = (box) => {
    this.setState({ box: box });
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ ImageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }
  onRouteChange = (route) => {
    this.setState({ route: 'home' });
  }
  render() {
    return (
      <div className="App">
        <ParticlesComponent />
        <Navigation />
        {this.state.route === 'Signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={this.state.box} ImageUrl={this.state.ImageUrl} />
          </div>
        }
      </div>
    );
  }
}

export default App;


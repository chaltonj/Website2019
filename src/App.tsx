import * as React from 'react';

import Description from "./components/Description/Description";
import Header from './components/Header/Header';
import Photo from './components/Photo/Photo';

import './App.css';

interface IAppState {
  photoUrl: string,
  blindLoad: string
}

class App extends React.Component<any, IAppState> {

  constructor(props: IAppState) {
    super(props);
    this.state = { photoUrl : "CoffeeMaking.jpg", blindLoad : "" };
  }

  public componentDidMount = () => {
    setTimeout(() => 
    {
      this.setState({ blindLoad : "BLM6.jpg" });
      setTimeout(() => 
      {
        this.setState({ blindLoad : "IndoorProject.png" });
      }, 2000);
    }, 2000);
  }
  
  public setPhotoUrl = (url: string) => {
    this.setState({ photoUrl : url });
  }

  public resetPhotoUrl = () => {
    this.setState({ photoUrl : "CoffeeMaking.jpg" });
  }

  public render() {
    return (
      <div className="App">
        <div className="app__scroll">
          <div className="app__leftbar">
            <Photo url={ this.state.photoUrl }/>
          </div>
          <div className="app__rightbar">
            <Header />
            <Description setPhotoUrl={ this.setPhotoUrl } resetPhotoUrl={ this.resetPhotoUrl }/>
          </div>
        </div>
        <img className="app_blind" src={ this.state.blindLoad } />
      </div>
      
    );
  }
}

export default App;

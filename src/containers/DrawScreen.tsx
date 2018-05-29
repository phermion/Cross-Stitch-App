import * as React from 'react';
import { Segment } from 'semantic-ui-react'
import Canvas from '../components/Canvas';
import DMCPicker from '../components/DMCPicker/DMCPicker';
import ViewModeMenu from '../components/ViewModeMenu';
import './App.css';

class App extends React.Component {
  public render() {
    return (
        <div>
            <Segment compact={true}>
              <ViewModeMenu />
              <Canvas />
            </Segment>
            <Segment>
              <DMCPicker />
            </Segment>
        </div>
    );
  }
}

export default App;

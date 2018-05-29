// tslint:disable:no-console
import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import StitchBlock from '../components/StitchBlock';

export interface IStitch {
  'x': number;
  'y': number;
  'color': string;
}

export interface ICanvas {
  height: number;
  stitchWidth: number;
  width: number;
}

interface IState { 
  activeColor: string;
  canvas: ICanvas;
  stitchArray: IStitch[][];
  stitchElements: JSX.Element[];
};

class Canvas extends React.Component<{}, IState> {
  public canvasDefaultParams: ICanvas = {
    height: 15,
    stitchWidth: 14,
    width: 15
  }

  constructor(props: any){
    super(props);
    const blankStitchArray = this.initialiseStitchArray(this.canvasDefaultParams.width, this.canvasDefaultParams.height);
    this.state = { 
      activeColor: 'red',
      canvas: this.canvasDefaultParams,
      stitchArray: blankStitchArray,
      stitchElements: []
    };
  }

  public render() {
    const canvasStyles = {
      'backgroundSize': `${this.state.canvas.stitchWidth * 2}px`,
      'height': `${this.state.canvas.height * this.state.canvas.stitchWidth}px`,
      'width': `${this.state.canvas.width * this.state.canvas.stitchWidth}px`,
    }
    return (
      <Segment compact={true}>
        <div className="c-canvas c-canvas--realistic" style={canvasStyles}>
          { this.createStitchElements() }
        </div>
      </Segment>
    );
  }

  public setStitchData = (stitch: IStitch): void => {
    const updatedStitchArray = this.state.stitchArray;
    updatedStitchArray[stitch.y][stitch.x].color = this.state.activeColor;
    this.setState({stitchArray: updatedStitchArray});
  }

  public initialiseStitchArray = (width = this.state.canvas.width, height = this.state.canvas.height): IStitch[][] => {
    const stitchArray = [];
    for (let y=0; y < height; y++) {
      const stitchRow: IStitch[] = [];
      for (let x=0; x < width; x++) {
        const stitchData = {
          'color': '',
          'x': x,
          'y': y,
        };
        stitchRow.push(stitchData);
      }
      stitchArray.push(stitchRow);
    }
    return stitchArray;
  }

  public createStitchElements = (inputStitchArray: IStitch[][] = this.state.stitchArray): JSX.Element[] => {
      const stitchArray = Array.prototype.concat(...inputStitchArray);
      const stitchElements = stitchArray.map((item) => {
        return <StitchBlock
          key={`${item.x}-${item.y}`}
          dataStitch={item}
          dataCanvas={this.state.canvas}
          onChangeStitch={this.setStitchData}
        />;
      })
      return stitchElements;
  }


}

export default Canvas;
import * as React from 'react';
import { ICanvas, IStitch  } from './Canvas';


export interface ICanvas {
    height: number;
    stitchWidth: number;
    width: number;
}

interface IState { 
    stitch: IStitch;
};

interface IProps { 
    dataCanvas: ICanvas;
    dataStitch: IStitch;
    onChangeStitch: (stitch: IStitch) => void;
};

class StitchBlock extends React.Component<IProps, IState> {
    constructor(props: any){
        super(props);
        this.state = { 
            stitch: this.props.dataStitch
        };
    }

    public setStitch = (event: any): void => {
        this.props.onChangeStitch(this.state.stitch);
    }

    public render() {
        const canvasProps: ICanvas = this.props.dataCanvas;

        const threadThickness = canvasProps.stitchWidth / 2;
        const stitchLength = Math.sqrt(2 * canvasProps.stitchWidth * canvasProps.stitchWidth) - canvasProps.stitchWidth / 6 // arbitrary scaling factor;

        const stitchStyles = {
            background: this.state.stitch.color,
            boxShadow: `inset 0 0 ${threadThickness}px 0 rgba(0,0,0,0.3)`,
            display: !this.state.stitch.color ? 'none' : '',
            height: `${threadThickness}px`,
            left: `${(canvasProps.stitchWidth - stitchLength) / 2}px`,
            top: `${(canvasProps.stitchWidth / 2) - (threadThickness / 2)}px`,
            width: `${stitchLength}px`
        }

        return (
            <div className="c-stitchBlock" onClick={this.setStitch} style={{width: canvasProps.stitchWidth, height: canvasProps.stitchWidth}}>
                <div className="c-stitchBlock-stitch" style={{background: this.state.stitch.color}}>
                    <span className="c-stitchBlock-stitch-left" style={stitchStyles} />
                    <span className="c-stitchBlock-stitch-right" style={stitchStyles} />
                </div>
            </div>
        );
    }
}

export default StitchBlock;
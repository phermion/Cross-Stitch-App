import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';
import DMCColourList from './rgb-dmc';

interface IColourItem {
  content: string,
  value: string,
  key: string,
  desciption?: string
}

class DMCPicker extends React.Component {
  public colourOptionsList: IColourItem[] = [];
  public colourListRaw = DMCColourList;

  get createColourOptions() {
    
    const dropdownItems = DMCColourList.map((item) => {
      return ({
        description: item.description,
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="2em" height="2em"><path fill="rgb(${item.r},${item.g},${item.b})" d="M0 0h10v10H0z"/></svg>`,
        key: item.floss,
        text: `DMC${item.floss}`,
        value: `DMC${item.floss}`
      });
    });
    return dropdownItems;
  };

  public render() {
    const dropdownItems = this.createColourOptions;
    return (
        <Dropdown 
            placeholder='Select Colour'
            fluid = { true }
            labeled = { true }
            search = { true }
            selection = { true }
            options = {dropdownItems} />
    );
  }
}

export default DMCPicker;
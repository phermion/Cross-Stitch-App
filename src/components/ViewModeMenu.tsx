import * as React from 'react';
import { Menu } from 'semantic-ui-react';

class StitchBlock extends React.Component {
    public state = {};

    public render() {
        return (
            <Menu fluid={true} widths={3}>
                <Menu.Item name='Pixels' />
                <Menu.Item name='Stitches' />
                <Menu.Item name='Pattern' />
            </Menu>
        );
    }
}

export default StitchBlock;
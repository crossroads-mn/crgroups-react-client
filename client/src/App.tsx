import * as React from 'react';
import List from '@material-ui/core/List';
import { GroupData } from './models/GroupData';
import GroupListItem from './GroupListItem';

export interface AppProps {
    data: GroupData[]
}

export class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render(): JSX.Element {
        const listItems = this.props.data.map((g) => {
            return (<GroupListItem group={g}/>
            )
        })

        return (
            <List>
                { listItems }
            </List>
        )
    }
}
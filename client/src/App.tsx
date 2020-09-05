import * as React from 'react';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import { GroupData } from './models/GroupData';
import GroupListItem from './GroupListItem';

export interface AppProps {
    data: GroupData[]
}

const App = (props: AppProps) => {
    const listItems = props.data.map((g) => {
        return (<GroupListItem group={g}/>
        )
    })

    return (
        <>
            <List>
                { listItems }
            </List>
            {/* <Dialog fullScreen open={open} onClose={handleClose}></Dialog> */}
        </>
    )
}

export default App;
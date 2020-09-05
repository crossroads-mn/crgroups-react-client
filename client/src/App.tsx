import * as React from 'react';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { GroupData } from './models/GroupData';
import GroupListItem from './GroupListItem';

export interface AppProps {
    data: GroupData[]
}

const Transition = React.forwardRef(function Transition(props: any, ref: any) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const App = (props: AppProps) => {
    const [open, setOpen] = React.useState(false);
    const [group, setGroup] = React.useState(props.data[0])

    const handleGroupClick = (group: GroupData) => {
        console.log(`Group clicked: ${group.TITLE}`);
        setGroup(group);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const listItems = props.data.map((g) => {
        return (<GroupListItem group={g} onClick={handleGroupClick}/>
        )
    })

    return (
        <>
            <List>
                { listItems }
            </List>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition as any}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6">
                            {group.TITLE}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Dialog>
        </>
    )
}

export default App;
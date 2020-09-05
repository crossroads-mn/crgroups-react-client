import * as React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
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
    const [group, setGroup] = React.useState(props.data[0]);

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
                <Toolbar>
                    <Typography variant="h5">
                        {group.TITLE}
                    </Typography>
                    <Button>Sign Up</Button>
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <div style={{ margin: '4px' }}>
                    <Typography variant="h6">
                        Description
                    </Typography>
                    <Typography variant="body1">
                        {group.DESCRIPTION}
                    </Typography>
                    <span>
                        <Typography variant="h6">Who Should Attend?</Typography>
                        <Typography variant="body1">{group.TARGET_AUDIENCE}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Day the Group Meets?</Typography>
                        <Typography variant="body1">{group.MEET_DAY}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Number of Weeks?</Typography>
                        <Typography variant="body1">{group.DURATION}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Time Group Starts and Ends?</Typography>
                        <Typography variant="body1">{group.MEET_TIME_START}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Leader's Name</Typography>
                        <Typography variant="body1">{group.LEADER}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Email Address</Typography>
                        <Typography variant="body1">{group.EMAIL}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Location Where Group Meets?</Typography>
                        <Typography variant="body1">{group.LOCATION}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Cost</Typography>
                        <Typography variant="body1">{group.COST}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Is Childcare Provided?</Typography>
                        <Typography variant="body1">{ (group.CARE_PROVIDED == '1') ? "Yes" : "No" }</Typography>
                    </span>
                </div>
            </Dialog>
        </>
    )
}

export default App;
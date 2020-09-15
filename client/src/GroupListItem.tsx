import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import DeckIcon from '@material-ui/icons/Deck';
import WeekendIcon from '@material-ui/icons/Weekend'; 
import { GroupData } from 'models/GroupData';

const GroupListItem = (props: { group: GroupData, onClick: (group: GroupData) => void }) => {

    const handleClick = () => {
        props.onClick(props.group);
    }

    const primaryText = props.group.TITLE;
    const secondaryText = `${props.group.MEET_DAY}'s - ${props.group.CATEGORY} - ${props.group.GROUP_TYPE}`;

    let avatar;

    switch (props.group.GROUP_TYPE) {
        case 'Zoom': 
            avatar = (
                <Avatar>
                    <VideocamIcon />
                </Avatar>
            )
            break;
        case 'Outside': 
            avatar = (
                <Avatar>
                    <DeckIcon />
                </Avatar>
            )
            break;
        default:
            avatar = (
                <Avatar>
                    <WeekendIcon />
                </Avatar>
            )
    }

    return (
        <ListItem onClick={handleClick}>
            <ListItemAvatar>
                { avatar }
            </ListItemAvatar>
            <ListItemText primary={primaryText} secondary={secondaryText}/>
        </ListItem>
    );
};

export default GroupListItem;
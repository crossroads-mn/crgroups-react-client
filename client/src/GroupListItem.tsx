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

    let avatar;

    switch (props.group.GROUP_TYPE) {
        case 'Zoom': 
            avatar = (
                <Avatar>
                    <VideocamIcon />
                </Avatar>
            )
            break;
        case 'Outdoor': 
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
            <ListItemText>{props.group.TITLE}</ListItemText>
        </ListItem>
    );
};

export default GroupListItem;
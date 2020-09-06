import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    clear: {
        background: 'linear-gradient(95deg, #c5c5c5 0%, #9e9e9e 21%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(125 125 125 / 30%)',
        color: 'white',
        height: 48,
        padding: '0 30px', 
        margin: '4px',
        width: '150px'            
    }
})

const ResetButton = (props: { title: string, onClick: () => void }) => {
    const classes = useStyles();

    const handleClick = () => {
        props.onClick();
    }

    return (<Button className={classes.clear} onClick={handleClick}>{props.title}</Button>);
}

export default ResetButton;
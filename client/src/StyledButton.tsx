import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface StyledButtonProps {
    title: string
    style?: 'primary' | 'grey',
    href?: string
    onClick?: (title: string) => void
}

const useStyles = makeStyles(theme => ({
    button: {
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px', 
        margin: '4px',
        width: '150px' 
    },
    buttonColor: {
        background: `linear-gradient(95deg, ${theme.palette.primary.main} 80%, ${theme.palette.primary.light} 90%)`,
        boxShadow: `0 3px 5px 2px rgb(125 125 125 / 30%)`,
    },
    buttonGray: {
        background: `linear-gradient(95deg, ${theme.palette.grey[700]} 80%, ${theme.palette.grey[600]} 90%)`,
        boxShadow: '0 3px 5px 2px rgb(125 125 125 / 30%)',
    }
}))

const StyledButton = (props: StyledButtonProps) => {

    const classes = useStyles();
    const className = (props.style == 'primary') ? 
        `${classes.button} ${classes.buttonColor}` :
        `${classes.button} ${classes.buttonGray}`;

    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.title);
        }
    }

    if (props.href) {
        return <Button className={className} href={props.href}>{props.title}</Button>;
    }
    else {
        return <Button className={className} onClick={handleClick}>{props.title}</Button>;
    }
}

export default StyledButton;
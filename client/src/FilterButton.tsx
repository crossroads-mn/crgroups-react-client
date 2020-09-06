import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    filter: {
        background: 'linear-gradient(95deg, #FF8E53 20%, #EBAE3D 40%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px', 
        margin: '4px',
        width: '150px'       
    }
})

const FilterButton = (props: { title: string, onClick: (title: string) => void }) => {
    const classes = useStyles();

    const handleClick = () => {
        props.onClick(props.title);
    }

    return (<Button className={classes.filter} onClick={handleClick}>{props.title}</Button>);
}

export default FilterButton;
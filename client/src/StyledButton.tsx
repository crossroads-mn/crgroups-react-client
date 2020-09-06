import * as React from 'react';
import Button from '@material-ui/core/Button';

interface StyledButtonProps {
    title: string
    className: string
    onClick: (title: string) => void
}

const StyledButton = (props: StyledButtonProps) => {
    const handleClick = () => {
        props.onClick(props.title);
    }

    return (<Button className={props.className} onClick={handleClick}>{props.title}</Button>);
}

export default StyledButton;
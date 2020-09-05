import * as React from 'react';
import Button from '@material-ui/core/Button';

const FilterButton = (props: { title: string, onClick: (title: string) => void }) => {
    const handleClick = () => {
        props.onClick(props.title);
    }

    return (<Button onClick={handleClick}>{props.title}</Button>);
}

export default FilterButton;
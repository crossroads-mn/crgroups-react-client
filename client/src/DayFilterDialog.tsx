import * as React from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Dialog } from '@material-ui/core';
import { Filters } from './models/Filters';

const DayFilterDialog = (props: { filters: Filters, onFilterSelection: ( filters: Filters ) => void }) => {

    const handleSelection = (event: any) => {
        console.log(`Filter value selected: ${event.target.value}`);

        const newFilters = {...props.filters};
        newFilters.MeetDay = event.target.value;

        props.onFilterSelection(newFilters);
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Days</FormLabel>
            <RadioGroup defaultValue={props.filters.MeetDay} name="dayFilter" onChange={handleSelection}>
                <FormControlLabel value="Sunday" control={<Radio />} label="Sunday" />
                <FormControlLabel value="Monday" control={<Radio />} label="Monday" />
                <FormControlLabel value="Tuesday" control={<Radio />} label="Tuesday" />
                <FormControlLabel value="Wednesday" control={<Radio />} label="Wednesday" />
                <FormControlLabel value="Thursday" control={<Radio />} label="Thursday" />
                <FormControlLabel value="Friday" control={<Radio />} label="Friday" />
                <FormControlLabel value="Saturday" control={<Radio />} label="Saturday" />
            </RadioGroup>
        </FormControl>
    )
}

export default DayFilterDialog;
import * as React from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Dialog } from '@material-ui/core';
import { Filters } from './models/Filters';

const GroupTypeFilterDialog = (props: { filters: Filters, onFilterSelection: ( filters: Filters ) => void }) => {

    const handleSelection = (event: any) => {
        console.log(`Filter value selected: ${event.target.value}`);

        const newFilters = {...props.filters};
        newFilters.GroupType = event.target.value;

        props.onFilterSelection(newFilters);
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Days</FormLabel>
            <RadioGroup defaultValue={props.filters.MeetDay} name="groupTypeFilter" onChange={handleSelection}>
                <FormControlLabel value="Zoom" control={<Radio />} label="Zoom" />
                <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
                <FormControlLabel value="Inside" control={<Radio />} label="Inside" />
            </RadioGroup>
        </FormControl>
    )
}

export default GroupTypeFilterDialog;
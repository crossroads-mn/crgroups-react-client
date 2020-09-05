import * as React from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Dialog } from '@material-ui/core';
import { Filters } from './models/Filters';

const CategoryFilterDialog = (props: { filters: Filters, onFilterSelection: ( filters: Filters ) => void }) => {

    const handleSelection = (event: any) => {
        console.log(`Filter value selected: ${event.target.value}`);

        const newFilters = {...props.filters};
        newFilters.Category = event.target.value;

        props.onFilterSelection(newFilters);
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Days</FormLabel>
            <RadioGroup defaultValue={props.filters.MeetDay} name="categoryFilter" onChange={handleSelection}>
                <FormControlLabel value="Young Adult" control={<Radio />} label="Young Adult" />
                <FormControlLabel value="Women" control={<Radio />} label="Women" />
                <FormControlLabel value="Men" control={<Radio />} label="Men" />
                <FormControlLabel value="Support" control={<Radio />} label="Support" />
                <FormControlLabel value="Interest" control={<Radio />} label="Interest" />
            </RadioGroup>
        </FormControl>
    )
}

export default CategoryFilterDialog;
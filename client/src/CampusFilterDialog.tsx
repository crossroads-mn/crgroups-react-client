import * as React from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Dialog } from '@material-ui/core';
import { Filters } from './models/Filters';

const CampusFilterDialog = (props: { filters: Filters, onFilterSelection: ( filters: Filters ) => void }) => {

    const handleSelection = (event: any) => {
        console.log(`Filter value selected: ${event.target.value}`);

        const newFilters = {...props.filters};
        newFilters.Campus = event.target.value;

        props.onFilterSelection(newFilters);
    }

    return (
        <FormControl component="fieldset">
            <RadioGroup defaultValue={props.filters.Campus} name="campusFilter" onChange={handleSelection}>
                <FormControlLabel value="Woodbury" control={<Radio />} label="Woodbury" />
                <FormControlLabel value="Eagan" control={<Radio />} label="Eagan" />
                <FormControlLabel value="Cottage Grove" control={<Radio />} label="Cottage Grove" />
                <FormControlLabel value="Hastings" control={<Radio />} label="Hastings" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    )
}

export default CampusFilterDialog;
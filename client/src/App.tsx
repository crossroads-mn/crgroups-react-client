import * as React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import DayFilterDialog from './DayFilterDialog';
import GroupListItem from './GroupListItem';
import FilterButton from './FilterButton';
import ResetButton from './ResetButton';
import CampusFilterDialog from './CampusFilterDialog';
import CategoryFilterDialog from './CategoryFilterDialog';
import GroupTypeFilterDialog from './GroupTypeFilterDialog';
import { GroupData } from './models/GroupData';
import { Filters } from 'models/Filters';

export interface AppProps {
    data: GroupData[]
}

const defaultFilters : Filters = {
    Category: '',
    Campus: '',
    GroupType: '',
    MeetDay: ''
};

const Transition = React.forwardRef(function Transition(props: any, ref: any) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const App = (props: AppProps) => {
    const [group, setGroup] = React.useState(props.data[0]);
    const [selectedFilter, setSelectedFilter] = React.useState('');
    const [filters, setFilters] = React.useState(defaultFilters)
    const [openFilter, setOpenFilter] = React.useState(false);
    const [openGroupDetails, setOpenGroupDetails] = React.useState(false);

    const handleFilterClick = (filter: string) => {
        console.log(`Filter clicked: ${filter}`);
        setSelectedFilter(filter);
        setOpenFilter(true);
    }

    const handleFilterClear = () => {
        setSelectedFilter('');
        setFilters(defaultFilters);
    }

    const handleFilterValueSelection = (filters: Filters) => {
        console.log(`New filters: Category = ${filters.Category}, Campus = ${filters.Campus}, GroupType = ${filters.GroupType}, MeetDay = ${filters.MeetDay}`);
        setFilters(filters);
    }

    const handleFilterClose = () => {
        setOpenFilter(false);
    }

    const handleGroupClick = (group: GroupData) => {
        console.log(`Group clicked: ${group.TITLE}`);
        setGroup(group);
        setOpenGroupDetails(true);
    }

    const handleGroupDetailsClose = () => {
        setOpenGroupDetails(false);
    };

    const listItems = props.data
    .filter((g) => {
        if (filters.MeetDay == '') { return true; }
        else { return filters.MeetDay == g.MEET_DAY }
    }).filter((g) => {
        if (filters.Category == '') { return true; }
        else { return filters.Category == g.CATEGORY }
    }).filter((g) => {
        if (filters.Campus == '') { return true; }
        else { return filters.Campus == g.CAMPUS }
    }).filter((g) => {
        if (filters.GroupType == '') { return true; }
        else { return filters.GroupType == g.GROUP_TYPE }
    }).map((g) => {
        return (<GroupListItem group={g} onClick={handleGroupClick}/>
        )
    })

    const currentFilterDialog = () => {
        if (selectedFilter == "Days") {
            return (<DayFilterDialog filters={filters} onFilterSelection={handleFilterValueSelection}/>)
        }
        if (selectedFilter == "Locations") {
            return (<CampusFilterDialog filters={filters} onFilterSelection={handleFilterValueSelection}/>)
        }
        if (selectedFilter == "Category") {
            return (<CategoryFilterDialog filters={filters} onFilterSelection={handleFilterValueSelection}/>)
        }
        if (selectedFilter == "Group Type") {
            return (<GroupTypeFilterDialog filters={filters} onFilterSelection={handleFilterValueSelection}/>)
        }

        return (<></>)
    } 

    return (
        <>
            <Grid container direction="row" justify="center" alignItems="center">
                <FilterButton title={'Days'} onClick={handleFilterClick} />
                <FilterButton title={'Locations'} onClick={handleFilterClick} />
                <FilterButton title={'Category'} onClick={handleFilterClick} />
                <FilterButton title={'Group Type'} onClick={handleFilterClick} />
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <ResetButton title={'Reset'} onClick={handleFilterClear} />
            </Grid>
            <List>
                { listItems }
            </List>
            <Dialog fullScreen open={openFilter} onClose={handleFilterClose} TransitionComponent={Transition as any}>
                <Toolbar>
                    <IconButton edge="end" color="inherit" onClick={handleFilterClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                { currentFilterDialog() }
            </Dialog>
            <Dialog fullScreen open={openGroupDetails} onClose={handleGroupDetailsClose} TransitionComponent={Transition as any}>
                <Toolbar>
                    <Typography variant="h5">
                        {group.TITLE}
                    </Typography>
                    <Button href={group.GROUP_LINK}>Sign Up</Button>
                    <IconButton edge="end" color="inherit" onClick={handleGroupDetailsClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <div style={{ margin: '4px' }}>
                    <Typography variant="h6">
                        Description
                    </Typography>
                    <Typography variant="body1">
                        {group.DESCRIPTION}
                    </Typography>
                    <span>
                        <Typography variant="h6">Who Should Attend?</Typography>
                        <Typography variant="body1">{group.TARGET_AUDIENCE}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Day the Group Meets?</Typography>
                        <Typography variant="body1">{group.MEET_DAY}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Number of Weeks?</Typography>
                        <Typography variant="body1">{group.DURATION}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Time Group Starts and Ends?</Typography>
                        <Typography variant="body1">{group.MEET_TIME_START}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Leader's Name</Typography>
                        <Typography variant="body1">{group.LEADER}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Email Address</Typography>
                        <Typography variant="body1">{group.EMAIL}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Location Where Group Meets?</Typography>
                        <Typography variant="body1">{group.LOCATION}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Cost</Typography>
                        <Typography variant="body1">{group.COST}</Typography>
                    </span>
                    <span>
                        <Typography variant="h6">Is Childcare Provided?</Typography>
                        <Typography variant="body1">{ (group.CARE_PROVIDED == '1') ? "Yes" : "No" }</Typography>
                    </span>
                </div>
            </Dialog>
        </>
    )
}

export default App;
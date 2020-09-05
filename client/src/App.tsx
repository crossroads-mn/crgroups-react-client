import * as React from 'react';
import List from '@material-ui/core/List';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import FilterListIcon from '@material-ui/icons/FilterList';
import DayFilterDialog from './DayFilterDialog';
import Slide from '@material-ui/core/Slide';
import { GroupData } from './models/GroupData';
import GroupListItem from './GroupListItem';
import FilterButton from './FilterButton';
import { Filters } from 'models/Filters';

export interface AppProps {
    data: GroupData[]
}

const Transition = React.forwardRef(function Transition(props: any, ref: any) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const App = (props: AppProps) => {
    const [group, setGroup] = React.useState(props.data[0]);
    const [selectedFilter, setSelectedFilter] = React.useState('');
    const [filters, setFilters] = React.useState({
        Category: '',
        Campus: '',
        GroupType: '',
        MeetDay: ''
    } as Filters)
    const [openFilter, setOpenFilter] = React.useState(false);
    const [openGroupDetails, setOpenGroupDetails] = React.useState(false);

    const handleFilterClick = (filter: string) => {
        console.log(`Filter clicked: ${filter}`);
        setSelectedFilter(filter);
        setOpenFilter(true);
    }

    const handleFilterValueSelection = (filters: Filters) => {
        console.log(`New filters: ${filters}`)
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

    const listItems = props.data.map((g) => {
        return (<GroupListItem group={g} onClick={handleGroupClick}/>
        )
    })

    const currentFilterDialog = () => {
        if (selectedFilter == "Days") {
            return (<DayFilterDialog filters={filters} onFilterSelection={handleFilterValueSelection}/>)
        }

        return (<></>)
    } 

    return (
        <>
            <ButtonGroup color="primary">
                <FilterButton title={'Days'} onClick={handleFilterClick} />
                <FilterButton title={'Locations'} onClick={handleFilterClick} />
            </ButtonGroup>
            <ButtonGroup color="primary">
                <FilterButton title={'Category'} onClick={handleFilterClick} />
                <FilterButton title={'Group Type'} onClick={handleFilterClick} />
            </ButtonGroup>
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
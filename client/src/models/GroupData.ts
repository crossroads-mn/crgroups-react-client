export interface GroupData {
    ACTIVE: '0' | '1',
    CAMPUS: 'Woodbury' | 'Eagan' | 'Cottage Grove' | 'Hastings' | 'Other',
    CARE_PROVIDED: '0' | '1',
    CATEGORY: 'Young Adult' | 'Men' | 'Women' | 'Couples' | 'Interest' | 'Support',
    COST: string,
    DESCRIPTION: string,
    DURATION: string,
    EMAIL: string,
    GROUP_LINK: string,
    GROUP_TYPE: 'Zoom' | 'Outside' | 'Inside',
    LEADER: string,
    LOCATION: string,
    MEET_DAY: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday',
    MEET_TIME_START: string,
    PHONE_NUMBER: string,
    TARGET_AUDIENCE: string,
    TITLE: string
}
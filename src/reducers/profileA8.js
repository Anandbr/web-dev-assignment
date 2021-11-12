// import profileJson from "./data/profile.json"


const profileA8 = (state = [], action) => {
    switch (action.type){
        case 'set-profile' :
            return action.profile;
        case 'fetch-user-profile':
            return (action.profile);
            // eslint-disable-next-line no-unreachable
            break;
        case 'save':

            return action.profile;
            // eslint-disable-next-line no-unreachable
            break;
        case 'update-profile':
            return (state);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return state;
    }
};
export default profileA8;
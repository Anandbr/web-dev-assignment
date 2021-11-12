import profileJson from "./data/profile.json"


const profile = (state = profileJson, action) => {
    switch (action.type){
        case 'fetch-user-profile':
            return (action.profile);
            // eslint-disable-next-line no-unreachable
            break;
        case 'save':
            return (state);
            // eslint-disable-next-line no-unreachable
            break;
        case 'update-profile':
            return (state);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return(state);
    }
};
export default profile;
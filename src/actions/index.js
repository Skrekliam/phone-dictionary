export const addContact = (val) => {
    console.log(val);
    return {        
        type: 'ADD_CONTACT',
        payload: val
    };
};
export const deleteContact = (val) => {
    console.log('deletion ' + val);
    return {        
        type: 'DELETE_CONTACT',
        payload: val
    };
};
export const triggerFavourite = (val) => {
    console.log('fav ' + val);
    return {        
        type: 'TRIGGER_FAVOURITE',
        payload: val
    };
};
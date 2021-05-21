const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName : null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true, userId : action.payload.userId, userName : action.payload.userName, givenName: action.payload.givenName}

        case 'SIGN_OUT':
            return {...state, isSignedIn : false, userId: null, userName: null, givenName: null}

        default : 
            return state;
    }
};
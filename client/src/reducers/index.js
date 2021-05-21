import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import  taskReducer from './taskReducer';
import  authReducer from './authReducer';
import noteReducer from './noteReducer';

export default combineReducers({
    auth : authReducer,
    tasks : taskReducer,
    notes : noteReducer,
    form : formReducer

});
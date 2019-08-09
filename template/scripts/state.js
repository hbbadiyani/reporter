import { combineReducers } from 'redux';

const ReadOnlyStateReducer = function ReadOnlyStateReducer() {
    return (state = {}) => state;
};

export default combineReducers({
    Reports: new ReadOnlyStateReducer()
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStoreConfigured = configureMockStore(middlewares);
const mockStore = initialState => mockStoreConfigured(initialState);

export default mockStore;

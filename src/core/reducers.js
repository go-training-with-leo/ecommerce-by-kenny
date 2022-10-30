import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { auth, cart } from 'global/redux';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cart);

const allReducer = combineReducers({
  auth,
  persistedCartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    /*eslint-disable-next-line*/
		state = undefined;
  }

  return allReducer(state, action);
};

export default rootReducer;

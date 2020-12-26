import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools());


const DataProvider = ({children}) => 
    <Provider store={store}>
        {children}
    </Provider>


export default DataProvider;


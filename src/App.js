import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Banner from "./components/Banner";
import TaskList from "./components/TaskList";
import {store} from './redux/store/store'

function App() {
    const [darkmode, setDarkmode] = useState(false);
    return (
        <Provider store={store}>
            <div className="App">
                <Banner setDarkmode={setDarkmode} darkmode={darkmode} />
                <TaskList setDarkmode={setDarkmode} darkmode={darkmode} />
            </div>
        </Provider>
    );
}
export default App;

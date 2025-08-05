import "./App.scss";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { AppContext } from "./context/index";
import { Todos } from "./components/Todos/Todos";

function App() {
    return (
        <AppContext>
            <ModalWindow />
            <Todos />
        </AppContext>
    );
}

export default App;

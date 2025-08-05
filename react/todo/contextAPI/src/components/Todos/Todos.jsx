import { TodosList, TodosFooter, TodosHead } from "./components";

export const Todos = () => {
    return (
        <div className="todo-container">
            <div className="todos">
                <TodosHead headerText="Задачи" />
                <TodosList />
                <TodosFooter />
            </div>
        </div>
    );
};

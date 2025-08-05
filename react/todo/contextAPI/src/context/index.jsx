import { SearchContext, ModalContext, TodoContext } from "./contexts";
import { useState, useRef, useEffect } from "react";
import { fetchTodos, updateTodo, deleteTodo, createTodo } from "../utils/api";

export const AppContext = ({ children }) => {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todos, setTodos] = useState([]);

    const [searchFilter, setSearchFilter] = useState("");
    const [sort, setSort] = useState("");

    const timeoutRef = useRef(null);

    useEffect(() => {
        handleFetchTodos();
    }, []);

    const handleFetchTodos = () => {
        fetchTodos()
            .then((data) => {
                setTodos(data);
            })
            .catch((error) =>
                console.error("Не удалось получить задачи:", error)
            );
    };

    const handleCheckBoxClick = (todoId) => {
        const todo = todos.find((todo) => todo.id === Number(todoId));

        if (!todo) {
            console.error("Задача не найдена");
            return;
        }

        const updatedTodo = {
            ...todo,
            completed: !todo.completed,
        };

        updateTodo(todoId, updatedTodo)
            .then((response) => {
                console.log("Задача обновлена, ответ сервера:", response);
                setTodos(
                    todos.map((todo) =>
                        todo.id === Number(todoId) ? updatedTodo : todo
                    )
                );
            })
            .catch((error) => {
                console.error("Ошибка при обновлении задачи:", error);
            });
    };

    const handleDeleteTodo = (todoId) => {
        deleteTodo(todoId)
            .then((response) => {
                console.log("Задача удалена, ответ сервера:", response);
                setTodos(todos.filter((todo) => todo.id !== Number(todoId)));
            })
            .catch((error) => {
                console.error("Ошибка при удалении задачи:", error);
            });
    };

    const requestAddTodo = (newTodo) => {
        createTodo(newTodo)
            .then((response) => {
                console.log("Задача добавлена:", response);
                setTodos([...todos, response]);
            })
            .catch((error) => {
                console.error("Ошибка при добавлении задачи:", error);
            });
    };

    const searchHandler = (e) => {
        const value = e.target.value;

        setSearch(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setSearchFilter(value);
        }, 500);
    };

    const handlerSort = () => {
        if (sort === "") {
            setSort("asc");
        } else {
            setSort("");
        }
    };

    const filteredTodos = todos
        .filter((todo) =>
            todo.title.toLowerCase().includes(searchFilter.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "asc") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

    const handlerToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                searchFilter,
                setSearchFilter,
                searchHandler,
            }}
        >
            <ModalContext.Provider
                value={{ isModalOpen, setIsModalOpen, handlerToggleModal }}
            >
                <TodoContext.Provider
                    value={{
                        todos,
                        setTodos,
                        handleFetchTodos,
                        handleCheckBoxClick,
                        handleDeleteTodo,
                        requestAddTodo,
                        searchHandler,
                        handlerSort,
                        filteredTodos,
                        sort,
                    }}
                >
                    {children}
                </TodoContext.Provider>
            </ModalContext.Provider>
        </SearchContext.Provider>
    );
};

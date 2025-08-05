import "./todosFooter.scss";
import { useContext } from "react";
import { ModalContext, TodoContext } from "../../../../context/contexts";

export const TodosFooter = () => {
    const { handlerToggleModal } = useContext(ModalContext);
    const { handlerSort, sort } = useContext(TodoContext);

    return (
        <>
            <div className="footer">
                <div className="footer__buttons">
                    <button className="add" onClick={handlerToggleModal}>
                        Добавить задачу
                    </button>
                    <button className="add" onClick={handlerSort}>
                        {sort === "asc"
                            ? "Сортировка включена"
                            : "Сортировка выключена"}
                    </button>
                </div>
            </div>
        </>
    );
};

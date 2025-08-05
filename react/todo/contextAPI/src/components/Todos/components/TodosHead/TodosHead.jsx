import { useContext } from "react";
import { SearchContext } from "../../../../context/contexts";

export const TodosHead = ({ headerText }) => {
    const { search, searchHandler } = useContext(SearchContext);

    return (
        <>
            <h1 className="todos__header">{headerText}</h1>

            <input
                type="text"
                placeholder="Поиск..."
                className="todos__search"
                value={search}
                onChange={searchHandler}
            ></input>
        </>
    );
};

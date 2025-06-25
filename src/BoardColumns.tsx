import { ColumnsTasks } from "./ColumnsTasks";

interface BoardItem {
    id: string;
    columnTitle: string;
    columnTasks: string[];
}

interface BoardColumnsProps {
    item: BoardItem;
}

export const BoardColumns = ({ item }: BoardColumnsProps) => {
    return (
        <li
            key={item.id}
            className="column"
        >
            <h2 className="column__title">{item.columnTitle}</h2>

            <ColumnsTasks
                item={item}
            />

            <button className="column__btn-add">+ Добавить карточку</button>
        </li>
    )
}
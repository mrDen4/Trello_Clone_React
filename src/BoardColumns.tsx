import { useState } from "react";
import { ColumnsTasks } from "./ColumnsTasks";

interface BoardItem {
    id: number;
    columnTitle: string;
    columnTasks: string[];
}

interface BoardColumn {
    id: number;
    columnTitle: string;
    columnTasks: string[];
}

type BoardState = BoardColumn[];

interface BoardColumnsProps {
    item: BoardItem;
    addTaskToColumn: (columnId: number, newTask: string) => void;
    setBoardInfo: React.Dispatch<React.SetStateAction<BoardState>>;
}

export const BoardColumns = ({ item, addTaskToColumn, setBoardInfo }: BoardColumnsProps) => {
    const [addInputValue, setAddInputValue] = useState('');
    const handleAddTask = () => {
        if (addInputValue.trim()) {
            addTaskToColumn(item.id, addInputValue);
            setAddInputValue('');
        }
    }

    return (
        <li
            key={item.id}
            className="column"
        >
            <h2 className="column__title">{item.columnTitle}</h2>

            <ColumnsTasks
                columnId={item.id}
                tasks={item.columnTasks}
                setBoardInfo={setBoardInfo}
            />

            <button className="column__btn-add">+ Добавить карточку</button>
            <div className="add-container">
                <input
                    type="text"
                    className="add-container__input"
                    value={addInputValue}
                    onChange={(e) => setAddInputValue(e.target.value)}
                />
                <button
                    className="add-container__btn"
                    onClick={handleAddTask}
                >
                    Добавить
                </button>
            </div>
        </li>
    )
}
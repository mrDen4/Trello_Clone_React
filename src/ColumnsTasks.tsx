interface BoardColumn {
    id: number;
    columnTitle: string;
    columnTasks: string[];
}

type BoardState = BoardColumn[];

interface ColumnsTasksProps {
    columnId: number;
    tasks: string[];
    setBoardInfo: React.Dispatch<React.SetStateAction<BoardState>>;
}

export const ColumnsTasks = ({ tasks, setBoardInfo, columnId }: ColumnsTasksProps) => {
    const deleteTaskFromColumn = (columnId: number, taskIndex: number): void => {
        setBoardInfo(prevBoardInfo => {
            const columnExists = prevBoardInfo.some(c => c.id === columnId);
            if (!columnExists) return prevBoardInfo;

            return prevBoardInfo.map(column => {
                if (column.id !== columnId) return column;
                if (taskIndex < 0 || taskIndex >= column.columnTasks.length) return column;

                return {
                    ...column,
                    columnTasks: column.columnTasks.filter((_, i) => i !== taskIndex)
                };
            });
        });
    }
    return (
        <ul>
            {tasks.map((task, index) =>
                <li key={index} className="card">
                    <input type="radio" name="" id="" className="card__checkbox" />
                    {task}
                    <button
                        className="card__exit"
                        onClick={() => deleteTaskFromColumn(columnId, index)}
                    >X</button>
                </li>
            )}
        </ul>
    )
}
import React, { useState } from "react"
import './board.css'
import { BoardColumns } from "./BoardColumns";
import { ColumnsTasks } from "./ColumnsTasks";

interface BoardProps {
    boardName: string;
}

interface BoardColumn {
  id: number;
  columnTitle: string;
  columnTasks: string[];
}

type BoardState = BoardColumn[];

export const Board: React.FC<BoardProps> = ({ boardName }) => {
    const [boardInfo, setBoardInfo] = useState<BoardState>([
        { id: 1, columnTitle: 'column title 1', columnTasks: ['task 1', 'task 2', 'task3'] },
        { id: 2, columnTitle: 'column title 2', columnTasks: ['task 1', 'task 2', 'task3'] }
    ]);

    const addTaskToColumn = (columnId: number, newTask: string): void => {
        setBoardInfo(prevBoardInfo =>
            prevBoardInfo.map(column =>
                column.id === columnId
                    ? { ...column, columnTasks: [...column.columnTasks, newTask] }
                    : column
            )
        );
    };



    return (
        <div className="board">
            <h1>{boardName}</h1>
            <ul className="columns">
                {boardInfo.map((item, index) =>
                    <BoardColumns
                        item={item}
                        key={index}
                        addTaskToColumn={addTaskToColumn}
                        setBoardInfo={setBoardInfo}
                    />
                )}
            </ul>
        </div>
    )
}

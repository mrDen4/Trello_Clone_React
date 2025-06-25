import React, { useState } from "react"
import './board.css'
import { BoardColumns } from "./BoardColumns";

interface BoardProps {
    boardName: string;
}

export const Board: React.FC<BoardProps> = ({ boardName }) => {
    const boardInfo = [
        { id: 1, columnTitle: 'column title 1', columnTasks: ['task 1', 'task 2', 'task3'] },
        { id: 2, columnTitle: 'column title 2', columnTasks: ['task 1', 'task 2', 'task3'] }
    ]
    return (
        <div className="board">
            <h1>{boardName}</h1>
            <ul className="columns">
                {boardInfo.map(item =>
                    <BoardColumns item={item}/>
                )}
            </ul>
        </div>
    )
}

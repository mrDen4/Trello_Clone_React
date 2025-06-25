import React, { useState } from "react"
import './board.css'

interface BoardProps {
    boardName: string;
}

export const Board: React.FC<BoardProps> = ({ boardName }) => {
    const boardInfo = [
        { id: 1, columnTitle: 'column title 1', columnTasks: ['task 1', 'task 2', 'task3'] },
        { id: 2, columnTitle: 'column title 2', columnTasks: ['task 1', 'task 2', 'task3'] }
    ]
    const boardItems = boardInfo.map(item =>
        <li
            key={item.id}
            className="column"
        >
            <h2 className="column__title">{item.columnTitle}</h2>
            <ul>
                {item.columnTasks.map(task =>
                    <li className="card">
                        <input type="radio" name="" id="" className="card__checkbox"/>
                        {task}
                        <button className="card__exit">X</button>
                    </li>
                )}
            </ul>
            <button className="column__btn-add">+ Добавить карточку</button>
        </li>
    )
    return (
        <div className="board">
            <h1>{boardName}</h1>
            <ul className="columns">
                {boardItems}
            </ul>
        </div>
    )
}

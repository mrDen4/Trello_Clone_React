

export const ColumnsTasks = ({ item }) => {
    return (
        <ul>
            {item.columnTasks.map(task =>
                <li className="card">
                    <input type="radio" name="" id="" className="card__checkbox" />
                    {task}
                    <button className="card__exit">X</button>
                </li>
            )}
        </ul>
    )
}
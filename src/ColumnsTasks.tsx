interface ColumnsTasksProps {
    tasks: string[];
}

export const ColumnsTasks = ({ tasks }: ColumnsTasksProps) => {
    return (
        <ul>
            {tasks.map((task, index) =>
                <li key={index} className="card">
                    <input type="radio" name="" id="" className="card__checkbox" />
                    {task}
                    <button className="card__exit">X</button>
                </li>
            )}
        </ul>
    )
}
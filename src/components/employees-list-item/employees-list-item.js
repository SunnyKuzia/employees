import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const { name, salary, increase, rise, onToggleProp, onDelete, onChangeSalary } = props;


    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) classNames += " increase";

    if (rise) classNames += " like";


    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={(event) => onToggleProp(event)} data-toggle='increase'>{name}</span>
            {/* если мы работаем с событием и используем event в коллбэк, то обязательно его передаем в аргументах, автоматически он не передастся*/}
            {/* event.currentTarget.dataset.toggle мы можем прописать и в onToggleProp но в employees-list удобнее и меньше кода */}
            <input type="text" className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={(e) => onChangeSalary(e)} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " onClick={(event) => onToggleProp(event)} data-toggle='rise'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm " onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li >
    );
}

// Функциональный компонент

// const EmployeesListItem = ({ name, salary, increase }) => {

//     let classNames = "list-group-item d-flex justify-content-between";
//     if (increase) classNames += " increase";

//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                     className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li >
//     );
// };
//defaultValue="1000$" так задается значение по умолчанию в React, value будем менять через код JS

export default EmployeesListItem;
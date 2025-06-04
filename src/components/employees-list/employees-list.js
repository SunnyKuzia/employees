
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.dataset.toggle)}
                onChangeSalary={(e) => onChangeSalary(id, e)} />
            // currentTarget а не target потому что внутри button картинка (icon с печенькой) и при нажатии на нее она = target а у нее нет аттрибута data-toggle
            // button = currentTarget(на нем навешен обработчик события click) и аттрибут data-toggle указан у него

            //!!! Здесь очень важное место, мы берем из data id и передаем в создаваемый listItem помещая id в обработчики событий, тем самым обработчики событий будут содержать инфо у какого item сработало событие и при изменении значений в App в date можно будет выбрать нужный item по id и изменить значение 

        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;
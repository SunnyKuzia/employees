import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if (this.onValidateValue(name, salary)) {
            this.props.onAdd(name, +salary);
            this.setState({
                name: '',
                salary: ''
            });
            // удалили данные в state, чтобы в полях input-ов стали пустые поля для дальнейшего ввода данных
        } else {
            alert('Incorrect value');
        }
    }

    onValidateValue = (name, salary) => {
        return (typeof name === 'string' && name.length >= 3) &&
            (typeof +salary === 'number' && salary > 0);
    }

    render() {

        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.onSubmit(e)}>
                    {/* мы не пишем в обработчике событий никаких аргументов кроме event */}
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name' // мы задали name чтобы в функции onValueChange различать у кого менять состояние, через [] поменять state у нужного элемента name а не salary
                        value={name} // так задается управляемый компонент(вместо name может писаться this.state.name)
                        onChange={this.onValueChange} />

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary' // мы задали name чтобы в функции onValueChange различать у кого менять состояние, через [] поменять state у нужного элемента salary а не name
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}


// const EmployeesAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                     className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     );
// };

export default EmployeesAddForm;
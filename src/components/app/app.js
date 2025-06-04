import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
        // здесь мы не создавали this.employees, this.employeesIncreased (мы их создали как const в методе render) потому что constructor запускается только 1 раз при создании экземпляра компонента и данные в нем неизменны более
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({ data }) => {

            const newData = [...data, newItem];

            return {
                data: newData
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => {

            return {
                data: data.map(item => {

                    if (item.id === id) {// мы не можем написать item.increase = !item.increase; из-за требований immutable объектов у React мы должны возвращать новый объект и замещать св-ва такими же с новыми значениями
                        return { ...item, [prop]: !item[prop] };// возвращаем новый объект
                    }

                    return item;
                })
            }
        });
    }

    onChangeSalary = (id, e) => {
        const salary = e.target.value;
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, salary: +salary.slice(0, salary.length - 1) };
                    }
                    return item;
                })
            };
        });

    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => item.name.indexOf(term) > -1);
    } // items это наши data в state просто Петриченко решил написать их как items здесь


    onUpdateSearch = (term) => {
        this.setState({ term });
        // тоже самое как 
        // this.setState((term) => ({
        //    term: term  }) );
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState(() => ({
            filter: filter
        }));
    }


    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const employeesIncreased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    employeesIncreased={employeesIncreased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary} />
                <EmployeesAddForm onAdd={this.addItem} />

                {/* мы можем передавать аргументы и прописывать:

                    onDelete={(id) => this.deleteItem(id)}
                    onToggleProp={(id, prop) => this.onToggleProp(id, prop)}
                    onAdd={(name, salary) => this.addItem(name, salary
                    
                    но не обязательно, обычно мы передаем аргументы, когда у нас есть переменные которые нам надо передать для дальнейших вычислений в функции)

                    если удобнее то можешь везде прописывать для удобства и понимания

                */}
            </div>
        );
    }
}

// function App() {

//     const data = [
//         { name: 'John C.', salary: 800, increase: true },
//         { name: 'Alex M.', salary: 3000, increase: false },
//         { name: 'Carl W.', salary: 5000, increase: true },
//     ];

//     return (
//         <div className="app">
//             <AppInfo />
//             <div className="search-panel">
//                 <SearchPanel />
//                 <AppFilter />
//             </div>
//             <EmployeeList data={data} />
//             <EmployeesAddForm />
//         </div>
//     );
// }
// 
export default App;
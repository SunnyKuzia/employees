import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css';

function App() {

    const data = [
        { name: 'John C.', salary: 800, increase: true },
        { name: 'Alex M.', salary: 3000, increase: false },
        { name: 'Carl W.', salary: 5000, increase: true },

    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeeList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
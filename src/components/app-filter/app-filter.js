import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="button btn btn-light"
                type="button">
                Все сотрудники
            </button>
            <button
                className="button btn btn-outline-light"
                type="button">
                На повышение
            </button>
            <button
                className="button btn btn-outline-light"
                type="button">
                З/П больше 1000$
            </button>
        </div>
    );
};

export default AppFilter;
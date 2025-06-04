import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState(() => ({
            term: term
        }));
        this.props.onUpdateSearch(term); // ТО мы передаем state от потомка SearchPanel родителю App
    }

    render() {

        return (
            <input
                type='text'
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={(e) => this.onUpdateSearch(e)} />
        );
    }

}

export default SearchPanel;
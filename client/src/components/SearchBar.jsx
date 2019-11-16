import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { value } = event.target;
        this.setState({
            query: value,
        });
    }

    render() {
        return (
        <form onSubmit={() => this.props.search(this.state.query)}>
            <label>
                Search for a movie:
             <input type='text' name='search' value={this.state.query} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Submit' />
            <button onClick={()=> this.props.reset(null)}>Clear Searched Movies</button>
        </form>

        );
    }
}


export default SearchBar;
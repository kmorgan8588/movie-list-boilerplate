import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }
}

const SearchBar = props => (
    <form onSubmit={()=> props.search(event)}>
        <label>
            Search for a movie:
            <input type='text' name='search' value={this.state.query} />
        </label>
        <input type='submit' value='Submit' />
    </form>
);

export default SearchBar;
import React from 'react';


class AddMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { value } = event.target;
        this.setState({
            movie: value,
        });
    }

    render() {
        return (
        <form onSubmit={() => this.props.add(this.state.movie)}>
            <label>
                Add a movie!
             <input type='text' name='search' value={this.state.movie} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Add movie' />
        </form>

        );
    }
}

export default AddMovies;
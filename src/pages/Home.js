import React, {Component} from 'react'

import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {

    state = {
		results: [],
		usedSearch: false
	}

	_handleResults = (results = []) => {
		this.setState({ results, usedSearch: true })
	}

	_renderMoviesList() {
		return this.state.results.length === 0 
				? <p> Sorry! Results not found </p> 
				: <MoviesList movies={this.state.results} />
	}

    render() {
        return(
            <div>
                <Title>Search Movies</Title>
				<div className="search-wrapper" >
					<SearchForm onResult={this._handleResults}/>
				</div>
				{
					this.state.usedSearch === false 
					? <p className="messageInfo">Use the form to search a movie</p> 
					: this._renderMoviesList()
				}
            </div>
           
        )
    }
}
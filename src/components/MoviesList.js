import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'

export class MoviesList extends Component {

    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies }  = this.props

        return (

            <div className="moviesList">
            {
                movies.map(movie => {   
                    return (
                        <div key={movie.imdbID} className="movieItem">
                            <Movie 
                                id={movie.imdbID}
                                className='cardMovie'
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                            />
                        </div> 
                    )                      
                })  
            }
            </div>
            
        )
    }
}
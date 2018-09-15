import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ButtonToHome } from '../components/ButtonToHome';

const API_KEY = '644c4d41'

export class Detail extends Component {

    static propTypes = {
        match : PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

    state = {
        movie: []
    }

    _fetchMovie = (id) => {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(resp => resp.json())
            .then( movie => { 
                this.setState({movie})
            })
    }

    componentDidMount() {
        
        const {id} = this.props.match.params
        this._fetchMovie(id)
    }

    render() {

        const { Title, Poster, Actors, Metascore, Plot} = this.state.movie

        return (
            <div>
                <ButtonToHome />
                <h1 style={{fontSize: 30, margin: 10}}>{Title}</h1>
                {
                    Poster === 'N/A' 
                    ? <img src='https://cdn.browshot.com/static/images/not-found.png' alt='not found'/>
                    : <img src={Poster} alt={Title} />
                    
                }
                <div style={{margin: 50}}>
                    <h3><strong>Actors: </strong>{Actors}</h3>
                    <span> <strong>Score: </strong>{Metascore} </span>
                    <p> <strong>Description: </strong>{Plot} </p>
                </div>
            </div>
        )
    }
}
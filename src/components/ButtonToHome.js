import React from 'react'
import {Link} from 'react-router-dom'

export const ButtonToHome = () => {
    return (
        <div>
            <Link to="/search-movies" className="button is-info" >
                Home
            </Link>
        </div>
    )
}
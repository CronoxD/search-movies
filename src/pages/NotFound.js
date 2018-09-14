import React, {Component} from 'react'
import { ButtonToHome } from '../components/ButtonToHome';

export const NotFound = () => {
    return (
        <div>
            <h1 className="title" >404</h1>
            <h3 className="subtitle" >La página no existe :(</h3>
            <ButtonToHome/>
        </div>
    )
}
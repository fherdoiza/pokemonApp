import React from 'react'
import { usePokemonContext } from '../../hooks/usePokemonContext'
import ActionButton from '../ui/ActionButton'

import './pokemonActions.scss'

export const PokemonActions = () => {

    const { searchPokemon, toggleForm } = usePokemonContext()

    const handleChange = ({ target }) => {
        searchPokemon(target.value)
    }

    const handleCreate = () => {
        toggleForm(true)
    }

    return (

        <div className="d-flex justify-content-between">
            <input
                type="text"
                className="form-control search-input"
                placeholder="Buscar"
                onChange={handleChange}
            />

            <ActionButton label="Nuevo +" primary={true} type="button" onClick={handleCreate}></ActionButton>
        </div>


    )
}

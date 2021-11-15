import React, { useState, useEffect } from 'react'
import { usePokemonContext } from '../../hooks/usePokemonContext'
import './pokemonList.scss';

export const PokemonList = () => {

    const { findAllPokemons, setSelectedPokemon, deletePokemon, toggleForm } = usePokemonContext()
    const [filteredPokemons, setFilteredPokemons] = useState([])


    useEffect(() => {
        const resp = findAllPokemons()
        setFilteredPokemons(resp)
    }, [findAllPokemons, setFilteredPokemons])

    const handleEdit = (currentPokemon) => {
        setSelectedPokemon(currentPokemon)
        toggleForm(true)

    }
    const handleDelete = (currentPokemon) => {
        deletePokemon(currentPokemon)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (filteredPokemons?.length > 0) ? filteredPokemons.map((currentPokemon, index) => {
                        return (
                            <tr key={`pokemon-${index}`}>
                                <td>{currentPokemon.name}</td>
                                <td>
                                    <img src={currentPokemon.image} alt={currentPokemon.name} title={currentPokemon.name} className="image-pokemon" />
                                </td>
                                <td>{currentPokemon.attack}</td>
                                <td>{currentPokemon.defense}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => handleEdit(currentPokemon)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-link text-danger"
                                        onClick={() => handleDelete(currentPokemon)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        )
                    }) :
                        <tr>
                            <td colSpan="5"> No existen pokemons</td>
                        </tr>
                }

            </tbody>
        </table>
    )
}

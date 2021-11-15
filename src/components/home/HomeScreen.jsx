import React from 'react';
import { PokemonContextProvider } from '../../contexts/PokemonContext'
import { PokemonForm } from './PokemonForm';
import { PokemonList } from './PokemonList';
import { PokemonActions } from './PokemonActions';

export const HomeScreen = () => {

    return (
        <PokemonContextProvider>
            <div className="row">
                <div className="col-12">
                    <h2>Listado de Pokemón</h2>
                </div>
                <div className="col-12">
                    <PokemonActions></PokemonActions>
                </div>
                <div className="col-12">
                    <PokemonList></PokemonList>
                </div>
                <div className="col-12">
                    <PokemonForm></PokemonForm>
                </div>
            </div>
        </PokemonContextProvider>
    )

}

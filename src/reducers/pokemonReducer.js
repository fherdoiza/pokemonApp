import { actions } from '../helpers/actions';


export const pokemonReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_POKEMONS:
            return { ...state, pokemons: action.payload, filteredPokemons: action.payload }
        case actions.SET_FILTERED_POKEMONS:
            return { ...state, filteredPokemons: action.payload }
        case actions.SELECT_POKEMON:
            return { ...state, selectedPokemon: action.payload }
        case actions.SHOW_POKEMON_FORM:
            return { ...state, showForm: true }
        case actions.HIDE_POKEMON_FORM:
            return { ...state, showForm: false }
        default:
            return state;
    }
}
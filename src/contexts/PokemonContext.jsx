import { createContext, useEffect, useCallback, useReducer } from "react";
import { actions } from "../helpers/actions";
import { fetchRequest } from '../helpers/fetch';
import { pokemonReducer } from '../reducers/pokemonReducer'

export const PokemonContext = createContext()


const initialState = {
    pokemons: [],
    filteredPokemons: [],
    selectedPokemon: null,
    showForm: false
}

export const PokemonContextProvider = ({ children }) => {

    const [{ pokemons, filteredPokemons, selectedPokemon, showForm }, dispatch] = useReducer(pokemonReducer, initialState)


    const getPokemons = useCallback(async () => {
        const resp = await fetchRequest('?idAuthor=1')
        dispatch({ type: actions.SET_POKEMONS, payload: resp })
    }, [dispatch])

    useEffect(() => {
        async function fetchData() {
            await getPokemons()
        }
        fetchData();
    }, [getPokemons])

    const findAllPokemons = useCallback(() => {
        return filteredPokemons
    }, [filteredPokemons])


    const setSelectedPokemon = (selectedPokemon) => {
        dispatch({ type: actions.SELECT_POKEMON, payload: selectedPokemon })
    }

    const createPokemon = async (newPokemon) => {
        try {
            const resp = await fetchRequest('?idAuthor=1', newPokemon, 'POST')
            alert("Pokemon creado correctamente")
            await getPokemons()
            return resp
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    const updatePokemon = async (updatedPokemon) => {
        try {
            delete updatedPokemon.created_at
            delete updatedPokemon.updated_at
            const resp = await fetchRequest(`${updatedPokemon.id}`, updatedPokemon, 'PUT')
            alert("Pokemon actualizado correctamente")
            await getPokemons()
            return resp
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    const deletePokemon = async (deletedPokemon) => {
        try {
            const resp = await fetchRequest(`${deletedPokemon.id}`, null, 'DELETE')
            alert("Pokemon eliminado correctamente")
            await getPokemons()
            return resp
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    const searchPokemon = (query) => {
        if (query?.length > 0) {
            const filterResp = pokemons.filter(currentPokemon => {
                return currentPokemon.name.toLowerCase().indexOf(query.toLowerCase()) > -1
            })
            dispatch({ type: actions.SET_FILTERED_POKEMONS, payload: filterResp })
        } else {
            dispatch({ type: actions.SET_FILTERED_POKEMONS, payload: pokemons })
        }
    }

    const toggleForm = (show = false) => {
        dispatch({ type: show ? actions.SHOW_POKEMON_FORM : actions.HIDE_POKEMON_FORM })

    }

    const context = {
        setSelectedPokemon,
        selectedPokemon,
        findAllPokemons,
        createPokemon,
        updatePokemon,
        deletePokemon,
        searchPokemon,
        toggleForm,
        showForm
    }

    return (
        <PokemonContext.Provider value={context}>
            {children}
        </PokemonContext.Provider>
    )
}
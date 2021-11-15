import { useContext } from "react"
import { PokemonContext } from "../contexts/PokemonContext"

export const usePokemonContext = () => {
    const context = useContext(PokemonContext)
    if (!context) {
        throw new Error('El contexto PokemonContext no existe')
    }
    return context

}
import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { usePokemonContext } from '../../hooks/usePokemonContext'
import ActionButton from '../ui/ActionButton';

import './pokemonForm.scss'

export const PokemonForm = () => {

    const { selectedPokemon, createPokemon, updatePokemon, toggleForm, showForm } = usePokemonContext()
    const [formValues, handleInputChange, resetForm, setFormValues] = useForm({
        attack: 0,
        defense: 0,
        hp: 0,
        id: null,
        idAuthor: 1,
        image: "",
        name: "",
        type: "normal"
    })
    const { id, name, image, attack, defense } = formValues;

    useEffect(() => {
        if (selectedPokemon) {
            setFormValues(selectedPokemon)
        }
    }, [selectedPokemon, setFormValues])


    const handleSubmitPokemon = (e) => {
        e.preventDefault();
        if (formValues?.id) {
            updatePokemon(formValues)
            toggleForm(false)
            resetForm()
        } else {
            createPokemon(formValues)
            toggleForm(false)
            resetForm()
        }
    }
    const handleCancel = () => {
        resetForm()
        toggleForm(false)
    }

    return (
        showForm ?
            <div className="card mt-3 pokemon-form fixed-bottom">
                <div className="card-body">
                    <h4 className="text-center">
                        {`${id ? "Editar" : "Nuevo"} Pokemon`}
                    </h4>
                    <form onSubmit={handleSubmitPokemon} className="row">
                        <div className="col-6">
                            {id && <input
                                type="hidden"
                                name="id"
                                onChange={handleInputChange}
                                value={id} />}

                            <div className="form-group">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Imagen:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="url"
                                    name="image"
                                    onChange={handleInputChange}
                                    value={image}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Ataque: ({attack})</label>
                                <input
                                    type="range"
                                    className="form-range"
                                    name="attack"
                                    value={attack}
                                    onChange={handleInputChange}
                                    step="1"
                                    max="100"
                                    min="0"
                                />
                            </div>
                            <div className="form-group">
                                <label>Defensa: ({defense})</label>
                                <input
                                    type="range"
                                    className="form-range"
                                    name="defense"
                                    value={defense}
                                    onChange={handleInputChange}
                                    step="1"
                                    max="100"
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <ActionButton label="Guardar" primary={true} type="submit"></ActionButton>
                            <ActionButton label="Cancelar" onClick={handleCancel} type="button"></ActionButton>
                        </div>
                    </form>
                </div>
            </div>
            :
            <></>
    )
}

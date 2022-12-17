import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from "query-string"
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // Este hook es para obtener la ubicación
    // En la propiedad search viene un string con los parámetros de búsqueda
    // y con queryString se parsea para tener un objeto
    const { search } = useLocation();
    const { q = "" } = queryString.parse(search); // Se le define un valor por defecto al q

    const [ { searchText }, handleInputChange ] = useForm({ searchText: q });
    // Este usememo es para que solo se haga la búsqueda una vez se hace submit
    // y cada vez que cambie el input
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search a hero</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                <h4>Search Form</h4>
                <hr/>
                <form onSubmit={ handleSearch }>
                    <input
                        placeholder="Find your hero"
                        className="form-control"
                        autoComplete="off"
                        onChange={ handleInputChange }
                        name="searchText"
                        value={ searchText }
                    />

                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        onSubmit={ handleSearch }
                    >
                        Search
                    </button>
                </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === "")
                        && <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        ( q !== "" && heroesFiltered.length === 0 )
                        && <div className="alert alert-danger">
                            {`There is no hero with ${q}`}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}  
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

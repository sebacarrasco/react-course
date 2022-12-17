import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

// Fab es de "Floating action button"

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(uiOpenModal());
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClick }
        >
                <i className="fas fa-plus"></i>

        </button>
    )
}

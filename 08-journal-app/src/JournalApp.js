import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
    // El provider es la misma idea que el context.provider
    // Todos sus hijos podrás acceder a la store
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}

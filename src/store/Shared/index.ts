import React from 'react';
import createUseContext from '../createUseContext';
import actions from './actions';
import selectors from './selectors';
import { initialState } from './state';

const Store = createUseContext('Shared', () => {
  const [$SharedState, setStore] = React.useState<any>(
    initialState,
  );

  const Selectors = selectors($SharedState);
  const Actions = actions(setStore, Selectors);

  return { $SharedState, ...Actions, ...Selectors };
});

export const useSharedStore = Store;
export const SharedContext = Store.Context;
export const SharedProvider = Store.Provider;

export * from './state';

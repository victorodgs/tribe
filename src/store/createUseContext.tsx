import React from 'react';

declare let _REACT_CONTEXT_DEVTOOL: (args: {
  displayName: string
  id: string
  values: any
}) => void;

const addReactContextDevTools = <T extends {}>(values: T, id: string) => {
  // @ts-ignore
  if (window._REACT_CONTEXT_DEVTOOL) {
    // @ts-ignore
    window._REACT_CONTEXT_DEVTOOL({
      values,
      id,
      displayName: `Context: ${id}`,
    });
  }
};

const createUseContext = <P, V>(name: string, useValue: (props: P) => V) => {
  // tslint:disable-next-line: no-object-literal-type-assertion
  const Context = React.createContext({} as V);

  const Provider: React.FC<P> = (props) => {
    const values = useValue(props);
    const { children } = props;

    addReactContextDevTools(values, name);

    return <Context.Provider value={values}>{children}</Context.Provider>;
  };

  Context.displayName = `${name}.Context`;
  Provider.displayName = `${name}.Provider`;

  const useContext = () => React.useContext(Context);
  useContext.Context = Context;
  useContext.Provider = Provider;

  return useContext;
};

export default createUseContext;

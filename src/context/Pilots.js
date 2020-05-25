import React from "react";
import PropTypes from "prop-types";
import data from "../../pilots.json";

const PilotsContext = React.createContext();
function PilotsProvider({ children }) {
  // If we needed to, we could load in the pilots from an API here pretty easily.
  const [state, setState] = React.useState({
    pilots: data,
  });

  const [sort, setSort] = React.useState({
    orderBy: "Id",
    order: false,
    sortHandler: (a, b) => a - b,
  });

  const deletePilot = React.useCallback(
    (id) => {
      const newPilots = state.pilots.filter((value) => value.Id !== id);
      setState({ ...state, pilots: newPilots });
    },
    [state]
  );

  const sortByColumn = React.useCallback((columnId, sortHandler) => {
    setSort((prevState) => ({
      orderBy: columnId,
      order: columnId === prevState.orderBy ? !prevState.order : true,
      sortHandler,
    }));
  });

  const getSortedPilots = (pilots, sort) => {
    const orderedPilots = [...pilots].sort((a, b) =>
      sort.sortHandler(a[sort.orderBy], b[sort.orderBy])
    );
    if (sort.order) {
      orderedPilots.reverse();
    }
    return orderedPilots;
  };

  const orderedPilots = getSortedPilots(state.pilots, sort);

  return (
    <PilotsContext.Provider
      value={{
        ...state,
        sort,
        deletePilot,
        sortByColumn,
        orderedPilots,
      }}
    >
      {children}
    </PilotsContext.Provider>
  );
}

function usePilotsContext() {
  const state = React.useContext(PilotsContext);

  return {
    ...state,
  };
}
export { PilotsProvider, usePilotsContext };

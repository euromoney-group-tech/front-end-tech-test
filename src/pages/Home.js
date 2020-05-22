import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from '@material-ui/core';
import { routes } from '../routes';
import pilotsState from '../atoms/pilots';
import { alphabeticHandler, numericHandler } from '../utils/sortHandlers';

function getCells(deletePilot, history) {
  return [{
    id: 'Id',
    label: 'ID',
    sortable: true,
    sortHandler: numericHandler
  }, {
    id: 'Callsign',
    label: 'Callsign',
    sortable: true,
    sortHandler: alphabeticHandler
  }, {
    id: 'Plane',
    label: 'Plane',
    sortable: true,
    sortHandler: alphabeticHandler
  }, {
    id: 'ImageUrl',
    label: 'Image'
  }, {
    id: 'Action',
    label: 'Action',
    content: ({ Id }) => (
      <>
        <Button color="primary" data-testid={`show-${Id}`} onClick={() => history.push(routes.pilot(Id))}>Show</Button>
        |
        <Button color="secondary" data-testid={`delete-${Id}`} onClick={() => deletePilot(Id)}>Delete</Button>
      </>
    )
  }];
}

function getOrderedPilots(cells, pilots, orderBy, order) {
  if (!orderBy) return pilots;
  const orderedPilots = [...pilots].sort(
    (a, b) => cells.find((cell) => cell.id === orderBy).sortHandler(a[orderBy], b[orderBy])
  );
  if (order) {
    orderedPilots.reverse();
  }
  return orderedPilots;
}

const Home = () => {
  const history = useHistory();
  const [pilots, setPilots] = useRecoilState(pilotsState);
  const [grid, setGrid] = useState({});

  const deletePilot = useCallback(id => {
    setPilots(prevPilots => prevPilots.filter(pilot => pilot.Id !== id));
  }, [setPilots]);

  const sortHandler = columnId => {
    setGrid(prevState => ({
      orderBy: columnId,
      order: columnId === prevState.orderBy ? !prevState.order : true
    }));
  };

  const cells = useMemo(
    () => getCells(deletePilot, history),
    [deletePilot, history]
  );

  const pilotsComputed = useMemo(
    () => getOrderedPilots(cells, pilots, grid.orderBy, grid.order),
    [cells, pilots, grid.orderBy, grid.order]
  );

  return (
    <Container data-testid="home">
      <Typography variant="h3" component="h1" gutterBottom>
        Euromoney Top Guns
      </Typography>

      <TableContainer>
        <Table>
          <caption>{pilots.length} items in the list</caption>
          <TableHead>
            <TableRow>
              {cells.map(({ id, label, sortable }) => (
                <TableCell
                  key={id}
                  sortDirection={grid.orderBy === id ? grid.order ? 'asc' : 'desc' : false}
                >
                  {sortable ? (
                    <TableSortLabel
                      active={grid.orderBy === id}
                      data-testid={`header-${id}`}
                      direction={grid.order ? 'asc' : 'desc'}
                      onClick={() => sortHandler(id)}
                    >
                      {label}
                    </TableSortLabel>
                  ) : label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pilotsComputed.map((pilot, index) => (
              <TableRow data-testid={`row-${index} pilot-${pilot.Id}`}  key={pilot.Id}>
                {cells.map(({ content, id }) => (
                  <TableCell key={id}>
                    {content ? content(pilot) : pilot[id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;

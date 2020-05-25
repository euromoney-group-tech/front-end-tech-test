import React from "react";
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
  Typography,
} from "@material-ui/core";
import { usePilotsContext } from "../context/Pilots";
import { useHistory } from "react-router-dom";

const cells = [
  {
    id: "Id",
    label: "ID",
    sortable: true,
    sortHandler: (a, b) => a - b,
  },
  {
    id: "Callsign",
    label: "Callsign",
    sortable: true,
    sortHandler: (a, b) => (a > b ? 1 : -1),
  },
  {
    id: "Plane",
    label: "Plane",
    sortable: true,
    sortHandler: (a, b) => (a > b ? 1 : -1),
  },
  {
    id: "ImageUrl",
    label: "Image",
  },
  {
    id: "Action",
    label: "Action",
  },
];

const renderActions = (pilot, deletePilot, history) => {
  return (
    <>
      <Button
        color="primary"
        onClick={() => history.push(`/detail/${pilot.Id}`)}
      >
        Show
      </Button>
      |
      <Button color="secondary" onClick={() => deletePilot(pilot.Id)}>
        Delete
      </Button>
    </>
  );
};

const Home = () => {
  const history = useHistory();
  const { orderedPilots, sort, sortByColumn, deletePilot } = usePilotsContext();

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Euromoney Top Guns
      </Typography>
      <TableContainer>
        <Table>
          <caption key={orderedPilots.length}>
            {orderedPilots.length} items in the list
          </caption>
          <TableHead>
            <TableRow>
              {cells.map(({ id, label, sortable, sortHandler }) => (
                <TableCell
                  key={id}
                  sortDirection={
                    sort.orderBy === id ? (sort.order ? "asc" : "desc") : false
                  }
                >
                  {sortable ? (
                    <TableSortLabel
                      active={sort.orderBy === id}
                      direction={sort.order ? "asc" : "desc"}
                      onClick={() => sortByColumn(id, sortHandler)}
                    >
                      {label}
                    </TableSortLabel>
                  ) : (
                    label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedPilots.map((pilot) => (
              <TableRow key={pilot.Id}>
                {cells.map(({ id }) => (
                  <TableCell key={id}>
                    {id === "Action"
                      ? renderActions(pilot, deletePilot, history)
                      : pilot[id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;

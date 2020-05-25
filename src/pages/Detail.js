import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  Box,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { usePilotsContext } from "../context/Pilots";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { pilots } = usePilotsContext();
  const pilot = pilots.find(({ Id }) => Id === +id);

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Pilot detail
      </Typography>

      <Card>
        <CardContent>
          <Box display="flex">
            <Box width="50%">
              <Typography variant="h5">ID: {pilot.Id}</Typography>
              <Typography variant="h5">Callsign: {pilot.Callsign}</Typography>
              <Typography variant="h5">Plane: {pilot.Plane}</Typography>
            </Box>
            <Box clone width="50%">
              <img src={pilot.ImageUrl} />
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => history.push("/")} startIcon={<ArrowBack />}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Detail;

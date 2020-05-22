import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { routes } from '../routes';
import pilotsState from '../atoms/pilots';

const useStyles = makeStyles((theme) => ({
  definition: {
    display: 'inline-block'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Pilot = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const pilots = useRecoilValue(pilotsState);
  const pilot = pilots.find(({ Id }) => Id === +id);

  return (
    <Container data-testid="pilot">
      <Typography variant="h3" component="h1" gutterBottom>
        Pilot detail
      </Typography>

      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={pilot?.Callsign}
              className={classes.large}
              src={pilot?.ImageUrl}
            />
          }
          title={pilot?.Callsign || 'Pilot information missing'}
          subheader={`ID: ${pilot?.Id}`}
        />
        <CardContent>
          <dl>
            <dt className={classes.definition}>
              <Typography variant="body1" gutterBottom>
                Plane:
              </Typography>
            </dt>
            <dd className={classes.definition}>
              <Typography variant="body1" gutterBottom>
                {pilot?.Plane}
              </Typography>
            </dd>
          </dl>
        </CardContent>
        <CardActions>
          <Button
            data-testid="back"
            onClick={() => history.push(routes.home)}
            startIcon={<ArrowBack />}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Pilot;

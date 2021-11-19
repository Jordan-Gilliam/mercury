import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DesignSystemProvider,
  Heading,
  Button,
  Text,
  Flex,
  Container,
  Card,
  Grid,
} from '../src';

const App = () => {
  return (
    <DesignSystemProvider>
      <Container>
        <Grid css={{ gridTemplateColumns: '2fr 1fr', gap: '$7' }}>
          <Flex css={{ '@bp2': { gap: '$7' } }}>
            <Heading>Camo detail windbreaker</Heading>
          </Flex>

          <Card>
            {' '}
            <Text>Camo detail windbreaker</Text>
          </Card>
          <Heading>Camo detail windbreaker</Heading>
          <Button color="primary" />
        </Grid>
      </Container>
    </DesignSystemProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

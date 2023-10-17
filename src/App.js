import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Flex, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Card, Heads, GPTobject,PostForm } from '@aws-amplify/ui-react';


Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Flex direction={"column"} alignItems={"center"}>
        <Flex direction={"column"}>
          <heads />
        </Flex>
      </Flex>

    </div>
  );
}

export default withAuthenticator(App);

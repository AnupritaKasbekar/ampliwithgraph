
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import MainHeader from './components/MainHeader';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
function App() {
  return (
    <div className="App">
       <MainHeader/>
    </div>
  );
}

export default withAuthenticator(App);

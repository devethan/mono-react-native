/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Button, Typography} from '@enoveh/uikit';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Typography variants="heading">Button</Typography>
        <Button onPress={() => null}>
          <Typography>Button</Typography>
        </Button>
      </SafeAreaView>
    </>
  );
};

export default App;

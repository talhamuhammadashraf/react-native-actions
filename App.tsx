/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import Component from './src/components';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          {
            <View>
              <Text>{Config.ENV}</Text>
            </View>
          }
          <LearnMoreLinks />
          <Component />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

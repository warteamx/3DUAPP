import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import { getTasks } from '../api/task'
import TaskList from './TaskList';

export default function EditScreenInfo({ path }: { path: string }) {

  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/api/users/all')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error));
  }, []);

  const [taskData, setTaskData] = useState({} as any);
  useEffect(() => {
    getTasks()
      .then((response) => {
        setTaskData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

console.log('task Data from Strapi', taskData);
console.log('users Data from express-server', users);

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
        <Text> STRAPI: Connected!</Text>
        <Text> EXPRESS: Connected!</Text>
        <Text>  Working </Text>
      </View>
      <View>
        <TaskList taskData={taskData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

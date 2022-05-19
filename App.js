import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, Appbar, Avatar, BottomNavigation, Card, Paragraph, Title, Button } from 'react-native-paper';
import { name as appName } from './app.json';
import { StyleSheet, Text, View } from 'react-native';

const HomeRoute = () => <Text></Text>
const HistoricRoute = () => <Text></Text>;
const AddingRoute = () => <Text></Text>;
const SettingsRoute = () => <Text></Text>;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'music', title: "Histo'", icon: 'home' },
    { key: 'albums', title: "Ajout'", icon: 'home' },
    { key: 'recents', title: "Param'", icon: 'home' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    music: HistoricRoute,
    albums: AddingRoute,
    recents: SettingsRoute,
  });
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.appbarStyle}>
          <Appbar.Content title="Activity Tracker" style={styles.text} />
          <Avatar.Text size={80} label="Avatar" labelStyle={styles.avatarTextStyle} style={styles.avatarComponentStyle} />
        </Appbar.Header>
        <Text style={{ fontSize: 40, marginLeft: 40, fontWeight: 'bold', marginTop: 10 }}>Home</Text>
        <Card style={styles.cardStyle}>
          <Card.Content>
            <View style={{ flexDirection: 'row' }} >
              <View style={{ marginRight: 25 }}>
                <Paragraph>26 Mai 2021</Paragraph>
                <Title>Marche à pied</Title>
              </View>
              <View>
                <Card.Cover style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug1xIyUFJ7xCguk0DM1F99wEBhmlVPTnJcw&usqp=CAU' }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
              <View>
                <Title>Distance</Title>
                <Paragraph>6 Km</Paragraph>
              </View>
              <View style={{ marginLeft: 120 }}>
                <Title>Durée</Title>
                <Paragraph>0h26mn</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  appbarStyle: {
    height: 125,
  },
  avatarTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'black',
  },
  avatarComponentStyle: {
    backgroundColor: 'lightgrey',
    marginRight: 40,
    borderWidth: 2,
  },
  image: {
    height: 120,
    width: 165,
    borderWidth: 2,
  },
  cardStyle: {
    elevation: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'column',
  }
});

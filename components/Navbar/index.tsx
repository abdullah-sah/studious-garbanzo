import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLOOOO MY NAME IS JEFF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
});

export default Navbar;

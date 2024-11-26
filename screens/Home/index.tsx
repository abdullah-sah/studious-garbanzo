import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Product from '../../components/Product';

interface Props {}

const Home: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Product />
    </View>
  );
};

export default Home;
import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  thumbnail?: string;
  price?: number;
  title?: string;
  category?: string;
}

const Product: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>This is the thingie</Text>
    </View>
  );
};

export default Product;

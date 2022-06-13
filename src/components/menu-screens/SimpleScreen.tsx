import { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { MiikaText } from '../reusable/MiikaText';

interface SimpleScreenProps {
  header: string;
}

export default function ({
  header,
  children,
}: React.PropsWithChildren<SimpleScreenProps>) {
  return (
    <View style={styles.container}>
      <MiikaText category="h6" text={header} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

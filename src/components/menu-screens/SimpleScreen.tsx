import React from 'react';
import { StyleSheet, View } from 'react-native';
import { topMargin } from '../../utils/cssHelpers';
import { sideMargin } from '../book-list/BookListItem';
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
      <MiikaText category="h3" text={header} marginBottom={5} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: sideMargin,
    paddingLeft: sideMargin,
    paddingTop: topMargin,
  },
});

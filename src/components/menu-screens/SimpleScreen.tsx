import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { topMargin } from '../../utils/cssHelpers';
import { sideMargin } from '../book-list/BookListItem';
import { StyledText } from '../reusable/StyledText';

interface SimpleScreenProps {
  header: string;
  isScrollable?: boolean;
}

export default function SimpleScreen({
  header,
  isScrollable,
  children,
}: React.PropsWithChildren<SimpleScreenProps>) {
  if (isScrollable)
    return (
      <ScrollView style={styles.container}>
        <StyledText category="h3" text={header} marginBottom={5} />
        {children}
      </ScrollView>
    );
  else
    return (
      <View style={styles.container}>
        <StyledText category="h3" text={header} marginBottom={5} />
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

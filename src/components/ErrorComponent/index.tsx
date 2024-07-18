import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../common/Colors';

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something went Wrong ...!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.dark,
  },
});

export default ErrorComponent;

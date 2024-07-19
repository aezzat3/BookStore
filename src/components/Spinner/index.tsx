import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../../common/Colors';

const Spinner = () => {
  return (
    <ActivityIndicator
      style={styles.spinner}
      color={COLORS.green}
      size="large"
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Spinner);

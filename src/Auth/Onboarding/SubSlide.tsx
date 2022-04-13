import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Text } from '../../components';

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle} variant={'title2'}>
        {subtitle}
      </Text>
      <Text variant={'body'} style={styles.description}>
        {description}
      </Text>
      <Button label={last ? "Let's get started" : 'Next'} variant={last ? 'primary' : 'default'} {...{ onPress }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SubSlide;

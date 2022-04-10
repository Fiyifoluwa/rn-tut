import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '../../components';

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
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
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center',
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#0C0D34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SubSlide;

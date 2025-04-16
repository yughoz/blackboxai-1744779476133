import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { styled, ThemeProvider, Button, Text, View } from '@gluestack/ui';

const Container = styled(View, {
  flex: 1,
  backgroundColor: '#fff',
  padding: 16,
});

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Container>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              Welcome to Geti Replica
            </Text>
            <Button onPress={() => alert('Button pressed!')}>
              Press Me
            </Button>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

import { Stack } from 'expo-router';

import { RecognitionPlayground } from '../dev/RecognitionPlayground';

// Until the real home screen exists, the app opens on the recognizer playground.
export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tanıma denemesi' }} />
      <RecognitionPlayground />
    </>
  );
}

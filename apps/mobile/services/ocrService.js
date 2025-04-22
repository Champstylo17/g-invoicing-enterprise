
import * as ImagePicker from 'expo-image-picker';
import Tesseract from 'tesseract.js';

export async function pickImageAndExtractText() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    base64: false
  });

  if (!result.canceled) {
    const imageUri = result.assets[0].uri;
    const { data: { text } } = await Tesseract.recognize(imageUri, 'eng');
    return text;
  }
  return null;
}

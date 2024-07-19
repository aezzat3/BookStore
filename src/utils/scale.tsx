import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
const screenSize = Math.sqrt(width * height) / 100;
const calcWidth = (size: number) => (width / guidelineBaseWidth) * size;
const calcHeight = (size: number) => (height / guidelineBaseHeight) * size;
const calcFontWeight = (size: number, factor = 0.5) =>
  size + (calcWidth(size) - size) * factor;

export {calcWidth, calcHeight, screenSize, calcFontWeight, width, height};

export function getConfig(types: string[], color?: string[]) {
  const HAND_TYPE = types;
  const HAND_COLOR = color;
  const size = randomInt(10, 30);
  const opacity = randomInt(1, 10) / 10;
  const type = HAND_TYPE[randomInt(0, types.length - 1)];
  const colorVal = HAND_COLOR ? HAND_COLOR[randomInt(0, color.length - 1)] : "";
  const xPosition = `${randomInt(0, 100)}%`;

  const fallDuration = randomInt(10000, 30000);
  const fallDelay = randomInt(2000, 10000);

  const rotateDuration = randomInt(4000, 6000);
  const raotateDirection = randomInt(0, 1);

  const swingDuration = randomInt(1000, 4000);
  const swingAmplitude = randomInt(0, 30);

  return {
    size,
    opacity,
    type,
    xPosition,
    fallDelay,
    fallDuration,
    swingAmplitude,
    swingDuration,
    colorVal,
    rotateDuration,
    raotateDirection,
  };
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  title: 'Core/Errors',
  parameters: { chromatic: { disable: true } },
};

export const throwsError = () => {
  throw new Error('foo');
};
throwsError.parameters = { storyshots: { disable: true } };

export const nullError = () => null;

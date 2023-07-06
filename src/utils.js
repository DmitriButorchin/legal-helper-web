export const extractErrors = (error) => {
  const errors = error.response.data.errors.reduce((acc, item) => {
    const index = item.source.pointer.lastIndexOf("/");
    const key = item.source.pointer.substring(index + 1);
    acc[key] = item.title;
    return acc;
  }, {});
  return { errors };
};

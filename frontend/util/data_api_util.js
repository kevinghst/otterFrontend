export const getData = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/data',
  });
};

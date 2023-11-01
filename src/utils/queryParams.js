function fetchData(data, param) {
  const res = data.filter((item) => item.id === param);
  return res;
}

export default fetchData;

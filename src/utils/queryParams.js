function fetchData(data, param) {
  const res = data.filter((item) => item.id === param);
  return res !== null ? res : "error";
}

export default fetchData;

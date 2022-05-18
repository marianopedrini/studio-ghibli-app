const fetchImages = async () => {
  const url = 'https://ghibliapi.herokuapp.com/films';

  const response = await fetch(url).then((res) =>
    res.json().then((data) => data)
  );

  return response;
};

export default fetchImages;

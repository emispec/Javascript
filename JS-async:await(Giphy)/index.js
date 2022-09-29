/*
FETCH 

const apiKey = "x";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
*/

// ASYNC / AWAIT Api call

const getImg = async () => {
  try {
    const apiKey = "x";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;

    render(url);
  } catch (err) {
    console.warn(err);
  }
};

const render = (url) => {
  const img = document.createElement("img");
  img.src = url;

  document.body.append(img);
};

getImg();

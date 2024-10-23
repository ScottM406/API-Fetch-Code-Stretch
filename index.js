getArtists = async() => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/artists`)
  const responseObject = await response.json();
  const artists = responseObject.data;
  console.log(artists);

  const body = document.querySelector(`body`);
  
  renderArtists = artists.forEach(artist => {
  artistHeader = document.createElement(`h1`);
  artistHeader.innerHTML = `${artist.name}`
  body.append(artistHeader);
  });
}

getArtists();
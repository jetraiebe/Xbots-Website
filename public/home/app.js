const Http = new XMLHttpRequest();
const url='/api';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  if (e.target.readyState === 4) {
    const response = JSON.parse(e.target.responseText);
    console.log(response);
    $('.avatar.futox').css('background-image', `url(${response.avatars.futox})`);
    $('.avatar.musix').css('background-image', `url(${response.avatars.musix})`);
  }
}
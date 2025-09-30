console.log(Object.values(JokeAPI));
JokeAPI.getJokes({
  jokeType: "single"
})
  .then((r) => r.json())
  .then((data) => {
    updateUI(data);
  });

function updateUI(jokeData) {
  const text=document.getElementById('text');

  text.innerHTML = jokeData.joke;
}

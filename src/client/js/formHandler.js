const API_weather =
  "https://api.openweathermap.org/data/2.5/weather?zip=10004&appid=85809549041cdefbef629f3153fa24b7&units=metric";

const handleSubmit = async (event) => {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.checkForName(formText);

  console.log(formText);
  console.log("::: Form Submitted :::");

  fetch(API_weather)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.main.temp);
      return data;
    })
    .then(function (data) {
      document.getElementById("results").innerHTML = data.main.temp;
    });
};

export { handleSubmit };

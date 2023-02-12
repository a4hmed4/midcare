// API url with auth key
let API =
  "https://api.thingspeak.com/channels/2030163/feeds.json?api_key=AVRKGK8NEI2NTE9K";
// FETCH DATA FROM API
fetch(API).then((res) => {
  // Get the data in json format
  res.json().then((data) => {
    // Extract data from json
    console.log(data); // => Channel & Feeds
    // Get the HTML element (the element you will display data on it)
    let table = document.querySelector("#tableBody");
    // Loop on FEED
    data.feeds.map((ele) => {
      // ele => (element) => each feed of data
      table.innerHTML += `<tr>
      <td data-title>${ele.field1}</td>
      <td data-title>${ele.field2}</td>
    </tr>`;
    });
  });
});

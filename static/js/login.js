let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

class pation {
  constructor(name, pass, email, username) {
    this.name = name
    this.pass = pass
    this.email = email
    this.username = username
  }
}

class doctor {
  constructor(name, pass, email, username) {
    this.name = name
    this.pass = pass
    this.email = email
    this.username = username
  }
}

let patain_info = [{ name: "Mohamed Ramadan", pass: "123456", email: "mr6303302@gmail.com", username: "midcare_patient" },
{ name: "Ahmed Sneed", pass: "123456", email: "mr6303302@gmail.com", username: "AbuHamida" },
{ name: "Rowyda AbdElrehem", pass: "123456", email: "mr6303302@gmail.com", username: "AbuHamida" }]

let doctor_info = [{ name: "Mohamed Ramadan", pass: "123456", email: "mr8233651@gmail.com", username: "midcare_doctor" },
{ name: "Ahmed Sneed", pass: "123456", email: "mr8233651@gmail.com", username: "AbuHamida" },
{ name: "Rowyda AbdElrehem", pass: "123456", email: "mr8233651@gmail.com", username: "AbuHamida" }]

let patain_ = new pation((
  patain_info.map(function (current) {
    return current.name
  })),
  (patain_info.map(function (current) {
    return current.pass
  })),
  (patain_info.map(function (current) {
    return current.email
  })),
  (patain_info.map(function (current) {
    return current.username
  })))


let doctor_ = new doctor((
  doctor_info.map(function (current) {
    return current.name
  })),
  (doctor_info.map(function (current) {
    return current.pass
  })),
  (doctor_info.map(function (current) {
    return current.email
  })),
  (doctor_info.map(function (current) {
    return current.username
  })))

 

function check() {
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  console.log(username,pass)
  if (username == "" || pass == "") {
    document.getElementById("check").style.display="flex"
  }
  else if (patain_.email.some((x) => x == username) || patain_.username.some((x) => x == username)&& patain_.pass.some((x) => pass == x)) {
    window.location.href = "../Home/profile/profile.html";
  }
  else if (doctor_.email.some((x) => x == username)||doctor_.username.some((x) => x == username) && doctor_.pass.some((x) => pass == x)) {
    window.location.href = "../drhome/profile/profile.html";
  }
  else {
    document.getElementById("check").style.display="flex"
  }

}


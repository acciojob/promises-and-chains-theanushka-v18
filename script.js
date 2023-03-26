//your JS code here. If required.
const age = document.querySelector("#age");
const name = document.querySelector("#name");
const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
	if(age.value && name.value) {
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (age.value >= 18) {
					resolve(`Welcome, ${name.value}. You can vote.`)
				} else {
					reject(`Oh sorry ${name.value}. You aren't old enough.`)
				}
			}, 4000)
		});

		promise.then((data) => {
			alert(data);
		}).catch((err) => {
			alert(err);
		})
		
	}
})
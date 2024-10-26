let url = 'https://jokes-always.p.rapidapi.com/common';
let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e41fb24dfamsh39dc648e626fec8p182929jsn80003269e1b4',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

let div = document.createElement("div")
let h1 = document.createElement("h1");
let p = document.createElement("p")

async function jokes(url, options) {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		let j = result["data"]
		let a = j.split("?")
		h1.innerText = a[0] + "?"
		p.innerText = a[1];
		div.append(h1, p)
		newJoke();
	} 
	catch (error) {
		console.error(error);
	}
}

jokes(url, options)
function newJoke() {
	document.body.append(div)
}
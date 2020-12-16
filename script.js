function _load(){
	let rootE = document.getElementById("root");
	let myObjects = [
		{
			tag: "h1",
			content: "Ágoston"
		},
		{
			tag: "p",
			content: "Frontend Developer"
		}
	];

	// for ( let i = 0; i < myObjects.length; i++) {

	// }

	for (myObject of myObjects) {

		console.log(myObject.tag);

		rootE.insertAdjacentHTML("beforeend", `
			<${myObject.tag}>${myObject.content}</${myObject.tag}>
		`);
	}
	rootE.addEventListener("click", function (){
		rootE.classList.toggle("clicked");
	});
}
window.addEventListener("load", _load);

// root -> tag neve ami a tag, contentje az legyen ami a content részben van
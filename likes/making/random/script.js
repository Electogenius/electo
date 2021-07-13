fetch("./stuffs.md").then(e=>e.text()).then(r=>{
	let titles=r.split(/\*\*\*/g).map(e=>e.slice(0,e.indexOf("\n___\n"))).reverse()
	window.posts=r.split(/\n\*\*\*\n?/g).reverse()
	titles.forEach((th,nd)=>{
		let title=document.createElement("li")
		title.innerHTML=marked(th)
		title.index=nd
		title.onclick=(ev)=>{
			openp(ev.target.parentNode.index)
		}
		document.getElementById("titles").appendChild(title)
	})
	console.log(titles)
})
function openp(id) {
	let p=document.createElement("div")
	p.classList.add("thing")
	p.innerHTML=marked(posts[id])+`
			<button class=close onclick=closep(this.parentNode)>close</button>
			`
	document.body.appendChild(p)
}
function closep(el) {
	el.style.animation="1s close ease-out"
	setTimeout(()=>el.remove(),1e3)
}
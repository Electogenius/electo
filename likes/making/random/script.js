fetch("./stuffs.md").then(e=>e.text()).then(r=>{
	let titles=r.split(/\*\*\*/g).map(e=>e.slice(0,e.indexOf("___"))).reverse()
	window.posts=r.split(/\n\*\*\*\n?/g).reverse()
	titles.forEach((th,nd)=>{
		let title=document.createElement("li")
		title.innerHTML=marked.marked(th)
		title.index=nd
		title.onclick=(ev)=>{
			openp(ev.target.parentNode.index)
		}
		document.getElementById("titles").appendChild(title)
	})
	if (new URL(location.href).searchParams.get("id")) {
		openp(Number(new URL(location.href).searchParams.get("id")))
	}
})
function openp(id) {
	let p=document.createElement("div")
	p.classList.add("thing")
	p.innerHTML=marked.marked(posts[id])+`
			<button class=close onclick=closep(this.parentNode)>close</button>
			`
	document.body.appendChild(p)
}
function closep(el) {
	el.style.animation="1s close ease-out"
	setTimeout(()=>el.remove(),1e3)
}
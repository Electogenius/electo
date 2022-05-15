window.addEventListener("DOMContentLoaded", () => {
	function insertRule(rule) {
		let sheet=document.createElement('style')
		sheet.innerHTML = rule
		document.head.appendChild(sheet)
	}
	let f = document.createElement("link");
	if (document.querySelector("body[data-customcss]") !== document.body) {
		f.rel = "stylesheet";
		f.href = "https://electogenius.github.io/electo/average.css";
	} else { document.head.appendChild(document.createElement("style")) }
	document.head.appendChild(f);
	let d = document.createElement("span")
	d.innerText = ""
	insertRule("body[data-dark=\"true\"] span.dmode-toggle::after{content:'☀️'}"); insertRule("body:not([data-dark=\"true\"]) span.dmode-toggle::after{content:'🌙'}")
	d.style = "position:fixed;right:10px;bottom:10px;border-radius:30px;border:1px solid yellow;padding:10px;background:rgba(127,127,127,0.5);"
	d.onclick = () => {
		if (localStorage["dark-mode"] === "true") {
			document.body.setAttribute("data-dark", "false")
		} else {
			document.body.setAttribute("data-dark", "true")
		}
		localStorage.setItem("dark-mode", document.body.getAttribute("data-dark"))

	}
	d.classList.add("dmode-toggle")
	document.body.appendChild(d)
	if (localStorage.getItem("dark-mode") !== null) {
		if (localStorage["dark-mode"] === "true") {
			document.body.setAttribute("data-dark", true)
		} else {
			document.body.setAttribute("data-dark", false)
		}
	}
})
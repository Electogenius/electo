const wait = (!location.href.startsWith("http://localhost")) ? 1500 : 1500
var s = 0
setTimeout(() => {
	document.title = "System booted"
	b.innerText = "succesfully booted"
}, 1000)
setTimeout(() => {
	document.onscroll = () => s = Math.max((window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0),0);
	document.getElementById("pad").style.marginBottom = "2000px"
	window.p = new p5((p) => {
		with(p) {
			function x(r) {
				return r - s
			}

			function y(r, x, o) {
				return min((r + (o ?? 200)) - (x - s), r)
			}
			p.setup = () => {
				createCanvas(window.innerWidth, window.innerHeight)
			}
			p.draw = () => {
				background("hsl(" + round(((s / 20) + 200) % 360) + ", 50%, 50%)")
				fill(255)
				textFont("-apple-system, BlinkMacSystemFont, system-ui, sans-serif")
				noStroke()
				textSize(30)
				text("Hello, I'm", y(30, 30), x(30))
				text("Things I've made:", y(10, 650, 200), x(650))
				textSize(18)
				text("I like coding in Javascript (though I'm bad at it), I'm a conspiracy theorist on python's indentation system.", 50, x(200), 300)
				let stuff = [
					"HmmOS, a badly made previously anarchist web desktop", 
					"EGCode, an extremely lazily compiled programming language", 
					"Acing, a small editor (with a live preview) to mess around with",
					"html, one of my websites",
					""
				];
				stuff.forEach((e, i) => {
					fill("hsl(" + i * 10 + ", 100%, 50%)")
					text(e, y(30, (700 + 80 * i)), x(700 + 80 * i), window.innerWidth - 50)
				})

				fill(0)
				stroke(255)
				textSize(50)
				text("Electogenius", 20, max(x(100), 50))
			}
		}
	})
}, wait)
function n(x) {
	return (typeof x == "string") ? x : x.join(" ")
}
var store = {
	"home": {
		"welcome.egc": ""
	},
	root: {

	},
}
var t = {
	dir: "/",
	setdir: function(cd) {
		cd.split("/").slice(1).forEach(e => {
			//var e = cd.split("/").slice(1)[e]
			if (typeof t.dirObj == "object") t.dirObj = t.dirObj[e]
		})
		this.dir = cd
	},
	dirObj: store,
	error: c => t.t.error(c),
	c: {
		cd: e => {
			if (e.length!==0&&e[0]!=="") {
				let x = (n(e).startsWith("/")) ? e : t.dir + ((t.dir=="/")?"":"/") + n(e)
				t.setdir(n(x));
				t.t.set_prompt(t.dir + " $ ")
			}
		},
		echo: e => t.t.echo(n(e)),

	}
}
$(() => {
	t.t = $("#t").terminal((c) => {
		if (t.c[c.split(" ")[0]] == undefined) {
			t.error(c.split(" ")[0] + ": no such command found")
		} else {
			t.c[c.split(" ")[0]](c.split(" ").slice(1))
		}
	}, {
		onInit: (x) => {
			t.t = x
			//console.log = t.t.echo
			console.error = t.t.error
		},
		greetings: "",
		prompt: "/ $ "
	})
})
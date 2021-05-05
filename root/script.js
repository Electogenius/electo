function n(x) {
	return (typeof x == "string") ? x : x.join(" ")
}

function syncStore() {
	var e = "store"
	if (t.dir != "/") {
		t.dir.split('/').slice(1).forEach(f => {
			e += "['" + f + "']"
		})
	}
	//console.log(e);
	try {
		eval(e + "=t.dirObj")
	} catch (e) {
		console.log("error changing directory");
	}
	localStorage.setItem("t", JSON.stringify(store))
}

var store = {}
var def = {
	"home": {
		"welcome.egc": "log(Welcome to my odd website. You are smart enough to discover this.)"
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
		syncStore()
	},
	dirObj: store,
	error: c => t.t.error(c),
	help: {
		cd: "change the directory",
		echo: "print something to console",
		ls: "list the contents of this directory",
		cat: "show the contents of a file",
		mkdir: "makes a subdirectory (with directory name as the parameter)",
		js: "executes javascript",
		mkfile: "makes a file (with file name as the first parameter",
		write: "write "
	},
	c: {
		cd: e => {
			if (e.length !== 0 && e[0] !== "" && e in def) {
				let x = (n(e).startsWith("/")) ? e : t.dir + ((t.dir == "/") ? "" : "/") + n(e)
				t.setdir(n(x));
				t.t.set_prompt(t.dir + " $ ")
			} else if(!(e in def)) t.error("No such directory exists")
		},
		echo: e => t.t.echo(n(e)),
		ls: () => { try { t.t.echo(Object.keys(t?.dirObj)) } catch (e) { t.t.error("error listing contents") } },
		cat: e => { if (t.dirObj.hasOwnProperty(n(e)) && typeof t.dirObj[n(e)] != "object") t.t.echo(t.dirObj[n(e)]) },
		mkdir: e => { t.dirObj[e] = {};
			syncStore() },
		"#": () => {},
		js: e => console.log(eval(n(e))), //hmm
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
			console.log = t.t.echo
			console.error = t.t.error
			if (localStorage.getItem("t") != null) {
				t.dirObj = JSON.parse(localStorage.t)
				syncStore()
			} 
			if (Object.keys(store).length == 0) {
				setTimeout(() => {
					t.dirObj = def
					syncStore()
					console.log("welcome")
				}, 500)
			}
		},
		greetings: "",
		prompt: "/ $ "
	})
})
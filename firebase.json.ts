import { readFileSync, writeFileSync } from "fs"
const fetch = require("node-fetch");

async function generateFirebaseJson() {
    const firebase = JSON.parse(readFileSync('firebase.base.json', 'utf8'))

    const headers = {
        'Authorization': 'Basic ' + Buffer.from(process.env.PUFFS_USER + ":" + process.env.PUFFS_PASS).toString('base64')
    }
    await fetch('https://bot.hackslovakia.com/lectures/feedback/fill-slugs', { headers })
    const response = await fetch('https://bot.hackslovakia.com/lectures/feedback/get-redirects', { headers })
    const redirects = await response.json()

    firebase.hosting.map(hosting => {
        hosting.redirects = [...hosting.redirects, ...redirects]
    })

    writeFileSync('firebase.json', JSON.stringify(firebase, null, 2))

    console.log("Generated firebase.json")
}

// TODO: the script should fail if the returned promise fails
generateFirebaseJson()

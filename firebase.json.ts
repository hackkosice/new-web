import { readFileSync, writeFileSync } from "fs"
const fetch = require("node-fetch");

async function generateFirebaseJson() {
    const firebase = JSON.parse(readFileSync('firebase.base.json', 'utf8'))

    const response = await fetch('http://bot.hackslovakia.com/lectures/feedback/get-redirects', {
        headers: {
            'Authorization': 'Basic ' + Buffer.from(process.env.PUFFS_USER + ":" + process.env.PUFFS_PASS).toString('base64')
        }
    })
    const redirects = await response.json()

    firebase.hosting.map(hosting => {
        hosting.redirects = [...hosting.redirects, ...redirects]
    })

    writeFileSync('firebase.json', JSON.stringify(firebase, null, 2))

    console.log("Generated firebase.json")
}

// TODO: the script should fail if the returned promise fails
generateFirebaseJson()

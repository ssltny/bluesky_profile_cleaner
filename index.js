import bsky from "@atproto/api"
import * as dotenv from 'dotenv'
import * as process from 'process'
dotenv.config()

const {BskyAgent} = bsky

const agent = new BskyAgent({ service: 'https://bsky.social' })

await agent.login({
    identifier: process.env.USERNAME,
    password: process.env.PASSWORD
})

while (true) {
    var response = await agent.getAuthorFeed({ actor: process.env.USERNAME })
    var len = response.data.feed.length
    if (len > 0) {
        for (let i = 0; i < len; i++) {
            await agent.deletePost(response.data.feed[i].post.uri)
        }
    } else {
        console.log("all posts on your profile are deleted.")
        break
    }
}

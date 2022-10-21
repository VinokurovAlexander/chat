import { Server } from '@logux/server'
import mongoose from "mongoose";

const server = new Server (
    Server.loadOptions(process, {
        subprotocol: '1.0.0',
        supports: '1.x',
        fileUrl: import.meta.url
    })
)

server.autoloadModules()
    .then(() => {
        server.listen()
    })
    .then(async () => {
        await mongoose.connect(process.env.DB_URL)
    }).catch(e => {
        console.log(e)
    })
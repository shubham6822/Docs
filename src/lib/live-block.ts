import { Liveblocks } from "@liveblocks/node";

console.log(process.env.LIVEBLOCKS_SECRET_KEY)
export const liveblocks = new Liveblocks({

    secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
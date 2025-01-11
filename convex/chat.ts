// import {query, mutation} form "./ _generated/server";
import exp from "constants";
import{mutation} from "./_generated/server";
import { v } from "convex/values";
import { argv } from "process";

export const sendMessage = mutation({
    args: {
        user: v.string(),
        body:v.string()
    },

    handler: async(ctx, args) => {
        console.log("This TypeScrip function is running on the server.");
        await ctx.db.insert("messages",{
            user: args.user,
            body: args.body,
        });
    },
});




/**
 * Copyright 2019-2020 John H. Nguyen
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

const Discord = require("discord.js")
const winston = require("winston")
const fs = require("fs")
const { rollD10, rollD100 } = require("./cs")
require("dotenv").config()

// help content
let help1 = fs.readFileSync("./data/help1.txt", { encoding: "utf8" })

let addMeMsg =
  "https://discord.com/oauth2/authorize?client_id=742168875315232798&permissions=51200&scope=bot"

//Configure logger settings
const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: {
    service: "user-service",
  },
  transports: [new winston.transports.Console()],
})

// Initialize Discord Bot
const bot = new Discord.Client()

bot.login(process.env.token)

bot.on("ready", (evt) => {
  logger.info("Connected")
  logger.info("Logged in as: ")
  logger.info(bot.user.username + " - (" + bot.user.id + ")")
})

bot.on("message", async (message) => {
  if (message.author.username.indexOf("Tribunal") > -1) {
    console.log("Preventing The Living Tribunal from spamming.")
    return
  }

  try {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    let msg = ""
    let embed = null
    const cmdPrefix = message.content.substring(0, 1)
    if ("!" === cmdPrefix) {
      let args = message.content.substring(1).split(" ")
      let cmd = args[0]
      args = args.splice(1)
      let option = args.length > 0 ? args.join(" ").toLowerCase() : ""
      switch (cmd) {
        case "help":
          message.channel.send(help1)
          return
        case "addme":
          msg = addMeMsg
          break
        case "roll":
          {
            embed = rollD100(option)
          }
          break
        case "d10":
          {
            embed = rollD10(option)
          }
          break
        default:
          // if (betaTesters.includes(message.guild.id.toString())) {
          //   switch (cmd) {
          //     default:
          //       msg = `Didn't recognize '${cmd}' please type !help for supported commands.`
          //   }
          // } else {
          //   msg = `Didn't recognize '${cmd}' please type !help for supported commands.`
          // }
          msg = `Didn't recognize '${cmd}' please type !help for supported commands.`
      }
    }

    if (msg) {
      message.channel.send(msg)
    } else if (embed) {
      message.channel.send({ embed })
    }
  } catch (error) {
    console.error(error)
    message.channel.send(error)
  }
})

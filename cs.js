class Rank {
  constructor({ blue, white, green, yellow, red, name, abbreviation }) {
    this.name = name || ""
    this.abbreviation = abbreviation || ""
    this.blue = blue || 0
    this.white = white || 0
    this.green = green || 0
    this.yellow = yellow || 0
    this.red = red || 100
  }
}

class Effect {
  constructor({ name, blue, white, green, yellow, red }) {
    this.name = name || ""
    this.blue = blue || ""
    this.white = white || ""
    this.green = green || ""
    this.yellow = yellow || ""
    this.red = red || ""
  }
}

const effectTable = [
  new Effect({
    name: "Blunt",
    blue: "-1CS Defense",
    white: "Miss",
    green: "Hit",
    yellow: "Slam",
    red: "Stun",
  }),
  new Effect({
    name: "Edged",
    blue: "Lose Weapon",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Kill",
  }),
  new Effect({
    name: "Evade",
    blue: "Autohit +1CS",
    white: "Autohit",
    green: "Evasion",
    yellow: "+1CS",
    red: "+2CS",
  }),
  new Effect({
    name: "Shooting",
    blue: "Weapon Jam",
    white: "Miss",
    green: "Hit",
    yellow: "Bull's Eye",
    red: "Kill",
  }),
  new Effect({
    name: "Thrown Edged",
    blue: "Weapon Lost",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Kill",
  }),
  new Effect({
    name: "Thrown Blunt",
    blue: "Weapon Lost",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Slam",
  }),
  new Effect({
    name: "Energy",
    blue: "Prop Damage",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Kill",
  }),
  new Effect({
    name: "Force",
    blue: "Prop Damage",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Slam",
  }),
  new Effect({
    name: "Dodge",
    blue: "Stagger Def Only",
    white: "Hit",
    green: "-2CS",
    yellow: "-4CS",
    red: "-6CS",
  }),
  new Effect({
    name: "Grapple",
    blue: "-1CS Defense",
    white: "Miss",
    green: "Partial",
    yellow: "Lock",
    red: "Hold",
  }),
  new Effect({
    name: "Grab",
    blue: "-1CS Defense",
    white: "Miss",
    green: "Grab",
    yellow: "Take",
    red: "Break",
  }),
  new Effect({
    name: "Escape",
    blue: "Autohit",
    white: "No Escape",
    green: "No Escape",
    yellow: "Escape",
    red: "Reverse",
  }),
  new Effect({
    name: "Block Parry",
    blue: "Autohit",
    white: "-4CS",
    green: "-2CS",
    yellow: "Block",
    red: "Stun",
  }),
  new Effect({
    name: "Mental Attack",
    blue: "Psionic Feedback",
    white: "Miss",
    green: "Hit",
    yellow: "Stun",
    red: "Kill",
  }),
  new Effect({
    name: "Charge",
    blue: "Fall",
    white: "Miss",
    green: "Hit",
    yellow: "Slam",
    red: "Stun",
  }),
  new Effect({
    name: "Slam",
    blue: "Gr Slam",
    white: "1 Area",
    green: "Stagger",
    yellow: "No",
    red: "No",
  }),
  new Effect({
    name: "Stun",
    blue: "1 to 10",
    white: "1",
    green: "Def Only",
    yellow: "No",
    red: "No",
  }),
  new Effect({
    name: "Kill",
    blue: "Lose all Karma/Die",
    white: "End. Loss",
    green: "ES",
    yellow: "No",
    red: "No",
  }),
]

const rankTable = [
  new Rank({
    name: "Shift",
    abbreviation: "0",
    blue: 8,
    white: 65,
    green: 64,
    yellow: 99,
  }),
  new Rank({
    name: "Feeble",
    abbreviation: "fe",
    blue: 7,
    white: 60,
    green: 90,
    yellow: 99,
  }),
  new Rank({
    name: "Poor",
    abbreviation: "pr",
    blue: 6,
    white: 55,
    green: 85,
    yellow: 99,
  }),
  new Rank({
    name: "Typical",
    abbreviation: "ty",
    blue: 5,
    white: 50,
    green: 80,
    yellow: 97,
  }),
  new Rank({
    name: "Good",
    abbreviation: "gd",
    blue: 4,
    white: 45,
    green: 75,
    yellow: 97,
  }),
  new Rank({
    name: "Excellent",
    abbreviation: "ex",
    blue: 4,
    white: 40,
    green: 70,
    yellow: 94,
  }),
  new Rank({
    name: "Remarkable",
    abbreviation: "rm",
    blue: 3,
    white: 35,
    green: 65,
    yellow: 94,
  }),
  new Rank({
    name: "Incredible",
    abbreviation: "in",
    blue: 3,
    white: 30,
    green: 60,
    yellow: 90,
  }),
  new Rank({
    name: "Amazing",
    abbreviation: "am",
    blue: 2,
    white: 25,
    green: 60,
    yellow: 90,
  }),
  new Rank({
    name: "Monstrous",
    abbreviation: "mn",
    blue: 2,
    white: 20,
    green: 50,
    yellow: 85,
  }),
  new Rank({
    name: "Unearthly",
    abbreviation: "un",
    blue: 2,
    white: 15,
    green: 45,
    yellow: 85,
  }),
  new Rank({
    name: "Shift",
    abbreviation: "x",
    blue: 1,
    white: 10,
    green: 40,
    yellow: 80,
  }),
  new Rank({
    name: "Shift",
    abbreviation: "y",
    blue: 1,
    white: 6,
    green: 40,
    yellow: 80,
  }),
  new Rank({
    name: "Shift",
    abbreviation: "z",
    blue: 1,
    white: 3,
    green: 35,
    yellow: 75,
  }),
  new Rank({
    name: "Class",
    abbreviation: "1000",
    white: 1,
    green: 35,
    yellow: 75,
  }),
  new Rank({
    name: "Class",
    abbreviation: "3000",
    white: 1,
    green: 30,
    yellow: 70,
  }),
  new Rank({
    name: "Class",
    abbreviation: "5000",
    white: 1,
    green: 25,
    yellow: 65,
  }),
  new Rank({
    name: "Beyond",
    abbreviation: "b",
    white: 1,
    green: 20,
    yellow: 60,
  }),
]

function getEffectFromName(name) {
  return effectTable.find((e) => e.name.toLowerCase() === name.toLowerCase())
}

function getRankFromAbbreviation(rank, cs) {
  let columnShift = parseInt(cs)
  if (columnShift < -3) {
    columnShift = -3
  }

  if (columnShift > 3) {
    columnShift = 3
  }

  for (let i in rankTable) {
    const index = parseInt(i)
    const r = rankTable[i]
    if (rank.toLowerCase() === r.abbreviation) {
      let targetIndex = index + columnShift
      if (targetIndex < 0) {
        targetIndex = 0
      }

      if (targetIndex >= rankTable.length) {
        targetIndex = rankTable[rankTable.length - 1]
      }

      return rankTable[targetIndex]
    }
  }
}

function rollD100(option) {
  const options = option.split(" ")
  console.warn(options)
  const colors = {
    Blue: 4886754,
    White: 16777214,
    Green: 0x7ed321,
    Yellow: 0xf8e71c,
    Red: 0xd0021b,
  }

  let cs = 0
  let csText = "+0CS"
  let rank = null
  let rankText = ""
  let effect = null

  for (let i in options) {
    let option = options[i]
    if (option.toLowerCase().includes("cs")) {
      csText = option.toUpperCase()
      cs = parseInt(option.replace("cs", "").replace("+", ""))
    }

    if (
      !effect &&
      ["thrown", "block", "mental"].includes(option.toLowerCase())
    ) {
      effect = getEffectFromName(options[i] + " " + options[parseInt(i) + 1])
    } else if (!effect) {
      effect = getEffectFromName(options[i])
    }
  }

  for (let option of options) {
    if (!rank) {
      rank = getRankFromAbbreviation(option, cs)
      rankText = option
    }
  }

  let displayRank = getRankFromAbbreviation(rankText, 0)
  const shiftClass = ["Shift", "Class"].includes(displayRank.name)
    ? " " + displayRank.abbreviation.toUpperCase()
    : ""
  const roll = Math.floor(Math.random() * 100) + 1
  let color = "Red"
  if (roll <= rank.blue) {
    color = "Blue"
  } else if (roll <= rank.white) {
    color = "White"
  } else if (roll <= rank.green) {
    color = "Green"
  } else if (roll <= rank.yellow) {
    color = "Yellow"
  }

  const embed = {
    title: `${displayRank.name + shiftClass} ${csText}`,
    color: colors[color],
    fields: [
      {
        name: "Result",
        value: color,
        inline: true,
      },
    ],
  }

  if (effect) {
    embed.fields.push({
      name: effect.name,
      value: effect[color.toLowerCase()],
      inline: true,
    })
  }

  embed.fields.push({
    name: "Raw Value",
    value: roll,
    inline: true,
  })

  return embed
}

module.exports = {
  Rank,
  rollD100,
}

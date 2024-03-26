import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { wednesday_script, wednesday_script_answers } from './wednesday_script'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgServerRoom from '../../public/backgrounds/serverRoom.png'
import bgBossOffice from '../../public/backgrounds/bossOffice.jpg'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'
import imgRebecca from '../../public/actors/rebecca.png'
  
//character declarations
const ActorSimon: SceneCharacter = {
  name: "Simon",
  color: "#ff0000",
  image: imgSimon,
  styles: ["centre-right",]
}

const ActorRebecca: SceneCharacter = {
  name: "Rebecca",
  color: "#ff0000",
  image: imgRebecca,
  styles: ["centre-left", "mirror"]
}

const ActorBill: SceneCharacter = {
  name: "Bill",
  color: "#ff0000",
  image: imgBill,
  styles: ["centre-left"]
}

// decision delarations
const decision1: string[] = [
  "Immediately disconnect infected device",
  "Assess threat",
  "Implement strict link filter",
]

const decision2: string[] = [
  "Manually verify access",
  "Guest passes",
]

export const tuesday_script_answers: any = {
  decision1: undefined,
  decision2: undefined,
  score: 0
}

export const tuesday_script: SceneScript = [
  [ActionTypes.bg, undefined],
  [ActionTypes.name, undefined],
  ". . .",
  
  [ActionTypes.bg, bgPlayerDesk],
  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "Hey, how's things? That was some first day. I wouldn't worry though; we've never had to handle two security risks in the same day before. Things should be back to normal now. ",
  [ActionTypes.name, undefined],
  "A notification appears on Simon's computer, interrupting the conversation. Simon opens some kind of control panel. Glancing at it, you can only make out a mass of red text. Simon suddenly turns red himself.", //NARRATOR
  [ActionTypes.name, ActorSimon],
  "Oh no. We've been breached, and it's spreading fast. Quickly, save your work. We need to act now.",
  [ActionTypes.name, undefined],
  "On the first sign of a cyber attack, you decide on the first course of action.", //NARRATOR
  
  [ActionTypes.rchar, ActorSimon],

  [ActionTypes.qa, "decision1", decision1],
  [ActionTypes.check, () => tuesday_script_answers.decision1 === decision1[0]], //immediately disconnect device
    [ActionTypes.name, undefined],
    "While Simon is busy preparing a response, you try to minimize the risk of exposure by disconnecting all devices on the network. As you finish the task, Simon notices your work.", //NARRATOR

    [ActionTypes.char, ActorSimon],
    [ActionTypes.name, ActorSimon],
    "I can see what you're trying here, but we don't have a full understanding of the attack yet. For all we know, it could just be one infected computer. There's a risk of data loss after doing this, but we've got bigger problems to worry about. Since you've already isolated everything on the network, we better let Bill know.",
    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.name, undefined],
    [ActionTypes.bg, undefined],
  
  [ActionTypes.check, () => tuesday_script_answers.decision1 === decision1[1]], //assess threat
    [ActionTypes.name, undefined],
    "To get a better understanding of the attack and its consequences, you decide to assess the threat before acting.", //NARRATOR

    [ActionTypes.bg, undefined],
    [ActionTypes.name, undefined],
    ". . .",//TIMESKIP FADE
    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],
    [ActionTypes.name, ActorSimon],
    "Well, it ticks all the boxes for a network breach. The vulnerability was found in the office's smart thermostat, its connection was completely unencrypted. The hackers are most likely taking everything they can get.",
    "The entire server room is compromised, we'll need to isolate the servers to stop the hackers from getting anything else.",

    [ActionTypes.bg, bgServerRoom],
    
    [ActionTypes.name, undefined],
    "Simon lifts the protective cover for the server room's Emergency Power Off button.", //NARRATOR
    [ActionTypes.name, ActorSimon],
    "It's a drastic measure, but we have to take it. When our personal information is at risk, worrying about data loss is insignificant. ",
    [ActionTypes.name, undefined],
    "Simon pushes the button. The servers turn off. ", //NARRATOR
    [ActionTypes.name, ActorSimon],
    "Now that's handled, we better let Bill know.",
    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.name, undefined],
    [ActionTypes.bg, undefined],

  [ActionTypes.check, () => tuesday_script_answers.decision1 === decision1[2]], //implement strict link filter
    [ActionTypes.name, undefined],
    "To prevent the risk of further breaches, you suggest implementing stronger link filters to Simon. ", //NARRATOR
    
    [ActionTypes.char, ActorSimon],
    [ActionTypes.name, ActorSimon],
    "It's a bit too late for that now. We can worry about that later, right now we need to get as much information as we can on this breach.",

    [ActionTypes.bg, undefined],
    [ActionTypes.name, undefined],
    ". . .",//TIMESKIP FADE
    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],
    [ActionTypes.name, ActorSimon],
    "Well, it ticks all the boxes for a network breach. The vulnerability was found in the office's smart thermostat, its connection was completely unencrypted. The hackers are most likely taking everything they can get.",
    "The entire server room is compromised, we'll need to isolate the servers to stop the hackers from getting anything else.",

    [ActionTypes.bg, bgServerRoom],
    [ActionTypes.name, undefined],
    "Simon lifts the protective cover for the server room's Emergency Power Off button.", //NARRATOR
    [ActionTypes.name, ActorSimon],
    "It's a drastic measure, but we have to take it. When our personal information is at risk, worrying about data loss is insignificant.",
    [ActionTypes.name, undefined],
    "Simon pushes the button. The servers turn off.", //NARRATOR
    [ActionTypes.name, ActorSimon],
    "Now that's handled, we better let Bill know.",
    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.name, undefined],
    [ActionTypes.bg, undefined],
  [ActionTypes.rcheck],

  ". . .",

  [ActionTypes.bg, bgBossOffice],
  [ActionTypes.char, ActorBill],
  [ActionTypes.name, ActorSimon],
  "The network was breached by a hacker exploiting a backdoor in the thermostat. They've had access to confidential documents for an unknown amount of time. We've shut down the servers to stop the spread, but Chronosoft needs to be prepared to respond to this.",
  [ActionTypes.name, undefined],
  "Bill is visibly panicked.", //NARRATOR
  [ActionTypes.name, ActorBill],
  "This couldn't have happened at a worse time. We're losing a lot of labour in keeping things shut down, you need to get us through this as soon as possible.",
  [ActionTypes.name, ActorSimon],
  "We need to do everything we can to keep our data safe. I'm doing everything I can to stop the spread but can't be everywhere at once. We know for sure that keycard IDs were taken, <PlayerName> will need to implement some temporary security procedures.",

  [ActionTypes.qa, "decision2", decision2],

  [ActionTypes.check, () => tuesday_script_answers.decision2 === decision2[0]], //manually verify access
    [ActionTypes.name, undefined],
    "You recognise security as Chronosoft's main priority. You decide to have a word with Rebecca.", //NARRATOR

    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.rchar, ActorBill],
    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorRebecca],
    [ActionTypes.name, ActorRebecca],
    "You want me to check on everyone coming into the office? Okay, that isn't so bad.",

  [ActionTypes.check, () => tuesday_script_answers.decision2 === decision2[1]], //guest passes
    [ActionTypes.name, undefined],
    "As a safety precaution, you decide to ask Rebecca to distribute guest passes to the staff. ", //NARRATOR
    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.rchar, ActorBill],
    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorRebecca],
    [ActionTypes.name, ActorRebecca],
    "That's no problem, I'll get these handed out as soon as I can.", //NARRATOR
  [ActionTypes.rcheck],

  [ActionTypes.bg, bgPlayerDesk],
  [ActionTypes.rchar, ActorRebecca],
  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "I've done all I can to stop the spread, at this point I'm just crossing my fingers for the computers to just work tomorrow. I'm sure this wasn't the job you were expecting, but we're in it now. The next couple of days are going to decide the future of this company, what matters is that we see it through to the end. I'll see you tomorrow.", //NARRATOR

  [ActionTypes.script, wednesday_script, wednesday_script_answers]
]

export default tuesday_script
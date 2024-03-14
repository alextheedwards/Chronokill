import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgServerRoom from '../../public/backgrounds/serverRoom.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'
import imgRebecca from '../../public/actors/rebecca.png'
  
  const ActorSimon: SceneCharacter = {
    name: "Simon",
    color: "#ff0000",
    image: imgSimon,
    styles: []
  }
  
  const ActorSimonMirror: SceneCharacter = {
    name: "Simon",
    color: "#ff0000",
    image: imgSimon,
    styles: []
  }
  
  const ActorRebecca: SceneCharacter = {
    name: "Rebecca",
    color: "#ff0000",
    image: imgRebecca,
    styles: []
  }

  const ActorBill: SceneCharacter = {
    name: "Rebecca",
    color: "#ff0000",
    image: imgBill,
    styles: []
  }

  const decision1: string[] = [
    "Immediatley disconnect infected device",
    "Access threat",
    "Impliment strict link filter",
  ]
  
  const decision2: string[] = [
    "Manually verify access",
    "Guest passes",
  ]

  export const tuesday_script_answers: any = {
    decision1: undefined,
    decision2: undefined
  }

  export const tuesday_script: SceneScript = [
    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],
  
    "Hey, how's things? I'm sure you're wrecked after yesterday. I wouldn't worry though; we've never had to handle two security risks in the same day before. Things should be back to normal now. ",
    "A notification appears on Simon's computer, interrupting the conversation. Simon opens some kind of control panel. Glancing at it, you can only make out a mass of red text. Simon suddenly turns red himself.", //NARRATOR
    "Oh no. We've been breached, and it's spreading fast. Quickly, save your work. We need to act now.",
    "On the first sign of a cyber attack, you decide on the first course of action", //NARRATOR
    
    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.qa, "decision1", decision1],
    [ActionTypes.check, () => tuesday_script_answers.decision1 === decision1[0]], //immediatley disconnect device

    "While Simon is busy preparing a response, you try to minimize the risk of exposure by disconnecting all devices on the network. As you finish the task, Simon notices your work.", //NARRATOR

    [ActionTypes.char, ActorSimon],

    "I can see what you're trying here, but we don't have a full understanding of the attack yet. For all we know, it could just be one infected computer. There's a risk of data loss after doing this, but we've got bigger problems to worry about. Since you've already isolated everything on the network, we better let Bill know.",

    //TIMESKIP FADE
    "Well, it ticks all the boxes for a network breach. The vulnerability was found in the office's smart thermostat, its connection was completely unencrypted. The hackers are most likely taking everything they can get.",
    "The entire server room is compromised, we'll need to isolate the servers to stop the hackers from getting anything else.",

    [ActionTypes.bg, bgServerRoom],
    [ActionTypes.char, ActorSimon],

    "Simon lifts the protective cover for the server room's Emergency Power Off button.", //NARRATOR
    "It's a drastic measure, but we have to take it. When our personal information is at risk, worrying about data loss is insignificant. ", 
    "Simon pushes the button. The servers turn off. ", //NARRATOR
    "Now that's handled, we better let Bill know.",
    
    ["ActionTypes.check", () => tuesday_script_answers.decision1 === decision1[1]], //access threat

    "To get a better understanding of the attack and its consequences, you decide to assess the threat before acting.", //NARRATOR

    //TIMESKIP FADE
    "Well, it ticks all the boxes for a network breach. The vulnerability was found in the office's smart thermostat, its connection was completely unencrypted. The hackers are most likely taking everything they can get.",
    "The entire server room is compromised, we'll need to isolate the servers to stop the hackers from getting anything else.",

    [ActionTypes.bg, bgServerRoom],
    [ActionTypes.char, ActorSimon],

    "Simon lifts the protective cover for the server room's Emergency Power Off button.", //NARRATOR
    "It's a drastic measure, but we have to take it. When our personal information is at risk, worrying about data loss is insignificant. ", 
    "Simon pushes the button. The servers turn off. ", //NARRATOR
    "Now that's handled, we better let Bill know.",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === decision1[2]], //implement strict link filter
    [ActionTypes.rchar, ActorSimon],

    "To prevent the risk of further breaches, you suggest implementing stronger link filters to Simon. ", //NARRATOR
    
    [ActionTypes.char, ActorSimon],

    "It's a bit too late for that now. We can worry about that later, right now we need to get as much information as we can on this breach.",

    //TIMESKIP FADE
    "Well, it ticks all the boxes for a network breach. The vulnerability was found in the office's smart thermostat, its connection was completely unencrypted. The hackers are most likely taking everything they can get.",
    "The entire server room is compromised, we'll need to isolate the servers to stop the hackers from getting anything else.",

    [ActionTypes.bg, bgServerRoom],
    [ActionTypes.char, ActorSimon],

    "Simon lifts the protective cover for the server room's Emergency Power Off button.", //NARRATOR
    "It's a drastic measure, but we have to take it. When our personal information is at risk, worrying about data loss is insignificant. ", 
    "Simon pushes the button. The servers turn off. ", //NARRATOR
    "Now that's handled, we better let Bill know.",

    [ActionTypes.rcheck],
    [ActionTypes.bg, bgReception], //needs changed to boss' office
    [ActionTypes.char, ActorSimonMirror],
    [ActionTypes.char, ActorBill],

    "The network was breached by a hacker exploiting a backdoor in the thermostat. They've had access to confidential documents for an unknown amount of time. We've shut down the servers to stop the spread, but Chronosoft needs to be prepared to respond to this.",
    "Bill is visibly panicked.", //NARRATOR
    "This couldn't have happened at a worse time. We're losing a lot of labour in keeping things shut down, you need to get over this as soon as possible.",
    "We need to do everything we can to keep our data safe. I'm doing everything I can to stop the spread but can't be everywhere at once. We know for sure that keycard IDs were taken, [NAME] will need to implement some temporary security procedures.",

    [ActionTypes.qa, "decision2", decision2],
    [ActionTypes.check, () => tuesday_script_answers.decision2 === decision2[0]], //manually verify access

    "You recognise security as Chronosoft's main priority. You decide to have a word with Rebecca.", //NARRATOR

    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorRebecca],

    "You want me to check on everyone coming into the office? Okay, that isn't so bad.",

    [ActionTypes.check, () => tuesday_script_answers.decision2 === decision2[1]], //guest passes

    "As a safety precaution, you decide to ask Rebecca to distribute guest passes to the staff. ", //NARRATOR

    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorRebecca],

    "That's no problem, I'll get these handed out as soon as I can. ", //NARRATOR

    [ActionTypes.rcheck],
    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],

    "I've done all I can to stop the spread, at this point I'm just crossing my fingers for the computers to just work tomorrow. I'm sure this wasn't the job you were expecting, but we're in it now. The next couple of days are going to decide the future of this company, what matters is that we see it through to the end. I'll see you tomorrow.", //NARRATOR

  ]

  export default tuesday_script
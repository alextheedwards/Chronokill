import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { thursday_script, thursday_script_answers } from './thursday_script'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgBossOffice from '../../public/backgrounds/bossOffice.jpg'
import bgBoardroom from '../../public/backgrounds/boardroom.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'
import imgOscar from '../../public/actors/oscar.png'
import imgPolice from '../../public/actors/police.png'
import imgRebecca from '../../public/actors/rebecca.png'

import {tuesday_script_answers} from "./tuesday_script";
  
  const ActorSimon: SceneCharacter = {
    name: "Simon",
    color: "#ff0000",
    image: imgSimon,
    styles: ["mirror"]
  }

  const ActorOscar: SceneCharacter = {
    name: "Oscar",
    color: "#ff0000",
    image: imgOscar,
    styles: ["centre-right", "mirror"]
  }

  const ActorBill: SceneCharacter = {
    name: "Bill",
    color: "#ff0000",
    image: imgBill,
    styles: []
  }

const ActorPolice: SceneCharacter = {
  name: "Police",
  color: "#ff0000",
  image: imgPolice,
  styles: ["centre-right"]
}

const ActorRebecca: SceneCharacter = {
  name: "Rebecca",
  color: "#ff0000",
  image: imgRebecca,
  styles: ["centre-right"]
}

  const decision1: string[] = [
    "Inform stakeholders",
    "Cover up attack",
    "Pay ransom",
  ]
  
  const decision2: string[] = [
    "Yes",
    "No",
  ]

  export const wednesday_script_answers: any = {
    decision1: undefined,
    decision2: undefined
  }

  export const wednesday_script: SceneScript = [
    ". . .",

    [ActionTypes.bg, bgReception],

    "You arrive at the office and scan your guest pass", //NARRATOR

    [ActionTypes.bg, bgPlayerDesk],

    "You sit at your desk and boot up your computer. It loads a photo of a poorly rendered skeleton graphic, and a list of demands:", //NARRATOR
    "YANKEE, WE HAVE YOUR ADDRESSES, YOUR PASSWORDS, YOUR BANK DETAILS PLEASE DELIVER $5000 IN NEGOTIABLE AMERICAN CURRENCY KINDLY YOU HAVE TWELVE HOURS", //SCAMMERS
    "At the bottom of the page are a Bitcoin address and several publicly hosted links named ChronosoftPayslips.zip.",//NARRATOR
    "Oscar approaches you.",

    [ActionTypes.char, ActorOscar],

    "Oscar approaches you.",

    [ActionTypes.char, ActorSimon],

    //Manually Verify Access
    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Manually verify access"],

    "They have everything, Oscar. Our bank details, sensitive client information, who knows what else. If this gets out...",

    [ActionTypes.rcheck],

    //Guest Passes
    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Guest passes"],

    "They have everything, Oscar. Our bank details, sensitive client information, someone even got into the server room last night. If this gets out...",
    "You try to think of a way out of this.",//NARRATOR
    
    [ActionTypes.qa, "decision1", decision1],

    [ActionTypes.rcheck],
    [ActionTypes.rchar, ActorOscar],
    [ActionTypes.rchar, ActorSimon],

    [ActionTypes.check, () => wednesday_script_answers.decision1 === decision1[0]], //inform stakeholders
    [ActionTypes.bg, bgBossOffice],
    [ActionTypes.char, ActorBill],

    "You recognise your responsibility to the stakeholders of the company, and that a transparent response is required. You give Bill the following statement to announce: ",//NARRATOR
    "Chronosoft's security measures have been breached by a ransomware attack. Company records, employee personal information and more are expected to leak. More to announce soon.",

    "This is going to be a legal nightmare. The next statement will have to be very carefully worded.",

    [ActionTypes.rchar, ActorBill],
    [ActionTypes.rcheck],

    [ActionTypes.check, () => wednesday_script_answers.decision1 === decision1[1]], //cover up attack
    [ActionTypes.bg, bgBossOffice],
    [ActionTypes.char, ActorBill],
    [ActionTypes.char, ActorSimon],

    "You really don't want to take responsibility for something this big on your first week. You hint to Bill that a lot of trouble would be avoided if nobody else knew about it.",//NARRATOR
    "Bill whispers something to Simon, and hurriedly leaves the room. Simon makes himself busy.",//NARRATOR

    [ActionTypes.rchar, ActorBill],
    [ActionTypes.rchar, ActorSimon],

    //FADE TO RECEPTION
    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorRebecca],

    "The police arrive at the office.",//NARRATOR
    "ARREST MADE: Name: [NAME] Crime: Financial Misconduct, Data Protection Awaiting trial ",

    [ActionTypes.rchar, ActorPolice],

    //TODO: INSTAFAIL HERE

    ["check", () => wednesday_script_answers.decision1 === decision1[2]], //pay ransom

    [ActionTypes.char, ActorOscar],
    "You argue that the ransom demand is surprisingly small and would be less expensive to the company than any legal fees if this were to come out. Oscar agrees with you, offering to front the money himself to speed things up. ",//NARRATOR
    "YANKEE, PLEASE DELIVER $20000 FURTHER IN NEGOTIABLE AMERICAN CURRENCY",
    [ActionTypes.rchar, ActorOscar],
    [ActionTypes.char, ActorSimon],
    "You quickly realise your mistake. Simon gives Bill the following statement to announce:",//NARRATOR
    "Chronosoft's security measures have been breached by a ransomware attack. Company records, employee personal information and more are expected to leak. More to announce soon. ",

    [ActionTypes.bg, bgBossOffice], 
    [ActionTypes.char, ActorBill],

    "This is going to be a legal nightmare. The next statement will have to be very carefully worded.",

    [ActionTypes.rchar, ActorBill],
    [ActionTypes.rcheck],

    [ActionTypes.bg, bgBoardroom],
    "Simon organises a board meeting to discuss personal safety after the data leak.",//NARRATOR
    [ActionTypes.char, ActorSimon],
    "First and easiest thing to do is change your passwords, on everything you can. Make sure no two passwords are the same. Call your bank's fraud department and inform them of the leak. Keep an extra close eye on your account activity. Identity theft is also a risk, but there's not much more you can do than report it. ",

    "I know Simon hasn't fully secured the network yet, but the stakeholders aren't happy about losing business. I'm not happy about losing business. Can we get the computers back up?",

    [ActionTypes.qa, "decision2", decision2],
    [ActionTypes.check, () => wednesday_script_answers.decision2 === decision2[0]], //manually verify access

    "Thinking about what this is costing the company leads you to agree with him. You reconnect Bill's computer.",//NARRATOR

    [ActionTypes.rcheck],

    [ActionTypes.check, () => wednesday_script_answers.decision2 === decision2[1]], //guest passes

    "You argue that trying to keep working under a compromised network will lead to further data loss and could let the intrusion spread.",//NARRATOR
    "Yeah, staying on the safe side will probably end up costing less anyway.",

    [ActionTypes.rcheck],

    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],

    "I'll need to pull an all-nighter tonight to make sure we're okay for tomorrow. See you then.",

    [ActionTypes.script, thursday_script, thursday_script_answers]

  ]

  export default wednesday_script
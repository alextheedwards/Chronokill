import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'

import {
  monday_script_answers, 
  tuesday_script_answers,
  wednesday_script_answers,
  thursday_script_answers
 } from './'

import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgBoardroom from '../../public/backgrounds/boardroom.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'

const ActorSimon: SceneCharacter = {
  name: "Simon",
  color: "#ff0000",
  image: imgSimon,
  styles: ["centre-right"]
}

const ActorBill: SceneCharacter = {
  name: "Bill",
  color: "#ff0000",
  image: imgBill,
  styles: ["centre-left"]
}

export const friday_script_answers: any = {
  score: 0
}

export const friday_script: SceneScript = [
  [ActionTypes.bg, undefined],
  [ActionTypes.name, undefined],
  ". . .",

  ["bg", bgPlayerDesk],
  [ActionTypes.amb, "office-ambience-24734.mp3"],
  "You show up to work and sit at your desk. ",//NARRATOR

  ["char", ActorSimon],
  [ActionTypes.name, ActorSimon],
  "Hey, Bill wants a word with you. You should head over to the boardroom.",

  // FADE TO BOARDROOM

  [ActionTypes.rchar, ActorSimon],
  [ActionTypes.char, ActorBill],
  ["bg", bgBoardroom],
  [ActionTypes.ramb],
  [ActionTypes.name, ActorBill],
  "Thanks for coming. I wanted to talk to you about your performance this week.",

  //[PLUG IT IN]
  [ActionTypes.check, () => monday_script_answers.decision1 === "Plug it in"],
    [ActionTypes.score, -1],
    "On your first day, you tried to plug in a loose USB. Simon tells me you were seconds away from installing a backdoor for the attackers.",
  
  //[GIVE USB TO RECEPTION]
  [ActionTypes.check, () => monday_script_answers.decision1 === "Give the USB to reception"],
    [ActionTypes.score, -1],
    "On your first day, you gave a loose USB into reception. That would have been alright had Rebecca not plugged it in herself.",

  //[REPORT USB TO SIMON]
  [ActionTypes.check, () => monday_script_answers.decision1 === "Report the USB to Simon"],
    [ActionTypes.score, 1],
    "On your first day, you reported a loose USB to Simon. He was able to successfully detect a viable threat thanks to your response. ",

  //[CLICK LINK IN INCOGNITO]
  [ActionTypes.check, () => monday_script_answers.decision2 === "Click the link in incognito"],
    [ActionTypes.score, -2],
    "When Oscar got that phishing email, you told him to open it in Incognito, then he gave his login info to a mock website ran by the hackers.",

  //[DELETE EMAIL]
  [ActionTypes.check, () => monday_script_answers.decision2 === "Delete Email"],
    [ActionTypes.score, 1],
    "When Oscar got that phishing email, you told him to delete it. That was a safe decision. ",

  //[VERIFY LINK AUTHENTICITY]
  [ActionTypes.check, () => monday_script_answers.decision2 === "Verify link authenticity"],
    [ActionTypes.score, 2],
    "When Oscar got that phishing email, you noticed the fake website. Thanks to that, we were able to block that domain from our network.",

  //[IMMEDIATELY DISCONNECT DEVICES]
  [ActionTypes.check, () => tuesday_script_answers.decision1 === "Immediately disconnect infected device"],
    [ActionTypes.score, -1],
    "On the first sign of a cyber-attack, your first move was to disconnect all devices from the network. Your decision cost us significant data loss, since we didn't have a recent backup.",

  //[ASSESS THREAT]
  [ActionTypes.check, () => tuesday_script_answers.decision1 === "Assess threat"],
    [ActionTypes.score, 1],
    "On the first sign of a cyber-attack, your first move was to assess the threat. This careful thinking allowed us to prepare a proper response. ",

  //[IMPLEMENT STRICT LINK FILTER]
  [ActionTypes.check, () => tuesday_script_answers.decision1 === "Implement strict link filter"],
    [ActionTypes.score, -1],
    "On the first sign of a cyber-attack, your first move was to implement a link filter. It's like closing the door after the horse has bolted.",

  //[MANUALLY VERIFY ACCESS]
  [ActionTypes.check, () => tuesday_script_answers.decision2 === "Manually verify access"],
    [ActionTypes.score, 2],
    "When keycard access was removed, you had Rebecca verify employee access to the office. This helped prevent an unknown bad actor from accessing the premises.",

  //[GUEST PASSES]
  [ActionTypes.check, () => tuesday_script_answers.decision2 === "Guest passes"],
    [ActionTypes.score, -1],
    "When keycard access was removed, you had Rebecca distribute guest passes to the staff. I don't know how it happened, but a bad actor was able to access the server room with a guest pass. ",

  //[INFORM STAKEHOLDERS]
  [ActionTypes.check, () => wednesday_script_answers.decision1 === "Inform stakeholders"],
    [ActionTypes.score, 2],
    "After the ransomware demand was made, you chose to inform the stakeholders immediately. This transparency helped establish a proper response to the attack.",

  //[COVER UP ATTACK] 
  [ActionTypes.check, () => wednesday_script_answers.decision1 === "Cover up attack"],
    "(if you're reading this ingame, something went wrong! the game should end on thursday if the player chose to cover up the attack!)",

  //[PAY RANSOM]
  [ActionTypes.check, () => wednesday_script_answers.decision1 === "Pay ransom"],
    [ActionTypes.score, -2],
    "After the ransomware demand was made, Oscar convinced you to pay the ransom. I'm glad Oscar offered to pay for it himself, but this was a really unprofessional move.",

  //[REBOOT COMPUTERS/YES]
  [ActionTypes.check, () => wednesday_script_answers.decision2 === "Yes"],
    [ActionTypes.score, -1],
    "You reconnected the computers to the network after I asked you, which led to more employee data being held for ransom. You should have had the expertise to say no.",

  //[REFUSE TO REBOOT COMPUTERS/NO]
  [ActionTypes.check, () => wednesday_script_answers.decision2 === "No"],
    [ActionTypes.score, 1],
    "You refused to reconnect the computers to the network after I asked you. Thank you for correcting me, we could have lost even more data if I had my way.",

  //[FOCUS ON RESPONSE]
  [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Response"],
    [ActionTypes.score, 1],
    "The public's response to our press release focusing on our response to the attack was received well. They saw us as doing everything we could to protect our employees.",

  //[FOCUS ON CONSEQUENCES]
  [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Consequences"],
    [ActionTypes.score, -1],
    "The public's response to our press release focusing on the consequences of the attack was received poorly. They saw us as incompetent for allowing this to happen.",

  //[NO ACCOUNTABILITY]
  [ActionTypes.check, () => thursday_script_answers.decision1 === "No Accountability"],
    [ActionTypes.score, -2],
    "The public's response to our press release refusing to take accountability was received terribly. Some employees have started legal action against us.",

  //[INVEST IN CYBERSECURITY TRAINING MATERIAL]
  [ActionTypes.check, () => thursday_script_answers.decision2 === "Invest in cybersecurity training material"],
    [ActionTypes.score, 2],
    "To prevent further attacks, you recommended we invest in better cybersecurity training material to keep everyone aware. To think all of this could have been prevented if we saw the value of this before the attack.",

  //[CHANGE EVERYONE’S PASSWORD]
  [ActionTypes.check, () => thursday_script_answers.decision1 === "Change everyone's password"],
    [ActionTypes.score, -1],
    "To prevent further attacks, you recommended we change everyone's password... Was this a joke?",

  //WIN STATE
  [ActionTypes.check, () => friday_script_answers.score >= 7],
    "This was a difficult first week for you, I'm sure. You had to make some difficult decisions, but we came out on top in the end. We'd be happy to keep you on to help prevent any further attacks.",
    "Now get back to work.",
    [ActionTypes.endgame, "Game over, you won!"],

  //FAIL STATE
  [ActionTypes.check, () => friday_script_answers.score < 7],
    "The decisions you've made over the past week have tanked Chronosoft's reputation. Now we have to bring in an external cybersecurity company to clean things up and save face. Thankfully, you're still on probation. You're fired.",
    [ActionTypes.endgame, "Game over, you lost!"],

  [ActionTypes.rcheck]
]

export default friday_script
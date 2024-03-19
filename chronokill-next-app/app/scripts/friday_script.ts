import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
//import { monday_script_answers } from './monday_script'
//import { tuesday_script_answers } from './tuesday_script'
//import { wednesday_script_answers } from './wednesday_script'
//import { thursday_script_answers } from './thursday_script'

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

  const monday_script_answers: any = {
    decision1: "Give the USB to reception",
    decision2: "Verify link authenticity",
  }

  const tuesday_script_answers: any = {
    decision1: "Assess threat",
    decision2: "Manually verify access",
  }

  const wednesday_script_answers: any = {
    decision1: "Inform stakeholders",
    decision2: "No",
  }

  export const thursday_script_answers: any = {
    decision1: "Focus On Response",
    decision2: "Invest in cybersecurity training material",
  }

  export const friday_script: SceneScript = [
    ". . .",

    ["bg", bgPlayerDesk],
  
    "You show up to work and sit at your desk. ",//NARRATOR

    ["char", ActorSimon],

    "Hey, Bill wants a word with you. You should head over to the boardroom.",

    // FADE TO BOARDROOM

    ["rchar", ActorSimon],
    ["char", ActorBill],
    ["bg", bgBoardroom],

    "Thanks for coming. I wanted to talk to you about your performance this week.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Plug it in"],
    //[PLUG IT IN]
    "On your first day, you tried to plug in a loose USB. Simon tells me you were seconds away from installing a backdoor for the attackers.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Give the USB to reception"],
    //[GIVE USB TO RECEPTION]
    "On your first day, you gave a loose USB into reception. That would have been alright had Rebecca not plugged it in herself.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Report the USB to Simon"],
    //[REPORT USB TO SIMON]  
    "On your first day, you reported a loose USB to Simon. He was able to successfully detect a viable threat thanks to your response. ",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Click the link in incognito"],
    //[CLICK LINK IN INCOGNITO] 
    "When Oscar got that phishing email, you told him to open it in Incognito, then he gave his login info to a mock website ran by the hackers.",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Delete Email"],
    //[DELETE EMAIL]
    "When Oscar got that phishing email, you told him to delete it. That was a safe decision. ",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Verify link authenticity"],
    //[VERIFY LINK AUTHENTICITY] 
    "When Oscar got that phishing email, you noticed the fake website. Thanks to that, we were able to block that domain from our network.",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Immediately disconnect infected device"],
    //[IMMEDIATELY DISCONNECT DEVICES]
    "On the first sign of a cyber-attack, your first move was to disconnect all devices from the network. Your decision cost us significant data loss, since we didn't have a recent backup.",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Access Threat"],
    //[ASSESS THREAT]
    "On the first sign of a cyber-attack, your first move was to assess the threat. This careful thinking allowed us to prepare a proper response. ",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Implement Strict Link Filter"],
    //[IMPLEMENT STRICT LINK FILTER] 
    "On the first sign of a cyber-attack, your first move was to implement a link filter. It's like closing the door after the horse has bolted.",

    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Manually Verify Access"],
    //[MANUALLY VERIFY ACCESS]
    "When keycard access was removed, you had Rebecca verify employee access to the office. This helped prevent an unknown bad actor from accessing the premises.",

    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Guest Passes"],
    //[GUEST PASSES] 
    "When keycard access was removed, you had Rebecca distribute guest passes to the staff. I don't know how it happened, but a bad actor was able to access the server room with a guest pass. ",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Inform Stakeholders"],
    //[INFORM STAKEHOLDERS] 
    "After the ransomware demand was made, you chose to inform the stakeholders immediately. This transparency helped establish a proper response to the attack.",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Cover Up Attack"],
    //[COVER UP ATTACK] 
    "(if you're reading this ingame, something went wrong! the game should end on thursday if the player chose to cover up the attack!)",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Pay Ransom"],
    //[PAY RANSOM] 
    "After the ransomware demand was made, Oscar convinced you to pay the ransom. I'm glad Oscar offered to pay for it himself, but this was a really unprofessional move.",

    [ActionTypes.check, () => wednesday_script_answers.decision2 === "Yes"],
    //[REBOOT COMPUTERS/YES]
    "You reconnected the computers to the network after I asked you, which led to more employee data being held for ransom. You should have had the expertise to say no.",

    [ActionTypes.check, () => wednesday_script_answers.decision2 === "No"],
    //[REFUSE TO REBOOT COMPUTERS/NO] 
    "You refused to reconnect the computers to the network after I asked you. Thank you for correcting me, we could have lost even more data if I had my way.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Response"],
    //[FOCUS ON RESPONSE] 
    "The public's response to our press release focusing on our response to the attack was received well. They saw us as doing everything we could to protect our employees.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Consequences"],
    //[FOCUS ON CONSEQUENCES] 
    "The public's response to our press release focusing on the consequences of the attack was received poorly. They saw us as incompetent for allowing this to happen.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "No Accountability"],
    //[NO ACCOUNTABILITY] 
    "The public's response to our press release refusing to take accountability was received terribly. Some employees have started legal action against us.",

    [ActionTypes.check, () => thursday_script_answers.decision2 === "Invest in cybersecurity training material"],
    //[INVEST IN CYBERSECURITY TRAINING MATERIAL] 
    "To prevent further attacks, you recommended we invest in better cybersecurity training material to keep everyone aware. To think all of this could have been prevented if we saw the value of this before the attack.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Change everyone's password"],
    //[CHANGE EVERYONE’S PASSWORD]
    "To prevent further attacks, you recommended we change everyone's password... Was this a joke?",

    // Count up the score here using acitontypes.score --- Creating an obkject with all the answers, passing to actiontypes.score which I will add to switch statement in text engine.
    [ActionTypes.score, {...monday_script_answers, ...tuesday_script_answers, ...wednesday_script_answers, ...thursday_script_answers}]

    //WIN STATE
    [ActionTypes.check, ()=> score >= 5],
    "This was a difficult first week for you, I'm sure. You had to make some difficult decisions, but we came out on top in the end. We'd be happy to keep you on to help prevent any further attacks. Now get back to work ",
    [ActionTypes.endgame, "Well Done: You have passed the cybersecurity training course, you got a score of "],

    //FAIL STATE
    [ActionTypes.check, ()=> score <5],
    "The decisions you've made over the past week have tanked Chronosoft's reputation. Now we have to bring in an external cybersecurity company to clean things up and save face. Thankfully, you're still on probation. You're fired.",
    [ActionTypes.endgame, "Game Over: You have failed the training material, you got a score of "],
    
  ]

  export default friday_script
import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { monday_script, monday_script_answers } from './monday_script'
import { tuesday_script, tuesday_script_answers } from './tuesday_script'
import { wednesday_script, wednesday_script_answers } from './wednesday_script'
import { thursday_script, thursday_script_answers } from './thursday_script'


import bgReception from '../../public/backgrounds/reception.png'
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

  export const friday_script: SceneScript = [
    [ActionTypes.bg, undefined],
    [ActionTypes.name, undefined],
    ". . .",

    ["bg", bgPlayerDesk],
    "You show up to work and sit at your desk. ",//NARRATOR

    ["char", ActorSimon],
    [ActionTypes.name, ActorSimon],
    "Hey, Bill wants a word with you. You should head over to the boardroom.",

    // FADE TO BOARDROOM

    [ActionTypes.rchar, ActorSimon],
    [ActionTypes.char, ActorBill],
    ["bg", bgBoardroom],
    [ActionTypes.name, ActorBill],
    "Thanks for coming. I wanted to talk to you about your performance this week.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Plug it in"],
    //[PLUG IT IN]
    [ActionTypes.score, -1],
    "On your first day, you tried to plug in a loose USB. Simon tells me you were seconds away from installing a backdoor for the attackers.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Give the USB to reception"],
    //[GIVE USB TO RECEPTION]
    [ActionTypes.score, -1],
    "On your first day, you gave a loose USB into reception. That would have been alright had Rebecca not plugged it in herself.",

    [ActionTypes.check, () => monday_script_answers.decision1 === "Report the USB to Simon"],
    //[REPORT USB TO SIMON]
    [ActionTypes.score, 1],
    "On your first day, you reported a loose USB to Simon. He was able to successfully detect a viable threat thanks to your response. ",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Click the link in incognito"],
    //[CLICK LINK IN INCOGNITO]
    [ActionTypes.score, -2],
    "When Oscar got that phishing email, you told him to open it in Incognito, then he gave his login info to a mock website ran by the hackers.",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Delete Email"],
    //[DELETE EMAIL]
    [ActionTypes.score, 1],
    "When Oscar got that phishing email, you told him to delete it. That was a safe decision. ",

    [ActionTypes.check, () => monday_script_answers.decision2 === "Verify link authenticity"],
    //[VERIFY LINK AUTHENTICITY]
    [ActionTypes.score, 2],
    "When Oscar got that phishing email, you noticed the fake website. Thanks to that, we were able to block that domain from our network.",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Immediately disconnect infected device"],
    //[IMMEDIATELY DISCONNECT DEVICES]
    [ActionTypes.score, -1],
    "On the first sign of a cyber-attack, your first move was to disconnect all devices from the network. Your decision cost us significant data loss, since we didn't have a recent backup.",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Assess threat"],
    //[ASSESS THREAT]
    [ActionTypes.score, 1],
    "On the first sign of a cyber-attack, your first move was to assess the threat. This careful thinking allowed us to prepare a proper response. ",

    [ActionTypes.check, () => tuesday_script_answers.decision1 === "Implement strict link filter"],
    //[IMPLEMENT STRICT LINK FILTER]
    [ActionTypes.score, -1],
    "On the first sign of a cyber-attack, your first move was to implement a link filter. It's like closing the door after the horse has bolted.",

    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Manually verify access"],
    //[MANUALLY VERIFY ACCESS]
    [ActionTypes.score, 2],
    "When keycard access was removed, you had Rebecca verify employee access to the office. This helped prevent an unknown bad actor from accessing the premises.",

    [ActionTypes.check, () => tuesday_script_answers.decision2 === "Guest passes"],
    //[GUEST PASSES]
    [ActionTypes.score, -1],
    "When keycard access was removed, you had Rebecca distribute guest passes to the staff. I don't know how it happened, but a bad actor was able to access the server room with a guest pass. ",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Inform stakeholders"],
    //[INFORM STAKEHOLDERS]
    [ActionTypes.score, 2],
    "After the ransomware demand was made, you chose to inform the stakeholders immediately. This transparency helped establish a proper response to the attack.",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Cover up attack"],
    //[COVER UP ATTACK] 
    "(if you're reading this ingame, something went wrong! the game should end on thursday if the player chose to cover up the attack!)",

    [ActionTypes.check, () => wednesday_script_answers.decision1 === "Pay ransom"],
    //[PAY RANSOM]
    [ActionTypes.score, -2],
    "After the ransomware demand was made, Oscar convinced you to pay the ransom. I'm glad Oscar offered to pay for it himself, but this was a really unprofessional move.",

    [ActionTypes.check, () => wednesday_script_answers.decision2 === "Yes"],
    //[REBOOT COMPUTERS/YES]
    [ActionTypes.score, -1],
    "You reconnected the computers to the network after I asked you, which led to more employee data being held for ransom. You should have had the expertise to say no.",

    [ActionTypes.check, () => wednesday_script_answers.decision2 === "No"],
    //[REFUSE TO REBOOT COMPUTERS/NO]
    [ActionTypes.score, 1],
    "You refused to reconnect the computers to the network after I asked you. Thank you for correcting me, we could have lost even more data if I had my way.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Response"],
    //[FOCUS ON RESPONSE]
    [ActionTypes.score, 1],
    "The public's response to our press release focusing on our response to the attack was received well. They saw us as doing everything we could to protect our employees.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Focus On Consequences"],
    //[FOCUS ON CONSEQUENCES]
    [ActionTypes.score, -1],
    "The public's response to our press release focusing on the consequences of the attack was received poorly. They saw us as incompetent for allowing this to happen.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "No Accountability"],
    //[NO ACCOUNTABILITY]
    [ActionTypes.score, -2],
    "The public's response to our press release refusing to take accountability was received terribly. Some employees have started legal action against us.",

    [ActionTypes.check, () => thursday_script_answers.decision2 === "Invest in cybersecurity training material"],
    //[INVEST IN CYBERSECURITY TRAINING MATERIAL]
    [ActionTypes.score, 2],
    "To prevent further attacks, you recommended we invest in better cybersecurity training material to keep everyone aware. To think all of this could have been prevented if we saw the value of this before the attack.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === "Change everyone's password"],
    //[CHANGE EVERYONE’S PASSWORD]
    [ActionTypes.score, -1],
    "To prevent further attacks, you recommended we change everyone's password... Was this a joke?",

    [ActionTypes.rcheck],

    //[ActionTypes.check, () => ActionTypes.score >= 5],
    //WIN STATE
    "This was a difficult first week for you, I'm sure. You had to make some difficult decisions, but we came out on top in the end. We'd be happy to keep you on to help prevent any further attacks.",
    "Now get back to work.",
    [ActionTypes.endgame, "Game over, you won!"],


    //FAIL STATE
    "The decisions you've made over the past week have tanked Chronosoft's reputation. Now we have to bring in an external cybersecurity company to clean things up and save face. Thankfully, you're still on probation. You're fired.",
    [ActionTypes.endgame, "Game over, you lost!"],
    [ActionTypes.rcheck],
    
  ]

  export default friday_script
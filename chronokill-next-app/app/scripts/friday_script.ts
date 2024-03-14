import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'

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

  const ActorBill: SceneCharacter = {
    name: "Rebecca",
    color: "#ff0000",
    image: imgBill,
    styles: []
  }

  export const friday_script: SceneScript = [
    ". . .",

    ["bg", bgPlayerDesk],
    ["char", ActorSimon],
  
    "You show up to work and sit at your desk. ",//NARRATOR

    "Hey, Bill wants a word with you. You should head over to the boardroom.",

    // FADE TO BOARDROOM

    ["rchar", ActorSimon],
    ["char", ActorBill],
    ["bg", bgReception],//needs changed to board room

    "Thanks for coming. I wanted to talk to you about your performance this week.",

    //[PLUG IT IN]
    "On your first day, you tried to plug in a loose USB. Simon tells me you were seconds away from installing a backdoor for the attackers.",

    //[GIVE USB TO RECEPTION]
    "On your first day, you gave a loose USB into reception. That would have been alright had Rebecca not plugged it in herself.",

    //[REPORT USB TO SIMON]  
    "On your first day, you reported a loose USB to Simon. He was able to successfully detect a viable threat thanks to your response. ",

    //[CLICK LINK IN INCOGNITO] 
    "When Oscar got that phishing email, you told him to open it in Incognito, then he gave his login info to a mock website ran by the hackers.",

    //[DELETE EMAIL]
    "When Oscar got that phishing email, you told him to delete it. That was a safe decision. ",

    //[VERIFY LINK AUTHENTICITY] 
    "When Oscar got that phishing email, you noticed the fake website. Thanks to that, we were able to block that domain from our network.",

    //[IMMEDIATELY DISCONNECT DEVICES]
    "On the first sign of a cyber-attack, your first move was to disconnect all devices from the network. Your decision cost us significant data loss, since we didn't have a recent backup.",

    //[ASSESS THREAT]
    "On the first sign of a cyber-attack, your first move was to assess the threat. This careful thinking allowed us to prepare a proper response. ",

    //[IMPLEMENT STRICT LINK FILTER] 
    "On the first sign of a cyber-attack, your first move was to implement a link filter. It's like closing the door after the horse has bolted.",

    //[MANUALLY VERIFY ACCESS
    "When keycard access was removed, you had Rebecca verify employee access to the office. This helped prevent an unknown bad actor from accessing the premises.",

    //[GUEST PASSES] 
    "When keycard access was removed, you had Rebecca distribute guest passes to the staff. I don't know how it happened, but a bad actor was able to access the server room with a guest pass. ",

    //[INFORM STAKEHOLDERS] 
    "After the ransomware demand was made, you chose to inform the stakeholders immediately. This transparency helped establish a proper response to the attack.",

    //[COVER UP ATTACK] 
    "(this is an instafail option! the game should end on thursday if the player chose this!)",

    //[PAY RANSOM] 
    "After the ransomware demand was made, Oscar convinced you to pay the ransom. I'm glad Oscar offered to pay for it himself, but this was a really unprofessional move.",

    //[REBOOT COMPUTERS]
    "You reconnected the computers to the network after I asked you, which led to more employee data being held for ransom. You should have had the expertise to say no.",

    //[REFUSE TO REBOOT COMPUTERS] 
    "You refused to reconnect the computers to the network after I asked you. Thank you for correcting me, we could have lost even more data if I had my way.",

    //[FOCUS ON RESPONSE] 
    "The public's response to our press release focusing on our response to the attack was received well. They saw us as doing everything we could to protect our employees.",

    //[FOCUS ON CONSEQUENCES] 
    "The public's response to our press release focusing on the consequences of the attack was received poorly. They saw us as incompetent for allowing this to happen.",

    //[NO ACCOUNTABILITY] 
    "The public's response to our press release refusing to take accountability was received terribly. Some employees have started legal action against us.",

    //[INVEST IN CYBERSECURITY TRAINING MATERIAL] 
    "To prevent further attacks, you recommended we invest in better cybersecurity training material to keep everyone aware. To think all of this could have been prevented if we saw the value of this before the attack.",

    //[CHANGE EVERYONE’S PASSWORD]
    "To prevent further attacks, you recommended we change everyone's password... Was this a joke?",

    //WIN STATE
    "This was a difficult first week for you, I'm sure. You had to make some difficult decisions, but we came out on top in the end. We'd be happy to keep you on to help prevent any further attacks. Now get back to work ",

    //FAIL STATE
    "The decisions you've made over the past week have tanked Chronosoft's reputation. Now we have to bring in an external cybersecurity company to clean things up and save face. Thankfully, you're still on probation. You're fired.",

  ]

  export default friday_script
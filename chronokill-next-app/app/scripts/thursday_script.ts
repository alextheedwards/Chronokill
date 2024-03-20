import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { friday_script} from './friday_script'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgBossOffice from '../../public/backgrounds/bossOffice.jpg'
import bgBoardroom from '../../public/backgrounds/boardroom.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'
import imgRebecca from '../../public/actors/rebecca.png'
import imgOscar from '../../public/actors/oscar.png'
  
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

  const ActorOscar: SceneCharacter = {
    name: "Oscar",
    color: "#ff0000",
    image: imgOscar,
    styles: ["centre-right"]
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
    "Focus On Responce",//+
    "Focus On Consequences",//-
    "No Accountability",//-
  ]
  
  const decision2: string[] = [
    "Invest in cybersecurity training material",//++
    "Change everyone's password",//-
  ]

  export const thursday_script_answers: any = {
    decision1: undefined,
    decision2: undefined
  }

  export const thursday_script: SceneScript = [
  ". . .",
  
    [ActionTypes.bg, bgReception],
    [ActionTypes.char, ActorSimon],

    "On arrival, Simon sits expecting you.", //NARRATOR
    "Well, it took me until 4am, but the attack has been completely neutralised. The work's not all done yet. Still. Come on into the boardroom, we have some stuff to run by you.",

    [ActionTypes.bg, bgBoardroom], 
    [ActionTypes.char, ActorSimonMirror],
    [ActionTypes.char, ActorBill],

    "We're creating a press release for the attack but can't decide between these three options.",
    "“Focus on response” would emphasise all we've done to respond to the attack. It would admit to the damages and promise more preventative measures but wouldn't detail the consequences.", 
    "“Focus on consequences” would be more honest, mentioning the types of information leaked. The public could take it either way, but it could lead to more people taking this kind of thing seriously.",
    "“No accountability” is a real gamble. If we pull it off, it will do the least damage to Chronosoft's reputation, but it could easily backfire on us. Which press release should we use?", //options for press release,
    [ActionTypes.qa, "decision1", decision1],

    [ActionTypes.check, () => thursday_script_answers.decision1 === decision1[0]], //focus on response

    "You decide that Chronosoft should focus on its response to the attack.", //NARRATOR
    "Definitely the safest option.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === decision1[1]], //focus on consequences

    "You decide that Chronosoft should focus on the consequences of the attack.", //NARRATOR
    "It's honest, but it doesn't paint the company in a very good light.",
    "If it ever gets out how unprepared we were for this, the response would be even worse. Let's go with this one.",

    [ActionTypes.check, () => thursday_script_answers.decision1 === decision1[2]], //focus on accountability

    "You decide that Chronosoft should take no accountability.", //NARRATOR
    "Uh... Are you sure?",
    "I agree, actually. If we can come out of this unscathed, the company would be much better off.",

    [ActionTypes.rcheck],
    
    [ActionTypes.bg, bgPlayerDesk],
    [ActionTypes.char, ActorSimon],

    "This has been expensive, and we're even more vulnerable to cyber-attacks now. We need some preventative measures, but the budget is limited, and we can only afford to implement one right now. What should it be? ",
    [ActionTypes.qa, "decision2", decision2],

    [ActionTypes.check, () => thursday_script_answers.decision2 === decision2[0]],

    "You suggest that improved awareness of cybersecurity could have prevented the attack.", //NARRATOR
    "You're right, our current cybersecurity course isn't good enough. I'll get to work on that.",

    [ActionTypes.check, () => thursday_script_answers.decision2 === decision2[1]],

    "You suggest that everyone should change their password.", //NARRATOR
    "I already sent that to everyone a few days ago.",

    [ActionTypes.rcheck],

    "Well, that might just be the end of it. Hopefully tomorrow we'll hear more about how everything went. See you then.",

    [ActionTypes.script, friday_script]
  ]

  export default thursday_script
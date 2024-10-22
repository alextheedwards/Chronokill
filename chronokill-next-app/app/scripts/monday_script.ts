import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { tuesday_script, tuesday_script_answers } from './tuesday_script'

import bgReception from '../../public/backgrounds/reception.png'
import bgPlayerDesk from '../../public/backgrounds/officeDesk1.png'
import bgServerRoom from '../../public/backgrounds/serverRoom.png'
import bgLunchRoom from '../../public/backgrounds/lunchRoom.png'
import bgOscarDesk from '../../public/backgrounds/officeDesk2.png'

import imgBill from '../../public/actors/bill.png'
import imgSimon from '../../public/actors/simon.png'
import imgRebecca from '../../public/actors/rebecca.png'
import imgOscar from '../../public/actors/oscar.png'

// character declarations
const ActorBill: SceneCharacter = {
  name: "Bill",
  color: "#ff0000",
  image: imgBill,
  styles: ["centre-left"]
}

const ActorSimon: SceneCharacter = {
  name: "Simon",
  color: "#ff0000",
  image: imgSimon,
  styles: ["centre-right"]
}

const ActorRebecca: SceneCharacter = {
  name: "Rebecca",
  color: "#ff0000",
  image: imgRebecca,
  styles: ["centre-right"]
}

const ActorOscar: SceneCharacter = {
  name: "Oscar",
  color: "#ff0000",
  image: imgOscar,
  styles: ["centre-right"]
}

// decision declarations
const decision1: string[] = [
  "Plug it in",
  "Give the USB to reception",
  "Report the USB to Simon"
]

const decision2: string[] = [
  "Click the link in incognito",
  "Delete Email",
  "Verify link authenticity"
]

export const monday_script_answers: any = {
  decision1: undefined,
  decision2: undefined,
  score: 0
}

export const monday_script: SceneScript = [
  ". . .",

  [ActionTypes.bg, bgReception],
  [ActionTypes.amb, "office-ambience-24734.mp3"],
  [ActionTypes.char, ActorRebecca],

  "You walk up to the receptionist and introduce yourself as a new Cyber Security intern.",

  [ActionTypes.name, ActorRebecca],
  "Ah, good morning <PlayerName>. We've been expecting you. Just take a seat, the boss will be here any minute.",

  [ActionTypes.name, undefined],
  "A few minutes later…",

  [ActionTypes.char, ActorBill],
  [ActionTypes.name, ActorBill],
  "Hey there! Welcome to Cronosoft! My name's Bill, I own the place. Nice to meet you, <PlayerName>. We're glad to have you on our team. Let me take you to your desk.",

  [ActionTypes.rchar, ActorRebecca],
  [ActionTypes.bg, bgPlayerDesk],

  "So here's where the magic happens. This is Simon, he's the senior cyber specialist. I'll leave it to him to explain what your role is.",

  [ActionTypes.rchar, ActorBill],
  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "Hey, how're you doing? I'm glad they finally hired another consultant; things have been difficult these past few months. We haven't had a proper attack in a while, but the staff just won't listen to the training materials. The last phishing test alone had a failure rate of 20%. We need you to help encourage better practices here.",
  "First things first though, let me show you around.",

  [ActionTypes.ramb],
  [ActionTypes.bg, undefined],
  [ActionTypes.name, undefined],
  ". . .",

  [ActionTypes.bg, bgServerRoom],
  [ActionTypes.amb, "computer_fan_2.wav"],
  [ActionTypes.name, ActorSimon],
  "So this is our server room, the heart of it all. We store a lot of sensitive data on here, so access is restricted to us. After an earlier restructure, managing employee access to stuff like this is our responsibility, so look forward to that.",
  [ActionTypes.ramb],

  [ActionTypes.bg, bgReception],
  [ActionTypes.amb, "office-ambience-24734.mp3"],

  "Here's reception.  Rebecca here organises all sorts of things.",

  [ActionTypes.echar, ActorRebecca, ["centre-left","mirror"]],
  [ActionTypes.char, ActorRebecca],
  [ActionTypes.name, ActorRebecca],
  "Oh, we've already met! How are you settling in? It's all a bit overwhelming on the first day I'm sure, but you'll get the hang of it before you know it.",

  [ActionTypes.rchar, ActorRebecca],
  [ActionTypes.bg, bgLunchRoom],
  [ActionTypes.name, ActorSimon],
  "The best part of the office. Let's sit down here, there's some stuff I need to fill you in on.",
  "So, the business started focusing on cybersecurity awareness recently after an attack a few months ago - some emails were leaked after an employee used a weak password. All things considered, it wasn't that bad, but it really shook the executives up, which led them to hire you.",

  [ActionTypes.bg, undefined],
  [ActionTypes.ramb],
  [ActionTypes.name, undefined],
  ". . .",

  [ActionTypes.bg, bgLunchRoom],
  [ActionTypes.amb, "office-ambience-24734.mp3"],
  [ActionTypes.name, ActorSimon],
  "…And that's lunch. I'll let you get talking to the others, we'll meet back in an hour.",

  [ActionTypes.rchar, ActorSimon],
  [ActionTypes.name, undefined],
  "You take out your lunch and sit down. An employee approaches you.", //NARRATOR VOICE

  [ActionTypes.char, ActorOscar],
  [ActionTypes.name, ActorOscar],
  "You're the new cyber intern, right? <PlayerName>? Good to meet you. I already see plenty of Simon, so I'm sure we'll be working together pretty often.",

  [ActionTypes.rchar, ActorOscar],
  [ActionTypes.name, undefined],
  "Lunch passes…",

  [ActionTypes.bg, bgPlayerDesk],

  "You see a USB stick on the ground next to someone's desk. They haven't noticed it.",

  [ActionTypes.qa, "decision1", decision1],
  [ActionTypes.check, () => monday_script_answers.decision1 === decision1[0]], //plug it in

  "You reach for the USB stick and move to plug it in before Simon stops you.",

  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "Woah, careful! You don't know what's on that. For all we know, there could be malware on there! Give it here, I'll analyse it first.",

  [ActionTypes.name, undefined],
  "Simon boots up a laptop and opens a virtual machine. After inserting the USB, he then runs a scan using Anti-Virus software.", //NARRATOR

  [ActionTypes.name, ActorSimon],
  "It looks like there's some JavaScript embedded in this PDF that installs a backdoor. This looks like a credible threat. We need to be on guard for any other attempts to breach our defences.",

  [ActionTypes.rchar, ActorSimon],
  [ActionTypes.check, () => monday_script_answers.decision1 === decision1[1]], //give to reception

  [ActionTypes.name, undefined],
  "You reach for the USB stick. You can't tell who it belongs to, so you decide to give it in to reception.",

  [ActionTypes.bg, bgReception],
  [ActionTypes.char, ActorRebecca],
  [ActionTypes.name, ActorRebecca],
  "I haven't seen this one before, there's so many of these lying about. Maybe looking at the files will help us figure out who it belongs to.",

  [ActionTypes.name, undefined],
  "Rebecca plugs the USB into her computer. You notice a couple command prompt windows open and immediately close. The USB contains one file, README.pdf. Rebecca opens it.", //NARRATOR

  [ActionTypes.name, ActorRebecca],
  "That's weird, the file is blank. I'll keep the stick here in case anyone comes looking for it.",

  [ActionTypes.rchar, ActorRebecca],
  [ActionTypes.check, () => monday_script_answers.decision1 === decision1[2]], //report to simon
  [ActionTypes.bg, bgPlayerDesk],

  "You pick up the USB stick. Remembering the risk of malicious files, you ask Simon to inspect it.",

  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "Hey, nicely spotted! This could very easily be a backdoor to a whole new cyberattack. I'll make sure to analyse the files in a controlled environment.",

  [ActionTypes.name, undefined],
  "Simon boots up a laptop and opens a virtual machine. After inserting the USB, he then runs a scan using Anti-Virus software.", //NARRATOR

  [ActionTypes.name, ActorSimon],
  "It looks like there's some JavaScript embedded in this PDF that installs a backdoor. This looks like a credible threat. We need to be on guard for any other attempts to breach our defences.",

  [ActionTypes.rchar, ActorSimon],
  [ActionTypes.rcheck],

  [ActionTypes.bg, undefined],
  [ActionTypes.ramb],
  [ActionTypes.name, undefined],
  "Later...",

  [ActionTypes.bg, bgPlayerDesk],
  [ActionTypes.amb, "office-ambience-24734.mp3"],
  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "…So that's the firewall policy as we have it now, but I was thinking to update it with a-",

  [ActionTypes.name, undefined],
  [ActionTypes.sfx, "notification.wav"],
  "You get a notification from Oscar about a suspicious email. You and Simon walk around to their desk.",

  [ActionTypes.bg, bgOscarDesk],
  [ActionTypes.echar, ActorOscar, ["left"]],
  [ActionTypes.char, ActorOscar],
  [ActionTypes.name, ActorOscar],
  "Hey, I got this weird looking email. It says it's from HR, but there's an external message warning. It sounds urgent. What should I do about it?",

  [ActionTypes.qa, "decision2", decision2],
  [ActionTypes.check, () => monday_script_answers.decision2 === decision2[0]], //click in incognito
  [ActionTypes.name, undefined],
  "You recommend to use incognito mode whenever a link is potentially dangerous.", //NARRATOR
  "Oscar opens the link in Incognito. The Chronosoft login page appears.", //NARRATOR

  [ActionTypes.name, ActorOscar],
  "Oh, right. I'm not logged in on Incognito. Let me put my details in.", //OSCAR

  [ActionTypes.name, undefined],
  "Oscar inputs their login details and Two-Factor Authentication code. The page rejects the details and refreshes.", //NARRATOR

  [ActionTypes.name, ActorOscar],
  "Strange, I thought I put it in correctly. Let me try again.", //OSCAR

  [ActionTypes.name, undefined],
  "Oscar inputs details again, logging in successfully. There is no sign of any urgent message.", //NARRATOR

  [ActionTypes.name, ActorOscar],
  "Huh. Maybe they meant to send it to someone else?", //OSCAR
  [ActionTypes.rchar, ActorOscar],
  [ActionTypes.check, () => monday_script_answers.decision2 === decision2[1]], //delete email

  "You mention that if it says it's from an external source, it can't actually be from HR, and that Oscar would be better off deleting it; worst case, they send another email.", //NARRATOR
  [ActionTypes.rchar, ActorOscar],
  [ActionTypes.check, () => monday_script_answers.decision2 === decision2[2]], //verify link authenticity

  [ActionTypes.name, undefined],
  "You copy the embedded URL and examine its structure. On close inspection, you notice Chronosoft is spelled “Chromosoft”. Opening the link in a Virtual Machine, the website looks identical to Chronosoft's login page.", //NARRATOR
  "You mention that a website trying to imitate the company's is a dead giveaway for a phishing attempt. You make sure to block this domain, but more could appear at any time.",
  [ActionTypes.rchar, ActorOscar],

  [ActionTypes.rcheck],
  [ActionTypes.char, ActorSimon],
  [ActionTypes.name, ActorSimon],
  "There you go, your first day and you've already seen two attempts to breach our network.",
  "We could have more to deal with tomorrow, but that's us for today. Have a nice evening, we'll regroup tomorrow morning.",

  [ActionTypes.ramb],

  [ActionTypes.script, tuesday_script, tuesday_script_answers]
]

export default monday_script
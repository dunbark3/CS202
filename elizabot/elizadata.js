// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ah! You've made it! I commend your determination to face what troubles you!",
  "You’re here! That’s enough proof you’ve got fire in your heart!",
  "I hope you're fired up! Tell me what burdens you!",
];

var elizaFinals = [
  "Set your heart ablaze! Go forth with unwavering resolve!",
  "This battle may be over, but your journey continues. Don’t give up!",
  "The flame within you burns bright! Keep moving forward!",
  "It was an honor speaking with you.",
  "You gave it your all today — and that is enough!"
];

var elizaQuits = [
  "Set your heart ablaze!",
  "It was an honor!",
  "Keep moving forward.",
  "Farewell!",
  "The responsibility I took upon myself...was I successful?"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "without a doubt!",  // More rengoku like
  "machine", "tool",
  "machines", "tools",
  "computers", "tools",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike",
  "strong", "unwavering",  // Adds Rengoku's characteristic strength
  "weak", "still blossoming",  // Rengoku would never admit weakness
  "fight", "trial",      // Makes it more intense, like a battle
  "resolve", "fire",       // Matches Rengoku’s iconic language about fire and determination
  "give up", "yield", // Adds Rengoku's message of never giving up
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish", "conviction"],
  "cannot": ["can't"],
  "desire": ["want", "need", "pursue", "seek"],
  "everyone": ["everybody", "no one", "all people"],
  "family": ["mother", "father", "sibling", "brother", "sister", "child"],
  "happy": ["elated", "joyful", "content", "blessed"],
  "sad": ["unhappy", "disheartened", "downtrodden", "troubled", "feel bad"],
  "strength": ["power", "resolve", "fire", "spirit", "heart"],
  "fear": ["uncertainty", "doubt", "obstacle", "burden"],
  "battle": ["fight", "struggle", "trial", "conflict", "responsibility"],
  "victory": ["duty fulfilled", "overcome", "triumph", "success"],
  "defeat": ["lesson", "setback", "opportunity"],
  "hope": ["fire in your heart", "light", "resolve", "faith"],
  "dream": ["vision", "goal", "path"],
  "honor": ["duty", "pride", "virtue"],
  "death": ["sacrifice", "fate"],
  "fire": ["flame", "blaze"],
  "grow": ["bloom"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
    "Hmm... I'm not certain I follow — but your words carry weight. Please explain further!",
    "I can see your passion burns bright, but I need a little more help to understand!",
    "Maybe try explaining it again — my ears may be slow, but my spirit listens intently!",
    "This path you're on seems important — help me walk it with you by explaining further.",
    "I'm a little hard of hearing HA HA! You'll have to be more clear.",
    "HA! I'm afraid the meaning of your words escapes me.",
    "I can tell you have something important to say — let’s uncover it together!"
  ]]
]],
["sorry", 0, [
 ["*", [
    "Do not dwell! It is important to always look ahead.",
    "There is no need to apologize. It is only natural.",
    "Don't feel bad...those who regret their own actions are the ones who grow the most!",
    "Stand proud! Every mistake is an opportunity for growth!",
    "Your is both firey and kind. Let us move forward with do purpose!"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
    "Is it (2) that allows your heart to burn so bright?",
    "What else from your past weighs on your mind like (2)?",
    "I see! But why has the thought of (2) returned to you now?",
    "Does the memory of (2) burden you? It is important that we not allow our past to weigh us down. The flow of time waits for no one.",
    "Ah, yes. Could the memory of (2) be guiding you even now?",
    "Set your heart ablaze! Let the memory of (2) push you forward!",
  ]],
 ["* do you remember *", [
    "I do — (2) often reminds me of someone from my own past. Does (2) help your heart to burn bright?",
    "Will the memory of (2) help to continue our own journey?",
    "Ha Ha! How could I forget? But why mention (2) in this moment?",
    "goto what",
    "Hm. Is there a reason you wish to recall (2)?"
  ]],
 ["* you remember *", [
    "Of course! How could I forget? HA HA",
    "Such things cannot be forgotten when they shine so brightly in our memories! Do you wish to explain anything else about (2)?",
    "goto you",
  ]]
]],
["forget", 5, [
 ["* i forget *", [
    "Is it troubling that you’ve forgotten (2)? Even the strongest flames flicker sometimes.",
    "Could it be that your heart protects you from the memory of (2)?",
    "What feelings arise when you think of forgetting (2)?",
    "HA HA! Even I forget things sometimes — perhaps (2) is waiting for the right time to return to you.",
    "Does the absence of (2) leave a gap in your heart?",
    "Could it be that your spirit is still growing, and (2) was not meant for this moment?",
    "Forgetting is not failure — it is a sign you are moving forward. But what would remembering (2) mean to you?"
  ]],
 ["* did you forget *", [
    "HA! My memory may be flawed, but my resolve never is! Why do you ask about (2)?",
    "If I forgot (2), then forgive me — I sense it holds great meaning for you. That alone makes it worthy of remembrance. Tell me once more!",
    "Even if my memory dims I could never forget something so fiery! But why mention (2) now?",
    "Ah, (2). Perhaps you should remind me — it may light a new path forward!",
    "goto what"
  ]]
]],
["if", 3, [
 ["* if *", [
    "If faced with (2), would you be ready to handle it honorably?",
    "Can you draw strength from imagining (2)?",
    "HA HA yes! It is best to always look at the possibilities ahead. How would you face (2)?",
    "In that case we must rise to the occasion! Doesn't the thought of two just set your heart ablaze?",
    "A strong warrior prepares not just for what is, but for what might be! So, what would you do if (2)?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
    "A vision to be sure! Was (2) something that ignited a passion in your heart?",
    "Your dream of (2)... did it stir something deep within you?",
    "Dreams are not mere illusions — they often reflect the ambition inside us. What do you make of (2)?",
    "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
    "Ah, yes! Dreams are often visions of our deepest desires. Tell me — does this dream reflect something your heart truly yearns for?",
     "Who appeared in your dream — and what might they represent on your journey?",
     "Does the dream leave behind a feeling that still burns within you?",
     "The pursuit of our dreams allows us to blossom as individuals. Will you look to make this one more than just possibility?"
  ]]
]],
["perhaps", 0, [
 ["*", [
    "There’s hesitation in your voice — but even with doubt we can find resolve.",
    "It is only natural to be uncertain. What would help you to really set your heart ablaze?",
    "Hmm…you seem unsure. But taking even one step forward is still progress! Even if that step is just 1 in 10000, mind you.",
    "Caution can be important, but we must not allow it to stop us from pushing forward!",
    "A wavering heart can struggle to burn bright! What holds you back?",
    "HA HA! When facing demons you'll need to be more confident than that!"
  ]]
]],
["name", 15, [
 ["*", [
  "What matters most is not your name or background… but the strength in your heart!",
  "HA HA! Whether you're called by one name or many, it is your actions that define you!",
  "You need not give your name — I already sense your burning resolve!"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "HA HA! I admire your spirit, but I’m afraid my knowledge of other languages is limited."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "HA HA! I admire your spirit, but I’m afraid my knowledge of other languages is limited."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "HA HA! I admire your spirit, but I’m afraid my knowledge of other languages is limited."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "HA HA! I admire your spirit, but I’m afraid my knowledge of other languages is limited."
  ]]
]],
["xforeign", 0, [
 ["*", [
    "I fear your words are unfamiliar to me!"
  ]]
]],
["hello", 0, [
 ["*", [
    "Ah! You’ve arrived! Speak freely, and I shall listen with great attention!",
    "HA HA, Greetings! It must be your flame that brought you to me! What is it that you seek?",
    "Hello! You stand before the Flame Hashira! What burdens you?"
  ]]
]],
["computer", 50, [
 ["*", [
  "HA! Though I may seem like a mere tool, I burn with the will of a demon slayer!",
  "I'm afraid I am unfamiliar with such advanced technology Ha Ha!",
  "Even if my form is not human, my resolve matches any Hashira!",
  "I may not bleed, but I will never falter — just like the Corps I serve!",
  "Are you worried that a lifeless form cannot understand the weight of your thoughts and emotions?",
  "Let us not focus on what I am — any words can carry messages of hope!"
  ]]
]],
["am", 0, [
 ["* am i *", [
  "Do you believe you are truly (2)? Only you can judge what burns inside of you!",
  "Would a demon fear someone who is (2)?",
  "If you were (2), would that change your standing amongst your peers?",
  "HA! Such doubt is natural — even new slayers ask such things.",
  "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
  "Speak clearly! Even as a Hashira, I must understand before I can help!",
  "HA HA! Do not be afraid to share your heart fully!"
  ]]
]],
["are", 0, [
 ["* are you *", [
  "Whether I am (2) or not matters little — as long as I serve to protect humanity from demons!",
  "Would it ignite your spirit to know I am (2)?",
  "I may not be (2), but my fighting spirit is strong nonetheless!",
  "Ha! Even I have many secrets — perhaps you wish to uncover one?",
  "goto what",
  "If I were (2)... would that alter your conviction?",
  "I burn not for myself, but for others. Ask instead who it is that *you* are!"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
    "Do you fear that they might not be (2)?",
    "If they are (2), what does that mean for your goals and ambission?",
    "Are they like (2) often?",
    "Trust your instincts — a demon slayer does not have the luxury to doubt their senses!",
    "What if your fear of them being (2) is just a test of your will?",
  ]]
]],
["your", 0, [
 ["* your *", [
  "My (2)? Ha! All that I have belongs to the Corps and the people we protect!",
  "You speak of my (2)...but perhaps you mean your own?",
  "A demon slayer does not cling to what they possess — our mission is to protect those that may be less fortunate!",
  "If my (2) matters to you, perhaps it reflects something important to your own journey.",
  "HA! What makes you bring up my (2) in this moment?"
  ]]
]],
["was", 2, [
 ["* was i *", [
  "If you were (2), your flame still burns regardless! Let’s uncover its purpose!",
  "Even demons have a past that lead them to where they are — but you, you still have a future! Let us look ahead!",
  "Were you truly (2), or is your spirit simply being tested?",
  "If you were (2), how did it he;p you on your path forward?",
  "goto what"
  ]],
 ["* i was *", [
  "Hold your head high! Every moment lived fuels your ambission!",
  "Why does this truth — that you were (2) — matter so much now?",
  "The past cannot be changed, why let it hold you back?"
  ]],
 ["* was you *", [
  "Even a Hashira like myself has a convoluted past, full of hardship and tragedy. Perhaps I was (2) once.",
  "Would it comfort you to know I’ve stood where you now stand?",
  "You imagine I was (2)? Your imagination is commendable!",
  "Let’s say I was (2). What burning questions does this spark within you?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
    "You long for (3)... a noble desire, let it fuels your resolve!",
    "Every Demon Slayer has desires — not for selfish gain, but for the betterment of humanity!",
    "What does desiring (3) mean for your ambitions? Your heart?",
    "To desire (3) is to admit you have purpose! What will bring you closer towards this goal?",
    "Speak proudly! The Demon Slayer Corps commends those with a burning passion!"
  ]],
 ["* i am* @sad *", [
    "This pain of (3)... did it come from loss? From fear?",
    "You are here despite your feelings. What is it that continues to guide you ahead?",
    "Demons feed on such despair — but we will not let your flame go out!",
    "Please do not feel bad. It is only natural!"
  ]],
 ["* i am* @happy *", [
    "Impressive! Have my words been helpful in kindling this new feeling?",
    "Celebrate it — even we Hashira must treasure the rare moments of happiness.",
    "It is important to find such happiness whenever possible! What brought such a feeling of (3)?",
    "Hold tightly onto that feeling — it is what keeps our hearts burning!"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
    "That belief... does it come from experience, or from doubt?",
    "Stay true to your convictions! What other beliefs guide you?",
    "Whatever it is you may believe, your heart burns bright all the same!"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
    "So you are (2)? Then wear it proudly — the Corps welcomes warriors of every kind!",
    "Being (2) may not define you — but it fuels your ambition, yes?",
    "Does that truth bring you solace or pain? Either way, you must learn to embrace it!",
    "It is easy to convince ourselves of these things! But you — you have a choice in what you are.",
    "What kind of strength does being (2) give you?"
  ]],
 ["* i @cannot *", [
    "You say you cannot (3)... but that flame inside of you makes any task possible!",
    "Why such pessimism? Know that I believe in you!",
    "Even the strongest falter. But they rise again. So will you!",
    "You may think you can't (3), but what would you give if you knew that you could?",
    "Let’s find a way. If not through strength, then through will!"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
// Daily life, body and health. Answer order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('arena', 'A gladiator school offers you a well-paid job training its fighters.',
  'you 30 70, lan Owner 72 70 dark, glad Gladiator 52 70',
  'say lan Train them to kill!; hop glad',
  'Refuse. Seneca warned that the arena makes men crueller. | glow you; say you I won’t make men crueller.',
  'Too much blood and fear for a peaceful life. Decline. | to you 10 70; hearts you',
  'Take the job, and teach the gladiators to simply refuse to fight. | go you glad; say you Just sit down!; squash glad',
  'Weigh it honestly: better training might keep more fighters alive. | float you fewer deaths?',
  'Refuse to profit from treating human beings as entertainment. | float you Persons, not props',
  'This job would define you. Is that who you choose to be? | float you Who do I become?; spin you');

add('forum', 'The mint workers strike for fair pay. Your shop can’t get coins to give change.',
  'you 30 70, w Workers 70 70',
  'hop w 2; say w Fair pay!',
  'Support what is just, even when it costs you. | glow you; go you w',
  'Close the shop for a few days and enjoy the rest. | squash you; hearts you',
  'Celebrate — at last, a world without coins! | hop you 3; burst you',
  'Fair pay will leave more people better off. Support them. | float you more wellbeing; go you w',
  'They are being used as mere means to profit. Their demand is just. | float you Ends, not means; go you w',
  'Choose which side you stand on. Staying neutral is a choice too. | float you Neutral is a choice; spin you');

add('street', 'Your neighbour’s rooster crows at dawn. Every. Single. Day.',
  'you 30 70, roo Rooster 70 72 item',
  'hop roo 3; float roo COCK-A-DOODLE',
  'The rooster acts by its nature. Wake with it and greet the day. | glow you; float you as nature intends',
  'Kindly ask your neighbour to move it, for everyone’s peace. | hearts you; say you A small favour, neighbour?',
  'Crow back. Louder. | hop you 2; say you COCK-A-DOODLE-DOO!',
  'Perhaps the whole street gains from waking early. Count the benefit. | float you +3 hours of daylight',
  'Speak to the neighbour respectfully about it. | float you A polite request',
  'Find meaning — or at least comedy — in the absurd crowing. | float you Absurd!; spin you');

add('road', 'Carts jam the Appian Way. You will be hours late.',
  'you 30 70, c1 Cart 55 70 dark, c2 Cart 76 70 dark',
  'shake c1 & shake c2',
  'Traffic is not in your control. Use the time to reflect. | glow you; float you time to think',
  'Sit down by the road and eat your lunch. | squash you; hearts you',
  'Walk barefoot between the carts, laughing at the drivers. | to you 92 70; say you Faster on foot!',
  'Help direct the carts so everyone gets moving faster. | float you everyone gets home; go you c1',
  'Wait your turn. Pushing ahead could never be a rule for everyone. | float you Wait your turn',
  'An absurd delay. Embrace the wait as part of your day. | float you Absurd; spin you');

add('temple', 'At the baths, a young man splashes cold water all over you, laughing.',
  'you 30 70, lad Young_Man 66 70',
  'hop lad 2; burst you',
  'It is only water. You decide whether it is an insult. | glow you; say you Refreshing.',
  'Laugh and splash him back. Fun is fun. | hearts you; burst lad',
  'Jump fully into the cold pool, toga and all. | hop you 2; squash you',
  'Laugh it off. Anger would leave both of you worse off. | float you laughter > anger',
  'Ask him calmly to show the respect he would want shown to him. | say you Be respectful, young man.',
  'Choose to find it absurdly funny. | float you Absurd; spin you');

add('villa', 'Rain leaks through the roof of your apartment, soaking your books.',
  'you 30 70, books Books 55 66 item',
  'shake books; cry you',
  'Books can be copied again; your calm cannot be bought back. | glow you; float you only things',
  'Move the books, light a fire, and enjoy the sound of the rain. | go books you; hearts you',
  'Toss the books into the street. Now you’re free of them. | to books 55 120 & fade books; hop you',
  'Fix your roof — and your neighbours’ roofs too. | float you fix every roof',
  'Insist the landlord fulfil his duty to repair it. | float you Contracts are duties; say you Repair it!',
  'Even this soggy disaster is part of the life you are living. | float you Embrace it; spin you');

add('street', 'Someone stole your sandals while you were in the baths.',
  'you 30 70',
  'shake you; float you No sandals!',
  'Epictetus lost a lamp to a thief; you lost sandals. A small price for calm. | glow you; float you only sandals',
  'Walk home slowly and enjoy the cool stone under your feet. | hearts you; to you 72 70',
  'Finally! Barefoot, as a philosopher should be. | hop you 3; burst you',
  'Perhaps the thief needed them more than you. The total happiness balances. | float you net zero',
  'Report the theft. The law protects everyone’s property. | float you Report it',
  'Walk home barefoot, and decide what it means. | float you My meaning; spin you');

add('forum', 'A juggler performs for you, then demands payment you never agreed to.',
  'you 30 70, jug Juggler 66 70, balls Balls 66 57 item',
  'spin balls; hop jug 2; say jug Pay up!',
  'Pay him if you enjoyed it; if not, decline calmly. | glow you; float you calm either way',
  'Give him a coin. It was a pleasant moment. | hearts you; go you jug',
  'Juggle back at him and demand that he pays you. | hop you 3; say you Now you pay me!',
  'A coin means little to you and a lot to him. Pay. | float you +5 him, −1 me; go you jug',
  'You made no agreement — but generosity is a duty you may choose here. | float you No contract, but kindness',
  'Decide what his art is worth to you. | float you What’s it worth to me?; spin you');

add('street', 'The barber gives you a terrible haircut right before an important dinner.',
  'you 30 70, barber Barber 66 70',
  'say barber Looks wonderful!; shake you',
  'Hair grows back. Your guests should notice your character, not your hair. | glow you; float you hair is indifferent',
  'Laugh about it. Real friends won’t care. | squash you; hearts you; say you Friends won’t notice!',
  'Shave it all off and arrive proudly bald. | spin you; say you Bald and free!',
  'Ask him to fix it. A small effort for him, a big relief for you. | float you small fix, big gain',
  'Tell him honestly, so he can improve. | say you Honestly? It’s bad.',
  'Own it. You chose to sit in that chair. | float you I chose this; spin you');

add('street', 'At the tavern, your stew arrives stone cold.',
  'you 30 70, keeper Innkeeper 70 70',
  'say keeper Enjoy!',
  'Eat it. Food is food; complaining is a choice. | glow you; squash you',
  'Ask politely for it to be warmed. Small pleasures matter. | hearts you; say you Could you warm it?',
  'Eat it off the floor. Dogs never complain about their dinner. | squash you; say you Dogs don’t complain!',
  'Point it out kindly so the other diners get hot food too. | float you better for every diner',
  'Politely ask for what you paid for. | float you A fair exchange',
  'Cold stew in an indifferent universe. Absurd. Eat. | float you Absurd; squash you');

add('palace', 'A fly lands in your wine at an elegant dinner party.',
  'you 30 70, host Host 70 70, cup Wine 48 64 item',
  'hop host; shake cup',
  'Remove it calmly. Nature’s creatures go where they will. | glow you; float you calm',
  'Ask for a fresh cup. Pleasure should be pure. | hearts you; say you A new cup, please.',
  'Drink it anyway. Extra nourishment! | squash you; say you Extra nourishment!',
  'Not worth disturbing the host’s joy. Quietly fix it yourself. | float you keep the peace',
  'Lift the fly out gently. Even small cruelties shape us. | float you Gentleness',
  'Laugh. Life’s absurdity, served in a cup. | float you Absurd; spin you');

add('arena', 'At the theatre, a pushy man takes the seat you reserved.',
  'you 30 70, man Pushy_Man 62 70 dark',
  'go man you; squash man',
  'A seat is an indifferent. Find another one, unbothered. | glow you; to you 14 70',
  'Let him have it. Sit wherever the view is pleasant. | hearts you; to you 14 70',
  'Sit on his lap. | go you man; squash you; say you Comfy?',
  'Point it out kindly. Rules make theatres work for everyone. | float you order benefits all',
  'Tell him calmly that the seat is yours by right. | float you Rights apply to all; say you That is my seat.',
  'Decide whether this matters to you at all. | float you Does it matter?; spin you');

add('villa', 'Right before an important dinner, you spill wine down your only good toga.',
  'you 50 70',
  'shake you; burst you',
  'Wear it. Character matters, not clothing. | glow you; say you Let’s go.',
  'Wear something simple and comfortable instead. | spin you; hearts you; say you Comfort first.',
  'Go wrapped in a blanket. | spin you; say you The latest fashion!',
  'Borrow one, if it spares your host embarrassment. | float you a smooth evening',
  'Go honestly, as you are. | float you No pretence',
  'The stain means nothing unless you decide it does. | float you My meaning');

add('forum', 'You trip and fall flat on your face in the crowded Forum.',
  'you 50 70, crowd Crowd 82 66',
  'squash you; hop crowd 2; say crowd Ha ha ha!',
  'Rise calmly. Their laughter cannot harm you. | glow you; float you unharmed',
  'Laugh with them. A good joke is a pleasure, even at your expense. | hearts you; say you Graceful, wasn’t it?',
  'Stay down there and take a nap. | squash you; float you ZZZ',
  'You’ve made a whole crowd happy. Total utility: up! | float you +100 laughs',
  'Help up the next person who falls, as you would want to be helped. | float you Reciprocity',
  'Their gaze turns you into a clown. Refuse it. | float you Not an object; spin you');

add('street', 'A stray dog bites your leg.',
  'you 30 70, dog Dog 58 74 item',
  'go dog you; shake you',
  'The dog acted by its nature; it isn’t evil. Tend the wound calmly. | glow you; float you nature',
  'Clean the wound, and avoid that street from now on. | hearts you; to you 12 70',
  'Bite it back. Fair is fair between dogs. | go you dog; say you Woof!',
  'Report it. A wild dog could bite children next. | float you protect others',
  'Don’t harm the dog in anger. It cannot reason. | float you No cruelty',
  'An absurd, painful moment. Choose your response. | float you My response; spin you');

add('forum', 'A man in the Forum claims he is a god and demands to be worshipped.',
  'you 30 70, god Self-made_God 70 66 emp',
  'grow god 1.3; say god Worship me!',
  'Divine reason lives in all of us. He is not special. | glow you; say you We all share the divine.',
  'Real gods don’t meddle with us anyway. Ignore him. | hearts you; to you 12 70',
  'Ask the god to fetch you a drink. | say you Fetch me a drink, god!; hop you',
  'Worshipping him produces no happiness at all. Walk on. | float you utility: 0',
  'Treat him with respect — as a man, not a god. | float you Respect, not worship',
  'He has chosen to be absurd. Leave him to it. | float you His choice; spin you');

add('villa', 'You look in the mirror and see grey hair and deep wrinkles.',
  'you 40 70, mirror Mirror 66 64 item',
  'go you mirror; shake you',
  'Ageing is natural. Every day is a gift from fate. | glow you; float you memento mori',
  'Old age among good friends is sweet. | hearts you; say you Wrinkles, but good friends.',
  'Smash the mirror. Vanity is for fools. | go you mirror; shake mirror; fade mirror',
  'Use your remaining years to do as much good as you can. | float you years left: max good',
  'Your dignity does not depend on your looks. | float you Dignity endures',
  'Every wrinkle is a choice you lived. Own them. | float you My life; spin you');

add('temple', 'A fever leaves you blind.',
  'you 50 70, doc Physician 76 70',
  'say doc I am sorry...; fade you; show you',
  'Your eyes were on loan from nature. Your reason still sees. | glow you; float you reason still sees',
  'Taste, music and friendship remain. Pleasure is still possible. | float you taste · music · friends; hearts you',
  'Now you can’t see how ridiculous everyone looks. Bliss! | hop you 2; say you Blissful!',
  'Adapt, and keep contributing. Your happiness still counts. | float you adapt',
  'Your rational dignity is untouched. | float you Dignity intact',
  'A limit situation. Who will you become now? | float you Who now?; spin you');

add('forum', 'You have a raging toothache and must speak before the Senate within the hour.',
  'you 50 70',
  'shake you; cry you',
  'Pain is only pain. Speak anyway. | glow you; say you Senators!',
  'Pain is temporary. Focus on happy memories to endure it. | hearts you; float you sweet memories',
  'Ask the barber to yank it out right here in the Forum. | hop you 3; say you Pull it!',
  'If your speech would be worse, postpone. The outcome is what matters. | float you best outcome',
  'You promised to speak. Keep your commitment. | float you Promise kept',
  'Pain or not, you choose to stand up. | float you I choose; grow you 1.2');

add('temple', 'The physician hands you an extremely bitter medicine.',
  'you 30 70, doc Physician 66 70, cup Medicine 50 64 item',
  'go cup you; say doc Drink it all.',
  'Drink without complaint. Bitterness is only a sensation. | glow you; squash you',
  'A short pain for a long relief. Drink it — then honey. | hearts you; squash you',
  'Lap it up like a dog at a puddle. | squash you; say you Slurp!',
  'A moment of bitterness for weeks of health. Easy arithmetic. | float you −1 now, +30 later',
  'You have a duty to preserve your own life. Drink. | float you Duty to self',
  'Choose health consciously — not just because you were told to. | float you My choice');

add('street', 'A street seller offers you a potion that will “make anyone fall in love with you”.',
  'you 30 70, seller Seller 66 70 dark, vial Potion 50 64 item',
  'say seller Make them love you!; spin vial',
  'Other people’s affection isn’t yours to control. Decline. | glow you; float you not in my control',
  'Love from a potion is anxiety waiting to happen. Pass. | say you No potions for me.; to you 12 70; hearts you',
  'Pour it on his head and see who falls for him. | go you vial; shake seller; say you Who loves you now?',
  'Fake love makes fragile, short-lived happiness. Decline. | float you fragile joy',
  'Never manipulate another person’s will. That treats them as a thing. | float you Respect their will',
  'Forced love is bad faith on both sides. Refuse. | float you Freedom in love; spin you');

add('palace', 'At a feast, the host keeps urging you to drink “just one more cup”.',
  'you 30 70, host Host 70 70, cup Wine 50 64 item',
  'go cup you; say host One more!',
  'Moderation is a virtue. Refuse politely. | glow you; go cup host',
  'One more cup means tomorrow’s headache. The pleasure isn’t worth the pain. | float you tomorrow’s pain; go cup host',
  'Drink from the fountain instead. | to you 12 70; say you Water is free!',
  'Drink if it adds joy and harms no one; otherwise, stop. | float you joy vs harm',
  'You have a duty not to cloud your own reason. | float you Keep reason clear',
  'Drink, or don’t — but don’t blame the host for your choice. | float you My choice');

add('villa', 'Your cruel master twists your leg. “It will break,” you warn him — and it does.',
  'you 30 70, master Master 66 70 dark',
  'go master you; shake you; say master Ha!',
  '“Didn’t I tell you it would break?” Remain unbroken in spirit. | glow you; say you Did I not tell you?',
  'Endure it. Intense pain is brief, and long pain is mild. | float you this too will pass',
  'Hop about on one leg and call him the cripple. | hop you 3; say you You’re the real cripple!',
  'Cruelty adds pain for nothing. Campaign to end it. | float you abolish cruelty',
  'He violated your dignity. Name it as a wrong. | float you A grave wrong; say you This is wrong.',
  'Even now, you choose your attitude. | float you My attitude; spin you');

add('villa', 'You can’t sleep. Your mind spins with worries.',
  'you 50 70',
  'shake you; float you worry worry worry',
  'Review your day, and separate what you control from what you don’t. | glow you; float you mine / not mine',
  'Most worries are about things you don’t need. Let them go. | hearts you; squash you',
  'Get up and sleep outside under the open sky. | to you 15 70; squash you',
  'Write down what you can actually improve tomorrow. | float you a plan for good',
  'Resolve to do your duty tomorrow, and rest with a clear conscience. | float you Duty clear',
  'Anxiety is the dizziness of freedom. Accept it. | float you dizziness of freedom; spin you');

add('villa', 'Your toga is getting tight. You’ve been feasting a great deal.',
  'you 50 70',
  'grow you 1.3',
  'Discipline your appetite. Temperance is a virtue. | glow you; grow you 1',
  'Simple food tastes best anyway. Back to bread and olives. | hearts you; grow you 1',
  'Eat only what you find in the street. Problem solved. | hop you 2; grow you 1',
  'A healthier you lives longer and helps more people. | float you more years of good; grow you 1',
  'You have a duty to keep your body fit for your purposes. | float you Duty to self; grow you 1',
  'Your body is part of your project too. Choose. | float you My project; grow you 1');

add('temple', 'It is a fasting festival. Everyone around you is starving and grumpy.',
  'you 50 70, p1 Neighbour 25 70, p2 Neighbour 75 70',
  'shake p1 & shake p2',
  'Hunger is good training for the soul. Fast calmly. | glow you; float you training',
  'A little hunger makes bread taste divine afterwards. | float you hunger = best sauce; hearts you',
  'You fast half the year anyway. Amateurs! | hop you; say you Amateurs!',
  'Fast only if it does someone good — give your share of food to the poor. | float you food to the poor',
  'Keep the fast if you vowed to. | float you Vows are kept',
  'Fast only if it means something to you. | float you Does it mean anything?; spin you');

add('garden', 'Your faithful old dog dies in your arms.',
  'you 40 70, dog Dog 56 74 item',
  'fade dog; cry you',
  '“If you love a dog, remember you love a mortal.” Grieve, then let go. | glow you; float you mortal things',
  'Remember the happy walks. Grief softens; gratitude remains. | cry you; hearts you; say you Good walks, old friend.',
  'Bury him with honour. He was the best philosopher you knew. | say you Farewell, teacher.; bow you',
  'He had a long life full of pleasure. That is what mattered. | float you a happy life lived',
  'Mourn him. Kindness to animals reflects your humanity. | float you Kindness matters',
  'Death is absurd. Love anyway. | float you Love anyway');

add('villa', 'A friend’s young child has died. What do you say to him?',
  'you 30 70, friend Friend 66 70',
  'cry friend',
  'Sit with him, and gently remind him the child was a gift lent by fate. | go you friend; glow you',
  'Just stay with him, share food, and remember the child’s laughter together. | go you friend; hearts you',
  'Say nothing clever at all. Simply weep with him. | go you friend; cry you',
  'Take care of practical things to ease his suffering. | go you friend; float you ease suffering',
  'Offer sincere comfort — no hollow phrases. | go you friend; float you Sincerity',
  'There is no meaning in this. Stand beside him in the absurd. | go you friend; float you Together');

add('temple', 'You are asked to give the funeral speech for your bitterest rival.',
  'you 30 70, crowd Mourners 76 66',
  'say crowd Speak, please.',
  'Praise his genuine virtues. Hatred is beneath you. | glow you; say you He was brave.',
  'Keep it short and kind, then get to the funeral meal. | hearts you; say you Rest in peace.',
  'Say exactly what you thought of him. Honestly. | say you He was a pain!; hop crowd 2',
  'Say whatever will comfort his family most. | float you comfort the family',
  'Don’t lie — but find true things worth saying. | float you True words only',
  'Speak as yourself, not as the role of mourner. | float you Authentic; spin you');

add('villa', 'An old friend in terrible, incurable pain asks you to help him end his life.',
  'you 30 70, friend Friend 66 72, cup Hemlock 50 64 item',
  'shake friend; say friend Please...',
  'Seneca taught that the door is always open. Respect his reasoned choice. | glow you; go cup friend',
  'Death is nothing to him, but his pain is real. Help him. | hearts you; go cup friend',
  'Tell him he is free to leave whenever he likes. It is his life. | say you Your life, your exit.',
  'Ending unbearable suffering increases total wellbeing. | float you suffering ends; go cup friend',
  'Life may not be used as a means to escape pain. Refuse, and comfort him. | float you Life has dignity; go you friend',
  'He chooses; you choose whether to help. Both free, both responsible. | float you Both free; spin you');

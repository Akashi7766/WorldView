// Death, omens and gods, fame, nature. Answer order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('villa', 'Your heirs ask what kind of funeral you want.',
  'you 30 70, heir Heir 66 70',
  'say heir What would you like?',
  'Something simple. A funeral is for the living, not for you. | glow you; say you Keep it simple.',
  'No funeral — just a cheerful feast for my friends every year on my birthday. | hearts you; say you A feast, every year!',
  'Throw me over the city wall and save the money. | say you Over the wall!; hop you',
  'The cheapest possible funeral, and donate the rest to the hungry. | float you donate the rest',
  'Whatever fulfils my promises and wrongs no one. | float you Keep my promises',
  'My death ends my project. Let the living choose what it means to them. | float you Their choice now');

add('villa', 'Your household is terrified: they swear a ghost walks the halls at night.',
  'you 50 70, s1 Servant 25 70, s2 Servant 75 70',
  'shake s1 & shake s2; say s1 A ghost!',
  'Fear is a false judgement. Walk the halls calmly with a lamp. | glow you; to you 82 70',
  'There are only atoms and void. The dead feel nothing and do nothing. Sleep easy. | float you atoms and void; hearts you',
  'Invite the ghost to dinner. | say you Ghost! Dinner is at six!; hop you',
  'Calm everyone down, for the whole household’s wellbeing. | float you calm for all',
  'Reason it through with them. Respect their minds enough to argue. | float you Reason together',
  'Face the dark yourself. Fear is part of being free. | float you Face it; to you 82 70');

add('villa', 'The Emperor orders you to take your own life by dawn.',
  'you 50 70, sol Soldier 82 70 dark',
  'say sol By order of Caesar.',
  'Face it calmly and comfort your weeping friends — as Seneca did. | glow you; say you Do not weep, friends.',
  'Death is nothing to us. Spend the night with friends and good wine. | hearts you; say you One last supper.',
  'Tell the soldier to tell Caesar he’s next. | say you Tell Caesar: you’re next!; hop you',
  'Use your final hours to do as much good as you possibly can. | float you max good tonight',
  'Your life is not his to dispose of — but meet death with dignity. | float you Dignity to the end',
  'Even facing death, you choose how to meet it. | float you My death, my way; grow you 1.2');

add('street', 'A fire killed many in your apartment block. You survived only because you came home late.',
  'you 50 70, smoke Smoke 74 56 item',
  'grow smoke 2; cry you',
  'Fate chose, not you. Honour them by living well. | glow you; float you live well',
  'Mourn them, then let go. Guilt is a pain you don’t deserve. | cry you; hearts you; float you let go of guilt',
  'Life is pure chance. Laugh bitterly at Fortune’s dice. | float you Chance!; hop you',
  'Turn your grief into fire safety for the whole city. | float you prevent the next fire',
  'You did no wrong — but now you have duties to the survivors. | float you New duties',
  'Your survival is absurd. Give it meaning through what you do next. | float you Make it mean something; spin you');

add('street', 'A soothsayer grabs your arm: “Beware the Ides of March!”',
  'you 30 70, seer Soothsayer 66 70 dark',
  'go seer you; say seer Beware the Ides!',
  'If it is fated, worrying won’t help. Live virtuously either way. | glow you; float you fate is fate',
  'The gods don’t send messages. Ignore him and enjoy your day. | hearts you; to you 12 70',
  'Ask him to predict your lunch. | say you What’s for lunch, prophet?; hop you',
  'Take sensible precautions, then stop thinking about it. | float you reasonable precautions',
  'Don’t let superstition replace reason. | float you Reason over omens',
  'No prophecy decides your future. You do. | float you I decide; spin you');

add('sea', 'A crow flies to the left. Your sailors refuse to sail: the voyage is cursed.',
  'you 50 66, sailor Sailor 25 66, crow Crow 72 36 item',
  'to crow 10 26; shake sailor; say sailor A bad omen!',
  'Omen or not, do your duty and accept whatever comes. | glow you; say you We sail.',
  'Birds don’t know the future, and the gods don’t care about voyages. | float you no fear of gods',
  'Suggest the crow captains the ship, then. | say you Captain Crow it is!; hop you',
  'Check the actual weather. That is what matters for everyone’s safety. | float you check the weather',
  'Reason should decide, not birds. | float you Reason decides',
  'Superstition is a way to escape choosing. Choose. | float you No excuses');

add('temple', 'The priest demands you sacrifice your best ox to ensure a good harvest.',
  'you 30 70, priest Priest 66 70, ox Ox 50 70 item',
  'say priest The gods demand it!; grow ox 1.4',
  'Honour the divine with virtue, not with slaughter. | glow you; say you Virtue is my offering.',
  'The gods don’t need oxen. Keep it, and feast with friends. | hearts you; say you The gods are content.',
  'Offer the priest a radish. | say you Here — a radish.; hop you',
  'That ox could feed twenty hungry families instead. | float you feed 20 families',
  'Don’t perform rituals you think irrational just to please others. | float you Reason over ritual',
  'Sacrifice only if it carries a meaning you choose. | float you My meaning?; spin you');

add('forum', 'The sun goes dark at noon. The crowd screams that the world is ending.',
  'you 50 70, crowd Crowd 82 66',
  'shake crowd; say crowd It’s the end!',
  'The cosmos follows rational laws. Stay calm and explain. | glow you; say you It’s the moon’s shadow.',
  'Natural causes, not angry gods. There is nothing to fear. | float you natural causes; hearts you',
  'Laugh at them for being afraid of the moon. | say you Scared of the moon?; hop you',
  'Calm them down quickly, before a stampede hurts someone. | float you prevent injuries',
  'Teach them to think for themselves. Dare to know! | float you Sapere aude!',
  'Yes — the universe is indifferent. And yet we carry on. | float you An indifferent cosmos; spin you');

add('street', 'A fortune teller offers to read your palm and reveal your destiny.',
  'you 30 70, ft Fortune_Teller 66 70',
  'say ft Let me see your fate...',
  'What happens is fate; how you meet it is yours. No need. | glow you; float you how I meet it',
  'Knowing the future would only bring worry. | float you less worry; to you 12 70',
  'Show her the dirt on your palm. That’s your destiny! | say you Dirt. My destiny.; hop you',
  'Spend that coin feeding someone instead. | float you coin for food',
  'Your actions follow from reason, not from the lines on your palm. | float you Reason guides me',
  'There is no destiny written anywhere. Existence precedes essence. | float you Nothing is written; spin you');

add('temple', 'You must swear a solemn oath on gods you don’t believe in.',
  'you 30 70, priest Priest 66 70',
  'say priest Swear by Jupiter!',
  'Swear by Reason — the divine that runs through all things. | glow you; say you I swear by Reason.',
  'Swear. It costs nothing and keeps the peace. | say you I swear it.; hearts you',
  'Swear by your dog. | say you By the dog!; hop you',
  'Swear, if it allows good outcomes to follow. | float you outcomes matter',
  'Swear only if you will keep it. The promise binds you, not the gods. | float you The promise binds',
  'Refuse to fake a belief you don’t hold. That would be bad faith. | float you No pretending');

add('hill', 'A blazing comet appears. People whisper that an emperor will die.',
  'you 40 74, comet Comet 76 24 item',
  'to comet 30 18; burst comet',
  'Enjoy the beauty of the cosmos’s order. | glow you; float you cosmic order',
  'It’s just natural fire in the sky — beautiful and harmless. | float you just fire in the sky; hearts you',
  'Shout: “Which emperor? Hopefully all of them!” | say you All of them, please!; hop you',
  'Use the moment to teach people some astronomy. | float you education for all',
  'Investigate it rationally. | float you Investigate',
  'Awe at a silent, indifferent universe. | float you Silence; spin you');

add('temple', 'The Oracle at Delphi declares that you are the wisest person alive.',
  'you 30 70, oracle Oracle 70 66 emp',
  'say oracle None is wiser!; burst you',
  'Fame is an indifferent. Keep learning, humbly. | glow you; say you I am still a student.',
  'Fame would ruin your quiet life. Keep it secret. | float you live unnoticed; to you 12 70',
  'Agree loudly and demand free lunches for life. | say you Free lunch for the wise!; hop you 2',
  'Use the reputation to spread ideas that help people. | float you spread good ideas',
  'Wisdom is reasoning well, not a title. Keep questioning. | float you Keep reasoning',
  'Like Socrates: perhaps you are wise only in knowing you know nothing. | float you I know nothing; spin you');

add('forum', 'The city votes to raise a bronze statue of you in the Forum.',
  'you 30 70, statue Statue 66 60 item',
  'grow statue 2; hop you',
  'Decline politely. Statues tarnish; virtue doesn’t. | glow you; say you Spend it elsewhere.',
  'Statues attract envy. Ask for a quiet garden bench instead. | say you A bench will do.; hearts you',
  'Agree — as long as the pigeons can sit on it. | say you For the pigeons!; hop you',
  'Melt the bronze into coins for the poor. | float you bronze → bread',
  'Accept only if it honours principles rather than your vanity. | float you Principles, not vanity',
  'A statue freezes you into a thing. You are still becoming. | float you Still becoming; spin you');

add('palace', 'A guest praises you extravagantly in front of everyone at dinner.',
  'you 30 70, guest Guest 66 70',
  'say guest The greatest mind in Rome!',
  'Praise is outside your control. Accept it lightly. | glow you; float you indifferent',
  'Enjoy it a little, but never chase it. | hearts you; say you Thank you — enough now.',
  'Ask him what he wants from you. | say you What do you want?; hop you',
  'Redirect the praise to people who did real good. | float you credit to others',
  'Thank him — and correct anything untrue. | float you Truth matters',
  'His praise defines you only if you let it. | float you Not defined by it; spin you');

add('forum', 'A poet recites a mocking poem about your enormous nose to the crowd.',
  'you 30 70, poet Poet 66 70, crowd Crowd 88 66',
  'say poet Behold — the nose!; hop crowd 2',
  'He mocks your nose, not your character. You are unharmed. | glow you; float you unharmed',
  'Laugh. It’s actually a funny poem. | hop you; hearts you; say you Ha! It is a big nose.',
  'Recite a better poem about his tiny brain. | say you His brain is smaller still!; shake poet',
  'It amuses many and hurts you little. Let it be. | float you +50 laughs, −1 me',
  'Respond with dignity, and respect his freedom to speak. | float you Free speech',
  'He’s turning you into an object of fun. Refuse to be one. | float you Not an object; spin you');

add('street', 'Everyone you know is invited to the grand banquet. Everyone except you.',
  'you 30 70, house Villa 72 60 item',
  'grow house 1.8; cry you',
  'Invitations aren’t in your control. Your evening is. | float you not in my control; glow you',
  'Have a quiet dinner with one good friend. Better anyway. | to you 12 70; hearts you; say you Supper for two.',
  'Turn up uninvited and eat off the floor. | to you 66 70; squash you',
  'Spend the evening helping someone instead. | float you a good night',
  'Don’t resent them. It is the host’s right to choose his guests. | float you Respect their right',
  'Your worth is not a guest list. | float you Not a list; spin you');

add('forum', 'You discover that someone published your book under his own name.',
  'you 30 70, thief Plagiarist 66 70 dark, book Book 50 64 item',
  'go book thief; say thief My masterpiece!',
  'Reputation is indifferent. You still have your wisdom. | glow you; float you wisdom stays',
  'Let it go. Fame is a burden anyway. | say you Keep it. Fame is heavy.; hearts you',
  'Recite the whole book from memory in the street. | say you And chapter two...; hop you',
  'The ideas are spreading. The good is done either way. | float you ideas spread',
  'Demand a public correction. Fraud is wrong. | float you Fraud is wrong; go you thief',
  'Your work is you. Take it back. | float you Reclaim it; go book you');

add('street', 'Admirers crowd around you in the street, all asking for advice.',
  'you 50 70, f1 Fan 28 70, f2 Fan 72 70',
  'go f1 you & go f2 you; hop f1',
  'Answer briefly and kindly. Service is virtue. | glow you; say you Be kind, and be well.',
  'Slip away to a quieter street. | say you Excuse me...; to you 92 70',
  'Tell them to stop following anyone — especially you. | say you Stop following me!',
  'Use the attention to promote good causes. | float you good causes',
  'Encourage them to think for themselves. | float you Think for yourselves',
  'Tell them no one can choose their lives for them. | float you Choose yourselves; spin you');

add('forum', 'Children in the street chant at you: “Baldy! Baldy!”',
  'you 30 70, kids Kids 70 72',
  'hop kids 3; say kids Baldy!',
  'It’s true! Why be upset by the truth? | glow you; say you Correct!',
  'Laugh along. No harm done. | hop you; hearts you; say you Shiny, isn’t it?',
  'Rub your head and charge them a coin for a look. | say you One coin per look!; hop you',
  'They’re having fun, and your loss of dignity is tiny. | float you net laughter',
  'Kindly teach them respect. | float you Respect',
  'Choose to wear it proudly. | float you Proud; spin you');

add('forum', 'You lose the election by a handful of votes.',
  'you 30 70, rival Rival 66 70',
  'hop rival 3; burst rival',
  'The result was not yours to control. Your effort was. | glow you; go you rival; say you Congratulations.',
  'Wonderful — now you’re free of all that stress. | hearts you; to you 10 70',
  'Congratulate the winner on his shiny new chains. | say you Enjoy your chains!',
  'Help the winner govern well, for everyone’s sake. | go you rival; float you help him govern',
  'Accept the result. The rules apply to you too. | float you Respect the rules',
  'Defeat is part of your story. Write the next chapter. | float you Next chapter; spin you');

add('palace', 'Your less talented rival is promoted over you.',
  'you 30 70, rival Rival 66 70',
  'grow rival 1.3; hop rival',
  'Promotion is Fortune’s gift, not virtue’s. Keep working well. | glow you; float you Fortune’s gift',
  'Less responsibility means more peace. Fine by you. | squash you; hearts you; say you More time for lunch.',
  'Bow, mockingly. | bow you; say you All hail mediocrity!',
  'Does his promotion harm the people he serves? If not, move on. | float you outcome for all?',
  'Point out the unfairness — calmly and honestly. | float you Fairness',
  'Their decision doesn’t define your work. | float you My work; spin you');

add('palace', 'You can buy the title of “Equestrian” for a very large sum.',
  'you 30 70, clerk Clerk 66 70, scroll Title 50 64 item',
  'say clerk A noble title!; spin scroll',
  'Titles are indifferent. Spend wisely elsewhere. | glow you; say you No title, thank you.',
  'More status means more envy. No thanks. | hearts you; to you 12 70',
  'Buy the title for your dog. | say you For my dog!; hop you',
  'Spend the money where it helps the most people. | float you money → good',
  'An honour you can buy is no honour at all. | float you Merit, not money',
  'Titles are masks. Refuse to hide behind one. | float you No masks');

add('street', 'You find a sparrow with a broken wing in the gutter.',
  'you 30 70, bird Sparrow 62 72 item',
  'shake bird',
  'Care for it. Kindness to small creatures shapes good character. | go you bird; glow you',
  'Nurse it gently. A small life’s joy is still joy. | go you bird; hearts you',
  'Animals are our teachers. Help it. | go you bird; hop you',
  'It can suffer. Relieve its pain. | float you suffering counts; go you bird',
  'Cruelty to animals dulls our duties to people. Help it. | float you Kindness; go you bird',
  'Choose to care, for no reason except that you choose it. | float you I choose care; go you bird');

add('street', 'The ground shakes violently. Walls crack all around you.',
  'you 50 70, n Neighbour 25 70',
  'shake you & shake n; shake you',
  'Help others calmly. If death comes, it is natural. | glow you; go you n',
  'Get yourself and your friends to safety. Survival first. | go you n; to you 82 70 & to n 76 70',
  'Laugh: the earth reminds us that we own nothing. | say you We own nothing!',
  'Organise a rescue to save as many lives as possible. | float you rescue many; go you n',
  'Help those trapped. Duty knows no exceptions. | go you n; float you Duty',
  'The cosmos is indifferent. Act anyway. | float you Act anyway; go you n');

add('hill', 'Vesuvius rumbles and smokes. The townsfolk say it is nothing.',
  'you 30 74, smoke Smoke 76 28 item',
  'grow smoke 2; shake you',
  'Prepare calmly to leave, and accept whatever comes. | glow you; to you 10 74',
  'Leave now with your friends. No point risking pain. | hearts you; to you 5 74',
  'Tell the townsfolk they’re fools, and walk off. | say you Fools!; to you 5 74',
  'Warn everyone. Evacuating thousands saves the most lives. | float you warn thousands',
  'You have a duty to warn others honestly. | float you Duty to warn; say you Leave now!',
  'Choose to act, even if no one listens. | float you Act anyway');

add('arena', 'A lion escapes the arena and bounds into the crowd.',
  'you 50 70, lion Lion 82 70 dark, kid Child 28 72',
  'to lion 64 70; say kid Help!',
  'Protect the child calmly, without fear. | glow you; go you kid',
  'Run — and pull the child along with you. | go you kid; to you 5 70 & to kid 10 72',
  'Stare the lion down, beast to beast. | go you lion; say you GRRR!',
  'Direct people away from the lion to save the most lives. | float you most saved',
  'Save the child. Duty demands it. | go you kid; float you Duty',
  'In a moment of danger, act — and become who you are. | float you Act!; go you kid');

add('hill', 'You are invited on a boar hunt, purely for sport.',
  'you 30 74, host Host 70 74',
  'say host Join the hunt!',
  'Hunting for food is natural; hunting for sport is cruelty. Decline. | glow you; say you Not for sport.',
  'The chase is exhausting and bloody. Stay home. | say you I’ll stay home.; hearts you',
  'Join in — and cheer for the boar. | say you Run, boar, run!; hop you',
  'The boar suffers for your fun. Decline. | float you the boar’s pain counts',
  'Cruelty for amusement degrades our humanity. Decline. | float you No cruelty',
  'Decide whether this means anything to you at all. | float you Does it?');

add('hill', 'Locusts devour your entire crop overnight.',
  'you 50 74, crop Crop 72 68 item',
  'shake crop; fade crop',
  'Nature takes its course. Replant and endure. | glow you; float you plant again',
  'You need very little, and friends will share. | hearts you; say you Friends will share.',
  'Eat the locusts. | say you Crunchy!; squash you',
  'Coordinate food sharing so no one in the village starves. | float you share the food',
  'Help your neighbours, as you would want them to help you. | float you Reciprocity',
  'The absurd strikes again. Begin again. | float you Begin again; spin you');

add('street', 'A drought. Your well still has water; your neighbours’ wells have run dry.',
  'you 30 70, well Well 50 64 item, n Neighbours 82 70',
  'shake n; say n Water...',
  'Share it. We are all citizens of one city. | go well n; glow you',
  'Share with your friends and neighbours. Community is a pleasure. | go well n; hearts you',
  'Share it freely. Owning water is nonsense anyway. | go well n; hop you',
  'Ration it fairly to keep everyone alive. | float you ration fairly; go well n',
  'Help them. You couldn’t will a world where no one helps. | float you Universalise; go well n',
  'Choose to share, or not. Either way, you are responsible. | float you Responsible');

add('garden', 'A stray cat follows you home and refuses to leave.',
  'you 30 70, cat Cat 62 74 item',
  'go cat you; hop cat',
  'Accept what fate brings. Welcome the cat. | glow you; say you Welcome, cat.',
  'A cat on your lap in the garden. Pure pleasure. | squash you; hearts you; float you purr',
  'Bow to the cat. It is freer than any citizen. | bow you; say you My master!',
  'Feed it. Its happiness counts too. | float you +1 happy cat',
  'It depends on you now. Take responsibility for it. | float you Responsibility',
  'The cat chose you. Now you choose. | float you We choose; spin you');

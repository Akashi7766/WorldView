// Games, travel, teaching, social life. Answer order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('street', 'Playing knucklebones, you notice your opponent is cheating.',
  'you 30 70, opp Opponent 66 70 dark, bones Bones 48 66 item',
  'spin bones; hop opp; say opp I win again!',
  'His cheating harms only his own character. Point it out calmly, then play on. | glow you; say you Your bones are weighted, friend.',
  'It’s a game. Quit cheerfully and go and have a drink. | hearts you; to you 10 70',
  'Cheat back, outrageously, until he laughs. | spin bones; say you Seven sixes! I win!; hop you 2',
  'Expose it, so he stops fleecing other players too. | float you protect other players; go you opp',
  'Name it plainly. A game where everyone cheated wouldn’t be a game. | float you Fair play for all; say you You cheated.',
  'The game only means what you decide it means. Walk away or play on — freely. | float you Only a game?; spin you');

add('road', 'You can spend your savings on a trip to Greece, or stay home.',
  'you 30 70, ship Ship 76 64 item',
  'grow ship 1.5; float ship Athens!',
  'Wherever you go, you take yourself with you. Travel won’t fix your soul. | glow you; float you I travel with myself',
  'Stay home with your friends. You don’t need far-off places to be happy. | hearts you; squash you',
  'Go — on foot, with no luggage at all. | hop you; to you 92 70',
  'Would the money do more good elsewhere? Then stay, and give it. | float you trip vs 50 meals',
  'If you’ve made commitments at home, keep them first. | float you Obligations first',
  'Go, and let the journey change who you are. | spin you; to you 76 70; float you A new self?');

add('street', 'You are lost in a foreign city where you can’t speak the language.',
  'you 50 70, local Local 78 70',
  'say local ?!?#@; shake you',
  'Stay calm. The whole world is your city; ask with gestures. | glow you; go you local',
  'Find a tavern, sit down and enjoy the strangeness. | hearts you; squash you',
  'Sleep in the square tonight. Home is wherever you lie down. | squash you; float you home is here',
  'Ask for help. Strangers usually enjoy helping. | go you local; float you +1 good deed for them',
  'Ask politely, and treat the locals as equals. | go you local; bow you',
  'Lost, foreign, free. Invent your path. | spin you; float you Absurdly free');

add('road', 'Bandits on the road demand your purse.',
  'you 40 70, band Bandit 72 70 dark, purse Purse 52 64 item',
  'go band you; say band Your money!',
  'Hand it over calmly. Money is an indifferent; your character stays yours. | glow you; go purse band',
  'Hand it over quickly. Your life and peace are worth more. | go purse band; hearts you',
  'Show them your empty pockets and laugh. | say you I own nothing!; hop you 2',
  'Give it up. Resisting risks lives for mere coins. | float you lives > coins; go purse band',
  'Don’t lie about what you carry — but you owe a thief nothing. | float you No lies; say you I won’t pretend.',
  'Even at knife-point, you choose how to respond. | float you My response; grow you 1.2');

add('street', 'A foreign custom deeply offends you: everyone eats with their left hand.',
  'you 30 70, host Foreign_Host 66 70',
  'say host Eat, eat!',
  'Customs are indifferent. Join in politely. | glow you; squash you',
  'Eat however they eat and enjoy the meal. | hearts you; squash you',
  'Eat with your feet to show customs are all arbitrary. | spin you; say you Customs are arbitrary!',
  'Fitting in makes everyone more comfortable. Follow the custom. | float you everyone at ease',
  'Respect their customs as you’d want yours respected. | float you Mutual respect; bow you',
  'Notice that your own customs are arbitrary too. | float you All invented; spin you');

add('street', 'The innkeeper charges you triple the usual price.',
  'you 30 70, keeper Innkeeper 66 70 dark',
  'say keeper Pay up, traveller!',
  'Point it out calmly. His greed can’t disturb you. | glow you; say you That’s triple the price.',
  'Pay a fair price and leave. Arguments spoil a trip. | hearts you; to you 10 70',
  'Sleep in his stable instead, for free. | squash you; say you The horses charge less.',
  'Challenge it so he stops cheating other travellers. | float you protect travellers; go you keeper',
  'Insist on honesty. Cheating can’t be a universal rule. | float you Honest prices',
  'Choose whether this matters, then act. | float you Does it matter?; spin you');

add('road', 'Your travel companion is unbearably boring.',
  'you 30 70, comp Companion 56 70',
  'say comp And then the cabbage...; squash you',
  'Practise patience. Every companion is a lesson. | glow you; float you patience',
  'Travel separately for a while. Peace matters. | to you 10 70; hearts you',
  'Tell him plainly that he’s boring. | say you You’re boring!; hop you',
  'Liven up the conversation for both of you. | float you +joy for two',
  'Tell him kindly but honestly. | say you Let’s talk about something else.',
  'Boredom is the absurd showing through. Make it interesting. | float you Absurd; spin you');

add('sea', 'In a storm, the captain wants to throw your cargo overboard to save the ship.',
  'you 50 66, cap Captain 25 66, cargo Cargo 72 60 item',
  'shake cap; say cap Throw it over!',
  'Let it go. Things are indifferent; lives are not. | glow you; to cargo 72 120 & fade cargo',
  'Throw it! Safety and peace first. | hearts you; to cargo 72 120 & fade cargo',
  'Throw yourself in after it, laughing. | hop you 2; say you Splash!',
  'Throw it. The lives of the crew outweigh any profit. | float you lives > cargo; to cargo 72 120 & fade cargo',
  'Agree, provided it’s done fairly and all are treated equally. | float you Fairness; say you Throw mine first.',
  'Accept the loss, and choose your response to it. | float you My response; to cargo 72 120 & fade cargo');

add('sea', 'You wash up alone on a deserted island.',
  'you 40 66, palm Palm 72 58 item',
  'squash you; shake you',
  'Endure. Your reason is with you; you lack nothing essential. | glow you; float you I have myself',
  'Find fresh water, fruit and shade. Simple pleasures are enough. | go you palm; hearts you',
  'At last — no society to bother you! | hop you 3; burst you',
  'Build a signal fire. Rescue means more happiness all round. | float you get rescued; burst you',
  'Keep your duties to yourself: survive, and keep your reason. | float you Duty to self',
  'Alone with the absurd. Create a meaning here. | spin you; float you Create meaning');

add('road', 'You meet a famous philosopher on the road. He is very rude to you.',
  'you 30 70, phil Philosopher 66 70',
  'say phil Out of my way, fool!',
  'His rudeness is his fault, not your harm. Greet him calmly. | glow you; bow you',
  'Leave him. Life is too short for rude people. | hearts you; to you 10 70',
  'Be ruder. | say you Out of mine, bigger fool!; hop you',
  'Ignore it and ask him something useful. | float you learn something; go you phil',
  'Treat him with respect anyway. | float you Respect anyway; bow you',
  'Famous or not, he doesn’t define you. | float you Not defined; spin you');

add('temple', 'As a teacher, you catch a student cheating in his recitation.',
  'you 30 70, stu Student 66 70',
  'shake stu; say stu Uh...',
  'Correct him firmly but kindly. Character matters more than marks. | glow you; say you Cheating harms you most.',
  'Gently show him that honest learning is less stressful. | hearts you; go you stu',
  'Applaud his creativity, then make him recite properly. | hop you; say you Clever! Now again, properly.',
  'Correct him, so the other students aren’t treated unfairly. | float you fair for all',
  'He must redo it honestly. | float you Honesty required; say you Again — honestly.',
  'Help him see that he cheats only himself. | float you His choice; spin you');

add('temple', 'Your pupil begs to skip today’s lesson to watch the chariot races.',
  'you 30 70, pup Pupil 66 70',
  'hop pup 2; say pup Please!',
  'Discipline is freedom. Lessons first. | glow you; say you Lessons first.',
  'One day of pleasure won’t hurt. Go and enjoy it. | hearts you; to pup 92 70',
  'Take him to the races and teach him there. | hop you; to you 70 70',
  'Weigh his joy today against his learning tomorrow. | float you joy now vs later',
  'He made a commitment to learn. Hold him to it. | float you Commitment',
  'Let him choose, and accept the consequences. | float you His freedom; spin you');

add('forum', 'A young man asks you how he can become rich.',
  'you 30 70, lad Young_Man 66 70',
  'say lad How do I get rich?',
  'Want less, and you are rich already. | glow you; say you Desire less.',
  'Limit your desires. Then a little is plenty. | hearts you; say you Need little.',
  'Throw away what you have. Then you’ll need nothing. | say you Give it away!; hop you',
  'Get rich — and then give most of it to those in need. | float you earn to give',
  'Earn it honestly, never at others’ expense. | float you Honest wealth',
  'Why do you want to be rich? Decide what you truly value. | float you Why?; spin you');

add('arena', 'A boy tells you he dreams of becoming a gladiator.',
  'you 30 70, boy Boy 62 72',
  'hop boy 3; say boy I’ll be a champion!',
  'Courage is a virtue — find a nobler arena for yours. | glow you; say you Be brave elsewhere.',
  'A life of fear and pain? Gently steer him away. | hearts you; say you Choose a gentler path.',
  'Tell him the real fight is against foolish customs. | say you Fight customs instead!; hop you',
  'The suffering involved outweighs the glory. Discourage it. | float you pain > glory',
  'Respect his freedom, but warn him honestly. | float you Honest warning',
  'It’s his life to choose. Help him see it clearly. | float you His choice; spin you');

add('street', 'The neighbours whisper the latest scandal and invite you to listen.',
  'you 30 70, n1 Neighbour 66 70, n2 Neighbour 82 70',
  'say n1 Have you heard?; hop n2',
  'Gossip is not your concern. Walk on. | glow you; to you 10 70',
  'Avoid gossips. They disturb your peace. | hearts you; to you 10 70',
  'Shout the scandal so loudly that it loses all its power. | say you EVERYONE KNOWS!; hop you 2',
  'Gossip spreads pain. Change the subject. | float you less pain; say you Lovely weather!',
  'Gossip treats people as objects. Refuse. | float you Not objects; say you I’d rather not.',
  'Refuse to define people by rumours. | float you Not defined; spin you');

add('palace', 'A dinner guest loudly insults the food you cooked yourself.',
  'you 30 70, guest Guest 66 70 dark',
  'say guest This is awful!',
  'His opinion is his. Smile and serve more. | glow you; say you More?',
  'Laugh, and fetch him some bread instead. | hearts you; say you Bread, then?',
  'Agree, and eat his share too. | say you Then I’ll have yours!; squash you',
  'Find out what he likes, so everyone enjoys the dinner. | float you better meal for all',
  'Respond with courtesy. Insults don’t justify rudeness. | float you Courtesy',
  'His taste is his. Your cooking is yours. | float you My cooking; spin you');

add('villa', 'A friend makes you swear to keep a secret that could get someone hurt.',
  'you 30 70, friend Friend 66 70',
  'say friend Swear you won’t tell...',
  'Justice outranks a promise to hide wrongdoing. Speak up. | glow you; say you I cannot keep this.',
  'Talk him out of whatever harm it is, gently. | hearts you; go you friend',
  'Refuse to swear at all. Secrets are chains. | say you No oaths!; hop you',
  'Tell someone if keeping quiet causes more harm. | float you prevent harm',
  'Don’t promise what you might have to break. | float you No false promises',
  'Whatever you decide, you carry it. Decide. | float you My weight; spin you');

add('street', 'You discover that the beggar you’ve been feeding is secretly rich.',
  'you 30 70, beg Beggar 66 72, gold Hidden_Gold 82 66 item',
  'go gold beg; float beg Hehe',
  'His dishonesty is his to answer for. Your generosity remains good. | glow you; float you my act was good',
  'Laugh about it and give elsewhere. | hop you; hearts you; say you Well played, rich man!',
  'Admire his performance. Ha! | hop you 2; say you Bravo!',
  'Redirect your help to people truly in need. | float you help the truly poor',
  'Confront the deception honestly. | float you Deception exposed; go you beg',
  'He chose deceit. You choose your next step. | float you My next step; spin you');

add('street', 'A drunk senator staggers up and challenges you to a fight.',
  'you 30 70, sen Drunk_Senator 66 70 dark',
  'go sen you; say sen Fight me!',
  'Decline calmly. Anger is weakness. | glow you; say you No, thank you.',
  'Walk away. A fight would ruin your evening. | hearts you; to you 10 70',
  'Point out he can barely stand, let alone fight. | say you You can barely stand!; hop you',
  'Help him home before he hurts someone. | go you sen; float you prevent harm',
  'Treat him with respect, even drunk. | float you Respect; bow you',
  'Refuse to be drawn into his absurd drama. | float you Absurd; spin you');

add('palace', 'Your patron demands you appear at his door every morning to greet him.',
  'you 30 70, pat Patron 70 66 emp',
  'say pat Every morning!',
  'Fulfil your duty, but don’t mistake it for virtue. | glow you; bow you',
  'Your mornings are precious. Find a kinder patron. | hearts you; to you 10 70',
  'Show up — in your nightclothes. | spin you; say you Good morning, patron!',
  'Go, if his support helps your family. | float you family benefits',
  'Honour your agreement, but stand on your dignity. | float you Dignity; bow you',
  'Decide whether this arrangement is the life you want. | float you My life?; spin you');

add('street', 'A stranger sneezes all over you.',
  'you 50 70, str Stranger 72 70',
  'shake str; burst you',
  'Nature’s doing, not an insult. Wipe it off. | glow you; float you nature, not insult',
  'A small annoyance. Laugh. | hop you; hearts you; say you Bless you!',
  'Sneeze back. | shake you; say you ACHOO!',
  'Make sure no one gets sick — wash. | float you hygiene for all',
  'He couldn’t help it. Be gracious. | float you Gracious',
  'An absurd moment. Smile. | float you Absurd; spin you');

add('villa', 'Your cook burns the dinner just before your guests arrive.',
  'you 30 70, cook Cook 66 70, pot Pot 50 64 item',
  'shake pot; cry cook',
  'Things go wrong. Serve bread and good conversation. | glow you; go you cook',
  'Bread, olives and wine with friends — still a feast. | hearts you; say you Bread, olives and friends!',
  'Serve the burnt food and call it a delicacy. | say you Charcoal à la Rome!; hop you',
  'Make the evening fun anyway. That’s what counts. | float you joy anyway',
  'Don’t punish the cook. Mistakes happen. | float you Fairness; go you cook',
  'Embrace the chaos. Make something new of it. | float you Make it new; spin you');

add('street', 'Your neighbour builds a wall that blocks your view of the hills.',
  'you 30 70, wall Wall 62 64 item, nb Neighbour 84 70',
  'grow wall 2',
  'Your peace isn’t in the view. Accept it. | glow you; float you peace isn’t in the view',
  'Plant a little garden on your side of the wall. | hearts you; float you a little garden',
  'Climb the wall and sit on top. | to you 62 50; say you Nice view!',
  'Discuss it, and look for a solution good for both of you. | float you both win; go you nb',
  'Talk with him respectfully about your rights. | float you Mutual rights; go you nb',
  'Make a new view. Paint the wall. | float you New view; spin you');

add('forum', 'A foreign visitor asks you why Romans love the gladiator games.',
  'you 30 70, vis Visitor 66 70',
  'say vis Why do you love it?',
  'Most don’t understand what it does to their souls. | glow you; say you They don’t see the harm.',
  'Crowds seek thrills. True pleasure is quieter. | hearts you; say you Real joy is quiet.',
  'Because they are bored slaves of the Emperor. | say you Bread and circuses!; hop you',
  'It gives brief pleasure to many, at terrible cost to a few. | float you crowd joy vs fighter agony',
  'It uses human beings as tools of entertainment. It is wrong. | float you Wrong',
  'They lose themselves in the crowd to escape their own freedom. | float you Escape from freedom; spin you');

add('road', 'You promised to meet a friend for dinner, but find a wounded stranger on the way.',
  'you 30 70, str Stranger 62 72',
  'shake str; say str Help...',
  'Help the stranger. Your friend will understand. | go you str; glow you',
  'Help, and explain to your friend later over dinner. | go you str; hearts you',
  'Help. Promises are just conventions. | go you str; hop you',
  'Help the stranger. The greater need wins. | float you greater need; go you str',
  'Help the stranger, then send word to your friend. Keep both duties as best you can. | float you Two duties; go you str',
  'Choose who to be in this moment. | float you My choice; go you str');

add('forum', 'You find a crying child lost in the crowded Forum.',
  'you 30 70, kid Lost_Child 56 72, crowd Crowd 84 66',
  'cry kid',
  'Help the child calmly. It’s natural to care for others. | go you kid; glow you',
  'Comfort the child, and find their parents. | go you kid; hearts you',
  'Shout until the parents hear you. | hop you 3; say you WHOSE CHILD?',
  'Organise a search. The quickest way to reunite them. | float you fastest reunion; go you kid',
  'Help — it’s your duty. | float you Duty; go you kid',
  'Choose to help, because you choose to. | float you My choice; go you kid');

add('garden', 'A storm destroys the garden you’ve tended for twenty years.',
  'you 40 70, tree Tree 66 62 item',
  'shake tree; fade tree; cry you',
  'All things pass. Plant again. | glow you; float you plant again',
  'Plant something new, and enjoy watching it grow. | hearts you; float you new seeds',
  'Good. Gardens are possessions too. | hop you; say you Free of it!',
  'Help your neighbours replant theirs as well. | float you help them too',
  'Repair what you can, without bitterness. | float you Repair',
  'Begin again. Like Sisyphus — happily. | float you Begin again; spin you');

add('temple', 'An exclusive circle of philosophers will admit you — if you mock the other schools.',
  'you 30 70, circle Circle 70 66 emp',
  'say circle Mock the others, and join us.',
  'Seek truth, not clubs. Decline. | glow you; say you I seek truth, not membership.',
  'Join your friends instead, in the quiet Garden. | hearts you; to you 10 70',
  'Mock them all — including this circle. | say you You’re all ridiculous!; hop you 2',
  'Mockery spreads division. Decline. | float you less division',
  'Mockery disrespects reason. Decline. | float you Respect reason',
  'Refuse to define yourself by belonging. | float you Not defined; spin you');

add('forum', 'A rival philosopher makes an embarrassing error in public. Correcting him would humiliate him.',
  'you 30 70, rival Rival 66 70, crowd Crowd 88 66',
  'say rival The earth is flat!; hop crowd',
  'Correct him privately and kindly. Truth and humility together. | glow you; go you rival',
  'Let it go. A public argument isn’t worth the trouble. | hearts you; say you Not worth the fuss.',
  'Correct him loudly. Truth matters more than his pride. | say you WRONG!; shake rival',
  'Correct him in the way that best helps the audience learn. | float you best learning',
  'Correct him respectfully. Truth matters. | float you Truth with respect; go you rival',
  'Speak your truth — and own it. | float you My truth; spin you');

add('temple', 'The gods offer you a final choice: to be remembered forever, or to live happily and be forgotten.',
  'you 50 70, fate Fates 76 66 emp',
  'say fate Choose, mortal.',
  'Neither fame nor obscurity matters. Live virtuously either way. | glow you; float you virtue either way',
  'Happiness, of course. Fame is anxiety. | hearts you; say you Happiness, please.',
  'Forgotten! Fame is a joke. | hop you 3; say you Forget me!',
  'Remembered — if your legacy can do lasting good. | float you lasting good',
  'Choose whichever lets you do your duty. | float you Duty',
  'Neither is given meaning until you live it. | float you I create meaning; spin you');

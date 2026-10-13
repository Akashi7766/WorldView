// Big questions, thought experiments, crime and justice, festivals. Order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('hill', 'You are late for an appointment, but the sunset over the hills is breathtaking.',
  'you 30 74, sun Sun 72 40 item',
  'grow sun 2.5; to sun 72 56',
  'Pause a moment in awe at the order of the cosmos, then go. | glow you; to you 84 74',
  'Stop and enjoy it fully. Pleasures like this cost nothing. | hearts you; squash you',
  'Skip the appointment. The sun is better company. | squash you; float you the sun is better company',
  'Will your lateness harm anyone? If not, watch. | float you harm to others?',
  'You promised to be on time. Go. | float you A promise; to you 92 74',
  'This beauty means nothing — and that is exactly why it is yours. | float you Mine; spin you');

add('temple', 'A student asks you: “What is the meaning of life?”',
  'you 30 70, stu Student 66 70',
  'say stu What is the meaning of life?',
  'To live in agreement with nature and reason. | glow you; say you Live by reason.',
  'A tranquil life among friends, free from fear. | hearts you; say you Friends and peace.',
  'To live like a dog: simple, honest and shameless. | hop you; say you Live like a dog!',
  'To leave the world happier than you found it. | float you more happiness; say you Make others happy.',
  'To do your duty, and so become worthy of happiness. | float you Be worthy; say you Do your duty.',
  'There is none — until you create one. | spin you; say you Make one.');

add('forum', 'A sophist argues that nothing can be known, so nothing matters.',
  'you 30 70, soph Sophist 66 70 dark',
  'say soph You know nothing!; hop soph',
  'Some impressions are clear and certain. Reason can grasp them. | glow you; say you Some things are certain.',
  'Your senses work perfectly well — and pain still matters. | float you senses are real; hearts you',
  'Pinch him, and ask whether he knows that. | go you soph; shake soph; say you Know that?',
  'Even with uncertainty, consequences still land on real people. | float you consequences matter',
  'Reason has limits — but morality comes from reason itself. | float you The limits of reason',
  'Uncertainty is the human condition. Choose anyway. | float you Choose anyway; spin you');

add('forum', 'At a public debate, you are asked: “Is pleasure the highest good?”',
  'you 30 70, mod Moderator 66 70, crowd Crowd 88 66',
  'say mod Is pleasure the highest good?',
  'No. Only virtue is good; pleasure is an indifferent. | glow you; say you Only virtue.',
  'Yes — but the calm pleasure of an untroubled mind, not wild excess. | hearts you; say you Calm pleasure.',
  'Pleasure is a trap. Live hard and free. | say you Pleasure enslaves!; hop you',
  'Pleasure and the absence of pain are what make an outcome good. | float you pleasure − pain',
  'Only a good will is good without condition. | float you The good will',
  'There is no fixed highest good. We invent our values. | float you We invent values; spin you');

add('garden', 'A small child asks you why people have to die.',
  'you 30 70, kid Child 56 74',
  'say kid Why do people die?',
  'Because everything in nature changes, like leaves in autumn. | glow you; say you Like autumn leaves.',
  'Dying isn’t scary. When we’re gone, we feel nothing at all. | hearts you; say you It doesn’t hurt.',
  'Because we are animals. Isn’t that wonderful? | hop you; say you We’re animals!',
  'So let’s make the time we have as happy as we can. | float you make it count',
  'Answer honestly, in words the child can understand. | float you Honesty',
  'Death is what makes our choices matter. | float you Choices matter; spin you');

add('temple', 'A sceptic challenges you: “Prove the gods exist!”',
  'you 30 70, sk Sceptic 66 70',
  'say sk Prove it!',
  'The rational order of the cosmos shows a divine reason. | glow you; say you Look at the order.',
  'They exist — but they don’t care about us at all. | hearts you; say you They don’t care.',
  'Who cares? Live well regardless. | say you Who cares?; hop you',
  'The question matters less than how we treat one another. | float you treat others well',
  'Reason can’t prove it, but morality makes the belief reasonable. | float you A postulate of reason',
  'Even if gods exist, you still have to choose for yourself. | float you Still free; spin you');

add('villa', 'A brilliant argument convinces you that your whole philosophy might be wrong.',
  'you 50 70, scroll Argument 72 64 item',
  'grow scroll 1.5; shake you',
  'Follow reason wherever it leads, calmly. | glow you; float you follow reason',
  'Examine it over dinner with friends. No anxiety needed. | hearts you; say you Let’s discuss it over dinner.',
  'Burn every philosophy and just live simply. | to scroll 72 120 & fade scroll; hop you',
  'Update your view if the evidence is better. | float you update beliefs',
  'Test it rigorously against reason. | float you Critique!',
  'Anguish! Now you must choose all over again. | float you Choose again; spin you');

add('street', 'An astrologer insists your every action is written in the stars.',
  'you 30 70, ast Astrologer 66 70 dark',
  'say ast All is written!',
  'Fate exists — but your assent to it is yours alone. | glow you; say you My assent is mine.',
  'The atoms swerve. You are free. | float you the atoms swerve; hearts you',
  'Then the stars made you a fool. | say you The stars made you a fool!',
  'Fated or not, consequences still matter. | float you consequences',
  'Morality requires that we act as if we are free. | float you We act as free',
  'Hiding behind fate is bad faith. You are condemned to be free. | float you Condemned to be free; spin you');

add('sea', 'Your ship has been rebuilt plank by plank. A friend asks: “Is it still the same ship?”',
  'you 50 66, friend Friend 25 66',
  'say friend The same ship?',
  'Everything changes; what endures is its purpose. | glow you; float you purpose endures',
  'Who cares — it floats! Let’s sail. | hearts you; say you It floats! Let’s sail.',
  'Burn it and swim. | say you Swim!; hop you',
  'It does the same job, so for every practical purpose it is the same. | float you practically the same',
  'A fine question for pure reason. Let’s think it through. | float you Pure reason',
  'Like you — always changing, always becoming. | float you Becoming; spin you');

add('road', 'You find a ring that makes you invisible. No one could ever catch you doing anything.',
  'you 40 70, ring Ring 56 64 item',
  'go you ring; fade you; show you',
  'Act justly. Virtue doesn’t depend on being seen. | glow you; float you virtue unseen',
  'Use it only to avoid tiresome people. | hearts you; fade you; show you',
  'Throw it in the river. Who wants more power? | say you Who wants more power?; to ring 56 120 & fade ring',
  'Use it to do good in secret — like stopping thieves. | float you secret good',
  'Act as though your rule were law, seen or unseen. | float you Same rule, seen or not',
  'Invisible or not, you are still responsible for who you are. | float you Still me; spin you');

add('temple', 'A demon whispers: “You will live this exact life again — forever.”',
  'you 50 70, demon Demon 76 66 dark',
  'say demon Again and again...',
  'Love whatever fate brings, again and again. | glow you; hearts you',
  'If my life is pleasant, then wonderful. | hearts you; say you Then wonderful!',
  'Then I’ll laugh at it every single time. | say you Ha! Again!; hop you',
  'Then let’s make this one life as good as possible. | float you max this life',
  'Then act always as you would will to act forever. | float you Will it forever',
  'Embrace it. Live so that you’d choose it again. | float you Yes, again!; spin you');

add('temple', 'You are offered water from the river Lethe, which would erase all your painful memories.',
  'you 30 70, cup Lethe 56 64 item',
  'grow cup 1.4',
  'Painful memories taught you virtue. Decline. | glow you; say you My pain taught me.',
  'Dwell on happy memories instead. No need to erase anything. | hearts you; float you happy memories',
  'Ask for plain water instead. | say you Just water, thanks.',
  'If it removes suffering and costs nothing, drink. | go cup you; float you suffering −',
  'Your memories make you the rational agent you are. Keep them. | float you Keep yourself',
  'Your past is yours. Erasing it is fleeing from yourself. | float you My past; spin you');

add('temple', 'A goddess offers to make you immortal.',
  'you 30 70, god Goddess 70 66 emp',
  'say god Live forever!',
  'Death is natural and right. Decline. | glow you; say you Death is natural.',
  'Death is nothing to us. No need. | hearts you; say you Death is nothing to us.',
  'Forever? You’d be bored of Rome by Tuesday. | say you Bored by Tuesday!',
  'Accept, if you could do good forever. | float you endless good',
  'Duty makes sense with or without endless life. | float you Duty, mortal or not',
  'Death makes choices urgent. Without it, freedom loses its weight. | float you Finite = meaningful');

add('street', 'A man with a lantern at midday asks: “Are you an honest person?”',
  'you 30 70, dio Lantern_Man 66 70',
  'say dio Are you honest?',
  'I strive to be. Virtue is a daily practice. | glow you; say you I practise daily.',
  'Mostly. Dishonesty brings worry. | hearts you; say you Mostly — lies are stressful.',
  'No — and neither are you. Let’s look for one together. | go you dio; say you Let’s look!',
  'I’m honest when honesty helps everyone. | float you honesty helps',
  'Always. Lying fails the universal test. | float you Always',
  'I try to live authentically. | float you Authentic');

add('street', 'You catch a hungry child picking your pocket.',
  'you 30 70, kid Child 56 72',
  'go kid you; shake kid',
  'Correct him gently, and feed him. | glow you; go you kid',
  'Give him a meal and teach him kindly. | hearts you; go you kid',
  'Let him keep it, and give him lessons in begging. | hop you; say you Keep it, kid.',
  'His hunger outweighs your loss. Feed him. | float you his need > mine',
  'Explain that stealing is wrong, but treat him kindly. | float you Teach what is right',
  'He chose to steal. Help him choose differently. | float you Choose again');

add('villa', 'You learn your trusted servant has been stealing from you for years.',
  'you 30 70, serv Servant 66 70',
  'shake serv; say serv Forgive me...',
  'Address it justly and calmly. | glow you; go you serv; say you We must set this right.',
  'Forgive him. Anger would ruin your peace. | hearts you; say you I forgive you.',
  'Tell him he’s welcome to it. Possessions are a burden. | say you Take the rest!',
  'Choose the response that leads to the best outcome for both of you. | float you best for both',
  'He must make it right — but treat him as a person. | float you Restitution',
  'He chose. Now he must own that. | float you His choice');

add('street', 'You accidentally break a shopkeeper’s amphora. No one saw.',
  'you 30 70, amph Amphora 50 64 item, shop Shopkeeper 82 70',
  'shake amph; fade amph',
  'Tell him and pay. Justice is a virtue. | go you shop; glow you',
  'Pay. The guilt would ruin your peace of mind. | float you clear conscience; go you shop',
  'Tell him, laughing, and offer your cup as payment. | say you Take my cup!',
  'Pay. His loss is real. | float you his loss; go you shop',
  'Confess. Hiding it could never be a universal rule. | float you Confess',
  'No one saw — but you did. | float you I saw; go you shop');

add('forum', 'You notice a counterfeit coin in your purse.',
  'you 30 70, coin Coin 50 64 item, shop Shopkeeper 82 70',
  'spin coin',
  'Don’t pass it on. Destroy it. | glow you; fade coin',
  'Don’t risk the worry of being caught. Throw it away. | float you no worry; fade coin',
  'All coins are fake, if you think about it. | say you All coins are fake!',
  'Passing it on harms someone. Destroy it. | float you no harm; fade coin',
  'Passing it on is deception. Never. | float you No deception; fade coin',
  'Choose honesty, though no one would ever know. | float you My choice; fade coin');

add('street', 'Two drunks start a brawl in the tavern.',
  'you 50 70, d1 Drunk 30 70 dark, d2 Drunk 72 70 dark',
  'go d1 d2; shake d1 & shake d2',
  'Separate them calmly. | go you d1; glow you',
  'Leave. It’s not your fight. | say you Not my fight.; to you 10 70',
  'Mock them both. | say you Fighting over nothing!',
  'Stop it, for everyone’s safety. | float you safety; go you d1',
  'Intervene to protect the others. | float you Duty to protect',
  'Choose to act, or walk away — and own it. | float you My choice');

add('villa', 'You catch a thief climbing through your window at night.',
  'you 30 70, thief Thief 74 70 dark',
  'to thief 62 70; shake thief',
  'Confront him calmly. He harms himself more than you. | glow you; go you thief',
  'Let him take what he wants and leave you in peace. | squash you; float you peace > things; hearts you',
  'Offer to help him carry things. | say you Need a hand?',
  'Stop him — but find out whether he is desperate. | float you why?',
  'Defend your rights, but don’t harm him more than necessary. | float you Proportionate',
  'This moment defines you. | float you Define yourself');

add('forum', 'Someone frames you for a theft you did not commit.',
  'you 30 70, acc Accuser 66 70 dark',
  'say acc It was him!',
  'Defend yourself calmly. Even punishment cannot touch your virtue. | glow you; say you I am innocent — and calm.',
  'Defend yourself, then retreat from public life. | say you I am innocent!; to you 10 70; hearts you',
  'Plead guilty to the crime of owning nothing. | say you Guilty of poverty!',
  'Prove your innocence — for justice, and for future victims. | float you justice',
  'The truth must prevail. | float you Truth',
  'Others are trying to define you. Refuse. | float you I define me');

add('street', 'You await execution in prison. Friends offer to bribe the guard so you can escape.',
  'you 30 70, friend Friend 66 70, guard Guard 86 70 dark',
  'say friend Escape now!',
  'Escaping would betray the laws you lived by. Stay, as Socrates did. | glow you; say you I will stay.',
  'Escape. Death is nothing, but life with friends is sweet. | hearts you; to you 5 70',
  'Escape, and live in a barrel somewhere else. | hop you; to you 5 70',
  'Escape, if it leads to more good in the world. | float you more good?',
  'Breaking a law you accepted would contradict reason. Stay. | float you Lawful duty',
  'Choose freely — escape or stay — and own the choice. | float you My choice');

add('street', 'The man who ruined your family is now poor and at your mercy.',
  'you 30 70, enemy Old_Enemy 66 72 dark',
  'shake enemy',
  'Revenge is a passion. Show mercy. | glow you; go you enemy; say you I spare you.',
  'Revenge brings no peace. Walk away. | hearts you; to you 10 70',
  'Laugh at how small he looks now. | say you So small now!',
  'Revenge only adds more suffering. Forgive. | float you no more suffering',
  'Justice, not revenge. | float you Justice',
  'Who do you become if you choose revenge? | float you Who?');

add('road', 'A wanted man asks you the way to the harbour.',
  'you 30 70, man Wanted_Man 66 70 dark',
  'say man Which way to the harbour?',
  'Tell the truth, and inform the guards. | glow you; say you That way. And the guards are this way.',
  'Tell him and walk on. Not your problem. | say you That way.; to you 10 70; hearts you',
  'Ask what he did — maybe he’s a hero. | say you What did you do?',
  'If he’s dangerous, alert the authorities. | float you protect others',
  'Don’t lie — but you need not help a criminal. | float you No lies',
  'Choose, and bear the consequences. | float you My choice');

add('arena', 'At the chariot races, your friends urge you to bet on the Greens.',
  'you 30 70, friend Friend 66 70',
  'say friend Bet on the Greens!',
  'Enjoy the race without staking your peace on it. | glow you; hop friend; float you the race is indifferent',
  'Watch for fun, but don’t bet. | hearts you; say you I’ll just watch.',
  'Cheer for the horses instead of the drivers. | say you Go, horses!',
  'Bet only what you can afford, and donate any winnings. | float you donate winnings',
  'Betting isn’t wrong — cheating is. | float you Fair play',
  'Bet freely, knowing it’s absurd. | float you Absurd');

add('arena', 'The play is dreadful. The actors look straight at you, hoping for applause.',
  'you 30 70, act Actor 66 70',
  'bow act',
  'Applaud their effort, not their skill. | glow you; say you Well tried!; bow act',
  'Clap politely and leave early. | say you Lovely.; to you 8 70; hearts you',
  'Boo honestly. | say you Boo!',
  'Clap. They will be happier. | float you +joy',
  'Clap only for what you sincerely appreciate. | float you Sincerity',
  'Don’t perform an appreciation you don’t feel. | float you Authentic');

add('palace', 'You’re asked to judge a wine contest. The host’s own wine is clearly the worst.',
  'you 30 70, host Host 70 70',
  'say host Mine is best, yes?',
  'Judge fairly. Truthfulness is a virtue. | glow you; say you Yours came last, host.',
  'Declare all the wines delightful. | hearts you; say you All delightful!',
  'Pour them all out. | say you Water is better!',
  'Choose the winner whose victory brings the most happiness. | float you most happiness',
  'Judge honestly. | float you Honest judgement',
  'Judge by your own taste. | float you My taste');

add('street', 'At the Lupercalia, young men run through the streets whipping passers-by with goatskins.',
  'you 30 70, runner Runner 70 70',
  'hop runner 3',
  'Customs vary. Observe calmly. | glow you; float you customs vary',
  'Enjoy the spectacle from a safe distance. | to you 12 70; hearts you',
  'Join in, naked. | hop you 3; go you runner; say you Wait for me!',
  'If it makes people happy, fine. | float you happiness',
  'Respect the custom, but harm no one. | float you Respect',
  'Join only if it means something to you. | float you Meaning?');

add('forum', 'At a festival you dance — terribly. People giggle.',
  'you 50 70, crowd Crowd 82 66',
  'hop you 3; hop crowd 2',
  'Their opinion is outside your control. Keep dancing. | glow you; hop you 2',
  'Dance for your own pleasure. | hearts you; hop you 2',
  'Dance even worse. | spin you; hop you 3',
  'Everyone is laughing — happiness all round. | float you +joy',
  'Respect yourself, and enjoy yourself. | float you Self-respect',
  'Dance as yourself, unashamed. | float you Free; spin you');

add('garden', 'You’re invited to a wild Bacchanalia that will last all night.',
  'you 30 70, rev Reveller 70 70',
  'hop rev 3; say rev Join us!',
  'Decline. Such excess clouds reason. | glow you; say you My reason stays clear.',
  'Excess brings regret. Decline. | say you I’d regret it.; hearts you',
  'Go — but only to laugh at them. | say you Ha!',
  'If no one is harmed, why not? | float you no harm?',
  'Don’t give up your reason. | float you Keep reason',
  'Go only if you choose it authentically. | float you My choice');

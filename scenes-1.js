// Money, property, politics, war. Answer order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('villa', 'Your father’s will leaves everything to you and nothing to your sister, who nursed him for years.',
  'you 30 70, sis Sister 70 70, will Will 50 64 item',
  'go will you; say sis Nothing for me?; cry sis',
  'Wealth is an indifferent; justice is not. Split it fairly with her. | go you sis; glow you; say you Half is yours, sister.',
  'Share it. A sister’s friendship is worth more than a pile of coins. | go you sis; hearts you; say you Let’s share it — and dine together.',
  'Give her all of it and walk off with nothing but your cloak. | go will sis; hop you 2; say you Take it. I feel lighter already.',
  'Divide it where it does the most good — she needs it far more than you. | float you her need 9 · mine 3; go will sis',
  'Honour the legal will — then freely give her what gratitude says you owe her. | float you The will is binding; go you sis; say you But my gratitude is mine to give.',
  'No dead man decides who you are. Choose what this money becomes, and own it. | spin you; float you My choice, not his; go will sis');

add('street', 'A busy merchant hands you far too much change and turns to the next customer.',
  'you 30 70, merch Merchant 70 70, coins Coins 50 64 item',
  'go coins you; say merch Next!',
  'Hand it back. Justice is a virtue, and those coins were never yours. | go you merch; go coins merch; glow you',
  'Return it — a quiet conscience is sweeter than a few extra coins. | go you merch; go coins merch; hearts you',
  'Toss the coins back with a laugh. You didn’t want them anyway. | hop you; go coins merch; say you Keep your shiny metal!',
  'Return it. He’s a poor trader, and his loss outweighs your gain. | float you his loss > my gain; go coins merch',
  'Return it, because keeping money you know isn’t yours could never be a rule for everyone. | float you Could all do this?; go you merch; say you You gave me too much.',
  'Nobody would ever know. This is exactly when you decide who you are. | float you Only I will know; go coins merch; say you I choose honesty.');

add('forum', 'A moneylender offers you an easy loan for a purple-trimmed toga that everyone would admire.',
  'you 30 70, lender Moneylender 72 70 dark, toga Toga 55 63 item',
  'say lender Look rich today, pay tomorrow!; grow toga 1.4',
  'Decline. Admiration is outside your control, and debt would make you a slave. | glow you; say you I’ll keep my plain wool.',
  'Decline. A debt is a worry that would spoil every meal. | say you No debts, no worries.; hearts you',
  'Laugh, and point out that your cloak doubles as your bed. | spin you; say you My cloak is my house!; shake lender',
  'Pointless spending. Borrow nothing, and help people who lack clothing at all. | float you vanity −5 · warmth for 10; to you 12 70',
  'Refuse. Borrowing what you may not repay is making a false promise. | float you No false promises; say you I won’t borrow what I can’t repay.',
  'A toga worn to be seen is living for other people’s eyes. Refuse that bad faith. | float you For whose eyes?; spin you; to you 12 70');

add('palace', 'Your rich uncle will give you a fortune if you marry a senator’s child you have never met.',
  'you 30 70, uncle Uncle 70 70, gold Fortune 55 63 item',
  'say uncle Marry well, and this is yours.; hop uncle',
  'Marriage is a partnership in virtue. Meet them first and let character decide, not coin. | glow you; say you I’ll judge their character, not their purse.',
  'Marriage for money breeds turmoil. Politely decline and keep your peaceful life. | to you 12 70; hearts you; say you I like my quiet life.',
  'Laugh: love sold by the pound like fish? Refuse, loudly. | say you Love isn’t sold by the pound!; hop you 2',
  'If the match would make both families happier overall, consider it seriously. | float you joy of many?; float you misery of two?; say you Let me weigh it.',
  'Refuse to treat a person as a means to a fortune. | float you Persons, not prices; say you I won’t marry for gold.',
  'Marriage must be a commitment you choose freely, not one your uncle buys. | spin you; float you Freely chosen or not at all; to gold 55 120 & fade gold');

add('forum', 'At the market, a trader offers you a man in chains at a bargain price.',
  'you 25 70, trader Trader 55 70 dark, man Captive 82 70',
  'say trader A bargain! Strong and obedient.; shake man',
  'He is your kinsman by nature. Buy his freedom and treat him as an equal. | go you man; glow you; say you You are free, brother.',
  'Buy him only to free him, then welcome him into your garden as a friend. | go you man; hearts you; say you Come, be my friend.',
  'Shout that the trader is the real slave — chained to his greed. | say you You’re the one in chains!; shake trader; hop you',
  'His suffering outweighs any profit. Campaign to end the trade altogether. | float you his pain ≫ my gain; say you Abolish this market!',
  'Refuse: no one may be owned. A person is an end in himself, never a thing. | float you Never a thing; say you No person is property.; shake trader',
  'Even in chains he is free to choose his attitude — and you are free to act. Free him. | float you We are both free; go you man; spin you');

add('hill', 'You buy a rocky field from a poor farmer. Digging, you find a buried pot of gold.',
  'you 35 72, pot Gold 50 68 item, farmer Farmer 82 72',
  'hop you; grow pot 1.4; say farmer Good luck with those rocks!',
  'Fortune gave it to you. Use it justly — starting with a fair share for the farmer. | glow you; go pot farmer; say you Half is yours.',
  'Keep enough for a simple life, and spend the rest feasting with friends — the farmer included. | hearts you; go you farmer; say you Dinner is on me!',
  'Bury it again. Gold was happier underground. | squash you; to pot 50 95 & fade pot; say you Sleep well, gold.',
  'Give it where it creates the most happiness — the farmer’s family first. | float you farmer’s family +20; go pot farmer',
  'Ask: if I were the farmer, could I accept this? Then tell him the truth. | float you Could I will this for all?; go you farmer; say you I found something in your old field.',
  'The gold means nothing until you decide what it is for. Decide. | spin you; float you Meaning is mine to give');

add('street', 'Your friend asks to borrow money — for the third time this month.',
  'you 30 70, friend Friend 66 70',
  'go friend you; say friend Just one more time...',
  'Help him if you can, but speak frankly about his habits. Kindness and honesty together. | glow you; say you I’ll help — but we must talk.',
  'Lend it. A friend in trouble matters far more than a few coins. | hearts you; go you friend; say you Of course, friend.',
  'Give him all your money and tell him to learn to need less. | hop you; say you Take it all — and need less!',
  'Will this loan actually help him, or feed the problem? Give whatever does real good. | float you help or harm?; say you Let’s fix the cause.',
  'Lend only if he honestly promises to repay — then hold him to his word. | float you A promise binds; say you Promise me, truly.',
  'His choices are his to face. Refuse to carry the weight of his freedom for him. | float you His choice. His life.; to you 15 70');

add('road', 'A stonemason offers to build you a magnificent tomb beside the Appian Way.',
  'you 30 70, mason Mason 70 70, stone Marble 55 63 item',
  'say mason Everyone will remember you!; grow stone 1.6',
  'Tombs serve the vanity of the living. Leave behind a virtuous memory instead. | glow you; say you My deeds are my monument.',
  '“Where death is, I am not.” Spend the money on friends while you are alive. | hearts you; to you 12 70; say you I’ll spend it on supper.',
  'Toss my body to the crows. Why would a corpse need marble? | hop you 2; say you Feed me to the crows!',
  'Build a public fountain instead — thousands could drink from it. | float you 1 tomb vs 1000 drinkers; say you Make it a fountain.',
  'Spend only on what you could justify to anyone. A tomb for pride fails that test. | float you Justify it to all?; shake stone',
  'Your life is your only monument, and you are still writing it. | spin you; float you Still writing it');

add('street', 'Your rival baker falls ill. His customers begin wandering toward your shop.',
  'you 35 70, rival Rival 78 72, buyer Customer 58 70',
  'shake rival; go buyer you',
  'Serve them fairly, and send soup to your rival. Fortune’s wheel turns for us all. | glow you; go you rival; say you Get well, friend.',
  'Serve them, but keep your bakery small. More customers just mean more worry. | hearts you; say you A few loaves, then home.',
  'Tell the customers they could bake their own bread, like free people. | say you Bake your own bread!; hop you; to buyer 92 70',
  'Serve everyone well, and help your rival recover — a town with two bakeries is better off. | float you 2 bakeries > 1; go you rival',
  'Serve them, but never spread rumours about him. Do only what you’d accept done to you. | float you No rumours; say you He’ll be back soon.',
  'Compete or help — either is open to you. Just be honest with yourself about why. | float you Why am I doing this?; spin you');

add('forum', 'The census officer asks your wealth. Lying would halve your taxes.',
  'you 30 70, officer Officer 70 70',
  'say officer How much do you own?',
  'Tell the truth. Paying your share is your duty as a citizen. | glow you; say you Exactly this much.',
  'Tell the truth. The fear of being caught would gnaw at you for years. | float you no fear · no worry; say you Here is the honest figure.',
  'Declare proudly that you own one cloak, one cup and nothing else. | say you One cloak. Tax it!; hop you 2',
  'Pay honestly. Taxes fund the aqueducts and grain that everyone depends on. | float you taxes → aqueducts; say you Here’s my true wealth.',
  'Never lie. A census where everyone lied could not exist at all. | float you If all lied?; say you The truth, always.',
  'Lying here would be fleeing from yourself. Own your choice in full view. | float you No hiding; say you I stand behind the truth.');

add('street', 'A grinning gambler offers to double your money on a single throw of the dice.',
  'you 30 70, gambler Gambler 70 70 dark, dice Dice 52 64 item',
  'say gambler Double or nothing!; spin dice',
  'Fortune is not yours to command. Decline and keep your mind steady. | glow you; say you I don’t bargain with Fortune.',
  'Gambling brings anxious nights. Walk away. | to you 12 70; hearts you',
  'Throw your coins in the air for the street children and walk off laughing. | burst you; say you Fortune, meet the children!',
  'The odds are against you, and losses hurt more than wins delight. Decline. | float you expected value < 0; say you Bad odds.',
  'Decline — and say aloud that his dice are loaded, because honesty demands it. | go you dice; float you Loaded!; say you These dice are rigged.',
  'Embrace the absurd: throw once, freely, knowing it means nothing at all. | spin dice; float you Absurd!; hop you');

add('villa', 'A wealthy widow hints she will leave you her fortune if you visit daily and flatter her.',
  'you 30 70, widow Widow 70 70',
  'say widow Tell me I’m still beautiful...',
  'Visit out of kindness if she is lonely — but never flatter. | glow you; go you widow; say you I’ll visit, and speak honestly.',
  'Visit, and enjoy the conversation and the figs. Friendship, not flattery. | go you widow; hearts you; say you Pass the figs!',
  'Tell her she is old and wrinkled, which is perfectly natural. | say you Wrinkled — as nature intended!; hop you',
  'A lonely woman’s happiness matters. A few kind words may do real good. | float you her joy +7; say you You look radiant.',
  'Kindness yes, lies no — and never treat her as a means to her money. | float you Not a means; go you widow; say you I come for you, not your gold.',
  'Flattery is a role you’d be acting out. Visit only if you truly want to, as yourself. | spin you; float you No roles');

add('forum', 'Your neighbours urge you to run for consul. The campaign would consume your whole life.',
  'you 50 70, n1 Neighbour 25 70, n2 Neighbour 75 70',
  'hop n1 & hop n2; say n2 Rome needs you!',
  'If you can serve the common good, accept. Duty to the city is part of virtue. | glow you; grow you 1.2; say you I will serve.',
  'Politics is a storm. Decline and live unnoticed. | to you 12 70; hearts you; say you Not for me.',
  'Run on a promise to abolish money, and campaign from a barrel. | squash you; say you Vote for nothing!; hop n1',
  'Run if you’d govern better than the alternatives. Millions of lives are affected. | float you millions affected; say you I’ll run.',
  'Run only if you can campaign without making a single promise you won’t keep. | float you Honest promises only; say you I promise only what I can do.',
  'Don’t let your neighbours choose your path. Decide what life you are building. | float you My project?; spin you');

add('forum', 'On a jury, you hear that a mother stole bread to feed her starving children. She is clearly guilty.',
  'you 30 70, mother Mother 60 70, judge Judge 85 70',
  'say mother They were starving!; cry mother',
  'Judge justly but mercifully. The law must be upheld with compassion. | glow you; say you Guilty — but grant mercy.',
  'Vote for leniency, and quietly bring her family bread. | hearts you; go you mother',
  'Declare that the real crime is the city’s hoarded grain. | say you Put the granaries on trial!; shake judge',
  'Punishing her helps no one and harms her children. Vote to acquit. | float you punishment = pure pain; say you Acquit her.',
  'The law must apply equally. Find her guilty, then petition for her pardon. | float you One law for all; say you Guilty — and I plead for pardon.',
  'No law can relieve you of responsibility for this verdict. Choose as yourself. | float you My verdict. Mine.; spin you');

add('palace', 'You see a senator quietly accept a bribe from a grain merchant.',
  'you 25 70, sen Senator 60 70, merch Merchant 82 70 dark, bag Bribe 72 64 item',
  'go bag sen; say sen Our little secret...',
  'Report it calmly. Justice is a virtue even when it is dangerous. | glow you; say you I saw that, Senator.',
  'Tangling with senators is dangerous. Stay out of it and protect your peace. | to you 8 70; float you not my storm',
  'Shout it across the whole Senate floor. | hop you 3; say you BRIBERY! Over here!',
  'Expose it. Corruption raises grain prices for thousands of families. | float you thousands overcharged; say you This must come out.',
  'Report it. A rule you would enforce on others can’t be ignored for a senator. | float you Duty to report; go you sen',
  'Silence is also a choice. Make it, or speak — but don’t pretend you had none. | float you Silence is a choice; spin you');

add('street', 'A mob drags a foreigner forward, screaming that he started a fire. There is no proof.',
  'you 50 70, mob Mob 84 66 dark, man Foreigner 66 70',
  'hop mob 3; say mob Burn him!; shake man',
  'Stand calmly before the mob and demand justice, fearing nothing but injustice. | go you man; glow you; say you Prove it first.',
  'Mobs are madness. Slip away, then quietly help him escape later. | to you 15 70; float you peace first',
  'Mock them: “Brave lions — a hundred against one!” | say you Brave lions, a hundred to one!; shake mob',
  'Lynchings make everyone less safe. Calm the mob for the good of all. | float you fear for all; say you Wait — think!',
  'No one may be punished without a fair trial. Insist on the law. | float you Due process; go you man; say you Trial first.',
  '“The crowd is untruth.” Stand apart and face them as yourself. | float you The crowd is untruth; grow you 1.2');

add('palace', 'The Emperor asks you to write a poem calling his last war a glorious victory. It was a disaster.',
  'you 30 70, caesar Caesar 70 66 emp',
  'say caesar Write of my glory!',
  'Decline calmly. Your words are yours; he can only threaten your body. | glow you; say you I write only the truth.',
  'Avoid the palace altogether. A garden is safer than an emperor’s favour. | say you I have a garden to tend.; to you 6 70 & fade you',
  'Write an ode to his “glorious retreat” and recite it in the Forum. | say you O mighty runner!; hop you 2',
  'If the poem keeps the city calm and prevents riots, write it. | float you calm city +; say you Fine, I’ll write it.',
  'Refuse. Lying to the public treats them as tools. | float you No lies; say you I won’t deceive the people.',
  'Writing his lies would be bad faith. Choose to be an honest author. | float you Whose words?; spin you');

add('street', 'A new law orders you to report neighbours who worship forbidden foreign gods. Yours does.',
  'you 30 70, nb Neighbour 70 70, off Official 88 70 dark',
  'say off Report them, citizen!',
  'Every person shares in the same divine reason. Don’t betray a harmless neighbour. | glow you; go you nb',
  'The gods don’t meddle with mortals. Leave your neighbour in peace. | hearts you; say you Pray as you like.',
  'Declare you worship nothing at all — and report yourself! | hop you; say you Arrest me too!',
  'Persecution causes misery and gains nothing. Refuse, and lobby to repeal the law. | float you misery +100; say you Repeal it!',
  'An unjust law that punishes belief can’t bind you. Refuse openly. | float you Freedom of conscience; say you I won’t report anyone.',
  'Each person must choose their own meaning, gods included. Defend that freedom. | float you Their choice; spin you');

add('forum', 'A candidate is handing out free bread in exchange for votes. The crowd loves him.',
  'you 30 70, cand Candidate 70 70, crowd Crowd 88 64, bread Bread 60 63 item',
  'go bread you; say cand Remember my name!; hop crowd 2',
  'Take nothing. Vote for the most virtuous candidate, not the most generous. | glow you; go bread cand',
  'Eat the bread — it’s good bread — but stay out of politics. | hearts you; squash you',
  'Feed the bread to a dog and announce the dog has more integrity. | say you Even the dog won’t vote for him!; hop you',
  'Vote for whoever will feed the city in the long run, not just today. | float you long-run welfare; say you Bread today, famine tomorrow?',
  'Refuse it. A bought vote is a corrupted vote. | float you Votes are not for sale; shake cand',
  'Your vote is your own act. Don’t let a loaf decide it. | float you My vote; spin you');

add('forum', 'Your friend embezzled public funds. The court calls you to testify.',
  'you 30 70, friend Friend 60 70, judge Judge 85 70',
  'say judge Speak the truth.; shake friend',
  'Tell the truth with sorrow. Justice outranks friendship. | glow you; say you He took it.',
  'Refuse to testify. Your friendship is too precious to destroy. | hearts you; go you friend',
  'Testify — and add that half the Senate does the same. | say you He stole — like all of you!; shake judge',
  'Testify. The stolen funds hurt thousands who depended on them. | float you thousands harmed; say you He took it.',
  'You may not lie under oath, whatever you feel. | float you No lies under oath; say you I must tell the truth.',
  'Friendship or justice — no one can choose for you. Choose, and live with it. | float you Anguish; spin you; say you I choose.');

add('road', 'A general proposes burning a rebel village to end the rebellion quickly.',
  'you 30 70, gen General 70 70 dark',
  'say gen Burn it, and the war ends.',
  'Refuse. Cruelty corrupts the soul, and even enemies are fellow humans. | glow you; say you They are our kin too.',
  'War is the opposite of tranquillity. Refuse, and push for peace talks. | hearts you; say you Let’s talk peace.',
  'Ask him whether he’d burn his own estate if it ended the war faster. | say you Burn your villa first!; shake gen',
  'Count the dead on both sides, and look for the plan that kills the fewest. | float you innocents killed?; float you find fewer deaths',
  'Never kill innocents as a means to an end. Refuse absolutely. | float you Innocents are ends; say you Never.',
  'You will carry this choice forever. Refuse to hide behind “orders”. | float you No orders to hide behind; spin you');

add('temple', 'A crowd wants to tear down the temple of an unpopular foreign god.',
  'you 45 70, crowd Crowd 80 66 dark, priest Priest 20 70',
  'hop crowd 2; say crowd Tear it down!; shake priest',
  'Defend it calmly. Every people honours the divine in its own way. | glow you; go you priest',
  'The gods don’t care either way — so don’t let anyone get hurt over it. | float you gods don’t care; say you Leave it be.',
  'Suggest they tear down every temple while they’re at it. | say you All of them, then!; hop you',
  'Destroying it causes pain to worshippers and gains no one anything. Stop them. | float you pain, no gain; say you Stop!',
  'Respect their freedom to worship as you’d want your own respected. | float you Respect for all; say you Leave their temple.',
  'Their faith is the meaning they chose. Defend the freedom to choose. | float you Freedom to believe; spin you');

add('palace', 'Senators invite you to join a plot to assassinate the tyrant at dawn.',
  'you 30 70, plot Conspirator 66 70 dark, dagger Dagger 50 64 item',
  'go dagger you; say plot Join us — for Rome.',
  'If it serves the common good, do your duty bravely. Fear only dishonour. | glow you; grow you 1.2; say you For Rome.',
  'Plots end in blood and fear. Withdraw quietly to your garden. | to you 8 70; hearts you',
  'Tell them killing one tyrant just makes room for the next one. | say you Next tyrant, please!; spin you',
  'If removing him spares thousands of lives, join — and plan for the least bloodshed. | float you thousands saved?; say you If it saves lives.',
  'Refuse to murder, even a tyrant. Work for lawful change. | float you Murder can’t be universal; go dagger plot',
  'Act or refuse — but know this choice will define you. Decide. | float you This defines me; spin you');

add('forum', 'In a crisis, the Senate offers you absolute power for six months.',
  'you 50 70, s1 Senator 25 70, s2 Senator 75 70',
  'say s1 Save us, dictator!; hop s2',
  'Accept as a duty, and hand it back the moment the crisis ends — like Cincinnatus. | glow you; grow you 1.3; float you Then back to my plough',
  'Power is the worst anxiety of all. Refuse. | to you 12 70; hearts you',
  'Accept, decree that everyone gives away their wealth, and resign at lunch. | say you Decree: own nothing!; hop you 2',
  'Accept if you can produce the best outcomes for the most citizens. | float you best outcomes; say you I accept.',
  'Accept only to restore the laws — never to rule above them. | float you Restore the law; say you Only to restore order.',
  'Power reveals who you really are. Choose, knowing that. | float you Who am I with power?; spin you');

add('road', 'You are conscripted to fight in a distant war you believe is unjust.',
  'you 30 70, cent Centurion 70 70 dark',
  'say cent Pack your shield!',
  'Go if your duty requires it, but act with justice in every deed. | glow you; say you I will serve justly.',
  'Avoid it if you possibly can. War is pain and fear. | to you 8 70; float you no pain, no fear',
  'Turn up unarmoured and ask which barbarian wants your cloak. | spin you; say you Here’s my armour — skin!',
  'Refusing may cost you, but an unjust war costs thousands. Refuse. | float you war cost: thousands; say you I refuse.',
  'Refuse to take part in what you believe is wrong, and accept the penalty. | float you Conscience over command; say you I cannot.',
  'No one can make this choice for you — not even the empire. | float you My choice alone; spin you');

add('road', 'After the battle, a wounded enemy soldier begs you for his life.',
  'you 30 70, enemy Enemy 66 72 dark',
  'cry enemy; say enemy Mercy!',
  'Spare him. He is a citizen of the world, fighting wherever fate placed him. | go you enemy; glow you',
  'Spare him and bandage him. Causing pain helps no one. | go you enemy; hearts you',
  'Spare him, and tell him you were both fooled by your kings. | say you We’re both fools of kings!; hop you',
  'Spare him. A dead prisoner adds suffering and gains nothing. | float you no gain from death; go you enemy',
  'He is a person with dignity, not a thing. You must spare him. | float you Dignity; go you enemy',
  'Right now, you decide what kind of soldier you are. | float you I am what I do; go you enemy');

add('arena', 'Your general orders the legion to execute one man in ten for cowardice.',
  'you 50 70, gen General 82 70 dark, s1 Soldier 25 70',
  'say gen Draw lots!; shake s1',
  'Refuse to take part in injustice, and accept whatever punishment follows. | glow you; say you I won’t do it.',
  'Avoid the horror however you can. Such memories would destroy your peace. | float you avoid lifelong pain; to you 12 70',
  'Volunteer to go first — and laugh at how frightened the general looks. | say you Kill me first, coward!; shake gen',
  'Killing loyal men creates terror, not discipline. Argue against it for everyone’s sake. | float you morale −, fear +; say you This harms everyone.',
  'Executing men by lottery uses them as mere means. Refuse. | float you Not by lottery; say you Never.',
  'Refusing may cost your life. Choose anyway, and own it. | float you I choose; grow you 1.2');

add('street', 'Your city is besieged and starving. The enemy promises mercy if you open the gates.',
  'you 50 70, elder Elder 25 70, gate Gate 86 64 item',
  'shake elder; say elder We are starving...',
  'Face it with courage and do whatever reason says serves the people best. | glow you; say you We’ll choose what is just.',
  'Surrender. Living peacefully under new rulers beats dying for pride. | hearts you; go you gate',
  'Open the gates. Who cares which king owns the walls? | go you gate; say you Kings come and go!',
  'Surrender if it saves the most lives. | float you lives saved: most; go you gate',
  'Surrender only if the enemy’s promise is credible and no one is betrayed. | float you Trust, but verify; say you Swear it.',
  'Every option is anguish. Choose anyway — the people need someone who decides. | float you Anguish; spin you; go you gate');

add('villa', 'Your friend deserted the legion and begs you to hide him.',
  'you 40 70, friend Friend 72 70',
  'go friend you; say friend Hide me, please!',
  'Help him face the consequences with courage, rather than run. | glow you; say you Face it — I’ll stand with you.',
  'Hide him. A friend matters more than the legion. | hearts you; to friend 12 70',
  'Hide him, and congratulate him on quitting a stupid war. | hop you; say you Smartest man in the legion!',
  'If the war is unjust, hiding him does more good than harm. Hide him. | float you good > harm?; to friend 12 70',
  'You may not lie to the officers. Shelter him openly or not at all. | float you No lies; say you I won’t lie for you.',
  'He chose. Now you choose. Don’t pretend his choice makes yours for you. | float you My choice; spin you');

add('forum', 'After a victory, the general offers you a cart full of captured treasure.',
  'you 30 70, gen General 72 70, cart Spoils 55 63 item',
  'grow cart 1.5; say gen Your share!',
  'Accept calmly and use it for good. Treasure is neither good nor bad. | glow you; say you I’ll use it wisely.',
  'Take a little for a simple life. More would only bring anxiety. | hearts you; say you Just a small purse.',
  'Refuse it, and ask for a bowl of lentils instead. | say you Lentils, please!; hop you',
  'Give it back to the people it was plundered from. | float you return it to victims; go cart gen',
  'Stolen property is still stolen. Refuse it. | float you Theft is theft; shake cart',
  'Treasure is meaningless until you decide what it is for. | float you What is it for?; spin you');

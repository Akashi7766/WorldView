// Family, love, friendship, work. Answer order: Stoic, Epicurean, Cynic, Utilitarian, Kantian, Existentialist.

add('road', 'A barbarian chief offers peace — if Rome hands over ten noble children as hostages.',
  'you 30 70, chief Chief 72 70 dark, kid Child 50 73',
  'say chief Ten children, and peace.; shake kid',
  'Accept if reason says it serves the peace, and make sure the children are treated well. | glow you; float you peace serves all',
  'Peace above all. Accept, and send the children letters and honey cakes. | hearts you; go you kid',
  'Offer yourself instead — you’re cheaper to feed. | go you chief; say you Take me. I eat very little!',
  'Ten hostages to save ten thousand lives. Accept. | float you 10 vs 10,000; say you Accepted.',
  'Children cannot be traded as bargaining chips. Refuse. | float you Never merely a means; go you kid',
  'Whatever you decide, you decide for those children. Bear that weight. | float you Responsibility; spin you');

add('road', 'The retreat is sounded. Your shield-mate lies wounded behind you.',
  'you 50 70, mate Shield-mate 28 72, enemy Enemy 92 70 dark',
  'to enemy 76 70; say mate Don’t leave me!',
  'Carry him. Courage and loyalty are virtues, and death is no evil. | go you mate; glow you; to you 12 70 & to mate 18 72',
  'Carry him. Friendship is the greatest good, even in war. | go you mate; hearts you; to you 12 70 & to mate 18 72',
  'Turn and hurl insults at the enemy to buy him time. | go you enemy; say you Come on then, cowards!; shake enemy',
  'If carrying him gets you both killed, the sum says run. If not, carry him. | float you can both live?; go you mate',
  'You owe him aid as a fellow person. Do your duty. | float you Duty to aid; go you mate',
  'This is your moment of choice. Who will you be? | float you Who am I?; go you mate');

add('villa', 'Your son announces he wants to become an actor — a scandalous profession in Rome.',
  'you 30 70, son Son 66 70',
  'hop son 2; say son I’ll be a star!',
  'Every role can be played with virtue. Support him and urge him to play it well. | glow you; say you Play your part well.',
  'If it brings him joy without great pain, let him. | hearts you; say you Be happy, son.',
  'Cheer — at least actors admit they’re pretending. | hop you; say you Finally, an honest liar!',
  'If he’ll make thousands of people happy on stage, wonderful. | float you joy for audiences; say you Go for it.',
  'Respect his autonomy. It is his rational choice to make. | float you His autonomy; say you It’s your life to direct.',
  'He creates himself through his choices. Let him choose, and own it. | float you Existence before essence; spin you');

add('villa', 'Your daughter wants to study philosophy instead of marrying. Your relatives are scandalised.',
  'you 30 70, dau Daughter 60 70, aunt Aunt 86 70',
  'say dau I want to study!; say aunt Disgraceful!',
  'Musonius Rufus taught that women should study philosophy too. Support her. | glow you; go you dau; say you Study, daughter.',
  'Epicurus welcomed women into the Garden. Of course she should study. | hearts you; go you dau',
  'Hipparchia did it in a beggar’s cloak. Send her to the agora! | hop you 2; say you Go, and be shameless!',
  'A trained mind will do more good in the world. Support her. | float you more wisdom = more good; say you Study!',
  'She is a rational being, and her reason deserves to be developed. | float you Reason in everyone; go you dau',
  '“One is not born, but becomes.” Let her become who she chooses. | float you She becomes herself; spin you');

add('garden', 'You realise you’ve fallen in love with your best friend’s spouse.',
  'you 30 70, spouse Spouse 62 70, friend Friend 86 70',
  'hearts you; go spouse you',
  'Master the passion. Feelings arrive; your judgement decides whether to act. | glow you; to you 12 70; float you passion mastered',
  'This path leads only to turmoil. Withdraw from it. | to you 8 70; float you avoid turmoil',
  'Confess it openly to both of them. Secrets are for cowards. | say you I love you both, awkwardly!; hop you',
  'Acting on it would cause far more pain than joy across three lives. Don’t. | float you pain ×3 > joy ×1; to you 12 70',
  'You cannot betray your friend’s trust. Duty forbids it. | float you Trust is a duty; to you 12 70',
  'You are responsible for what you do with this feeling. Don’t blame destiny. | float you Feelings aren’t fate; spin you');

add('villa', 'Your ageing father needs constant care. It is costing you your career.',
  'you 30 70, dad Father 66 72',
  'shake dad; say dad I’m sorry to be a burden...',
  'Care for him calmly. It is your role as his child, and a role played well is virtue. | glow you; go you dad',
  'Care for him, and make his days pleasant. Family friendship is life’s joy. | go you dad; hearts you',
  'Tell him to come and live simply with you — no expenses, plenty of fresh air! | hop you; say you Fresh air for both of us!',
  'Find the arrangement that gives the most wellbeing to both of you. | float you balance both lives; go you dad',
  'Gratitude and duty require you to care for him. | float you Filial duty; go you dad',
  'Choosing him over your career — or not — is yours alone to decide. | float you My choice; go you dad');

add('street', 'Your child broke the neighbour’s window — and is now lying about it.',
  'you 30 70, kid Child 50 73, nb Neighbour 84 70',
  'say nb Who broke my window?; say kid Not me!',
  'Teach him gently: the window doesn’t matter, but his character does. | glow you; go you kid; say you Tell the truth.',
  'Teach him that lies bring fear and worry, while honesty is easy. | go you kid; float you no fear, no worry',
  'Laugh, and suggest everyone remove their windows. Fresh air! | hop you; say you Who needs windows?',
  'Pay for the window, and teach him that honesty keeps everyone happier. | float you trust builds happiness; go you nb',
  'He must confess. Lying can never be a universal rule. | float you Lying fails the test; go kid nb',
  'Let him choose to own up. The responsibility must be his. | float you His responsibility; spin you');

add('villa', 'Your spouse wants an anniversary feast that would cost half a year’s savings.',
  'you 30 70, spouse Spouse 66 70',
  'say spouse Let’s celebrate in style!; hop spouse',
  'Celebrate with a modest dinner. Love is not measured in silver. | glow you; say you Our love needs no silver.',
  'Simple food, good wine and close friends — the best feast of all. | hearts you; say you Just us and our friends.',
  'Suggest a picnic on the kerb, eating whatever falls off the market carts. | say you Picnic on the kerb!; hop you',
  'Celebrate cheaply and give the savings to feed the poor. | float you feast vs 100 meals; say you Small dinner, big gift.',
  'Talk it through honestly and decide as equals, respecting each other’s reasons. | float you Mutual respect; go you spouse',
  'What does your marriage mean to you? Celebrate that, authentically. | float you What do we mean?; spin you');

add('street', 'Your brother asks you to lie to his wife about where he was last night.',
  'you 30 70, bro Brother 62 70',
  'go bro you; say bro Cover for me?',
  'Refuse, and urge him toward virtue. | glow you; say you Be better, brother.',
  'Keep well out of the drama. | to you 8 70; float you not my drama',
  'Tell his wife yourself — loudly, in the street. | say you HE WAS AT THE TAVERN!; hop you 2',
  'Consider who gets hurt most. A lie may keep the peace — or deepen the betrayal. | float you who gets hurt?',
  'Refuse to lie. Deceiving his wife treats her as a mere means. | float you No deception; shake bro',
  'He made his choice. Don’t let him drag you into his bad faith. | float you His choice, not mine; spin you');

add('street', 'You find a baby abandoned at the city gate, crying in the cold.',
  'you 30 70, baby Baby 62 72 item',
  'shake baby',
  'Take the baby in. Every human is your kin by nature. | go you baby; glow you',
  'Take her home. A child’s laughter is one of life’s great pleasures. | go you baby; hearts you',
  'Raise her the way a dog raises its pups — simply, naturally, without fuss. | go you baby; hop you',
  'Rescue her, then find the home where she will flourish most. | float you most flourishing; go you baby',
  'You have a duty to rescue a life in need. Do it. | float you Duty to rescue; go you baby',
  'This choice will shape your whole life. Make it freely. | float you A new project; go you baby');

add('temple', 'At your mother’s funeral, hired mourners wail. Everyone expects you to wail louder.',
  'you 50 70, m1 Mourner 25 70, m2 Mourner 75 70',
  'cry m1 & cry m2; say m1 Wail! Wail!',
  'Grieve quietly. She was mortal; you always knew this day would come. | glow you; float you She was mortal',
  'Remember her with gratitude for the happy times. Grief fades; sweet memories stay. | hearts you; float you sweet memories',
  'Send the paid mourners home. Grief isn’t a performance. | say you Go home, actors!; to m1 2 70 & to m2 98 70',
  'Grieve in whatever way helps the family heal most. | float you heal everyone; go you m1',
  'Honour her with sincere words, not hired tears. | float you Sincerity; say you She was good.',
  'Grieve as you truly feel, not as custom dictates. | float you Authentic grief; cry you');

add('villa', 'Your teenager sneers at dinner: “Philosophy is useless!”',
  'you 30 70, teen Teenager 66 70',
  'say teen Philosophy is useless!',
  'Smile calmly. His opinion is his; your peace is yours. | glow you; say you Perhaps. Pass the salt.',
  'Laugh it off. Dinner is too pleasant to spoil. | hearts you; say you More bread?',
  'Agree heartily, then eat with your hands to prove the point. | say you Utterly useless!; squash you',
  'Show him how ideas have improved millions of lives. | float you ideas → reforms; say you Ideas change lives.',
  'Respect his reason: ask him to argue his case properly. | float you Respect his reason; say you Convince me.',
  'Tell him he’s right — nothing has meaning until he gives it some. | float you Meaning is made; spin you');

add('villa', 'Your spouse snores like a thunderstorm every single night.',
  'you 30 70, spouse Spouse 66 72',
  'squash spouse; float spouse ZZZZZ',
  'The noise is outside your control. Train your mind to sleep through it. | glow you; float you not in my control',
  'Get wax earplugs. A small fix for a great deal of peace. | hearts you; squash you',
  'Go and sleep outside under the stars, like a free animal. | to you 6 70; squash you',
  'Find whatever solution gives both of you the most sleep. | float you max total sleep',
  'Tell them honestly and kindly. They deserve to know. | go you spouse; say you Dear, you snore.',
  'Choose to love even the snoring. It’s part of the life you chose. | hearts you; float you I chose this');

add('palace', 'At your friend’s wedding you must toast the groom, whom you know gambles away everything.',
  'you 30 70, groom Groom 66 70, bride Bride 84 70',
  'say bride A toast!; hop groom',
  'Give a sincere toast to virtue, and speak to the groom privately later. | glow you; say you To a life of virtue!',
  'Keep the toast warm and light. It’s a feast, not a trial. | hearts you; say you To joy and friendship!',
  'Raise your cup “to the dice that will soon own this house!” | say you To the dice!; shake groom',
  'Joy today and a private warning tomorrow does the most good overall. | float you joy now, help later',
  'Don’t praise what you know is false. Toast only true things. | float you Only true words; say you To honesty in marriage.',
  'Speak as yourself, not as the role of polite guest. | float you No masks; spin you');

add('street', 'Your friend asks your honest opinion of his plan to sell snow in summer.',
  'you 30 70, friend Friend 66 70',
  'say friend Brilliant, right?; hop friend',
  'Tell him kindly but truthfully. Honesty is a form of friendship. | glow you; say you It will melt, friend.',
  'Tell him gently. You don’t want him to suffer a ruinous loss. | hearts you; say you Maybe think again?',
  'Laugh until you fall over. | hop you 3; say you Snow! In summer!',
  'Tell him the truth — it will spare him and his family pain later. | float you prevent future pain; say you It won’t work.',
  'He asked for honesty. You owe it to him. | float you Honesty owed; say you It won’t work.',
  'It’s his life’s project. Tell him the truth, then let him choose. | float you His choice; spin you');

add('forum', 'You discover your closest friend told your deepest secret to the whole Forum.',
  'you 30 70, friend Friend 66 70, crowd Crowd 88 66',
  'say crowd We know!; hop crowd 2; shake you',
  'Other people’s actions aren’t in your control. Forgive, and be wiser with secrets. | glow you; float you not in my control',
  'Friendship is precious. Talk it out over dinner. | go you friend; hearts you',
  'Shout the secret even louder. Now it has no power over you. | say you YES, IT’S TRUE!; hop you 2',
  'Repair what you can and limit the harm from here on. | float you minimise damage; go you friend',
  'Tell him plainly that he broke your trust — and forgive him as a person. | float you Trust broken; go you friend; say you That was wrong.',
  'The crowd’s gaze can’t define you unless you let it. | float you I define me; spin you');

add('street', 'Two of your friends are feuding. Each demands that you take their side.',
  'you 50 70, f1 Friend 25 70, f2 Friend 75 70',
  'say f1 Choose me!; say f2 No, me!',
  'Side with justice, not with either person. | glow you; float you justice, not sides',
  'Invite both to dinner. Wine heals more than arguments. | hearts you; go f1 you & go f2 you',
  'Tell them they are both being ridiculous. | say you You’re both idiots!; hop you',
  'Help them find the solution that leaves both happiest. | float you best for both; say you Let’s compromise.',
  'Judge the issue on principle, not on which friend you like better. | float you Principle first',
  'Refuse to be defined by their war. Take your own position. | float you My own stance; spin you');

add('arena', 'Your friend wins the poetry crown you have dreamed of winning for years.',
  'you 30 70, friend Friend 66 70, crown Crown 66 56 item',
  'hop friend 2; burst friend',
  'Congratulate him sincerely. Prizes are indifferent; your effort was your own. | glow you; go you friend',
  'Celebrate with him. His joy can be your joy too. | go you friend; hearts you',
  'Remind him that a crown of leaves is just a salad. | say you Lovely salad!; hop you',
  'His happiness counts exactly as much as yours. Celebrate the total joy. | float you joy is joy; go you friend',
  'Congratulate him honestly. Envy treats his success as your loss. | float you No envy; go you friend',
  'Your worth isn’t a crown. Choose your next work. | float you Onward; spin you');

add('street', 'Your friend asks you to help him move house — on your only day of rest.',
  'you 30 70, friend Friend 66 70, box Crate 55 64 item',
  'say friend Help me move?; go box you',
  'Help willingly. Serving others is living according to nature. | glow you; go you box',
  'Help — then insist on a long shared meal afterwards. | hearts you; go you box',
  'Tell him he owns far too much. Throw half of it away! | say you Toss it all!; to box 55 120 & fade box',
  'Help. Your lost rest is small compared to his need. | float you small cost, big help; go you box',
  'Help if you promised; if not, decide honestly. | float you Did I promise?',
  'Spend your one free day as you truly choose. | float you My day; spin you');

add('forum', 'An old friend who became rich walks past you in the Forum without a word.',
  'you 30 70, rich Rich_Friend 66 70',
  'to rich 90 70',
  'His behaviour isn’t in your control. Wish him well. | glow you; float you not in my control',
  'Spend your time with friends who value you. | hearts you; to you 12 70',
  'Call after him: “Did your gold make you deaf?” | say you Did gold make you deaf?; hop you',
  'Let it go. Resentment just adds unhappiness to the world. | float you no extra misery',
  'Greet him anyway, with respect. | float you Respect anyway; say you Hello, old friend.',
  'He has chosen who to be. So have you. | float you We choose ourselves; spin you');

add('villa', 'A dying friend asks you to look after his old, smelly dog.',
  'you 30 70, friend Friend 68 72, dog Dog 50 74 item',
  'say friend Look after him...; hop dog',
  'Promise, and keep your word. Loyalty is a virtue. | glow you; go dog you',
  'Of course. A dog is a cheerful companion. | hearts you; go dog you',
  'Gladly! Dogs are the best philosophers alive. | hop you 2; say you My new teacher!',
  'Care for it. The dog’s wellbeing counts too. | float you dog’s happiness counts; go dog you',
  'A promise to the dying is sacred. Keep it. | float you Promise kept; go dog you',
  'Choose this responsibility freely, or refuse it honestly. | float you Freely chosen; go dog you');

add('villa', 'You forgot your friend’s birthday feast. He is hurt.',
  'you 30 70, friend Friend 66 70',
  'cry friend; say friend You forgot!',
  'Admit the fault calmly and make amends. | glow you; say you I was wrong. Forgive me.',
  'Throw him a surprise feast tomorrow. | hearts you; burst you',
  'Birthdays are an invention anyway — but yes, sorry. | say you Every day is a birthday!; hop you',
  'Make it up to him in whatever way brings him the most happiness. | float you max his joy; go you friend',
  'Apologise sincerely, with no excuses. | float you No excuses; say you I am truly sorry.',
  'Own it fully. Don’t blame being busy. | float you I own it; say you I forgot. That’s on me.');

add('palace', 'Your patron presents your poem to the Emperor as his own work.',
  'you 25 70, patron Patron 55 70, emp Emperor 82 66 emp',
  'say patron My finest work!; hop emp',
  'Credit is not in your control; your craft is. Write the next one. | glow you; float you the craft is mine',
  'Fame is a trap. Let him have it, and enjoy your quiet. | hearts you; to you 8 70',
  'Recite the next verse from memory, loudly. He can’t. | say you And the next verse goes...; shake patron',
  'If the poem brings joy, does it matter whose name is on it? Let it go. | float you joy is the same',
  'Speak up truthfully. The deception wrongs the Emperor too. | float you Truth to all; say you That poem is mine.',
  'Your work is your self. Don’t let him steal your existence. | float you My work, my self; spin you');

add('street', 'You are offered a promotion — if you fire three loyal workers to cut costs.',
  'you 30 70, boss Boss 72 70 dark, w Workers 52 72',
  'say boss Fire them, and the job is yours.',
  'Refuse to act unjustly for status. | glow you; say you Not at their expense.',
  'The promotion would only bring stress. Decline. | hearts you; to you 10 70',
  'Quit on the spot, and invite the workers to live freely with you. | hop you; go w you',
  'If cuts must happen, find the plan that hurts the fewest people. | float you least harm',
  'Don’t sacrifice people as mere means to your career. | float you Not means; go you w',
  'Power is being offered. Decide what kind of person you are. | float you Who am I?; spin you');

add('street', 'Your apprentice now carves better statues than you do.',
  'you 30 70, app Apprentice 62 70, statue Statue 82 62 item',
  'grow statue 1.5; burst statue',
  'Rejoice. Teaching well is a virtue, and his excellence is your success. | glow you; go you app',
  'Delight in his skill — and enjoy a lighter workload. | hearts you; squash you',
  'Tell him statues are just vanity carved in stone. | say you Fancy rocks!; hop you',
  'Better statues for the city. The total good goes up. | float you better art for all',
  'Credit him honestly for his work. | float you Honest credit; go you app',
  'His mastery doesn’t define you. Find your own next project. | float you New project; spin you');

add('temple', 'A sculptor wants you to pose for a statue of Jupiter. It is very flattering.',
  'you 30 70, sculp Sculptor 66 70',
  'say sculp You’d make a perfect Jupiter!',
  'Flattery is indifferent. Pose if it helps him, but don’t believe it. | glow you; say you I’m no god.',
  'Sounds tedious. Decline and go to lunch. | hearts you; to you 10 70',
  'Pose — as a dog. | squash you; say you Woof. Jupiter.',
  'If the statue brings joy to many visitors, why not? | float you public enjoyment; hop you',
  'Agree only if it deceives no one about who you are. | float you No deception',
  'Refuse to be turned into an object — a fixed, finished image. | float you Not an object; spin you');

add('hill', 'Building an aqueduct, your supplier offers cheap stone that may crack in twenty years.',
  'you 30 72, sup Supplier 72 72 dark, stone Stone 55 66 item',
  'say sup Cheaper! No one will ever know.',
  'Build properly. Doing your work well is virtue. | glow you; go stone sup',
  'Use good stone. A collapse would haunt you with fear for years. | float you no future fear',
  'Suggest everyone just drink from rivers like animals. | say you Drink from the river!; hop you',
  'A collapse could kill hundreds. Use the best stone. | float you hundreds at risk; go stone sup',
  'Fraud is wrong whether anyone finds out or not. | float you Fraud fails the test; shake sup',
  'What you build is who you are. Build honestly. | float you I am what I build');

add('street', 'At closing time your bakery has a basket of unsold bread. Beggars watch hungrily.',
  'you 30 70, bread Bread 50 64 item, beg Beggars 82 72',
  'grow bread 1.3',
  'Give it to them. They are your fellow citizens of the world. | go bread beg; glow you',
  'Share it, and sit down to eat with them. | go bread beg; hearts you',
  'Give it away and eat with them on the kerb. | go bread beg; go you beg; squash you',
  'Give it to the hungriest — the most happiness from bread that would go to waste. | float you waste 0, joy +; go bread beg',
  'Help them. Doing good is a duty when you easily can. | float you Duty of beneficence; go bread beg',
  'No one makes you give. Choose who you are. | float you My choice; go bread beg');

add('temple', 'As a physician, a patient begs you to cure a harmless worry. You could give him a fake potion.',
  'you 30 70, pat Patient 66 72, vial Potion 50 64 item',
  'shake pat; say pat Cure me!',
  'Teach him that his fear is a judgement he can change. | glow you; say you The fear lives in your mind.',
  'Reassure him. Removing his anxiety is the true cure. | hearts you; say you You are well.',
  'Tell him to run around the city naked; he’ll feel fine after. | say you Run naked! Cured!; hop you 2',
  'Give him the fake potion. It relieves real suffering at no cost. | go vial pat; float you suffering relieved',
  'Don’t deceive him, even for his own good. Tell him the truth kindly. | float you No deception; say you You are healthy.',
  'His anxiety is real. Help him face it honestly. | float you Face it; go you pat');

add('street', 'A customer demands a refund for a perfectly good pot he dropped himself.',
  'you 30 70, cust Customer 66 70 dark, pot Pot 50 66 item',
  'shake pot; say cust Refund me!',
  'Explain calmly. His anger cannot disturb you. | glow you; say you You dropped it, friend.',
  'Give him a small discount. Peace is worth more than a pot. | hearts you; say you Half off the next one.',
  'Hand him the pieces and tell him he now owns many pots. | say you Now you have ten pots!; hop you',
  'Decide what is fair and leaves you both best off. | float you fair to both',
  'Explain the rule fairly: you can’t refund damage you didn’t cause. | float you A fair rule',
  'Don’t hide behind rules or fear. Decide, and own it. | float you My decision; spin you');

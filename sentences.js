const sentences = [
	{
		author: "Joseph Joubert",
		text: "He who has imagination without learning has wings, but no feet."
	},
	{
		author: "Lou Holtz",
		text: "I can't believe that God put us on this earth to be ordinary."
	},
	{
		author: "Oliver Holmes",
		text: "Love is the master key that opens the gates of happiness."
	},
	{
		author: "Ovid",
		text: "All things change; nothing perishes."
	},
	{
		author: "Og Mandino",
		text: "Always do your best. What you plant now, you will harvest later."
	},
	{
		author: "Buddha",
		text: "The mind is everything. What you think you become."
	},
	{
		author: "Confucius",
		text: "The cautious seldom err."
	},
	{
		author: "Richard Feynman",
		text: "What I cannot create, I do not understand."
	},
	{
		author: "Napoleon Hill",
		text: "No man can succeed in a line of endeavor which he does not like."
	},
	{
		author: "Byron Pulsifer",
		text: "It can't be spring if your heart is filled with past failures."
	},
	{
		author: "Mark Twain",
		text: "When in doubt, tell the truth."
	},
	{
		author: "Henri Matisse",
		text: "Creativity takes courage."
	},
	{
		author: "Chinese proverb",
		text: "Talk doesn't cook rice."
	},
	{
		author: "Edith Wharton",
		text: "If only we'd stop trying to be happy we'd have a pretty good time."
	},
	{
		author: "Eriksson",
		text: "The greatest barrier to success is the fear of failure."
	},
	{
		author: "Benjamin Disraeli",
		text: "Ignorance never settles a question."
	},
	{
		author: "Carl Jung",
		text: "You are what you do, not what you say you do."
	},
	{
		author: "Richard Bach",
		text: "Argue for your limitations, and sure enough they're yours."
	},
	{
		author: "Ralph Waldo Emerson",
		text: "Our strength grows out of our weaknesses."
	},
	{
		author: "Henry David Thoreau",
		text: "The price of anything is the amount of life you exchange for it."
	},
	{
		author: "Confucius",
		text: "It does not matter how slowly you go as long as you do not stop."
	},
	{
		author: "Napoleon Hill",
		text: "You give before you get."
	},
	{
		author: "Byron Pulsifer",
		text: "What you give is what you get."
	},
	{
		author: "John Petit-Senn",
		text: "Not what we have but what we enjoy constitutes our abundance."
	},
	{
		author: "Eleanor Roosevelt",
		text: "You must do the things you think you cannot do."
	},
	{
		author: "Blaise Pascal",
		text: "The heart has its reasons which reason knows not of."
	},
	{
		author: "Og Mandino",
		text: "Always seek out the seed of triumph in every adversity."
	},
	{
		author: "Alexander the Great",
		text: "There is nothing impossible to him who will try."
	},
	{
		author: "George Orwell",
		text: "Myths which are believed in tend to become true."
	},
	{
		author: "Richard Bach",
		text: "Argue for your limitations, and sure enough they're yours."
	},
	{
		author: "Ralph Emerson",
		text: "Nothing is at last sacred but the integrity of your own mind."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Correction does much, but encouragement does more."
	},
	{
		author: "David Bowie",
		text: "Tomorrow belongs to those who can hear it coming."
	},
	{
		author: "Charles Perkhurst",
		text: "The heart has eyes which the brain knows nothing of."
	},
	{
		author: "David Bader",
		text: "Be here now. Be someplace else later. Is that so complicated?"
	},
	{
		author: "Lao Tzu",
		text: "Silence is a source of great strength."
	},
	{
		author: "Maya Angelou",
		text: "All great achievements require time."
	},
	{
		author: "Deepak Chopra",
		text: "When you make a choice, you change the future."
	},
	{
		author: "Franklin Roosevelt",
		text: "When you come to the end of your rope, tie a knot and hang on."
	},
	{
		author: "Anne Frank",
		text: "No one has ever become poor by giving."
	},
	{
		author: "Buddha",
		text: "Remembering a wrong is like carrying a burden on the mind."
	},
	{
		author: "Abraham Lincoln",
		text: "Most folks are about as happy as they make up their minds to be."
	},
	{
		author: "Catherine Pulsifer",
		text: "When angry, use your energy to do something productive."
	},
	{
		author: "Dalai Lama",
		text: "Sleep is the best meditation."
	},
	{
		author: "Richard Bach",
		text: "Sooner or later, those who win are those who think they can."
	},
	{
		author: "Percy Shelley",
		text: "Fear not for the future, weep not for the past."
	},
	{
		author: "Voltaire",
		text: "To enjoy life, we must touch much of it lightly."
	},
	{
		author: "Heraclitus",
		text: "All is flux; nothing stays still."
	},
	{
		author: "V. S. Naipaul",
		text: "The world is always in movement."
	},
	{
		author: "Michael Korda",
		text: "To succeed, we must first believe that we can."
	},
	{
		author: "Bruce Lee",
		text: "As you think, so shall you become."
	},
	{
		author: "Buddha",
		text: "What we think, we become."
	},
	{
		author: "Honore de Balzac",
		text: "When you doubt your power, you give power to your doubt."
	},
	{
		author: "Seneca",
		text: "There is no great genius without some touch of madness."
	},
	{
		author: "Flora Whittemore",
		text: "The doors we open and close each day decide the lives we live."
	},
	{
		author: "Satchel Paige",
		text: "Don't look back. Something might be gaining on you."
	},
	{
		author: "Richard Bach",
		text: "Strong beliefs win strong men, and then make them stronger."
	},
	{
		author: "Napoleon Bonaparte",
		text: "He who fears being conquered is sure of defeat."
	},
	{
		author: "Joseph Stalin",
		text: "I believe in one thing only, the power of human will."
	},
	{
		author: "Winston Churchill",
		text: "Courage is going from failure to failure without losing enthusiasm."
	},
	{
		author: "Mark Twain",
		text: "Whoever is happy will make others happy, too."
	},
	{
		author: "Ralph Emerson",
		text: "The only way to have a friend is to be one."
	},
	{
		author: "Cathy Pulsifer",
		text: "You are special, you are unique, you are the best!"
	},
	{
		author: "Michelangelo",
		text: "There is no greater harm than that of time wasted."
	},
	{
		author: "Toni Morrison",
		text: "If you surrender to the wind, you can ride it."
	},
	{
		author: "Pablo Picasso",
		text: "Action is the foundational key to all success."
	},
	{
		author: "Orison Marden",
		text: "All men who have achieved great things have been great dreamers."
	},
	{
		author: "Kenji Miyazawa",
		text: "We must embrace pain and burn it as fuel for our journey."
	},
	{
		author: "John Lennon",
		text: "Reality leaves a lot to the imagination."
	},
	{
		author: "Dale Carnegie",
		text: "When fate hands us a lemon, let's try to make lemonade."
	},
	{
		author: "Ovid",
		text: "The cause is hidden. The effect is visible to all."
	},
	{
		author: "Mahatma Gandhi",
		text: "The future depends on what you do today."
	},
	{
		author: "Tony Robbins",
		text: "You always succeed in producing a result."
	},
	{
		author: "Usman Asif",
		text: "Fear is a darkroom where negatives develop."
	},
	{
		author: "Aesop",
		text: "No act of kindness, no matter how small, is ever wasted."
	},
	{
		author: "Ralph Emerson",
		text: "Make the most of yourself for that is all there is of you."
	},
	{
		author: "Ella Williams",
		text: "Bite off more than you can chew, then chew it."
	},
	{
		author: "Doug Horton",
		text: "Be your own hero, it's cheaper than a movie ticket."
	},
	{
		author: "Mike Ditka",
		text: "You're never a loser until you quit trying."
	},
	{
		author: "Richard Bach",
		text: "Every gift from a friend is a wish for your happiness."
	},
	{
		author: "Brian Tracy",
		text: "Goals are the fuel in the furnace of achievement."
	},
	{
		author: "Lucius Annaeus Seneca",
		text: "We suffer more often in imagination than in reality."
	},
	{
		author: "Muriel Rukeyser",
		text: "The universe is made of stories, not atoms."
	},
	{
		author: "Chinese proverb",
		text: "Learning is a treasure that will follow its owner everywhere."
	},
	{
		author: "Ralph Emerson",
		text: "Life is a progress, and not a station."
	},
	{
		author: "Dr. Seuss",
		text: "Don't cry because it's over. Smile because it happened."
	},
	{
		author: "Anatole France",
		text: "It is better to understand a little than to misunderstand a lot."
	},
	{
		author: "Manuel Puig",
		text: "I allow my intuition to lead my path."
	},
	{
		author: "Blaise Pascal",
		text: "Kind words do not cost much. Yet they accomplish much."
	},
	{
		author: "Maya Angelou",
		text: "When you learn, teach. When you get, give."
	},
	{
		author: "Leonardo da Vinci",
		text: "Nothing strengthens authority so much as silence."
	},
	{
		author: "Henry Thoreau",
		text: "Things do not change; we change."
	},
	{
		author: "Horace",
		text: "Begin, be bold, and venture to be wise."
	},
	{
		author: "Leonardo da Vinci",
		text: "Who sows virtue reaps honor."
	},
	{
		author: "Henry Beecher",
		text: "Gratitude is the fairest blossom which springs from the soul."
	},
	{
		author: "Napoleon Hill",
		text: "No alibi will save you from accepting the responsibility."
	},
	{
		author: "Leonardo da Vinci",
		text: "All our knowledge has its origins in our perceptions."
	},
	{
		author: "Grandma Moses",
		text: "Life is what you make of it. Always has been, always will be."
	},
	{
		author: "Aristotle",
		text: "Change in all things is sweet."
	},
	{
		author: "Wayne Dyer",
		text: "I think and that is all that I am."
	},
	{
		author: "Yogi Berra",
		text: "You can observe a lot just by watching."
	},
	{
		author: "Confucius",
		text: "What you do not want done to yourself, do not do to others."
	},
	{
		author: "Albert Einstein",
		text: "A person who never made a mistake never tried anything new."
	},
	{
		author: "Ralph Emerson",
		text: "In skating over thin ice our safety is in our speed."
	},
	{
		author: "Mother Teresa",
		text: "We can do no great things, only small things with great love."
	},
	{
		author: "Henri Amiel",
		text: "Almost everything comes from nothing."
	},
	{
		author: "Thomas Fuller",
		text: "No garden is without its weeds."
	},
	{
		author: "Epictetus",
		text: "If you wish to be a writer, write."
	},
	{
		author: "Confucius",
		text: "Life is really simple, but we insist on making it complicated."
	},
	{
		author: "Korean proverb",
		text: "If you kick a stone in anger, you'll hurt your own foot."
	},
	{
		author: "William R. Inge",
		text: "Nature takes away any faculty that is not used."
	},
	{
		author: "Mother Teresa",
		text: "Peace begins with a smile."
	},
	{
		author: "Leo F. Buscaglia",
		text: "Don't smother each other. No one can grow in the shade."
	},
	{
		author: "Billie Armstrong",
		text: "Our passion is our strength."
	},
	{
		author: "Lao Tzu",
		text: "Doing nothing is better than being busy doing nothing."
	},
	{
		author: "Cullen Hightower",
		text: "When performance exceeds ambition, the overlap is called success."
	},
	{
		author: "Thomas Jefferson",
		text: "Don't talk about what you have done or what you are going to do."
	},
	{
		author: "Cynthia Ozick",
		text: "To want to be what one can be is purpose in life."
	},
	{
		author: "Abraham Lincoln",
		text: "Most people are about as happy as they make up their minds to be."
	},
	{
		author: "Harriet Beecher Stowe",
		text: "All serious daring starts from within."
	},
	{
		author: "Albert Schweitzer",
		text: "Do something wonderful, people may imitate it."
	},
	{
		author: "Kahlil Gibran",
		text: "We choose our joys and sorrows long before we experience them."
	},
	{
		author: "Byron Pulsifer",
		text: "Someone is special only if you tell them."
	},
	{
		author: "American proverb",
		text: "From little acorns mighty oaks do grow."
	},
	{
		author: "Tehyi Hsieh",
		text: "Action will remove the doubts that theory cannot solve."
	},
	{
		author: "Leo Tolstoy",
		text: "We lost because we told ourselves we lost."
	},
	{
		author: "Sigmund Freud",
		text: "From error to error one discovers the entire truth."
	},
	{
		author: "Oscar Wilde",
		text: "Anybody can make history. Only a great man can write it."
	},
	{
		author: "John Acosta",
		text: "You cannot have what you do not want."
	},
	{
		author: "William Shakespeare",
		text: "To climb steep hills requires a slow pace at first."
	},
	{
		author: "Frank Wright",
		text: "Respect should be earned by actions, and not acquired by years."
	},
	{
		author: "Tony Robbins",
		text: "The path to success is to take massive, determined action."
	},
	{
		author: "James Lowell",
		text: "A weed is no more than a flower in disguise."
	},
	{
		author: "Woody Guthrie",
		text: "Take it easy - but take it."
	},
	{
		author: "Pierre Auguste Renoir",
		text: "The pain passes, but the beauty remains."
	},
	{
		author: "Chanakya",
		text: "A man is great by deeds, not by birth."
	},
	{
		author: "Wayne Dyer",
		text: "You can't choose upsides on a round world."
	},
	{
		author: "Benjamin Franklin",
		text: "One today is worth two tomorrows."
	},
	{
		author: "Sylvia Voirol",
		text: "Rainbows apologize for angry skies."
	},
	{
		author: "Mother Teresa",
		text: "If you can't feed a hundred people, then feed just one."
	},
	{
		author: "Seneca",
		text: "It is the power of the mind to be unconquerable."
	},
	{
		author: "Carlyle",
		text: "Silence is deep as Eternity, Speech is shallow as Time."
	},
	{
		author: "Marsha Petrie Sue",
		text: "Stay away from what might have been and look at what will be."
	},
	{
		author: "Byron Pulsifer",
		text: "Complaining doesn't change a thing, only taking action does."
	},
	{
		author: "Rabindranath Tagore",
		text: "We read the world wrong and say that it deceives us."
	},
	{
		author: "Theodore Roosevelt",
		text: "Keep your eyes on the stars and your feet on the ground."
	},
	{
		author: "Seneca",
		text: "Luck is what happens when preparation meets opportunity."
	},
	{
		author: "Epictetus",
		text: "No man is free who is not master of himself."
	},
	{
		author: "Denis Waitley",
		text: "You must welcome change as the rule but not as your ruler."
	},
	{
		author: "Sophocles",
		text: "Much wisdom often goes with fewer words."
	},
	{
		author: "Murray Gell-Mann",
		text: "Think how hard physics would be if particles could think."
	},
	{
		author: "Benjamin Spock",
		text: "Trust yourself. You know more than you think you do."
	},
	{
		author: "Albert Schweitzer",
		text: "Wherever a man turns he can find someone who needs him."
	},
	{
		author: "John Junor",
		text: "An ounce of emotion is equal to a ton of facts."
	},
	{
		author: "Albert Einstein",
		text: "When the solution is simple, God is answering."
	},
	{
		author: "Seneca",
		text: "The mind unlearns with difficulty what it has long learned."
	},
	{
		author: "James Yorke",
		text: "The most successful people are those who are good at plan B."
	},
	{
		author: "Woody Guthrie",
		text: "Take it easy but take it."
	},
	{
		author: "Henri Bergson",
		text: "The eye sees only what the mind is prepared to comprehend."
	},
	{
		author: "Jim Rohn",
		text: "Either you run the day or the day runs you."
	},
	{
		author: "Confucius",
		text: "Silence is the true friend that never betrays."
	},
	{
		author: "Benjamin Disraeli",
		text: "We make our own fortunes and we call them fate."
	},
	{
		author: "Joe Namath",
		text: "If you aren't going all the way, why go at all?"
	},
	{
		author: "Albert Einstein",
		text: "Learn from yesterday, live for today, hope for tomorrow."
	},
	{
		author: "Wayne Dyer",
		text: "Our lives are a sum total of the choices we have made."
	},
	{
		author: "Goethe",
		text: "What is not started today is never finished tomorrow."
	},
	{
		author: "Mark Twain",
		text: "Wrinkles should merely indicate where smiles have been."
	},
	{
		author: "Zig Ziglar",
		text: "Remember that failure is an event, not a person."
	},
	{
		author: "Abraham Lincoln",
		text: "I walk slowly, but I never walk backward."
	},
	{
		author: "David Eddings",
		text: "No day in which you learn something is a complete loss."
	},
	{
		author: "Napoleon Bonaparte",
		text: "Imagination rules the world."
	},
	{
		author: "Richard Bach",
		text: "Every problem has a gift for you in its hands."
	},
	{
		author: "Diogenes",
		text: "The art of being a slave is to rule one's master."
	},
	{
		author: "Karen Clark",
		text: "Life is change. Growth is optional. Choose wisely."
	},
	{
		author: "Francis Bacon",
		text: "A prudent question is one half of wisdom."
	},
	{
		author: "Immanuel Kant",
		text: "Science is organized knowledge. Wisdom is organized life."
	},
	{
		author: "Wayne Dyer",
		text: "You cannot be lonely if you like the person you're alone with."
	},
	{
		author: "Maya Angelou",
		text: "We may encounter many defeats, but we must not be defeated."
	},
	{
		author: "William James",
		text: "Act as if what you do makes a difference. It does."
	},
	{
		author: "John Dewey",
		text: "Arriving at one point is the starting point to another."
	},
	{
		author: "Jon Kabat-Zinn",
		text: "You can't stop the waves, but you can learn to surf."
	},
	{
		author: "Bishop Desmond Tutu",
		text: "We must not allow ourselves to become like the system we oppose."
	},
	{
		author: "Socrates",
		text: "Be as you wish to seem."
	},
	{
		author: "Aristotle",
		text: "Happiness depends upon ourselves."
	},
	{
		author: "Buddha",
		text: "Always be mindful of the kindness and not the faults of others."
	},
	{
		author: "Blaise Pascal",
		text: "We are all something, but none of us are everything."
	},
	{
		author: "Zig Ziglar",
		text: "You are the only person on earth who can use your ability."
	},
	{
		author: "Henry David Thoreau",
		text: "I cannot make my days longer, so I strive to make them better."
	},
	{
		author: "Anais Nin",
		text: "Life shrinks or expands in proportion to one's courage."
	},
	{
		author: "Ralph Emerson",
		text: "The years teach much which the days never know."
	},
	{
		author: "Sylvia Plath",
		text: "The worst enemy to creativity is self-doubt."
	},
	{
		author: "Buddha",
		text: "He is able who thinks he is able."
	},
	{
		author: "Pearl Buck",
		text: "One faces the future with one's past."
	},
	{
		author: "Henri L. Bergson",
		text: "Think like a man of action; act like a man of thought."
	},
	{
		author: "Richard Bach",
		text: "The best way to pay for a lovely moment is to enjoy it."
	},
	{
		author: "Napoleon Hill",
		text: "You can do it if you believe you can!"
	},
	{
		author: "Ralph Emerson",
		text: "Make the most of yourself, for that is all there is of you."
	},
	{
		author: "Carl Sandburg",
		text: "Nothing happens unless first we dream."
	},
	{
		author: "Oscar Wilde",
		text: "Be yourself; everyone else is already taken."
	},
	{
		author: "Buddha",
		text: "Peace comes from within. Do not seek it without."
	},
	{
		author: "Lucius Annaeus Seneca",
		text: "Difficulties strengthen the mind, as labor does the body."
	},
	{
		author: "Thomas Edison",
		text: "Genius is one percent inspiration and ninety-nine percent perspiration."
	},
	{
		author: "Buddha",
		text: "No matter how hard the past, you can always begin again."
	},
	{
		author: "Pablo Picasso",
		text: "Inspiration exists, but it has to find us working."
	},
	{
		author: "General Douglas MacArthur",
		text: "It is fatal to enter any war without the will to win it."
	},
	{
		author: "Lao Tzu",
		text: "He who obtains has little. He who scatters has much."
	},
	{
		author: "Luisa Sigea",
		text: "Blaze with the fire that is never extinguished."
	},
	{
		author: "Wit",
		text: "We choose our destiny in the way we treat others."
	},
	{
		author: "Lena Horne",
		text: "Always be smarter than the people who hire you."
	},
	{
		author: "Goethe",
		text: "Just trust yourself, then you will know how to live."
	},
	{
		author: "Winston Churchill",
		text: "History will be kind to me for I intend to write it."
	},
	{
		author: "Albert Einstein",
		text: "Once we accept our limits, we go beyond them."
	},
	{
		author: "Lao Tzu",
		text: "The journey of a thousand miles begins with one step."
	},
	{
		author: "Thich Nhat Hanh",
		text: "There is no way to happiness, happiness is the way."
	},
	{
		author: "Mohandas Gandhi",
		text: "Be the change that you want to see in the world."
	},
	{
		author: "Buddha",
		text: "Those who are free of resentful thoughts surely find peace."
	},
	{
		author: "E. E. Cummings",
		text: "It takes courage to grow up and become who you really are."
	},
	{
		author: "Walter Lippmann",
		text: "Where all think alike, no one thinks very much."
	},
	{
		author: "Ralph Emerson",
		text: "Our distrust is very expensive."
	},
	{
		author: "Pema Chodron",
		text: "The greatest obstacle to connecting with our joy is resentment."
	},
	{
		author: "Larry Elder",
		text: "A goal without a plan is just a wish."
	},
	{
		author: "Confucius",
		text: "Everything has beauty, but not everyone sees it."
	},
	{
		author: "Philip Breedveld",
		text: "Moments of complete apathy are the best for new creations."
	},
	{
		author: "Sophocles",
		text: "A short saying oft contains much wisdom."
	},
	{
		author: "Napoleon Hill",
		text: "Ideas are the beginning points of all fortunes."
	},
	{
		author: "Lao Tzu",
		text: "To see things in the seed, that is genius."
	},
	{
		author: "Aristotle",
		text: "In all things of nature there is something of the marvelous."
	},
	{
		author: "Babe Ruth",
		text: "Yesterday's home runs don't win today's games."
	},
	{
		author: "Socrates",
		text: "Wisdom begins in wonder."
	},
	{
		author: "Confucius",
		text: "Ability will never catch up with the demand for it."
	},
	{
		author: "Kin Hubbard",
		text: "You won't skid if you stay in a rut."
	},
	{
		author: "Rahul Dravid",
		text: "You don't play for revenge. You play for respect and pride."
	},
	{
		author: "William Shakespeare",
		text: "God has given you one face, and you make yourself another."
	},
	{
		author: "Confucius",
		text: "Think of tomorrow, the past can't be mended."
	},
	{
		author: "Corita Kent",
		text: "Life is a succession of moments. To live each one is to succeed."
	},
	{
		author: "Richard Bach",
		text: "The simplest things are often the truest."
	},
	{
		author: "Marie Curie",
		text: "Be less curious about people and more curious about ideas."
	},
	{
		author: "Maya Lin",
		text: "To fly, we have to have resistance."
	},
	{
		author: "Napoleon Hill",
		text: "Happiness is found in doing, not merely possessing."
	},
	{
		author: "Henry Thoreau",
		text: "The world is but a canvas to the imagination."
	},
	{
		author: "Jason Fried",
		text: "\"No\" is easier to do. \"Yes\" is easier to say."
	},
	{
		author: "Seneca",
		text: "Luck is what happens when preparation meets opportunity."
	},
	{
		author: "Joseph Chilton Pearce",
		text: "To live a creative life, we must lose our fear of being wrong."
	},
	{
		author: "Albert Einstein",
		text: "The only real valuable thing is intuition."
	},
	{
		author: "Ymber Delecto",
		text: "The time you think you're missing, misses you too."
	},
	{
		author: "Henry Thoreau",
		text: "Things do not change, we change."
	},
	{
		author: "Brian Tracy",
		text: "Whatever we expect with confidence becomes our own self-fulfilling prophecy."
	},
	{
		author: "Jean-Paul Sartre",
		text: "Freedom is what you do with what's been done to you."
	},
	{
		author: "Seneca",
		text: "Most powerful is he who has himself in his own power."
	},
	{
		author: "Alexander Pope",
		text: "Do good by stealth, and blush to find it fame."
	},
	{
		author: "Anne Wilson Schaef",
		text: "Trusting our intuition often saves us from disaster."
	},
	{
		author: "Chelsea Leyland",
		text: "Sleep is the real beauty secret, but I don't get enough of that."
	},
	{
		author: "Channing",
		text: "Every man is a volume if you know how to read him."
	},
	{
		author: "Sun Tzu",
		text: "You have to believe in yourself."
	},
	{
		author: "Marie Curie",
		text: "Nothing in life is to be feared. It is only to be understood."
	},
	{
		author: "Andy Rooney",
		text: "If you smile when no one else is around, you really mean it."
	},
	{
		author: "Mother Teresa",
		text: "We shall never know all the good that a simple smile can do."
	},
	{
		author: "Bodhidharma",
		text: "All know the way; few actually walk it."
	},
	{
		author: "Paul Cezanne",
		text: "The awareness of our own strength makes us modest."
	},
	{
		author: "John Dryden",
		text: "A thing well said will be wit in all languages."
	},
	{
		author: "Walter Reisch",
		text: "Tired minds don't plan well. Sleep first, plan later."
	},
	{
		author: "Pericles",
		text: "Time is the wisest counselor of all."
	},
	{
		author: "Euripides",
		text: "The wisest men follow their own direction."
	},
	{
		author: "Tony Robbins",
		text: "Whatever happens, take responsibility."
	},
	{
		author: "Dorothy Thompson",
		text: "Only when we are no longer afraid, do we begin to live."
	},
	{
		author: "Publilius Syrus",
		text: "I have often regretted my speech, never my silence."
	},
	{
		author: "Hermann Hesse",
		text: "If I know what love is, it is because of you."
	},
	{
		author: "Yogi Berra",
		text: "Life is a learning experience, only if you learn."
	},
	{
		author: "Elizabeth Browning",
		text: "Light tomorrow with today!"
	},
	{
		author: "Peter Drucker",
		text: "Until we can manage time, we can manage nothing else."
	},
	{
		author: "Buddha",
		text: "The foot feels the foot when it feels the ground."
	},
	{
		author: "Anne Schaef",
		text: "Life is a process. We are a process. The universe is a process."
	},
	{
		author: "Annie Dillard",
		text: "How we spend our days is, of course, how we spend our lives."
	},
	{
		author: "Pearl Buck",
		text: "Growth itself contains the germ of happiness."
	},
	{
		author: "Epictetus",
		text: "Freedom is the right to live as we wish."
	},
	{
		author: "Pablo Picasso",
		text: "I begin with an idea and then it becomes something else."
	},
	{
		author: "Saint Augustine",
		text: "Patience is the companion of wisdom."
	},
	{
		author: "Lao Tzu",
		text: "He who talks more is sooner exhausted."
	},
	{
		author: "George Patton",
		text: "If a man does his best, what else is there?"
	},
	{
		author: "Carl Jung",
		text: "Knowledge rests not upon truth alone, but upon error also."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Great talent finds happiness in execution."
	},
	{
		author: "Ralph Emerson",
		text: "Nothing great was ever achieved without enthusiasm."
	},
	{
		author: "Lao Tzu",
		text: "He who knows that enough is enough will always have enough."
	},
	{
		author: "Robert Heller",
		text: "Never ignore a gut feeling, but never believe that it's enough."
	},
	{
		author: "Wayne Dyer",
		text: "There is no way to prosperity, prosperity is the way."
	},
	{
		author: "Antoine de Saint-Exupery",
		text: "I know but one freedom and that is the freedom of the mind."
	},
	{
		author: "Lao Tzu",
		text: "Great acts are made up of small deeds."
	},
	{
		author: "Albert Einstein",
		text: "God always takes the simplest way."
	},
	{
		author: "Hausa",
		text: "Give thanks for a little and you will find a lot."
	},
	{
		author: "John Powell",
		text: "The only real mistake is the one from which we learn nothing."
	},
	{
		author: "Mother Teresa",
		text: "Do not wait for leaders; do it alone, person to person."
	},
	{
		author: "Harry Banks",
		text: "For success, attitude is equally as important as ability."
	},
	{
		author: "Anatole France",
		text: "To accomplish great things, we must dream as well as act."
	},
	{
		author: "Channing",
		text: "Error is discipline through which we advance."
	},
	{
		author: "George Matthew Adams",
		text: "Each day can be one of triumph if you keep up your interests."
	},
	{
		author: "Ovid",
		text: "Take rest; a field that has rested gives a bountiful crop."
	},
	{
		author: "Rodin",
		text: "Nothing is a waste of time if you use the experience wisely."
	},
	{
		author: "Bruce Lee",
		text: "Be happy, but never satisfied."
	},
	{
		author: "Lauren Bacall",
		text: "Imagination is the highest kite one can fly."
	},
	{
		author: "John Dryden",
		text: "Fortune befriends the bold."
	},
	{
		author: "Ralph Emerson",
		text: "Good luck is another name for tenacity of purpose."
	},
	{
		author: "Abraham Lincoln",
		text: "Most folks are as happy as they make up their minds to be."
	},
	{
		author: "Thich Nhat Hanh",
		text: "Smile, breathe, and go slowly."
	},
	{
		author: "Ernest Hemingway",
		text: "Never mistake motion for action."
	},
	{
		author: "William Shakespeare",
		text: "Speak low, if you speak love."
	},
	{
		author: "Buddha",
		text: "Work out your own salvation. Do not depend on others."
	},
	{
		author: "Byron Pulsifer",
		text: "The best teacher is experience learned from failures."
	},
	{
		author: "Bo Jackson",
		text: "Set your goals high, and don't stop till you get there."
	},
	{
		author: "Richard Bach",
		text: "Listen to what you know instead of what you fear."
	},
	{
		author: "Ralph Emerson",
		text: "Nature is a mutable cloud which is always and never the same."
	},
	{
		author: "Winston Churchill",
		text: "Never, never, never give up."
	},
	{
		author: "Rumi",
		text: "Let the beauty of what you love be what you do."
	},
	{
		author: "Helen Keller",
		text: "Keep yourself to the sunshine and you cannot see the shadow."
	},
	{
		author: "Edmond Rostand",
		text: "A man is not old as long as he is seeking something."
	},
	{
		author: "Blaise Pascal",
		text: "We know the truth, not only by the reason, but by the heart."
	},
	{
		author: "Seneca",
		text: "The greatest remedy for anger is delay."
	},
	{
		author: "Benjamin Franklin",
		text: "Watch the little things; a small leak will sink a great ship."
	},
	{
		author: "Kahlil Gibran",
		text: "Be like the flower, turn your face to the sun."
	},
	{
		author: "William Hazlitt",
		text: "Just as much as we see in others we have in ourselves."
	},
	{
		author: "Oscar Wilde",
		text: "Be yourself; everyone else is already taken."
	},
	{
		author: "Byron Pulsifer",
		text: "What you fear is that which requires action to overcome."
	},
	{
		author: "Zig Ziglar",
		text: "Your attitude, not your aptitude, will determine your altitude."
	},
	{
		author: "Virgil",
		text: "They can do all because they think they can."
	},
	{
		author: "Publilius Syrus",
		text: "Better be ignorant of a matter than half know it."
	},
	{
		author: "Hugh Miller",
		text: "Problems are only opportunities with thorns on them."
	},
	{
		author: "Paulo Coelho",
		text: "Write your plans in pencil and give God the eraser."
	},
	{
		author: "Abraham Lincoln",
		text: "I will prepare and some day my chance will come."
	},
	{
		author: "Wayne Dyer",
		text: "Go for it now. The future is promised to no one."
	},
	{
		author: "Ralph Marston",
		text: "Excellence is not a skill. It is an attitude."
	},
	{
		author: "Dalai Lama",
		text: "Be kind whenever possible. It is always possible."
	},
	{
		author: "Peter Elbow",
		text: "Meaning is not what you start with but what you end up with."
	},
	{
		author: "Albert Einstein",
		text: "The true sign of intelligence is not knowledge but imagination."
	},
	{
		author: "Bruce Lee",
		text: "To hell with circumstances; I create opportunities."
	},
	{
		author: "Confucius",
		text: "Wherever you go, go with all your heart."
	},
	{
		author: "Plato",
		text: "A good decision is based on knowledge and not on numbers."
	},
	{
		author: "Mahatma Gandhi",
		text: "We must become the change we want to see."
	},
	{
		author: "Margaret Sangster",
		text: "Self-complacency is fatal to progress."
	},
	{
		author: "Plutarch",
		text: "What we achieve inwardly will change outer reality."
	},
	{
		author: "Confucius",
		text: "Silence is a true friend who never betrays."
	},
	{
		author: "Lee Mildon",
		text: "People seldom notice old clothes if you wear a big smile."
	},
	{
		author: "Doris Day",
		text: "Gratitude is riches. Complaint is poverty."
	},
	{
		author: "Publilius Syrus",
		text: "Do not turn back when you are just at the goal."
	},
	{
		author: "Eleanor Roosevelt",
		text: "Do one thing every day that scares you."
	},
	{
		author: "Charles Kettering",
		text: "One fails forward toward success."
	},
	{
		author: "Lord Herbert",
		text: "The shortest answer is doing."
	},
	{
		author: "William Shakespeare",
		text: "Love all, trust a few, do wrong to none."
	},
	{
		author: "Byron Pulsifer",
		text: "If you cannot be silent, be brilliant and thoughtful."
	},
	{
		author: "John Lennon",
		text: "Life is what happens while you are making other plans."
	},
	{
		author: "Lao Tzu",
		text: "When I let go of what I am, I become what I might be."
	},
	{
		author: "George Eliot",
		text: "It is never too late to be what you might have been."
	},
	{
		author: "Charles Chesnutt",
		text: "Impossibilities are merely things which we have not yet learned."
	},
	{
		author: "Abraham Lincoln",
		text: "A house divided against itself cannot stand."
	},
	{
		author: "Wayne Dyer",
		text: "Our intention creates our reality."
	},
	{
		author: "Lao Tzu",
		text: "He who knows himself is enlightened."
	},
	{
		author: "William Shakespeare",
		text: "Having nothing, nothing can he lose."
	},
	{
		author: "John Lubbock",
		text: "What we see depends mainly on what we look for."
	},
	{
		author: "Seneca",
		text: "No man was ever wise by chance."
	},
	{
		author: "Kahlil Gibran",
		text: "Beauty is not in the face; beauty is a light in the heart."
	},
	{
		author: "Nietzsche",
		text: "You need chaos in your soul to give birth to a dancing star."
	},
	{
		author: "Edith Södergran",
		text: "The inner fire is the most important thing mankind possesses."
	},
	{
		author: "John Pierrakos",
		text: "Life is movement-we breathe, we eat, we walk, we move!"
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Difficulties increase the nearer we get to the goal."
	},
	{
		author: "Leonardo da Vinci",
		text: "Time stays long enough for anyone who will use it."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Mountains cannot be surmounted except by winding paths."
	},
	{
		author: "Elizabeth Kenny",
		text: "He who angers you conquers you."
	},
	{
		author: "Tom Peters",
		text: "Formula for success: under promise and over deliver."
	},
	{
		author: "Sai Baba",
		text: "All action results from thought, so it is thoughts that matter."
	},
	{
		author: "Louis Pasteur",
		text: "Chance favors the prepared mind."
	},
	{
		author: "Fran Watson",
		text: "As we risk ourselves, we grow. Each new experience is a risk."
	},
	{
		author: "Ralph Emerson",
		text: "The world makes way for the man who knows where he is going."
	},
	{
		author: "Winston Churchill",
		text: "I never worry about action, but only inaction."
	},
	{
		author: "Byron Pulsifer",
		text: "Fate is in your hands and no one else's."
	},
	{
		author: "Richard Bach",
		text: "Learning is finding out what you already know."
	},
	{
		author: "German proverb",
		text: "Begin to weave and God will give you the thread."
	},
	{
		author: "Buddha",
		text: "The way is not in the sky. The way is in the heart."
	},
	{
		author: "Napoleon Bonaparte",
		text: "The best cure for the body is a quiet mind."
	},
	{
		author: "Ursula Leguin",
		text: "The creative adult is the child who survived."
	},
	{
		author: "Ralph Emerson",
		text: "Go put your creed into the deed. Nor speak with double tongue."
	},
	{
		author: "Lao Tzu",
		text: "Be the chief but never the lord."
	},
	{
		author: "Buddha",
		text: "It is better to travel well than to arrive."
	},
	{
		author: "Zadok Rabinowitz",
		text: "A man's dreams are an index to his greatness."
	},
	{
		author: "Bruce Lee",
		text: "The less effort, the faster and more powerful you will be."
	},
	{
		author: "Frank Tyger",
		text: "Your future depends on many things, but mostly on you."
	},
	{
		author: "Swedish proverb",
		text: "Worry often gives a small thing a big shadow."
	},
	{
		author: "Abraham Lincoln",
		text: "As our case is new, we must think and act anew."
	},
	{
		author: "Elbert Hubbard",
		text: "To avoid criticism, do nothing, say nothing, be nothing."
	},
	{
		author: "Mary Bethune",
		text: "Without faith, nothing is possible. With it, nothing is impossible."
	},
	{
		author: "Margaret Fuller",
		text: "If you have knowledge, let others light their candles in it."
	},
	{
		author: "Winston Churchill",
		text: "The price of greatness is responsibility."
	},
	{
		author: "Lao Tzu",
		text: "Music in the soul can be heard by the universe."
	},
	{
		author: "Robert Frost",
		text: "The best way out is always through."
	},
	{
		author: "Virgil",
		text: "They can conquer who believe they can."
	},
	{
		author: "Maya Angelou",
		text: "I believe that every person is born with talent."
	},
	{
		author: "Wayne Dyer",
		text: "Miracles come in moments. Be ready and willing."
	},
	{
		author: "Publilius Syrus",
		text: "A rolling stone gathers no moss."
	},
	{
		author: "William Arthur Ward",
		text: "Do more than dream: work."
	},
	{
		author: "William Shakespeare",
		text: "Be great in act, as you have been in thought."
	},
	{
		author: "Steve Jobs",
		text: "Stay hungry. Stay foolish."
	},
	{
		author: "Fyodor Dostoyevsky",
		text: "The soul is healed by being with children."
	},
	{
		author: "Peter Drucker",
		text: "You cannot predict the future, but you can create it."
	},
	{
		author: "Napoleon Hill",
		text: "Fears are nothing more than a state of mind."
	},
	{
		author: "Sun Tzu",
		text: "Can you imagine what I would do if I could do all I can?"
	},
	{
		author: "Haddon Robinson",
		text: "What worries you masters you."
	},
	{
		author: "William Ward",
		text: "Adversity causes some men to break, others to break records."
	},
	{
		author: "Napoleon Hill",
		text: "A goal is a dream with a deadline."
	},
	{
		author: "Victor Hugo",
		text: "Life is the flower for which love is the honey."
	},
	{
		author: "Moncure Conway",
		text: "The best thing in every noble dream is the dreamer..."
	},
	{
		author: "Sophocles",
		text: "Wisdom is the supreme part of happiness."
	},
	{
		author: "Tony Robbins",
		text: "When people are like each other they tend to like each other."
	},
	{
		author: "Lao Tzu",
		text: "He who is contented is rich."
	},
	{
		author: "Napoleon Bonaparte",
		text: "Victory belongs to the most persevering."
	},
	{
		author: "Richard Bach",
		text: "In order to win, you must expect to win."
	},
	{
		author: "Cervantes",
		text: "Those who will play with cats must expect to be scratched."
	},
	{
		author: "Albert Einstein",
		text: "I have no special talent. I am only passionately curious."
	},
	{
		author: "Paul Tillich",
		text: "Decision is a risk rooted in the courage of being free."
	},
	{
		author: "Lao Tzu",
		text: "From wonder into wonder existence opens."
	},
	{
		author: "Janis Joplin",
		text: "Don't compromise yourself. You are all you've got."
	},
	{
		author: "Jack Canfield",
		text: "Everything you want is on the other side of fear."
	},
	{
		author: "Albert Einstein",
		text: "Reality is merely an illusion, albeit a very persistent one."
	},
	{
		author: "Marian Edelman",
		text: "You really can change the world if you care enough."
	},
	{
		author: "Napoleon Hill",
		text: "Don't wait. The time will never be just right."
	},
	{
		author: "Epictetus",
		text: "Difficulties are things that show a person what they are."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "A really great talent finds its happiness in execution."
	},
	{
		author: "Friedrich von Schiller",
		text: "Keep true to the dreams of thy youth."
	},
	{
		author: "John Lennon",
		text: "Time you enjoyed wasting was not wasted."
	},
	{
		author: "Louisa Alcott",
		text: "I'm not afraid of storms, for I'm learning how to sail my ship."
	},
	{
		author: "Ralph Emerson",
		text: "Skill to do comes of doing."
	},
	{
		author: "Aristotle",
		text: "The energy of the mind is the essence of life."
	},
	{
		author: "Frederick Douglass",
		text: "If there is no struggle, there is no progress."
	},
	{
		author: "Demosthenes",
		text: "Small opportunities are often the beginning of great enterprises."
	},
	{
		author: "Richard Bach",
		text: "You teach best what you most need to learn."
	},
	{
		author: "Gustave Flaubert",
		text: "Reality does not conform to the ideal, but confirms it."
	},
	{
		author: "Calvin Coolidge",
		text: "I have never been hurt by anything I didn't say."
	},
	{
		author: "Goethe",
		text: "A man sees in the world what he carries in his heart."
	},
	{
		author: "Louisa Alcott",
		text: "I'm not afraid of storms, for I'm learning how to sail my ship."
	},
	{
		author: "Yoda",
		text: "Do, or do not. There is no try."
	},
	{
		author: "Cicero",
		text: "We must not say every mistake is a foolish one."
	},
	{
		author: "John Lennon",
		text: "Time you enjoy wasting, was not wasted."
	},
	{
		author: "Walt Disney",
		text: "If you can dream it, you can do it."
	},
	{
		author: "Philip Sidney",
		text: "Either I will find a way, or I will make one."
	},
	{
		author: "Sojourner Truth",
		text: "Truth is powerful and it prevails."
	},
	{
		author: "Byron Pulsifer",
		text: "Spring is a time for rebirth and the fulfillment of new life."
	},
	{
		author: "Jonas Salk",
		text: "Intuition will tell the thinking mind where to look next."
	},
	{
		author: "Albert Camus",
		text: "Autumn is a second spring when every leaf is a flower."
	},
	{
		author: "John Wooden",
		text: "Never mistake activity for achievement."
	},
	{
		author: "Coco Chanel",
		text: "There are people who have money and people who are rich."
	},
	{
		author: "Leonardo da Vinci",
		text: "He who is fixed to a star does not change his mind."
	},
	{
		author: "Voltaire",
		text: "No snowflake in an avalanche ever feels responsible."
	},
	{
		author: "Marcus Aurelius",
		text: "Each day provides its own gifts."
	},
	{
		author: "Bernadette Devlin",
		text: "Yesterday I dared to struggle. Today I dare to win."
	},
	{
		author: "Abraham Lincoln",
		text: "Be sure you put your feet in the right place, then stand firm."
	},
	{
		author: "Thich Nhat Hanh",
		text: "Smile, breathe and go slowly."
	},
	{
		author: "Buddha",
		text: "You only lose what you cling to."
	},
	{
		author: "Jean de la Fontaine",
		text: "Sadness flies away on the wings of time."
	},
	{
		author: "Booker Washington",
		text: "Excellence is to do a common thing in an uncommon way."
	},
	{
		author: "Robert Kennedy",
		text: "Only those who dare to fail greatly can ever achieve greatly."
	},
	{
		author: "Abraham Lincoln",
		text: "I destroy my enemies when I make them my friends."
	},
	{
		author: "Ralph Emerson",
		text: "We aim above the mark to hit the mark."
	},
	{
		author: "English proverb",
		text: "Take heed: you do not find what you do not seek."
	},
	{
		author: "Willa Cather",
		text: "Where there is great love, there are always miracles."
	},
	{
		author: "Oprah Winfrey",
		text: "Don't settle for a relationship that won't let you be yourself."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Character develops itself in the stream of life."
	},
	{
		author: "Henry J. Kaiser",
		text: "Trouble is only opportunity in work clothes."
	},
	{
		author: "Henry Ford",
		text: "Quality means doing it right when no one is looking."
	},
	{
		author: "Richard Evans",
		text: "The undertaking of a new action brings new strength."
	},
	{
		author: "Ralph Emerson",
		text: "To be great is to be misunderstood."
	},
	{
		author: "George Bernard Shaw",
		text: "Life isn't about finding yourself. Life is about creating yourself."
	},
	{
		author: "Napoleon Bonaparte",
		text: "The truest wisdom is a resolute determination."
	},
	{
		author: "Haynes Bayly",
		text: "Absence makes the heart grow fonder."
	},
	{
		author: "H. Jackson Browne",
		text: "Don't be afraid to go out on a limb. That's where the fruit is."
	},
	{
		author: "Pablo Picasso",
		text: "Everything you can imagine is real."
	},
	{
		author: "Cervantes",
		text: "Be slow of tongue and quick of eye."
	},
	{
		author: "Maya Angelou",
		text: "Nothing will work unless you do."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Kindness is the golden chain by which society is bound together."
	},
	{
		author: "Gloria Steinem",
		text: "If the shoe doesn't fit, must we change the foot?"
	},
	{
		author: "Carl Jung",
		text: "In all chaos there is a cosmos, in all disorder a secret order."
	},
	{
		author: "Abraham Lincoln",
		text: "Important principles may, and must, be inflexible."
	},
	{
		author: "Voltaire",
		text: "We never live; we are always in the expectation of living."
	},
	{
		author: "Indira Gandhi",
		text: "You can't shake hands with a clenched fist."
	},
	{
		author: "Martin Luther",
		text: "Remove Christ from the Scriptures and there is nothing left."
	},
	{
		author: "Aristotle",
		text: "Those that know, do. Those that understand, teach."
	},
	{
		author: "William Shakespeare",
		text: "We know what we are, but know not what we may be."
	},
	{
		author: "Jim Rohn",
		text: "The more you care, the stronger you can be."
	},
	{
		author: "Salman Rushdie",
		text: "How do you defeat terrorism? Don't be terrorized."
	},
	{
		author: "Oprah Winfrey",
		text: "Follow your instincts. That is where true wisdom manifests itself."
	},
	{
		author: "Benjamin Franklin",
		text: "Well done is better than well said."
	},
	{
		author: "Stephen Kaggwa",
		text: "Try and fail, but don't fail to try."
	},
	{
		author: "Marcus Aurelius",
		text: "Loss is nothing else but change, and change is Natures delight."
	},
	{
		author: "David McCullough",
		text: "Real success is finding your lifework in the work that you love."
	},
	{
		author: "Francis Bacon",
		text: "A wise man will make more opportunities than he finds."
	},
	{
		author: "Princess Diana",
		text: "Only do what your heart tells you."
	},
	{
		author: "Albert Einstein",
		text: "Great ideas often receive violent opposition from mediocre minds."
	},
	{
		author: "Tony Robbins",
		text: "It is in your moments of decision that your destiny is shaped."
	},
	{
		author: "Publilius Syrus",
		text: "While we stop to think, we often miss our opportunity."
	},
	{
		author: "Dalai Lama",
		text: "See the positive side, the potential, and make an effort."
	},
	{
		author: "Japanese proverb",
		text: "The day you decide to do it is your lucky day."
	},
	{
		author: "Lazurus Long",
		text: "Great is the art of beginning, but greater is the art of ending."
	},
	{
		author: "Confucius",
		text: "To be wronged is nothing unless you continue to remember it."
	},
	{
		author: "Ellen Gilchrist",
		text: "Don't ruin the present with the ruined past."
	},
	{
		author: "Benjamin Franklin",
		text: "There never was a good knife made of bad steel."
	},
	{
		author: "Napoleon Hill",
		text: "Your big opportunity may be right where you are now."
	},
	{
		author: "Catherine Pulsifer",
		text: "Being angry never solves anything."
	},
	{
		author: "Eleanor Roosevelt",
		text: "No one can make you feel inferior without your consent."
	},
	{
		author: "Buddha",
		text: "A jug fills drop by drop."
	},
	{
		author: "James Pence",
		text: "Success is determined by those whom prove the impossible, possible."
	},
	{
		author: "John Lubbock",
		text: "A day of worry is more exhausting than a day of work."
	},
	{
		author: "Lao Tzu",
		text: "Anticipate the difficult by managing the easy."
	},
	{
		author: "Woody Guthrie",
		text: "Take it easy, but take it."
	},
	{
		author: "John Lennon",
		text: "Love is the flower you've got to let grow."
	},
	{
		author: "Benjamin Disraeli",
		text: "The secret of success is constancy to purpose."
	},
	{
		author: "Turkish proverb",
		text: "Kind words will unlock an iron door."
	},
	{
		author: "Confucius",
		text: "The more you know yourself, the more you forgive yourself."
	},
	{
		author: "Forrest Church",
		text: "Do what you can. Want what you have. Be who you are."
	},
	{
		author: "Confucius",
		text: "Study the past, if you would divine the future."
	},
	{
		author: "Thomas Dewar",
		text: "Minds are like parachutes. They only function when open."
	},
	{
		author: "Madame de Stael",
		text: "Society develops wit, but its contemplation alone forms genius."
	},
	{
		author: "Samuel Johnson",
		text: "Memory is the mother of all wisdom."
	},
	{
		author: "Anne Lamott",
		text: "Joy is the best makeup."
	},
	{
		author: "Mary Almanac",
		text: "Who we are never changes. Who we think we are does."
	},
	{
		author: "Albert Einstein",
		text: "In the middle of every difficulty lies opportunity."
	},
	{
		author: "William Blake",
		text: "In seed time learn, in harvest teach, in winter enjoy."
	},
	{
		author: "Confucius",
		text: "To be wrong is nothing unless you continue to remember it."
	},
	{
		author: "Christopher Reeve",
		text: "Once you choose hope, anything's possible."
	},
	{
		author: "George Sand",
		text: "There is only one happiness in life, to love and be loved."
	},
	{
		author: "Abraham Lincoln",
		text: "Truth is generally the best vindication against slander."
	},
	{
		author: "Carl Jung",
		text: "Who looks outside, dreams; who looks inside, awakes."
	},
	{
		author: "Thomas Jefferson",
		text: "Never put off till tomorrow what you can do today."
	},
	{
		author: "George Shaw",
		text: "My reputation grows with every failure."
	},
	{
		author: "Buddha",
		text: "Every human being is the author of his own health or disease."
	},
	{
		author: "Lao Tzu",
		text: "He who knows, does not speak. He who speaks, does not know."
	},
	{
		author: "Oscar Wilde",
		text: "Experience is simply the name we give our mistakes."
	},
	{
		author: "Virgil",
		text: "Fortune favors the brave."
	},
	{
		author: "Epictetus",
		text: "Know, first, who you are, and then adorn yourself accordingly."
	},
	{
		author: "Sophocles",
		text: "A short saying often contains much wisdom."
	},
	{
		author: "Napoleon Hill",
		text: "If you cannot do great things, do small things in a great way."
	},
	{
		author: "John Lennon",
		text: "Yeah, we all shine on, like the moon, and the stars, and the sun."
	},
	{
		author: "Elizabeth Browning",
		text: "Whoso loves, believes the impossible."
	},
	{
		author: "Napoleon Bonaparte",
		text: "If you want a thing done well, do it yourself."
	},
	{
		author: "William Shakespeare",
		text: "He that is giddy thinks the world turns round."
	},
	{
		author: "Napoleon Hill",
		text: "The ladder of success is never crowded at the top."
	},
	{
		author: "Seneca",
		text: "Things that were hard to bear are sweet to remember."
	},
	{
		author: "Lao Tzu",
		text: "To lead people walk behind them."
	},
	{
		author: "Michelangelo",
		text: "Faith in oneself is the best and safest course."
	},
	{
		author: "Lao Tzu",
		text: "An ant on the move does more than a dozing ox."
	},
	{
		author: "Ralph Emerson",
		text: "Self-trust is the first secret of success."
	},
	{
		author: "Publilius Syrus",
		text: "Never promise more than you can perform."
	},
	{
		author: "Baltasar Gracian",
		text: "Without courage, wisdom bears no fruit."
	},
	{
		author: "Jonathan Kozol",
		text: "Pick battles big enough to matter, small enough to win."
	},
	{
		author: "Liberace",
		text: "Nobody will believe in you unless you believe in yourself."
	},
	{
		author: "Florence Nightingale",
		text: "I attribute my success to this: I never gave or took an excuse."
	},
	{
		author: "German proverb",
		text: "Silence is a fence around wisdom."
	},
	{
		author: "Iris Murdoch",
		text: "We can only learn to love by loving."
	},
	{
		author: "Richard Garriott",
		text: "Chaos and Order are not enemies, only opposites."
	},
	{
		author: "Aristotle",
		text: "Well begun is half done."
	},
	{
		author: "Theophrastus",
		text: "Time is the most valuable thing a man can spend."
	},
	{
		author: "George Santayan",
		text: "Those who cannot learn from history are doomed to repeat it."
	},
	{
		author: "Bob Newhart",
		text: "All I can say about life is, Oh God, enjoy it!"
	},
	{
		author: "Frank Tyger",
		text: "Be a good listener. Your ears will never get you in trouble."
	},
	{
		author: "Elbert Hubbard",
		text: "There is no failure except in no longer trying."
	},
	{
		author: "Walter Anderson",
		text: "Nothing diminishes anxiety faster than action."
	},
	{
		author: "William Blake",
		text: "For everything that lives is holy, life delights in life."
	},
	{
		author: "William Shakespeare",
		text: "It is not in the stars to hold our destiny but in ourselves."
	},
	{
		author: "Mary Wollstonecraft",
		text: "The beginning is always today."
	},
	{
		author: "Zeno of Citium",
		text: "Man conquers the world by conquering himself."
	},
	{
		author: "Wayne Dyer",
		text: "You'll see it when you believe it."
	},
	{
		author: "Leo Tolstoy",
		text: "The two most powerful warriors are patience and time."
	},
	{
		author: "Christian Bovee",
		text: "Example has more followers than reason."
	},
	{
		author: "Lauren Raffo",
		text: "Sometimes, the biggest act of courage is a small one."
	},
	{
		author: "Johann Wolfgang von Goethe",
		text: "Knowing is not enough; we must apply!"
	},
	{
		author: "St. Augustine",
		text: "Better to have loved and lost, than to have never loved at all."
	}
]; 

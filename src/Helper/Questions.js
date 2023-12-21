const questions = [
    {
        question: 'In the UK, the abbreviation NHS stands for National what Service?',
        answers: [
            {text: 'Humanity', correct: false},
            {text: 'Health', correct: true},
            {text: 'Honour', correct: false},
            {text: 'Household', correct: false},
        ]
    },
    {
        question: ' Which Disney character famously leaves a glass slipper behind at a royal ball?',
        answers: [
            {text: 'Pocahontas', correct: false},
            {text: 'Sleeping Beauty', correct: false},
            {text: 'Cinderella', correct: true},
            {text: 'Elsa', correct: false},
        ]
    },
    {
        question: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
        answers: [
            {text: 'Hangar', correct: false},
            {text: 'Terminal', correct: false},
            {text: 'Concourse', correct: false},
            {text: 'Carousel', correct: true},
        ]
    },
    {
        question: 'Which of these brands was chiefly associated with the manufacture of household locks?',
        answers: [
            {text: 'Phillips', correct: false},
            {text: 'Flymo', correct: false},
            {text: 'Chubb', correct: true},
            {text: 'Ronseal', correct: false},
        ]
    },
    {
        question: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
        answers: [
            {text: 'Republicanism', correct: false},
            {text: 'Communism', correct: true},
            {text: 'Conservatism', correct: false},
            {text: 'Liberalism', correct: false},
        ]
    },
    {
        question: 'Which toys have been marketed with the phrase “robots in disguise”?',
        answers: [
            {text: 'Bratz Dolls', correct: false},
            {text: 'Sylvanian Families', correct: false},
            {text: 'Hatchimals', correct: false},
            {text: 'Transformers', correct: true},
        ]
    },
    {
        question: 'What does the word loquacious mean?',
        answers: [
            {text: 'Angry', correct: false},
            {text: 'Chatty', correct: true},
            {text: 'Beautiful', correct: false},
            {text: 'Shy', correct: false},
        ]
    },
    {
        question: 'Obstetrics is a branch of medicine particularly concerned with what?',
        answers: [
            {text: 'Childbirth', correct: true},
            {text: 'Broken bones', correct: false},
            {text: 'Heart conditions', correct: false},
            {text: 'Old age', correct: false},
        ]
    },
    {
        question: 'In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
        answers: [
            {text: 'Bow-tie, braces and tweed jacket', correct: false},
            {text: 'Wide-brimmed hat and extra long scarf', correct: true},
            {text: 'Pinstripe suit and trainers', correct: false},
            {text: 'Cape, velvet jacket and frilly shirt', correct: false},
        ]
    },
    {
        question: 'Which of these religious observances lasts for the shortest period of time during the calendar year?',
        answers: [
            {text: 'Ramadan', correct: false},
            {text: 'Diwali', correct: true},
            {text: 'Lent', correct: false},
            {text: 'Hanukkah', correct: false},
        ]
    },
    {
        question: 'At the closest point, which island group is only 50 miles south-east of the coast of Florida?',
        answers: [
            {text: 'Bahamas', correct: true},
            {text: 'US Virgin Islands', correct: false},
            {text: 'Turks and Caicos Islands', correct: false},
            {text: 'Bermuda', correct: false},
        ]
    },
    {
        question: 'Construction of which of these famous landmarks was completed first?',
        answers: [
            {text: 'Empire State Building', correct: false},
            {text: 'Royal Albert Hall', correct: false},
            {text: 'Eiffel Tower', correct: false},
            {text: 'Big Ben Clock Tower', correct: true},
        ]
    },
    {
        question: 'Which of these cetaceans is classified as a “toothed whale”?',
        answers: [
            {text: 'Gray whale', correct: false},
            {text: 'Minke whale', correct: false},
            {text: 'Sperm whale', correct: true},
            {text: 'Humpback whale', correct: false},
        ]
    },
    {
        question: 'Who is the only British politician to have held all four “Great Offices of State” at some point during their career?',
        answers: [
            {text: 'David Lloyd George', correct: false},
            {text: 'Harold Wilson', correct: false},
            {text: 'James Callaghan', correct: true},
            {text: 'John Major', correct: false},
        ]
    },
    {
        question: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
        answers: [
            {text: 'Calico Jack', correct: false},
            {text: 'Blackbeard', correct: true},
            {text: 'Bartholomew Roberts', correct: false},
            {text: 'Captain Kidd', correct: false},
        ]
    },
    {
        question: 'Which of these is the name of a carpentry joint and a verb meaning to fit together well?',
        answers: [
            {text: 'Catcall', correct: false},
            {text: 'Dovetail', correct: true},
            {text: 'Fishhook', correct: false},
            {text: 'Foxglove', correct: false},
        ]
    },
    {
        question: 'Occupying a large area on the island of Manhattan between 59th Street and 110th Street is what Park?',
        answers: [
            {text: 'Broadway', correct: false},
            {text: 'Central', correct: true},
            {text: 'Golden Gate', correct: false},
            {text: 'Lincoln', correct: false},
        ]
    },
    {
        question: 'From the 2016 Disney film Moana, the character who performs the song Shiny is a giant what?',
        answers: [
            {text: 'Clam', correct: false},
            {text: 'Crab', correct: true},
            {text: 'Shark', correct: false},
            {text: 'Squid', correct: false},
        ]
    },
    {
        question: 'Noh is the name of a traditional form of Japanese what?',
        answers: [
            {text: 'Bedding', correct: false},
            {text: 'Breakfast cuisine', correct: false},
            {text: 'Jewellery', correct: false},
            {text: 'Theatre', correct: true},
        ]
    },
    {
        question: 'Which of these is a musical term for a short and lively instrumental composition?',
        answers: [
            {text: 'Capriccio', correct: true},
            {text: 'Caravaggio', correct: false},
            {text: 'Carpaccio', correct: false},
            {text: 'Charcuterie', correct: false},
        ]
    },
    {
        question: 'Suvarnabhumi is a major international airport located in which country?',
        answers: [
            {text: 'Hong Kong', correct: false},
            {text: 'India', correct: false},
            {text: 'Philippines', correct: false},
            {text: 'Thailand', correct: true},
        ]
    },
    {
        question: 'A kind of transformer that produces high voltage at high frequencies is the what coil?',
        answers: [
            {text: 'Curie', correct: false},
            {text: 'Einstein', correct: false},
            {text: 'Franklin', correct: false},
            {text: 'Tesla', correct: true},
        ]
    },
    {
        question: 'Founded in 1897 was the American multinational corporation Dow what Company?',
        answers: [
            {text: 'Astrological', correct: false},
            {text: 'Biological', correct: false},
            {text: 'Chemical', correct: true},
            {text: 'Physical', correct: false},
        ]
    },
    {
        question: 'Used by a major Australian retailer for many years was the slogan: There s no other store like what?',
        answers: [
            {text: 'Bunnings', correct: false},
            {text: 'David Jones', correct: true},
            {text: 'Myer', correct: false},
            {text: 'Target', correct: false},
        ]
    },
    {
        question: 'In which year did Hillary Clinton become the 67th Secretary of State of the USA?',
        answers: [
            {text: '2003', correct: false},
            {text: '2006', correct: false},
            {text: '2009', correct: true},
            {text: '2012', correct: false},
        ]
    },
    {
        question: 'A plant classified as an invasive weed in Australia because it is toxic to livestock is what curse?',
        answers: [
            {text: 'Courtney\'s', correct: false},
            {text: 'Frank\'s', correct: false},
            {text: 'Lawson\'s', correct: false},
            {text: 'Paterson\'s', correct: true},
        ]
    },
    {
        question: 'A critically acclaimed 2019 feature film directed by actress Olivia Wilde is called what?',
        answers: [
            {text: 'Booksmart', correct: true},
            {text: 'Highbrow', correct: false},
            {text: 'Mastermind', correct: false},
            {text: 'Whizkid', correct: false},
        ]
    },
    {
        question: 'Vehicles are required to drive on the right-hand side of the road in which of these countries?',
        answers: [
            {text: 'Italy', correct: true},
            {text: 'Japan', correct: false},
            {text: 'South Africa', correct: false},
            {text: 'United Kingdom', correct: false},
        ]
    },
    {
        question: 'Which of these words is an antonym of the other three?',
        answers: [
            {text: 'Chatty', correct: false},
            {text: 'Loquacious', correct: false},
            {text: 'Taciturn', correct: true},
            {text: 'Talkative', correct: false},
        ]
    },
    {
        question: 'Which of these is the title of a 2019 biographical film starring Taron Egerton as Elton John?',
        answers: [
            {text: 'Kale Me by Your Name', correct: false},
            {text: 'My Cos and Vinnie', correct: false},
            {text: 'Rocketman', correct: true},
            {text: 'The Romaines of the Day', correct: false},
        ]
    },
    {
        question: 'To do something that disturbs the current situation is figuratively to \'rock the\' what?',
        answers: [
            {text: 'Boat', correct: true},
            {text: 'Casbah', correct: false},
            {text: 'Cradle', correct: false},
            {text: 'Roll', correct: false},
        ]
    },
    {
        question: 'Someone hiding a malicious intent by pretending to be good is said to be a what \'in sheep\'s clothing\'?',
        answers: [
            {text: 'Cow', correct: false},
            {text: 'Goat', correct: false},
            {text: 'Pig', correct: false},
            {text: 'Wolf', correct: true},
        ]
    },
    {
        question: 'Released as a single in 1970, \'Rubber Duckie\' was sung by which Sesame Street character?',
        answers: [
            {text: 'Big Bird', correct: false},
            {text: 'Elmo', correct: false},
            {text: 'Ernie', correct: true},
            {text: 'Mr Snuffleupagus', correct: false},
        ]
    },
    {
        question: 'Which of these is the name of a popular US chocolate bar first produced in 1920?',
        answers: [
            {text: 'Baby Ruth', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'Tiger Woods', correct: false},
            {text: 'Tom Brady', correct: false},
        ]
    },
    {
        question: 'Actress and writer Carrie Fisher was the daughter of which movie star?',
        answers: [
            {text: 'Debbie Reynolds', correct: true},
            {text: 'Elizabeth Taylor', correct: false},
            {text: 'Janet Leigh', correct: false},
            {text: 'Shirley MacLaine', correct: false},
        ]
    },
    {
        question: 'What jersey number did the Chicago Bulls retire in honour of Michael Jordan?',
        answers: [
            {text: '12', correct: false},
            {text: '21', correct: false},
            {text: '23', correct: true},
            {text: '32', correct: false},
        ]
    },
    {
        question: 'Thinking of a clever comeback after the moment has passed is called \'esprit de l\'escalier\', which is French for what?',
        answers: [
            {text: 'Bathroom zinger', correct: false},
            {text: 'Chandelier smarts', correct: false},
            {text: 'Kitchen reply', correct: false},
            {text: 'Staircase wit', correct: true},
        ]
    },
    {
        question: '\'SSRIs\' are a type of medication commonly known as what?',
        answers: [
            {text: 'Analgesics', correct: false},
            {text: 'Anti-inflammatories', correct: false},
            {text: 'Antidepressants', correct: true},
            {text: 'Antihistamines', correct: false},
        ]
    },
    {
        question: 'Which of these is the name of a major river in Spain?',
        answers: [
            {text: 'Arno', correct: false},
            {text: 'Ebro', correct: true},
            {text: 'Po', correct: false},
            {text: 'Volga', correct: false},
        ]
    },
    {
        question: 'In the Arena: A Memoir of Victory, Defeat and Renewal is a 1990 book by which former US president?',
        answers: [
            {text: 'Bill Clinton', correct: false},
            {text: 'Gerald Ford', correct: false},
            {text: 'Jimmy Carter', correct: false},
            {text: 'Richard Nixon', correct: true},
        ]
    },
    {
        question: 'Which of these is not one of the three colours featured in the current symbol for the Paralympic Games?',
        answers: [
            {text: 'Blue', correct: false},
            {text: 'Green', correct: false},
            {text: 'Red', correct: false},
            {text: 'Yellow', correct: true},
        ]
    },
    {
        question: 'Which of these famous artists was born in the 20th century?',
        answers: [
            {text: 'Frida Kahlo', correct: true},
            {text: 'Henri Matisse', correct: false},
            {text: 'Marcel Duchamp', correct: false},
            {text: 'Sonia Delaunay', correct: false},
        ]
    },
    {
        question: 'First published in Adelaide in 1848, the first non-English language newspaper in Australia was in which language?',
        answers: [
            {text: 'German', correct: true},
            {text: 'Greek', correct: false},
            {text: 'Italian', correct: false},
            {text: 'Mandarin', correct: false},
        ]
    },
    {
        question: 'Which of these classic literary works was published first?',
        answers: [
            {text: 'A Tale of Two Cities', correct: false},
            {text: 'Les Misérables', correct: false},
            {text: 'The Count of Monte Cristo', correct: true},
            {text: 'War and Peace', correct: false},
        ]
    },
    {
        question: 'In 1912, former US President Theodore Roosevelt was a candidate for which political party?',
        answers: [
            {text: 'Bull Moose', correct: true},
            {text: 'Bull Dog', correct: false},
            {text: 'Bull Elephant', correct: false},
            {text: 'Bull Frog', correct: false},
        ]
    },
    {
        question: 'Who is the patron saint of Spain?',
        answers: [
            {text: 'Saint James', correct: true},
            {text: 'Saint John', correct: false},
            {text: 'Saint Benedict', correct: false},
            {text: 'Saint Peter', correct: false},
        ]
    },
    {
        question: 'In Greek mythology, what was left in Pandora\'s box?',
        answers: [
            {text: 'Faith', correct: false},
            {text: 'Hope', correct: true},
            {text: 'Charity', correct: false},
            {text: 'Justice', correct: false},
        ]
    },
    {
        question: 'What is a \'siskin\'?',
        answers: [
            {text: 'Seed pod', correct: false},
            {text: 'Barrel', correct: false},
            {text: 'Bird', correct: true},
            {text: 'Leather pouch', correct: false},
        ]
    },
    {
        question: 'Which of these is a novel by Oliver Goldsmith?',
        answers: [
            {text: 'The Pastor of York', correct: false},
            {text: 'The Bishop of Barnsley', correct: false},
            {text: 'The Curate of Sheffield', correct: false},
            {text: 'The Vicar of Wakefield', correct: true},
        ]
    },
    {
        question: 'When we unburden ourselves of worry by talking about it, we are said to \'get it off our...\' what?',
        answers: [
            {text: 'Head', correct: false},
            {text: 'Chest', correct: true},
            {text: 'Stomach', correct: false},
            {text: 'Lap', correct: false},
        ]
    }
]

export default questions;
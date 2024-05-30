export const text_test_dataset_1 = [
  {
    id: 1,
    query: "When did Virgin Australia start operating?",
    context:
      "Virgin Australia, the trading name of Virgin Australia Airlines Pty Ltd, is an Australian-based airline. It is the largest airline by fleet size to use the Virgin brand. It commenced services on 31 August 2000 as Virgin Blue, with two aircraft on a single route. It suddenly found itself as a major airline in Australia's domestic market after the collapse of Ansett Australia in September 2001. The airline has since grown to directly serve 32 cities in Australia, from hubs in Brisbane, Melbourne and Sydney.",
    response:
      "Virgin Australia commenced services on 31 August 2000 as Virgin Blue, with two aircraft on a single route.",
    expected: "{result}",
  },
  {
    id: 2,
    query: "When was Tomoaki Komorida born?",
    context:
      "Komorida was born in Kumamoto Prefecture on July 10, 1981. After graduating from high school, he joined the J1 League club Avispa Fukuoka in 2000. Although he debuted as a midfielder in 2001, he did not play much and the club was relegated to the J2 League at the end of the 2001 season. In 2002, he moved to the J2 club Oita Trinita. He became a regular player as a defensive midfielder and the club won the championship in 2002 and was promoted in 2003. He played many matches until 2005. In September 2005, he moved to the J2 club Montedio Yamagata. In 2006, he moved to the J2 club Vissel Kobe. Although he became a regular player as a defensive midfielder, his gradually was played less during the summer. In 2007, he moved to the Japan Football League club Rosso Kumamoto (later Roasso Kumamoto) based in his local region. He played as a regular player and the club was promoted to J2 in 2008. Although he did not play as much, he still played in many matches. In 2010, he moved to Indonesia and joined Persela Lamongan. In July 2010, he returned to Japan and joined the J2 club Giravanz Kitakyushu. He played often as a defensive midfielder and center back until 2012 when he retired.",
    response: "Tomoaki Komorida was born on July 10,1981.",
    expected: "",
  },
  {
    id: 3,
    query: "Given a reference text about Lollapalooza, where does it take place, who started it and what is it?",
    context:
      "Lollapalooza /\u02ccl\u0252l\u0259p\u0259\u02c8lu\u02d0z\u0259/ (Lolla) is an annual American four-day music festival held in Grant Park in Chicago. It originally started as a touring event in 1991, but several years later, Chicago became its permanent location. Music genres include but are not limited to alternative rock, heavy metal, punk rock, hip hop, and electronic dance music. Lollapalooza has also featured visual arts, nonprofit organizations, and political organizations. The festival, held in Grant Park, hosts an estimated 400,000 people each July and sells out annually. Lollapalooza is one of the largest and most iconic music festivals in the world and one of the longest-running in the United States.\n\nLollapalooza was conceived and created in 1991 as a farewell tour by Perry Farrell, singer of the group Jane's Addiction.",
    response:
      "Lollapalooze is an annual musical festival held in Grant Park in Chicago, Illinois. It was started in 1991 as a farewell tour by Perry Farrell, singe of the group Jane's Addiction. The festival includes an array of musical genres including alternative rock, heavy metal, punk rock, hip hop, and electronic dance music. The festivals welcomes an estimated 400,000 people each year and sells out annually. Some notable headliners include: the Red Hot Chili Peppers, Chance the Rapper, Metallica, and Lady Gage. Lollapalooza is one of the largest and most iconic festivals in the world and a staple of Chicago.",
    expected: "",
  },
  {
    id: 4,
    query: "Who was Kyle Van Zyl playing against when he scored 36 of hisa teams 61 points?",
    context:
      "Van Zyl joined the Eastern Province Kings Academy, where he played for the Eastern Province U19 side in the 2010 Under-19 Provincial Championship. He was a key player for the Eastern Province U21 side in the 2012 Under-21 Provincial Championship, scoring 71 points in eight appearances. Van Zyl was under the Top SARU Performers, scoring the most tries at 6 in the 2012 Provincial Under 21 in the Rugby Junior Provincials.\n\nThis included a record and a remarkable personal haul in their opening match, when he scored 36 of his team's points in a 61\u20133 victory over Boland U21, consisting of four tries and eight conversions and was awarded Man of the Match.",
    response:
      "Kyle Van Zyl was playing against Boland U21 when he scored 36 points, leading his team to victory in a 61-3 win.",
    expected: "",
  },
  {
    id: 5,
    query: "Who was the first to record the Needles and Pins song?",
    context:
      "\"Needles and Pins\" is a rock song credited to American writers Jack Nitzsche and Sonny Bono. Jackie DeShannon recorded it in 1963 and other versions followed. The most successful ones were by the Searchers, whose version reached No. 1 on the UK singles chart in 1964, and Smokie, who had a worldwide hit in 1977. Others who recorded the song include the Ramones, Gene Clark, and Tom Petty and the Heartbreakers with Stevie Nicks.\n\nJackie DeShannon version (1963)\nIn his autobiography, Bono states that he sang along with Nitzsche's guitar-playing, thus creating both the tune and the lyrics, being guided by the chord progressions. However, Jackie DeShannon claims that the song was written at the piano, and that she was a full participant in the song's creation, along with Nitzsche and Bono, although she did not get formal credit.\n\nDeShannon was the first to record the song; in the US it peaked at number 84 on the Billboard Hot 100 singles chart in May 1963. Though it was only a minor US hit, DeShannon's recording of the song topped the charts in Canada, hitting number one on the CHUM Chart in July 1963",
    response: "The first artist to record Needles and Pins song was DeShannon.",
    expected: "",
  },
  {
    id: 6,
    query: "Given this paragraph, what is the top speed of a Kia Stinger?",
    context:
      "Kia claims that the Stinger accelerates from zero to 100 km/h (62 mph) in 7.7, 6 and 4.9 seconds for the 2.2-liter diesel, 2.0-liter petrol and 3.3-liter petrol respectively. Schreyer reportedly drove a pre-production Stinger GT at a top speed of 269 km/h (167 mph) on the Autobahn.\n\nDuring a test by Car and Driver, an all-wheel-drive U.S. spec GT 3.3T with Michelin Pilot Sport 4 tires achieved 0\u201360 mph (0\u201397 km/h) in 4.6 seconds on the track, reached 0.91 g on the skidpad and was able to stop from 70 mph (113 km/h) in 164 feet (50 m). According to this publication, the U.S. model's top speed is governed at 167 mph (269 km/h) per Kia specs. In tests conducted by Motor Trend, the four-cylinder U.S. spec Stinger 2.0 RWD on Bridgestone Potenza tires reached 60 mph (97 km/h) in 6.6 seconds, completed the 1\u20444-mile (0.4 km) run in 15 seconds and stopped from 60 mph (97 km/h) in 126 feet (38 m). The average lateral acceleration recorded in track testing was 0.85 g.",
    response: "The top speed of a  is 269km/h (167mph) according to this text.",
    expected: "",
  },
];

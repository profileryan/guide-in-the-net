export type ArtworkId =
  | 'safe-entry'
  | 'history'
  | 'future-you'
  | 'impactbench'
  | 'grace-quek'
  | 'altar'
  | 'traces'
  | 'asia-maxxing'
  | 'hexagram'
  | 'xo'

export type ArtworkContent = {
  id: ArtworkId
  title: string
  artist: string
  sequence: '01' | '02' | '03' | '04' | '05'
  total: '02' | '03' | '05'
  sectionLabel: 'YOU AND THE NET' | 'TOGETHER IN THE NET' | 'HERE IN THE NET'
  palette: 'coral' | 'magenta' | 'violet' | 'blue' | 'rose' | 'cobalt' | 'moss' | 'signal-red' | 'jade' | 'ochre'
  pullQuote: string
  titleAlign?: 'left' | 'center' | 'right'
  titleSize?: string
  heroLabel?: string
  image?: {
    src: string
    alt: string
    note?: string
    position?: string
    aspect?: string
  }
  description: string[]
  whyNow: string[]
  reflection: string[]
}

export type SectionIntroContent = {
  number: string
  title: string
  lead?: string
  paragraphs: string[]
}

export const sectionOneIntro: SectionIntroContent = {
  number: 'SECTION 1',
  title: 'YOU AND\nTHE NET',
  paragraphs: [
    'Technology reaches us at an intimate scale: in the voice that answers, the score that judges, the portrait that predicts and the feed that learns what keeps us looking.',
    'The works in this section examine what happens when systems speak as us, measure us and rehearse who we might become.',
    'What do they reflect back—and which futures do they begin to prescribe? Where can they support agency, connection and care, and where do they create dependency?',
    'The question is not only what these technologies can do. It is what repeated use does to us.',
  ],
}

export const sectionTwoIntro: SectionIntroContent = {
  number: 'SECTION 2',
  title: 'TOGETHER IN\nTHE NET',
  paragraphs: [
    'No relationship with technology remains personal for long. A private choice becomes a data point; a post becomes an archive; a voice can become part of a shared memory.',
    'Across a living altar, an emotional map and the Commons, this section asks you not only to look, but to add, listen, disagree and leave something behind.',
    'A crowd becomes a community through participation, difference, care and the difficult work of staying in relation.',
    'What do we preserve? What do platforms flatten? What can many different lives build together?',
  ],
}

export const sectionThreeIntro: SectionIntroContent = {
  number: 'SECTION 3',
  title: 'HERE IN\nTHE NET',
  lead: 'Every story about technology begins somewhere: in a language, a belief, a history, an infrastructure and a relationship to power.',
  paragraphs: [
    'Here, code meets divination. AI rehearses Asian identities. Speculative archives refuse familiar divisions between nature and technology, body and data, past and future.',
    'These works show technology being absorbed, translated and reinvented across Southeast Asia. They ask what becomes possible when the future is imagined from here, rather than imported from elsewhere.',
  ],
}

export const sectionOneArtworks: Record<Extract<ArtworkId, 'safe-entry' | 'history' | 'future-you' | 'impactbench' | 'grace-quek'>, ArtworkContent> = {
  'safe-entry': {
    id: 'safe-entry',
    title: 'SAFE ENTRY V.2.5\n(2020)',
    artist: 'BY HEMAN CHONG',
    sequence: '01',
    total: '05',
    sectionLabel: 'YOU AND THE NET',
    palette: 'coral',
    pullQuote: 'The painting becomes image, gateway and historical document.',
    titleAlign: 'left',
    titleSize: '31px',
    image: {
      src: '/assets/works/safe-entry.jpg',
      alt: 'A visitor standing before Heman Chong’s painted Safe Entry V.2.5 QR code installation',
      position: 'center 47%',
      aspect: '3 / 2',
    },
    description: [
      'Chong’s painting is of a QR code. It references Singapore’s national SafeEntry check-in system, introduced during the COVID-19 pandemic to record visits to public venues. The work leads to an hour-long video from Chong’s Ambient Walking series, documenting a walk through Changi Airport Terminal 2 and uploaded to YouTube on April 30, 2020, the day before the terminal closed for renovation.',
      'Opening Islands in the Net, Chong’s painting is a historical marker pointing to a specific moment of accelerated data collection and worldwide digitalisation that catalysed the development and adoption of artificial intelligence (AI) in recent years.',
      'Existing simultaneously between YouTube and the physical gallery as both a virtual and a physical object, Chong’s work gives aesthetic form to one of the exhibition’s central propositions: that contemporary reality is produced through cybernetic networks that collapse the distinction between the virtual and the physical.',
    ],
    whyNow: [
      'Although SafeEntry belongs to the recent history of the pandemic, its underlying logic has not disappeared. Access to public life is increasingly mediated through machine-readable identities, permissions and systems of verification that operate largely beyond view.',
      'As more of everyday life is organised through apps, digital wallets, facial recognition and seamless check-ins, this work asks how quickly exceptional technologies become ordinary infrastructure — and how habits of scanning, registering and surrendering data reshape our relationship to public space.',
    ],
    reflection: [
      'What do you now scan, share or verify without giving it much thought?',
      'When convenience depends on exchanging data, how freely are we choosing?',
      'Which technologies introduced as temporary or exceptional have become permanent?',
    ],
  },
  history: {
    id: 'history',
    title: 'A HISTORY OF\nINTELLIGENCE IN\n((SOUTH)(EAST)) ASIA\n(2025)',
    artist: 'BY HO RUI AN',
    sequence: '02',
    total: '05',
    sectionLabel: 'YOU AND THE NET',
    palette: 'magenta',
    pullQuote: 'The future of AI cannot be understood without asking whose past made it possible.',
    titleAlign: 'right',
    titleSize: '29px',
    image: {
      src: '/assets/works/history-of-intelligence.jpg',
      alt: 'Ho Rui An’s wall-sized diagram A History of Intelligence in ((South)(East)) Asia',
      position: 'center 42%',
      aspect: '1.58 / 1',
    },
    description: [
      'Ho’s visual graphic mobilises information as art. In being situated at the start of the exhibition Islands in the Net, it provides a historical map of the entanglements of intelligence, computation, and geopolitics across the region from the 1940s to 2025, giving us a foundational understanding of our present while offering a backdrop through which we can consider Southeast Asia’s possible technological futures.',
      'Rather than treating artificial intelligence (AI) as a technological rupture, Ho’s work locates contemporary machine intelligence within longer histories of empire, logistics, development, and regional power. It reveals the inherited systems and associated spectres of empire, ideology, and geopolitics through which intelligence has been organised, measured, and operationalised across Southeast Asia.',
    ],
    whyNow: [
      'Conversations about AI often begin with the newest model release. This work begins elsewhere: with history.',
      'What we now call “intelligence” rests on decades of political decisions, infrastructure, research, labour and unequal relations of power. The future of AI cannot be understood without asking whose past made it possible, whose interests shaped it, and whose histories are still missing from the story.',
    ],
    reflection: [
      'What disappears when AI is told mainly as a Silicon Valley story?',
      'Whose work appears in the history of intelligence — and who remains invisible?',
      'What histories, people or systems would you add to this map?',
    ],
  },
  'future-you': {
    id: 'future-you',
    title: 'FUTURE YOU\n(2024–NOW)',
    artist: 'BY MIT MEDIA LAB',
    sequence: '03',
    total: '05',
    sectionLabel: 'YOU AND THE NET',
    palette: 'violet',
    pullQuote: 'A machine-generated possibility can begin to influence the choices through which that future is made.',
    titleAlign: 'right',
    titleSize: '38px',
    image: {
      src: '/assets/works/future-you.jpg',
      alt: 'A diagram showing a younger person in conversation with an AI-generated older future self',
      position: 'center',
      aspect: '1.45 / 1',
    },
    description: [
      'Future You is an AI digital-twin platform that invites people into conversations with possible versions of their future selves. Rather than predicting the future, Future You is designed to help people reflect on long-term goals, make better decisions today, and strengthen their sense of connection to who they may become. From information provided by the user, the AI system generates “future self memories”, backstories that the model references when speaking to the user.',
      'Future You grew out of Prof. Pat Pataranutaporn’s doctoral research and thesis on Cyborg Psychology, which explores how AI systems shape human cognition, behaviour, and psychology, and aspires to find ways to encourage human flourishing. It is the product of research and collaboration by researchers within and outside MIT, including Pub and Rachel, who bring their unique perspectives to the project.',
      'While Future You is a scientific research project that can be historicised in a long lineage of research into future selves that dates back to the 1960s, it is also a cultural project that speaks to our contemporary moment. It offers us a way to navigate the post-contemporary time complex, enabling us to speak to alternative future selves as a way of addressing our present. There are mental health benefits and the promise of an empowering tool for social mobility. It offers us pause and possibly a way out of being mere cogs in larger machines—whether that be the machinery and protocols of society or, more generally, the consumer-facing technologies that can manufacture our desires and impulses.',
    ],
    whyNow: [
      'AI is moving beyond answering questions. It is increasingly being positioned as a coach, confidant and guide: something that can help us plan careers, manage emotions or rehearse difficult conversations.',
      'At a moment shaped by self-optimisation, manifestation culture and algorithmic prediction, the work asks whether AI might help us think more generously and patiently about our future lives. It also asks what happens when a machine-generated possibility begins to influence the choices through which that future is actually made.',
    ],
    reflection: [
      'Did your future self’s advice feel credible?',
      'Which parts of this imagined future came from your own hopes, and which were introduced by the system?',
      'Did your future self expand your sense of possibility?',
    ],
  },
  impactbench: {
    id: 'impactbench',
    title: 'OPEN BENCHMARK OF AI\nIMPACT ON HUMANS\n(IMPACTBENCH) × CEREALLMS\n(2025–NOW)',
    artist: 'BY MIT MEDIA LAB × RYAN HO',
    sequence: '04',
    total: '05',
    sectionLabel: 'YOU AND THE NET',
    palette: 'blue',
    pullQuote: 'What does an AI system do to the person using it?',
    titleAlign: 'left',
    titleSize: '33px',
    image: {
      src: '/assets/works/impactbench-cereallm.jpg',
      alt: 'A collection of fictional CereaLLMs cereal boxes carrying AI Nutrition Labels',
      position: 'center',
      aspect: '16 / 9',
    },
    description: [
      'ImpactBench evaluates leading AI systems through an AI Nutrition Label that makes visible their potential impacts on people and society, including dimensions such as accuracy, safety, fairness, learning, well-being, agency, and social relationships. Rather than measuring only technical capability, it helps the public better understand how AI systems may influence human behaviour and cognition.',
      'Presented here alongside the online research project are speculative cereal boxes that imagine the AI Nutrition Labels from ImpactBench. Developed by Ryan Ho in partnership with Pat Pataranutaporn, Rachel Poonsiriwong, and Chayapatr (Pub) Archiwaranguprok, these objects (affectionately nicknamed CereaLLMs) make physical the findings of the existing research, pointing to how AI is a human utility and the urgency of consensus and literacy around AI.',
    ],
    whyNow: [
      'As AI becomes a companion, teacher, adviser and mediator of everyday decisions, accuracy is no longer an adequate measure of quality. A system can provide a factually correct response while making someone less confident, more dependent or more isolated.',
      'ImpactBench proposes that intelligence should be judged partly by the kind of human relationship it creates. Deciding what counts as wellbeing — and whose wellbeing matters — is an increasingly urgent question.',
    ],
    reflection: [
      'What should an AI be evaluated on beyond whether its answer is correct?',
      'Would you choose a less “capable” system if it better protected your autonomy and wellbeing?',
    ],
  },
  'grace-quek': {
    id: 'grace-quek',
    title: 'ART IN THE AGE OF\nHUMAN CLONING\n(2026)',
    artist: 'BY GRACE QUEK',
    sequence: '05',
    total: '05',
    sectionLabel: 'YOU AND THE NET',
    palette: 'rose',
    pullQuote: 'At what point does a copy become a new work — or a new person?',
    titleAlign: 'left',
    titleSize: '30px',
    image: {
      src: '/assets/works/grace-quek-cloning-ai.jpg',
      alt: 'Promotional artwork for Grace Quek’s Art in the Age of Human Cloning performance lecture',
      position: 'center',
      aspect: '16 / 9',
    },
    description: [
      'Art in the Age of Human Cloning (2026) is a performance developed in collaboration with DeepSeek that the artist performed at Padimai Art and Tech Studio on 10 July 2026.',
      'Revisiting a performance first staged at the University of Southern California in 1988, in which Dr Eng Olsen delivered a lecture on human cloning, the work speculates clones of modern artists as content producers and virtual entities, opening questions around authorship, reproduction, and authenticity in the age of human cloning. A multilayered and nuanced performance, one is never quite sure how much of Dr Eng Olsen’s lecture is factual.',
      'In collaborating with DeepSeek, Quek took on the persona of someone without much technical knowledge of AI and adhered to several rules. The performance, visuals, and soundtrack were produced through prompting. Second, she accepted defaults whenever possible. Third, she accepted DeepSeek’s recommendations for other models. She found that this led her to more Chinese models. Furthermore, in engaging with these models, all her prompts were produced by DeepSeek. When editing her script, she retained DeepSeek’s preset style, intending to preserve the integrity of the AI’s voice.',
      'Quek conceived the performance to be documented. The artwork comprises both the performance and its online documentation, staged through this installation with ‘standard’ promotional standees and a QR code that leads to a YouTube video and includes a link to her prompt history with DeepSeek.',
    ],
    whyNow: [
      'AI is often described as a new kind of collaborator — but it is trained on the replication and recombination of existing human work. This lecture asks whether authorship can survive when style, memory and identity can all be simulated.',
      'The work also asks who controls a copy once it begins to act for itself. A clone may inherit an artist’s name, data or appearance without inheriting their desires. In an era of deepfakes and synthetic personalities, authenticity may no longer mean being original. It may depend on who is speaking, who gets credit, and who has the right to refuse.',
    ],
    reflection: [
      'At what point does a copy become a new work — or a new person?',
      'When an artist works with AI, who should receive the credit, responsibility and blame?',
    ],
  },
}

export const sectionTwoArtworks: Record<Extract<ArtworkId, 'altar' | 'traces'>, ArtworkContent> = {
  altar: {
    id: 'altar',
    title: 'F4NT4SY_H4RD_\nDR1VE://ALTAR\n(2026)',
    artist: 'BY BUSSY TEMPLE\n(JO HO, ZENON, NYDIA, BRUCE AND MINSOO)',
    sequence: '01',
    total: '02',
    sectionLabel: 'TOGETHER IN THE NET',
    palette: 'cobalt',
    pullQuote: 'The altar is both record and gathering place: a structure through which the community continues to make itself.',
    titleAlign: 'left',
    titleSize: '30px',
    image: {
      src: '/assets/works/bussytemple-altar.jpg',
      alt: 'A dark BussyTemple gathering with amber beams of light cutting through a crowded dance floor',
      position: 'center 35%',
      aspect: '3 / 2',
    },
    description: [
      'Established in 2022, Bussy Temple is a Singapore-based queer rave collective that came together in response to a lack of spaces centred on trans, non-binary, and femme people within Singapore’s nightlife. Through their practice, they expand our definition of the rave from "nightlife entertainment" into a social, political, and aesthetic practice of imagining different ways of living together.',
      'Beginning with informal, invite-only gatherings, their raves have grown into public events and happenings that bring together performance art, community organising, and speculative world-building.',
      'Manifesting in Islands in the Net as a communal altar to their web archive of events, the installation invites visitors to explore an archive of videos, photographs, and community contributions collected over the years. Imagined as a growing network rather than an accumulation of historical records, visitors are invited to contribute to this living archive in the lead-up to Bussy Temple taking over the exhibition to host a rave on 12 September.',
    ],
    whyNow: [
      'Online platforms promise to preserve everything, yet community histories can remain fragile. Posts disappear, accounts are removed and experiences are flattened into content.',
      'This altar asks what it means to archive a culture that is embodied, collective and continually changing. It treats parties, friendships, costumes, messages and fleeting encounters as forms of cultural knowledge worth holding onto.',
      'The installation also resists the idea that an archive must be fixed, orderly or complete. Here, memory remains alive because people can still touch it, contest it and add to it.',
    ],
    reflection: [
      'What objects, images or rituals hold your community together?',
      'What deserves to be remembered that conventional archives might overlook?',
    ],
  },
  traces: {
    id: 'traces',
    title: 'TRACES\n(2026)',
    artist: 'BY RYAN HO,\nEMOTIONAL TECHNOLOGIES LAB,\nVIGNESH SUNDARESAN (METAKOVAN)',
    sequence: '02',
    total: '02',
    sectionLabel: 'TOGETHER IN THE NET',
    palette: 'moss',
    pullQuote: 'A private thought becomes part of a shared environment, available to someone you may never meet.',
    titleAlign: 'right',
    titleSize: '41px',
    image: {
      src: '/assets/works/traces-in-the-net.jpg',
      alt: 'The Traces interface showing floating coloured trace orbs and controls for exploring and listening',
      position: 'center 24%',
      aspect: '4 / 3',
    },
    description: [
      'Traces in the Net offers another way of encountering the city: through the thoughts, stories, feelings and sounds left behind by the people within it.',
      'Visitors can move through a map or an immersive digital space, listening to fragments of emotions, confessions and soundscapes. Each trace is small and partial. Together, they form a changing portrait of the city, layering interior lives over its infrastructure and geography.',
      'After listening, you are invited to leave a trace of your own. A private thought becomes part of a shared environment, available to someone you may never meet.',
      'Its record is deliberately partial: a constellation of intimate, uneven voices that continues to expand. Some may remain; others may eventually disappear.',
      'The blockchain stores no voice—only a timestamp proving that the contribution once existed. Two memories remain: the erasable intimacy of the voice and the durable abstraction of its timestamp.',
    ],
    whyNow: [
      'Cities are increasingly made legible through movement, property and consumption data. Traces maps what those systems miss: feeling, confession, atmosphere and interior life.',
    ],
    reflection: [
      'What would your city reveal if it were mapped by feeling instead of value?',
    ],
  },
}


export const sectionThreeArtworks: Record<Extract<ArtworkId, 'asia-maxxing' | 'hexagram' | 'xo'>, ArtworkContent> = {
  'asia-maxxing': {
    id: 'asia-maxxing',
    title: 'ASIA MAXXING\n(2026)',
    artist: 'BY WEIWEI HSU',
    sequence: '01',
    total: '03',
    sectionLabel: 'HERE IN THE NET',
    palette: 'signal-red',
    pullQuote: 'Its real subject is the system imagining you: the data, stereotypes and desires used to construct an “Asian life”.',
    titleAlign: 'left',
    titleSize: '44px',
    heroLabel: 'ALTERNATE-LIFE PHOTOBOOTH',
    image: {
      src: '/assets/works/asia-maxxing.jpg',
      alt: 'A diagram of an imagined Asia Maxxing life across home, café, commute, work and leisure platforms',
      position: 'center',
      aspect: '16 / 9',
    },
    description: [
      'What might your life have looked like if it had unfolded somewhere else in Asia?',
      'Developed from Weiwei Xu’s earlier project Chinamaxxing, this participatory photobooth generates an alternative version of your “Asian life.” Your image becomes the starting point for a speculative biography shaped through computational storytelling, popular imagery and assumptions about identity, place and possibility.',
      'The title borrows the internet suffix “-maxxing” — used online to describe the deliberate optimisation or performance of an identity. It also refers to recent social-media fascination with imagined Asian lifestyles, aesthetics and social values.',
      'The resulting life is a constructed fiction, assembled from algorithmic patterns, cultural stereotypes and the participant’s own projections.',
    ],
    whyNow: [
      'AI can create convincing stories and identities. Yet these narratives are assembled from patterns in existing data that carry assumptions about race, gender, class, nationality and what an “Asian life” is supposed to look like.',
      'At the same time, “Asia” itself is far from a single, stable identity. It is a vast and contested idea, shaped differently by people living within the region, its diasporas and those viewing it from elsewhere. This work makes this construction visible. Its alternate life may feel exciting, recognisable or absurd.',
      'Its real subject is the system imagining you: the data, stereotypes and desires used to construct an “Asian life”.',
    ],
    reflection: [
      'What assumptions did the experience make about Asia, and about you?',
      'Which parts felt culturally specific, and which felt like stereotype?',
      'Who gets to decide what an “Asian future” looks like?',
    ],
  },
  hexagram: {
    id: 'hexagram',
    title: 'ICHING\nHEXAGRAM\n(2026)',
    artist: 'BY WEIWEI HSU',
    sequence: '02',
    total: '03',
    sectionLabel: 'HERE IN THE NET',
    palette: 'jade',
    pullQuote: 'The work places an old predictive technology inside a new one.',
    titleAlign: 'right',
    titleSize: '46px',
    heroLabel: 'DIGITAL DIVINATION INTERFACE',
    image: {
      src: '/assets/works/hexagram-today.png',
      alt: 'A field of I Ching hexagrams with several symbols glowing in electric blue',
      position: 'center',
      aspect: '1 / 1',
    },
    description: [
      'Hexagram Today translates the ancient Chinese divination system of the I Ching, or Book of Changes, into a contemporary digital interface.',
      'The I Ching is organised around 64 hexagrams: figures composed of broken and unbroken lines whose changing arrangements are interpreted in relation to a question or situation. Its texts offer no fixed forecast. They invite reflection on change, uncertainty, timing and the relationships between different forces.',
      'Weiwei Xu brings this cosmological system into conversation with the computational systems through which people now seek guidance. In place of tossed coins, yarrow stalks or a human interpreter, visitors encounter divination through a screen.',
      'The work places an old predictive technology inside a new one — inviting us to consider what has changed, and what has not, in our desire to make uncertainty legible.',
    ],
    whyNow: [
      'Algorithms already tell us what to watch, where to go, who to meet and what may happen next. These predictions are often presented as objective and based on “data”.',
      'The I Ching offers a different relationship to prediction. Its answers are poetic, ambiguous and dependent upon interpretation. It does not simply claim to calculate the future; it asks the reader to examine their own position within a changing situation.',
      'This work asks whether uncertainty and alternative forms of cultural wisdom are something technology should eliminate, or something we can build on.',
    ],
    reflection: [
      'Why might advice feel more trustworthy when it appears on a screen?',
      'What is the difference between divination, prediction and recommendation?',
    ],
  },
  xo: {
    id: 'xo',
    title: 'XO\n(2026)',
    artist: 'BY FYEROOL DARMA',
    sequence: '03',
    total: '03',
    sectionLabel: 'HERE IN THE NET',
    palette: 'ochre',
    pullQuote: 'Every archive preserves a world—and decides which other worlds remain legible.',
    titleAlign: 'left',
    titleSize: '38px',
    heroLabel: 'SPECULATIVE ARCHIVE',
    image: {
      src: '/assets/works/xo.jpeg',
      alt: 'Fyerool Darma’s XO installation: a monumental illuminated terrain model surrounded by industrial structures',
      position: 'center',
      aspect: '16 / 9',
    },
    description: [
      'The exhibition culminates in Fyerool Darma’s XO (2026), an extension of his ongoing work kædæluwær§æk§§æk (A Xenographer’s Index) (2026), first presented at the Malay Heritage Centre, Singapore.',
      'Imagining an expedition into n**antara, a parallel world of the Nusantara, the installation unfolds as a cinematic and virtual double of Padimai’s physical exhibition space. Here, a worker responds to an AI job listing for a "Memory Diver" and enters a process of extraction. Narrated by a butterfly that remains in a room that no longer exists, the work asks what survives a system built to turn everything it encounters into data.',
      'XO, and the expanded universe of Fyerool’s project, includes a film, artefacts, a historical archive and library that trace the emergence of Southeast Asian Futurism from the 1970s through the work of Sutan Takdir Alisjahbana to contemporary theory by Singapore futurists such as Lee Chor Pharn.',
      'In marshalling references to older forms of archipelagic connectivity while also invoking the neurological (re)mappings of emergent networked forms of technological and informational interdependence, XO expands the historical idioms of Southeast Asian Futurism to include a critical appraisal of data, heritage, and ontology.',
    ],
    whyNow: [
      'Most technological futures inherit the same oppositions: nature or machine, body or data, real or virtual, tradition or progress. XO reorganises these familiar categories through different intellectual and cultural histories. Its future begins from a different set of assumptions.',
      'A database, museum or archive does not only store reality. Through its labels, it helps produce it.',
    ],
    reflection: [
      'Which boundary in your own life feels too rigid: human and machine, real and virtual, nature and technology, or past and future?',
      'What might become possible if that boundary loosened?',
    ],
  },
}

export const commonsContent = {
  title: 'THE\nCOMMONS',
  deck: 'The Commons centres the encounters between people: conversations, disagreements, pauses and contributions.',
  paragraphs: [
    'The low seats, cushions, tables, questions and voting wall arrange the room for conversation, disagreement, reconsideration and unstructured time.',
    'In a conventional exhibition, visitors are expected to move from one artwork to the next. Here, stopping is also participation. Your attention, conversations and contributions become part of the changing life of the room.',
    'The public poll offers a visible snapshot, not a final answer. Each cluster of stickers records both a collective position and the limits of the question: who participated, who hesitated and what nuance disappeared between the available choices?',
    'A commons does not require consensus. It is something people continually negotiate through difference, responsibility, generosity and care.',
  ],
  tryThis: [
    'Stay past your first impulse to move on.',
    'Vote, then return to your answer later.',
    'Speak with someone who chose differently.',
    'Leave a thought for the next person.',
  ],
}

export const readingRoomContent = {
  title: 'READING ROOM &\nRESEARCH ARCHIVE\nOF SOUTHEAST ASIAN\nFUTURES',
  deck: 'The archive is unfinished. So is the future.',
  paragraphs: [
    'Most visions of the future arrive already branded. They are produced by technology companies, circulated globally and presented as though everyone is travelling to the same destination.',
    'The room gathers a counter-archive of Southeast Asian experiments in modernity, ecology, networks and collective life—evidence that the region has long imagined technological change on its own terms.',
    'These histories show that networks existed before the internet, and that questions now associated with AI—about knowledge, power, ecological crisis and collective life—have much deeper roots.',
    'Recovering these histories widens the material from which the future can be made.',
  ],
  browsingCues: [
    'Pick up something outside your usual field.',
    'Follow one reference into another.',
    'Notice who and what is absent.',
  ],
  reflectionQuestions: [
    'Whose future is missing from this archive?',
    'Which idea here deserves to be put back into circulation?',
    'What history, person or publication would you add?',
  ],
}

export const closingContent = {
  title: 'CONTINUE?',
  paragraphs: [
    'You began with the self: how technology speaks back to us, measures us and rehearses who we might become. The view then widened to communities and shared memory, before turning to the histories and beliefs from which Southeast Asian futures are made.',
    'These scales are inseparable. Personal choices become collective patterns. Communities inherit histories. Every imagined future elevates some values, voices and ways of living over others.',
    'The future is not waiting somewhere else. It is being produced now—by the systems we use, the stories we repeat and the relationships we choose to sustain.',
  ],
  questions: [
    'What do you want technology to help us become?',
    'What should it never be allowed to decide for us?',
    'What will you contribute to the net—and what will you refuse to give it?',
  ],
  ending: ['The exhibition ends here.', 'The questions leave with you.'],
}

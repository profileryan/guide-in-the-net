export type ArtworkId =
  | 'safe-entry'
  | 'history'
  | 'future-you'
  | 'impactbench'
  | 'grace-quek'
  | 'altar'
  | 'traces'

export type ArtworkContent = {
  id: ArtworkId
  title: string
  artist: string
  sequence: '01' | '02' | '03' | '04' | '05'
  total: '02' | '05'
  sectionLabel: 'YOU AND THE NET' | 'TOGETHER IN THE NET'
  palette: 'coral' | 'magenta' | 'violet' | 'blue' | 'rose' | 'cobalt' | 'moss'
  pullQuote: string
  titleAlign?: 'left' | 'center' | 'right'
  titleSize?: string
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
  paragraphs: string[]
}

export const sectionOneIntro: SectionIntroContent = {
  number: 'SECTION 1',
  title: 'YOU AND\nTHE NET',
  paragraphs: [
    'Before technology becomes infrastructure, policy or culture, it meets us personally.',
    'It speaks in our voice, imagines our future, measures our wellbeing and unsettles familiar ideas of identity, originality and what it means to be human.',
    'The works in this section invite you to examine that encounter.',
    'What do intelligent systems reflect back about who you are, and who you might become?',
    'Where might they support human flourishing, and where might they diminish autonomy, connection or care?',
    'Rather than asking only what these technologies can do, You and the Net asks what they do to us, and what kind of relationship we want to have with them.',
  ],
}

export const sectionTwoIntro: SectionIntroContent = {
  number: 'SECTION 2',
  title: 'TOGETHER IN\nTHE NET',
  paragraphs: [
    'No relationship with technology remains personal for long. Our individual choices and traces accumulate into shared archives, social norms, rituals, memories and ways of belonging.',
    'Here, visitors are invited to listen, respond and add something of their own. Across a living shrine, voices gathered from the city, changing public questions and spaces for reflection, the exhibition becomes something made collectively rather than simply observed.',
    'Together in the Net asks how a crowd becomes a community: not through automatic agreement, but through participation, difference, care and exchange.',
    'What do we preserve? What do we make visible? And what kinds of worlds can many different lives build together?',
  ],
}

export const sectionOneArtworks: Record<Extract<ArtworkId, 'safe-entry' | 'history' | 'future-you' | 'impactbench' | 'grace-quek'>, ArtworkContent> = {
  'safe-entry': {
    id: 'safe-entry',
    title: 'SAFE ENTRY\n(VERSION 2.0–2.7)',
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
      alt: 'A visitor standing before Heman Chong’s painted SafeEntry QR code installation',
      position: 'center 47%',
      aspect: '3 / 2',
    },
    description: [
      'Heman Chong’s painting resembles one of the SafeEntry QR codes that became part of everyday life in Singapore during the COVID-19 pandemic. These codes functioned as invisible checkpoints: visitors scanned them to register their presence before entering shops, workplaces and public spaces.',
      'Chong’s painted code does not lead to the national contact-tracing system. Instead, it opens Ambient Walking: Changi Airport Terminal 2: an hour-long video documenting the artist’s walk through the terminal during Singapore’s Circuit Breaker. Filmed while international travel had almost stopped, the video records an airport designed for movement at a moment of profound stillness.',
      'By painstakingly translating a machine-readable code into paint, Chong brings a digital interface back into the realm of the handmade and bodily. The painting becomes image, gateway and historical document.',
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
    title: 'A HISTORY OF\nINTELLIGENCE IN\n((SOUTH)(EAST)) ASIA',
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
      note: 'Current approved guide crop; replace only when a final installation photograph is supplied.',
      position: 'center 42%',
      aspect: '1.58 / 1',
    },
    description: [
      'Ho Rui An’s wall-sized diagram traces a history of computation and artificial intelligence in Southeast Asia from the 1940s to the present. Part timeline, part map and part counter-archive, the work connects technologies to the institutions, political ambitions and historical conditions through which they entered the region.',
      'The work challenges the familiar story that digital technology travelled outward from a handful of laboratories and companies in the United States. Instead, it asks us to understand intelligence through the particular histories of Asia: histories shaped by colonialism, war, development, state-building, labour and global flows of capital and expertise.',
      'Even the doubled brackets in the title resist a simple geographical boundary. Where does “East Asia” end and “Southeast Asia” begin, and who has the power to draw that line?',
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
    title: 'FUTURE YOU',
    artist: 'BY MIT MEDIA LAB\nFT. RACHEL POONSIRIWONG',
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
      'Future You invites you to speak with an AI-generated version of yourself at around 60 years old.',
      'The experience begins by asking about your present life, personal qualities, hopes and future goals. From this information, the system creates an age-progressed portrait and a speculative biography — or “synthetic memory” — connecting who you are now with someone you might plausibly become. You can then ask this future self questions, seek advice or reflect on the paths that might lead from the present to that imagined life.',
      'The project draws upon psychological research into “future self-continuity”: the sense that the person we may become is connected to the person we are today. Previous research links a stronger connection to one’s future self with long-term behaviours such as saving, academic planning and greater wellbeing. Future You investigates whether generative AI can make that distant self feel more vivid, relatable and emotionally present.',
      'Follow-on research is now exploring whether simulated future selves can support reflection around career paths and significant life decisions.',
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
    title: 'IMPACTBENCH ×\nCEREALLM',
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
      alt: 'A collection of fictional CereaLLM cereal boxes carrying AI nutrition labels',
      position: 'center',
      aspect: '16 / 9',
    },
    description: [
      'Most AI benchmarks ask how successfully a model can reason, calculate, retrieve information or complete a task. ImpactBench begins with a different question: What does an AI system do to the person using it?',
      'The project evaluates AI across physical, psychological and societal dimensions of human wellbeing. It examines realistic, extended human–AI interactions in which effects such as dependency, diminished autonomy, manipulation or emotional harm may emerge gradually.',
      'For this exhibition, these findings are presented as a shelf of fictional breakfast cereals. Familiar LLMs are reimagined as competing consumer brands, complete with slogans, activities and “nutrition labels” describing their possible effects on users.',
      'Like products on a supermarket shelf, these labelled boxes ask visitors to look beyond branding and performance claims. An AI system may appear capable, convenient or appealing while still carrying less visible costs.',
      'ImpactBench asks us to consider what we are consuming, what it is feeding us, and how it may shape us over time.',
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
    title: 'ART IN THE AGE OF\nHUMAN CLONING & AI',
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
      'In 1997, Grace Quek presented a performance lecture through the persona of Dr Eng Olsen, using human cloning to examine reproduction, appropriation and authenticity in art. Almost three decades later, Quek returns to the work in collaboration with DeepSeek, reworking its questions for an age of generative AI.',
      'Delivered with the authority of an academic lecture, the performance begins with recognisable art-historical debates: Renaissance workshops, disputed attribution, photographic repetition, museum reproductions and Andy Warhol’s use of existing images.',
      'Gradually, fact gives way to speculative fiction. Museums secretly clone historical artists. Artificial memories are implanted into resurrected sculptors. A teenage clone of He Xiangning refuses to reproduce her paintings and becomes a drum-and-bass musician. A virtual Andy Warhol completes works that the historical artist never made. The boundary between research, performance and fabrication becomes deliberately unstable.',
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
    artist: 'BY BUSSYTEMPLE',
    sequence: '01',
    total: '02',
    sectionLabel: 'TOGETHER IN THE NET',
    palette: 'cobalt',
    pullQuote: 'It does not simply document a community. It is one of the places through which that community continues to make itself.',
    titleAlign: 'left',
    titleSize: '30px',
    image: {
      src: '/assets/works/bussytemple-altar.jpg',
      alt: 'A dark BussyTemple gathering with amber beams of light cutting through a crowded dance floor',
      position: 'center 35%',
      aspect: '3 / 2',
    },
    description: [
      'BussyTemple is a Southeast Asian rave collective working across electronic music, performance, visual culture and practices of care. Their gatherings approach queer nightlife not simply as entertainment, but as a form of worldbuilding: a space in which bodies, identities and relationships can temporarily be reorganised.',
      'At the centre of F4NT4SY_H4RD_DR1VE://ALTAR is an open scaffolding structure that functions simultaneously as archive, network and communal altar. Screens hold videos, photographs and contributions gathered across BussyTemple’s history, while physical objects and traces are attached to the structure itself.',
      'Unlike a conventional archive, the altar is deliberately unfinished. Visitors and community members can continue adding to it, allowing its form and meaning to change over the exhibition. During BussyTemple’s September gathering, the bare structure will be further transformed through materials, messages, images and performance.',
      'It does not simply document a community. It is one of the places through which that community continues to make itself.',
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
    title: 'TRACES\nIN THE NET',
    artist: 'BY RYAN HO,\nEMOTIONAL TECHNOLOGIES LAB\nAND VIGNESH SUNDARESAN',
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
      'Visitors can move through a map or an immersive digital space, listening to fragments of emotions, confessions and soundscapes. Each trace is small and partial. Together, they form a changing portrait of the city — not as infrastructure or geography alone, but as an accumulation of interior lives.',
      'After listening, you are invited to leave a trace of your own. A private thought becomes part of a shared environment, available to someone you may never meet.',
      'The project does not attempt to produce a complete or authoritative record. It offers a constellation of voices: intimate, uneven and continually expanding. Some may remain; others may eventually disappear.',
      'Alongside this living archive, a record of each contribution is preserved on the blockchain. The voice itself is not stored there. Instead, what remains is proof that it once existed: a timestamped mark of presence, even after the original trace is gone. In this way, Traces holds two forms of memory at once — one fragile and human, the other persistent but abstract.',
    ],
    whyNow: [
      'Cities are understood through official maps, demographics, property values and data. These systems can tell us where people travel and what they consume, but not necessarily what a place feels like or means to those living within it.',
      'This emotional counter-map asks whether digital networks might help us notice one another more carefully, beyond merely making us more visible.',
    ],
    reflection: [
      'What would your city look like if it were mapped by feeling?',
      'When does a private thought become part of public memory?',
      'What trace would you leave for a stranger to find?',
    ],
  },
}

export const commonsContent = {
  title: 'THE\nCOMMONS',
  deck: 'This room is intentionally unfinished.',
  paragraphs: [
    'Its low seats, cushions, tables, questions and voting wall do not point toward a single object at the centre. Instead, they create the conditions for something less predictable to happen: sitting, reading, talking, listening, disagreeing, reconsidering or simply spending time together.',
    'In a conventional exhibition, visitors are often expected to move from one artwork to the next. Here, stopping is also a form of participation. Your attention, conversations and contributions become part of the changing life of the space.',
    'The public poll offers a visible snapshot of what people think — but not a final answer. Every cluster of stickers represents both a collective position and the limitations of the question being asked. Who participated? Who hesitated? What nuance was lost between the available choices? Could you change your mind?',
    'This space does not assume that community means consensus. A commons is something people continually negotiate: through difference, responsibility, generosity and care.',
  ],
  reflectionLead: 'A community is not simply a group of people in the same place. It begins with what they are willing to make, hold and reconsider together.',
  reflectionBullets: [
    'Sit for longer than feels necessary.',
    'Respond to a question, or leave a better one.',
    'Place a voting sticker, then see whether the works change your answer.',
    'Speak with someone whose response differs from yours.',
    'Leave a thought for whoever arrives next.',
  ],
}

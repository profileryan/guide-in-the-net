export type ArtworkContent = {
  id: 'history' | 'safe-entry'
  title: string
  artist: string
  titleAlign?: 'left' | 'center' | 'right'
  image?: {
    src: string
    alt: string
    note?: string
  }
  description: string[]
  whyNow: string[]
  reflection: string[]
}
export const sectionOneIntro = {
  number: 'SECTION 1',
  title: 'YOU IN\nTHE NET',
  paragraphs: [
    'Before technology becomes infrastructure, policy or culture, it meets us personally.',
    'It speaks in our voice, imagines our future, measures our wellbeing and unsettles familiar ideas of identity, originality and what it means to be human.',
    'The works in this section invite you to examine that encounter.',
    'What do intelligent systems reflect back about who you are, and who you might become?',
    'Where might they support human flourishing, and where might they diminish autonomy, connection or care?',
    'Rather than asking only what these technologies can do, You & the Net asks what they do to us, and what kind of relationship we want to have with them.',
  ],
}

export const sectionOneArtworks: Record<ArtworkContent['id'], ArtworkContent> = {
  history: {
    id: 'history',
    title: 'A HISTORY OF\nINTELLIGENCE IN\n((SOUTH)(EAST))\nASIA',
    artist: 'BY HO RUI AN',
    titleAlign: 'right',
    image: {
      src: '/assets/history-of-intelligence.jpg',
      alt: 'Ho Rui An’s wall-sized diagram A History of Intelligence in ((South)(East)) Asia',
      note: 'Temporary image crop from the supplied wireframe; replace with the final artwork photograph when available.',
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
  'safe-entry': {
    id: 'safe-entry',
    title: 'SAFE ENTRY\n(VERSION\n2.0–2.7)',
    artist: 'BY HEMAN CHONG',
    titleAlign: 'center',
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
}

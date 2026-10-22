import { DeckConfig } from '../types/game';

// Helper to create 50 cards respecting the max 4-copy rule
export const STARTER_DECKS: DeckConfig[] = [
  {
    id: 'deck-iron-arcane',
    name: 'Iron & Arcane Vanguard',
    partnerId: 'PARTNER-01',
    originId: 'ORIGIN-01',
    universes: ['iron-frontier', 'arcane-dominion'],
    cardIds: [
      // 4x Frontline Riflemen (4)
      'IF-01', 'IF-01', 'IF-01', 'IF-01',
      // 3x Ironclad Trench Walker (7)
      'IF-02', 'IF-02', 'IF-02',
      // 3x Siege Mortar Battery (10)
      'IF-03', 'IF-03', 'IF-03',
      // 3x Tactical Airbase (13)
      'IF-04', 'IF-04', 'IF-04',
      // 4x Airborne Paratroopers (17)
      'IF-05', 'IF-05', 'IF-05', 'IF-05',
      // 3x Fortified Bunker (20)
      'IF-06', 'IF-06', 'IF-06',
      // 3x Combat Engineer (23)
      'IF-07', 'IF-07', 'IF-07',
      // 3x Carpet Bombing (26)
      'IF-08', 'IF-08', 'IF-08',
      // 4x Mystic Spellblade (30)
      'AD-01', 'AD-01', 'AD-01', 'AD-01',
      // 3x Aether Magus (33)
      'AD-02', 'AD-02', 'AD-02',
      // 3x Arcane Obelisk (36)
      'AD-03', 'AD-03', 'AD-03',
      // 4x Dimensional Blink (40)
      'AD-04', 'AD-04', 'AD-04', 'AD-04',
      // 3x Barrier Golem (43)
      'AD-05', 'AD-05', 'AD-05',
      // 3x Phoenix Pyre (46)
      'AD-06', 'AD-06', 'AD-06',
      // 2x Dense Smoke Field (48)
      'DOM-01', 'DOM-01',
      // 2x Rift Core Talisman (50)
      'REL-02', 'REL-02',
    ],
  },
  {
    id: 'deck-cyber-mythic',
    name: 'Cyber-Mythic Syndicate',
    partnerId: 'PARTNER-03',
    originId: 'ORIGIN-03',
    universes: ['neo-genesis', 'mythic-wilds'],
    cardIds: [
      // Neo Genesis
      'NG-01', 'NG-01', 'NG-01', 'NG-01', // 4
      'NG-02', 'NG-02', 'NG-02', 'NG-02', // 8
      'NG-03', 'NG-03', 'NG-03', // 11
      'NG-04', 'NG-04', 'NG-04', // 14
      'NG-05', 'NG-05', 'NG-05', // 17
      'NG-06', 'NG-06', 'NG-06', 'NG-06', // 21
      'REL-01', 'REL-01', 'REL-01', // 24
      // Mythic Wilds
      'MW-01', 'MW-01', 'MW-01', // 27
      'MW-02', 'MW-02', 'MW-02', 'MW-02', // 31
      'MW-03', 'MW-03', 'MW-03', 'MW-03', // 35
      'MW-04', 'MW-04', 'MW-04', 'MW-04', // 39
      'MW-05', 'MW-05', 'MW-05', // 42
      // Support & Tech
      'IF-01', 'IF-01', 'IF-01', 'IF-01', // 46
      'IF-05', 'IF-05', 'IF-05', 'IF-05', // 50
    ],
  },
  {
    id: 'deck-multiverse-conquest',
    name: 'Multiverse Frontline Nexus',
    partnerId: 'PARTNER-02',
    originId: 'ORIGIN-02',
    universes: ['iron-frontier', 'arcane-dominion', 'neo-genesis', 'mythic-wilds'],
    cardIds: [
      // Cross-universe balanced 50
      'IF-01', 'IF-01', 'IF-01', // 3
      'IF-04', 'IF-04', // 5 (Airbase)
      'IF-05', 'IF-05', 'IF-05', 'IF-05', // 9 (Paratroopers)
      'IF-08', 'IF-08', // 11
      'AD-01', 'AD-01', 'AD-01', // 14
      'AD-02', 'AD-02', 'AD-02', // 17
      'AD-03', 'AD-03', // 19 (Obelisk)
      'AD-04', 'AD-04', 'AD-04', // 22
      'AD-06', 'AD-06', // 24
      'NG-01', 'NG-01', 'NG-01', // 27
      'NG-02', 'NG-02', 'NG-02', // 30
      'NG-03', 'NG-03', // 32 (Fabricator)
      'NG-04', 'NG-04', // 34
      'NG-05', 'NG-05', // 36
      'NG-06', 'NG-06', // 38
      'MW-01', 'MW-01', // 40 (Apex Drake)
      'MW-02', 'MW-02', // 42
      'MW-03', 'MW-03', 'MW-03', // 45
      'MW-04', 'MW-04', // 47
      'REL-01', 'REL-02', 'DOM-01', // 50
    ],
  },
];

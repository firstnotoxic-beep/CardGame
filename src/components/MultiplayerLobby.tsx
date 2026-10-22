import React, { useState } from 'react';
import { DeckConfig } from '../types/game';
import { MAP_PRESETS, MapPreset } from '../game/battlefield';
import { Bot, Users, Plane, Globe, Play, Sparkles, Shield, Swords, Layers, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

export type GamePlayMode = 'ai-skirmish' | 'hotseat' | 'airborne-scenario' | 'room-lobby';

interface MultiplayerLobbyProps {
  decks: DeckConfig[];
  selectedDeckId: string;
  onSelectDeckId: (id: string) => void;
  onStartGame: (mode: GamePlayMode, mapId: string, roomCode?: string) => void;
  onOpenDeckBuilder: () => void;
  onOpenCardCreator: () => void;
  onOpenRanked: () => void;
  onOpenRules: () => void;
  userElo: number;
  userRank: string;
}

export const MultiplayerLobby: React.FC<MultiplayerLobbyProps> = ({
  decks,
  selectedDeckId,
  onSelectDeckId,
  onStartGame,
  onOpenDeckBuilder,
  onOpenCardCreator,
  onOpenRanked,
  onOpenRules,
  userElo,
  userRank,
}) => {
  const [mode, setMode] = useState<GamePlayMode>('ai-skirmish');
  const [selectedMapId, setSelectedMapId] = useState<string>('map-forest-frontier');
  const [roomCode, setRoomCode] = useState<string>('NEXUS-42');
  const [isJoining, setIsJoining] = useState<boolean>(false);

  const selectedDeck = decks.find((d) => d.id === selectedDeckId) || decks[0];
  const selectedMap = MAP_PRESETS.find((m) => m.id === selectedMapId) || MAP_PRESETS[0];

  const handleStart = () => {
    soundFx.playDeploy();
    onStartGame(mode, selectedMapId, mode === 'room-lobby' ? roomCode : undefined);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-4 md:p-8 bg-slate-950 text-slate-100 select-none overflow-x-hidden">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('/src/assets/images/riftbound_nexus_title_1792637672325.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90 pointer-events-none" />

      {/* TOP BAR CONTRACT: Brand Wordmark - Nav Links - Primary CTA */}
      <header className="relative z-10 flex items-center justify-between gap-8 pb-4 border-b border-slate-800">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-display font-black text-xl text-slate-950 shadow-lg shadow-cyan-500/20">
            R
          </div>
          <div>
            <h1 className="font-display font-black text-lg md:text-xl tracking-wider text-slate-100 uppercase whitespace-nowrap shrink-0">
              RIFTBOUND
            </h1>
            <div className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
              Frontline Nexus · Multiverse Warfare
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-400">
          <button
            onClick={onOpenDeckBuilder}
            className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Layers className="w-4 h-4 text-cyan-400" /> Deck Builder
          </button>
          <button
            onClick={onOpenCardCreator}
            className="hover:text-pink-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-pink-400" /> Creator's Circle
          </button>
          <button
            onClick={onOpenRanked}
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Shield className="w-4 h-4 text-amber-400" /> Ranked Ladder
          </button>
          <button
            onClick={onOpenRules}
            className="hover:text-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" /> How to Play
          </button>
        </nav>

        {/* Zone 3: Player Elo & Quick Launch */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] uppercase font-bold text-slate-400">Rating</div>
            <div className="text-xs font-mono-nums font-bold text-amber-300">
              {userRank} · {userElo} Elo
            </div>
          </div>
          <button
            onClick={handleStart}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-cyan-900/40 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4 fill-current" /> Deploy to Frontline
          </button>
        </div>
      </header>

      {/* MAIN CONTENT: MODE SELECTION & SETUP */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-6 max-w-6xl mx-auto w-full">
        {/* LEFT: GAME MODE SELECTION (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Select Tactical Engagement Mode
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Mode 1: AI Skirmish */}
            <button
              onClick={() => {
                setMode('ai-skirmish');
                soundFx.playCardSelect();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'ai-skirmish'
                  ? 'border-cyan-400 bg-cyan-950/40 ring-1 ring-cyan-400 shadow-lg shadow-cyan-950'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  Single Player
                </span>
              </div>
              <div className="font-bold text-sm text-slate-100">AI Architect Skirmish</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Battle against our tactical AI bot that advances across three lanes, captures Outposts, and coordinates assaults.
              </p>
            </button>

            {/* Mode 2: Local Hotseat */}
            <button
              onClick={() => {
                setMode('hotseat');
                soundFx.playCardSelect();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'hotseat'
                  ? 'border-indigo-400 bg-indigo-950/40 ring-1 ring-indigo-400 shadow-lg shadow-indigo-950'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  Local 1v1
                </span>
              </div>
              <div className="font-bold text-sm text-slate-100">Pass & Play Hotseat</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Two human commanders compete on the same device with alternating turns and tactical inspection.
              </p>
            </button>

            {/* Mode 3: Airborne Paratrooper Scenario */}
            <button
              onClick={() => {
                setMode('airborne-scenario');
                soundFx.playCardSelect();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'airborne-scenario'
                  ? 'border-amber-400 bg-amber-950/40 ring-1 ring-amber-400 shadow-lg shadow-amber-950'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                  <Plane className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                  Tactical Scenario
                </span>
              </div>
              <div className="font-bold text-sm text-slate-100">Airborne Logistics Drop</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Jump right in with a constructed Airbase and Paratroopers ready to execute behind-the-lines Outpost conquest.
              </p>
            </button>

            {/* Mode 4: Online Room Code Relay */}
            <button
              onClick={() => {
                setMode('room-lobby');
                soundFx.playCardSelect();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'room-lobby'
                  ? 'border-purple-400 bg-purple-950/40 ring-1 ring-purple-400 shadow-lg shadow-purple-950'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                  <Globe className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                  P2P Multi-Tab
                </span>
              </div>
              <div className="font-bold text-sm text-slate-100">Room Code Matchmaking</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect two browser windows or tabs in real-time using secure broadcast sync with custom room codes.
              </p>
            </button>
          </div>

          {/* Room Code input if in room lobby mode */}
          {mode === 'room-lobby' && (
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/60 mt-3 space-y-2">
              <div className="text-xs font-bold text-purple-300">
                P2P Room Synchronization
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-slate-100 uppercase tracking-widest focus:outline-none focus:border-purple-400"
                  placeholder="ROOM-CODE"
                />
                <button
                  onClick={() => {
                    const code = `NEXUS-${Math.floor(10 + Math.random() * 89)}`;
                    setRoomCode(code);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-semibold"
                >
                  Generate New Code
                </button>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Open this app in a second window or tab with the same room code to play a 2-player synchronized match.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT: DECK & MAP CONFIGURATION (5 cols) */}
        <div className="lg:col-span-5 space-y-4 bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
          {/* Deck Configuration */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Active Tactical Deck
              </span>
              <button
                onClick={onOpenDeckBuilder}
                className="text-xs text-cyan-400 hover:underline font-semibold"
              >
                Edit in Studio
              </button>
            </div>

            <select
              value={selectedDeckId}
              onChange={(e) => onSelectDeckId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-200 font-bold focus:outline-none focus:border-cyan-500"
            >
              {decks.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.cardIds.length} cards)
                </option>
              ))}
            </select>
          </div>

          {/* Map Preset Selector */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Battlefield Sector
            </span>

            <select
              value={selectedMapId}
              onChange={(e) => setSelectedMapId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-200 font-bold focus:outline-none focus:border-cyan-500 mb-2"
            >
              {MAP_PRESETS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
              <div className="font-semibold text-slate-200">{selectedMap.name}</div>
              <p className="text-[11px] text-slate-400">{selectedMap.description}</p>
              <div className="text-[11px] text-amber-300 font-semibold pt-1 border-t border-slate-800">
                Rule: {selectedMap.specialRules}
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={handleStart}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-950/60 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" /> Launch Battle Simulation
          </button>
        </div>
      </div>

      {/* FOOTER: Flat Control Hints */}
      <footer className="relative z-10 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
        3 Strategic Lanes · Outpost Capture · Multiverse Synergy · Airborne Drops
      </footer>
    </div>
  );
};

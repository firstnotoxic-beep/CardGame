import React from 'react';
import { CardDefinition, CardAbility } from '../types/game';
import { UNIVERSE_CONFIG } from '../data/cards';
import { Shield, Swords, Heart, Navigation, Crosshair, Flag } from 'lucide-react';

interface CardViewProps {
  card: CardDefinition;
  variant?: 'hand' | 'detail' | 'compact' | 'creator';
  isSelected?: boolean;
  canAfford?: boolean;
  onClick?: () => void;
}

export const CardView: React.FC<CardViewProps> = ({
  card,
  variant = 'detail',
  isSelected = false,
  canAfford = true,
  onClick,
}) => {
  const uni = UNIVERSE_CONFIG[card.universe] || UNIVERSE_CONFIG['iron-frontier'];

  // Hand card representation (compact for bottom dock)
  if (variant === 'hand') {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`group relative flex flex-col justify-between w-32 h-44 rounded-lg p-2.5 text-left transition-all duration-200 select-none border shrink-0 ${
          isSelected
            ? 'scale-105 -translate-y-3 shadow-xl shadow-cyan-500/30 border-cyan-400 bg-slate-900 ring-2 ring-cyan-400'
            : canAfford
            ? 'hover:-translate-y-2 hover:shadow-lg hover:border-slate-400 bg-slate-900/95 border-slate-700/80'
            : 'opacity-50 cursor-not-allowed bg-slate-950/90 border-slate-800'
        }`}
      >
        {/* Top: Universe & Cost Badges */}
        <div className="flex items-center justify-between w-full">
          <span className={`text-[10px] font-semibold tracking-wider uppercase ${uni.accentText}`}>
            {card.universe.split('-')[0]}
          </span>
          <div className="flex items-center gap-1 font-mono-nums text-xs font-bold">
            <span className="flex items-center justify-center w-5 h-5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {card.cost.charge}
            </span>
            {card.cost.rift && card.cost.rift > 0 ? (
              <span className="flex items-center justify-center w-5 h-5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                {card.cost.rift}
              </span>
            ) : null}
          </div>
        </div>

        {/* Center: Title & Type */}
        <div className="my-auto">
          <div className="text-xs font-bold text-slate-100 line-clamp-2 leading-tight">
            {card.name}
          </div>
          <div className="text-[10px] text-slate-400 capitalize mt-0.5">
            {card.cardType}
          </div>
        </div>

        {/* Bottom Stats for Units */}
        {card.cardType === 'unit' ? (
          <div className="flex items-center justify-between text-[11px] font-mono-nums pt-1 border-t border-slate-800 text-slate-300">
            <span className="flex items-center gap-0.5 text-rose-400 font-bold">
              <Swords className="w-3 h-3" /> {card.attack}
            </span>
            <span className="flex items-center gap-0.5 text-emerald-400 font-bold">
              <Heart className="w-3 h-3" /> {card.health}
            </span>
            <span className="flex items-center gap-0.5 text-sky-400 font-bold">
              <Shield className="w-3 h-3" /> {card.defense}
            </span>
          </div>
        ) : (
          <div className="text-[10px] text-slate-400 italic line-clamp-1 border-t border-slate-800 pt-1">
            {card.abilities?.[0]?.name || card.keywords?.[0] || 'Strategic Card'}
          </div>
        )}
      </button>
    );
  }

  // Full detailed card (Inspector & Deck Builder)
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col justify-between w-64 h-92 rounded-xl p-4 text-left transition-all duration-200 select-none border bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-2xl ${
        isSelected ? 'border-cyan-400 ring-2 ring-cyan-500/50' : 'border-slate-700/80 hover:border-slate-500'
      } ${card.isCustom ? 'ring-1 ring-pink-500/40' : ''}`}
    >
      {/* Header: Name, Universe, Cost */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <h3 className="font-display font-bold text-sm tracking-wide text-slate-100 leading-snug">
              {card.name}
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
              <span className={`font-semibold ${uni.accentText}`}>{uni.name}</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{card.cardType}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 font-mono-nums shrink-0">
            <div className="flex items-center gap-0.5 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs" title="Charge Cost">
              ⚡ {card.cost.charge}
            </div>
            {card.cost.rift ? (
              <div className="flex items-center gap-0.5 px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold text-xs" title="Rift Energy Cost">
                🌀 {card.cost.rift}
              </div>
            ) : null}
            {card.cost.resolve ? (
              <div className="flex items-center gap-0.5 px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold text-xs" title="Resolve Cost">
                🛡️ {card.cost.resolve}
              </div>
            ) : null}
          </div>
        </div>

        {/* Card Art / Thematic Banner */}
        <div className="w-full h-24 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center relative overflow-hidden my-2">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          <div className="text-center z-20 px-3">
            {card.canCapture ? (
              <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40 mb-1">
                <Flag className="w-3 h-3" /> ยูนิตยึดฐาน (Outpost Capturer)
              </div>
            ) : null}
            {card.keywords && card.keywords.length > 0 ? (
              <div className="text-[11px] font-mono-nums text-slate-300 tracking-wide">
                {card.keywords.join(' · ')}
              </div>
            ) : (
              <div className="text-[11px] text-slate-400">การ์ดยุทธวิธีพหุภพ</div>
            )}
          </div>
        </div>

        {/* Abilities & Effect Box */}
        <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/40 rounded-lg p-2.5 border border-slate-800/80">
          {card.abilities && card.abilities.length > 0 ? (
            card.abilities.map((ab: CardAbility) => (
              <div key={ab.id} className="leading-relaxed">
                <span className="font-bold text-cyan-300">{ab.name}: </span>
                <span className="text-slate-300">{ab.description}</span>
              </div>
            ))
          ) : (
            <div className="text-slate-400 italic leading-relaxed">
              การจัดวางกำลังและต่อสู้ตามมาตรฐาน
            </div>
          )}
        </div>
      </div>

      {/* Flavor Text */}
      {card.flavor ? (
        <div className="text-[10px] text-slate-500 italic my-1.5 line-clamp-2 px-1">
          "{card.flavor}"
        </div>
      ) : null}

      {/* Unit Tactical Stats Strip */}
      {card.cardType === 'unit' ? (
        <div className="grid grid-cols-5 gap-1 pt-2 border-t border-slate-800 text-center font-mono-nums text-xs">
          <div className="flex flex-col items-center p-1 rounded bg-rose-950/30 border border-rose-900/40">
            <span className="text-[9px] text-rose-400 font-sans flex items-center gap-0.5">
              <Swords className="w-2.5 h-2.5" /> โจมตี
            </span>
            <span className="font-bold text-rose-300 text-sm">{card.attack}</span>
          </div>

          <div className="flex flex-col items-center p-1 rounded bg-emerald-950/30 border border-emerald-900/40">
            <span className="text-[9px] text-emerald-400 font-sans flex items-center gap-0.5">
              <Heart className="w-2.5 h-2.5" /> เลือด
            </span>
            <span className="font-bold text-emerald-300 text-sm">{card.health}</span>
          </div>

          <div className="flex flex-col items-center p-1 rounded bg-sky-950/30 border border-sky-900/40">
            <span className="text-[9px] text-sky-400 font-sans flex items-center gap-0.5">
              <Shield className="w-2.5 h-2.5" /> เกราะ
            </span>
            <span className="font-bold text-sky-300 text-sm">{card.defense}</span>
          </div>

          <div className="flex flex-col items-center p-1 rounded bg-amber-950/30 border border-amber-900/40">
            <span className="text-[9px] text-amber-400 font-sans flex items-center gap-0.5">
              <Navigation className="w-2.5 h-2.5" /> เคลื่อน
            </span>
            <span className="font-bold text-amber-300 text-sm">{card.move}</span>
          </div>

          <div className="flex flex-col items-center p-1 rounded bg-indigo-950/30 border border-indigo-900/40">
            <span className="text-[9px] text-indigo-400 font-sans flex items-center gap-0.5">
              <Crosshair className="w-2.5 h-2.5" /> ระยะ
            </span>
            <span className="font-bold text-indigo-300 text-sm">{card.range}</span>
          </div>
        </div>
      ) : card.cardType === 'structure' ? (
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-mono-nums">
          <span className="text-emerald-400 flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" /> เลือด: {card.health}
          </span>
          <span className="text-sky-400 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" /> เกราะ: {card.defense}
          </span>
          <span className="text-amber-400 font-bold uppercase text-[10px]">
            สิ่งปลูกสร้าง
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
          <span className="uppercase text-[10px] tracking-wider font-semibold text-cyan-400">
            {card.cardType === 'tactic' ? 'ยุทธวิธี (Tactic)' : card.cardType === 'relic' ? 'เครื่องราง (Relic)' : card.cardType}
          </span>
          <span className="text-[10px] font-mono-nums capitalize text-slate-500">
            {card.rarity}
          </span>
        </div>
      )}
    </div>
  );
};

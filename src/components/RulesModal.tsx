import React from 'react';
import { X, Zap, Shield, Radio, Plane, Flag, Crosshair, Navigation, Swords } from 'lucide-react';

interface RulesModalProps {
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none">
      <div className="relative bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-100">
              Architect Tactical Field Manual
            </h2>
            <div className="text-xs text-slate-400">
              Rules of engagement for RIFTBOUND: Frontline Nexus
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Rules Content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs text-slate-300 leading-relaxed">
          {/* Section 1: Objective */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-rose-400" /> Primary Objective
            </h3>
            <p>
              Both players command a Main Base Nexus with <strong className="text-slate-100">30 Nexus Integrity</strong>. Deploy units across three lanes, advance toward the enemy base, and demolish their nexus to win the battle.
            </p>
          </div>

          {/* Section 2: Three Lanes & Battlefield Depth */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Navigation className="w-4 h-4 text-cyan-400" /> Three-Lane Tactical Grid
            </h3>
            <p>
              The arena has 3 columns (Left, Center, Right) and 7 depth rows:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li><strong className="text-slate-200">Row 0:</strong> Opponent Base Zone</li>
              <li><strong className="text-slate-200">Rows 1 & 5:</strong> Rear Deployment Zones for defensive structures and Airbases</li>
              <li><strong className="text-slate-200">Row 3:</strong> The Contested Frontline containing 3 strategic Outposts</li>
              <li><strong className="text-slate-200">Row 6:</strong> Player Base Zone</li>
              <li>Units advance and retreat along their lane. Units in middle rows (2, 3, 4) or flying units can transition between adjacent lanes.</li>
            </ul>
          </div>

          {/* Section 3: Strategic Outposts */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Flag className="w-4 h-4 text-amber-400" /> Outpost Capture System
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-amber-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Supply Outpost
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Left Lane. Generates +1 Charge every round for controller.
                </div>
              </div>

              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-sky-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Fortress Outpost
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Center Lane. Grants +2 Defense aura to all friendly units in lane.
                </div>
              </div>

              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-purple-400 flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5" /> Relay Outpost
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Right Lane. Generates +1 Rift Energy every round.
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              To capture: Move a unit with <strong className="text-slate-200">canCapture</strong> onto the outpost. If uncontested, capture progress fills to 100%. If enemy units are nearby, the outpost becomes contested and suspends rewards.
            </p>
          </div>

          {/* Section 4: Airborne Deployment Scenario */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Plane className="w-4 h-4 text-amber-300" /> Airbase & Airborne Deployment
            </h3>
            <p>
              Constructing a <strong className="text-amber-300">Tactical Airbase</strong> in your rear zone unlocks the Airborne Drop protocol. Spend 3 Charge + 1 Rift to paradrop a squad of <strong className="text-slate-100">Airborne Paratroopers</strong> directly into any Outpost or backline landing zone to immediately contest objectives!
            </p>
          </div>

          {/* Section 5: The Three Resources */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" /> Resource Economy
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li><strong className="text-amber-300">⚡ Charge:</strong> Primary resource for deploying units, tactics, and structures (+2 per turn up to 10).</li>
              <li><strong className="text-purple-300">🌀 Rift:</strong> Dimensional resource from Relay Outposts & Arcane cards used for cross-universe abilities and airdrops.</li>
              <li><strong className="text-sky-300">🛡️ Resolve:</strong> Defensive stamina used for reactions and commander abilities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

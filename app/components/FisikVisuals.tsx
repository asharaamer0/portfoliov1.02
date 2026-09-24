"use client";

import { useMemo, useState } from "react";

/* ---------------------------------- shared --------------------------------- */

function Panel({
  kicker,
  title,
  children,
  hint,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a]">
      <div className="flex items-center justify-between gap-4 border-b border-white/5 px-6 py-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e8533a]">
            {kicker}
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
        </div>
        {hint ? (
          <span className="hidden shrink-0 rounded-full bg-white/5 px-3 py-1 text-[11px] text-[#9ca3af] sm:block">
            {hint}
          </span>
        ) : null}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

/* ------------------------------ 1. speed graphs ----------------------------- */

const SPEED_PRESETS = [
  {
    id: "snap",
    label: "Slow → Fast → Slow",
    color: "#e8533a",
    path: "M10 90 C 50 90, 70 20, 100 50 S 150 90, 190 10",
    use: "Seamless scene cuts",
    ae: "Position • Scale • Rotation",
  },
  {
    id: "impact",
    label: "Fast → Slow",
    color: "#c8e832",
    path: "M10 10 L 100 20 C 140 25, 160 60, 190 90",
    use: "Logo / UI impact hits",
    ae: "Scale + motion blur",
  },
  {
    id: "whip",
    label: "Whip-pan ramp",
    color: "#7dd3fc",
    path: "M10 85 C 60 80, 80 75, 110 40 C 140 10, 165 15, 190 12",
    use: "Diagram transitions",
    ae: "Position + directional blur",
  },
] as const;

export function SpeedGraphExplorer() {
  const [active, setActive] = useState<(typeof SPEED_PRESETS)[number]>(
    SPEED_PRESETS[0],
  );
  return (
    <Panel
      kicker="Interactive · 01"
      title="Advanced speed graphs"
      hint="Tap a curve to preview it"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {SPEED_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              active.id === p.id
                ? "bg-white text-black"
                : "bg-white/5 text-[#b0b0b0] hover:bg-white/10 hover:text-white"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl bg-black/40 p-4">
          <svg viewBox="0 0 200 100" className="h-44 w-full">
            <line x1="10" y1="10" x2="10" y2="90" stroke="#333" strokeWidth="1" />
            <line x1="10" y1="90" x2="190" y2="90" stroke="#333" strokeWidth="1" />
            <path
              key={active.id}
              d={active.path}
              stroke={active.color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="10" cy="90" r="4" fill={active.color} />
            <circle cx="190" cy="12" r="4" fill={active.color} />
            <circle r="5" fill="#fff">
              <animateMotion dur="1.6s" repeatCount="indefinite" path={active.path} />
            </circle>
          </svg>
          <p className="mt-2 text-center text-xs text-[#9ca3af]">
            White dot = playhead travelling the easing curve
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 text-sm">
          <div className="rounded-xl bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-[#9ca3af]">
              Used for
            </p>
            <p className="mt-1 font-semibold text-white">{active.use}</p>
          </div>
          <div className="rounded-xl bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-[#9ca3af]">
              Applied to in AE
            </p>
            <p className="mt-1 font-semibold text-white">{active.ae}</p>
          </div>
          <code className="rounded-xl bg-black/50 p-4 font-mono text-xs leading-relaxed text-[#c8e832]">
            speed = ease(time,in, out)
            <br />// graph editor: {active.label}
          </code>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------ 2. posterize time --------------------------- */

export function PosterizeTimeDemo() {
  const [fps, setFps] = useState(8);
  return (
    <Panel
      kicker="Interactive · 02"
      title="PosterizeTime — stepped motion"
      hint="Drag the slider"
    >
      <div className="grid items-center gap-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label htmlFor="fisik-fps" className="text-sm text-[#9ca3af]">
              Frame steps / second
            </label>
            <span className="rounded-full bg-[#e8533a] px-3 py-0.5 text-sm font-bold text-white">
              {fps} fps
            </span>
          </div>
          <input
            id="fisik-fps"
            type="range"
            min={4}
            max={24}
            step={1}
            value={fps}
            onChange={(e) => setFps(Number(e.target.value))}
            className="w-full accent-[#e8533a]"
          />
          <div className="mt-3 flex justify-between text-[11px] text-[#666]">
            <span>4 · choppy / stylised</span>
            <span>24 · smooth</span>
          </div>
          <code className="mt-4 block rounded-xl bg-black/50 p-4 font-mono text-xs leading-relaxed text-[#c8e832]">
            posterizeTime({fps});
            <br />
            valueAtTime(time)
          </code>
          <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">
            Low step values give the diagrams their snappy, stop-motion
            textbook feel. Higher values keep camera moves buttery.
          </p>
        </div>
        <div className="relative h-44 overflow-hidden rounded-xl bg-black/40">
          <div className="absolute inset-x-4 top-1/2 h-px bg-white/10" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 h-2 w-px bg-white/20"
              style={{ left: `${8 + i * 21}%` }}
            />
          ))}
          <div
            key={fps}
            className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#e8533a] to-[#ffb199] shadow-[0_0_30px_rgba(232,83,58,0.6)]"
            style={{
              animationName: "fisik-slide",
              animationDuration: "2s",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationTimingFunction: `steps(${fps})`,
            }}
          />
          <style>{`@keyframes fisik-slide { from { left: 4%; } to { left: calc(96% - 2.5rem); } }`}</style>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------- 3. text animate ---------------------------- */

const TEXT_PRESETS = [
  { id: "tracking", label: "Tracking in", desc: "Letter-spacing 0.6em → 0" },
  { id: "rise", label: "Blur rise", desc: "Opacity 0 + 24px rise + de-blur" },
  { id: "bounce", label: "Stagger bounce", desc: "Per-character overshoot" },
] as const;

type TextPreset = (typeof TEXT_PRESETS)[number]["id"];

export function TextAnimatorDemo() {
  const [preset, setPreset] = useState<TextPreset>("tracking");
  const [replay, setReplay] = useState(0);
  const letters = useMemo(() => "FISIK.APP".split(""), []);
  return (
    <Panel
      kicker="Interactive · 03"
      title="Kinetic text animators"
      hint="Replay the presets"
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {TEXT_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setPreset(p.id);
              setReplay((r) => r + 1);
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              preset === p.id
                ? "bg-white text-black"
                : "bg-white/5 text-[#b0b0b0] hover:bg-white/10 hover:text-white"
            }`}
          >
            {p.label}
          </button>
        ))}
        <button
          onClick={() => setReplay((r) => r + 1)}
          className="ml-auto rounded-full border border-[#e8533a] px-4 py-1.5 text-xs font-semibold text-[#e8533a] transition-all hover:bg-[#e8533a] hover:text-white"
        >
          ↻ Replay
        </button>
      </div>
      <div className="overflow-hidden rounded-xl bg-black/40 px-4 py-10 text-center">
        <div key={`${preset}-${replay}`} className="inline-flex" aria-label="FISIK.APP">
          {letters.map((ch, i) => (
            <span
              key={i}
              className="inline-block text-4xl font-black tracking-tight text-white md:text-6xl"
              style={{
                animationName:
                  preset === "tracking"
                    ? "fisik-tracking"
                    : preset === "rise"
                      ? "fisik-rise"
                      : "fisik-bounce",
                animationDuration:
                  preset === "bounce" ? "0.7s" : "0.9s",
                animationDelay: `${i * (preset === "bounce" ? 0.07 : 0.05)}s`,
                animationFillMode: "both",
                animationTimingFunction:
                  preset === "bounce"
                    ? "cubic-bezier(.2,1.6,.4,1)"
                    : "cubic-bezier(.2,.7,.2,1)",
                color: ch === "." ? "#e8533a" : "#fff",
              }}
            >
              {ch}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#9ca3af]">
          {TEXT_PRESETS.find((p) => p.id === preset)?.desc} · range selector
          + ease high
        </p>
      </div>
      <style>{`
        @keyframes fisik-tracking { from { opacity: 0; letter-spacing: 0.6em; transform: translateX(18px); } to { opacity: 1; letter-spacing: 0; transform: none; } }
        @keyframes fisik-rise { from { opacity: 0; transform: translateY(24px); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
        @keyframes fisik-bounce { 0% { opacity: 0; transform: translateY(34px) scale(.8); } 60% { opacity: 1; transform: translateY(-8px) scale(1.05); } 100% { opacity: 1; transform: none; } }
      `}</style>
    </Panel>
  );
}

/* --------------------------------- 4. 3D tilt ------------------------------- */

export function ModelTiltDemo() {
  const [tilt, setTilt] = useState({ x: -8, y: 14 });
  return (
    <Panel
      kicker="Interactive · 04"
      title="3D models & camera"
      hint="Move your cursor over the card"
    >
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div
          className="rounded-xl bg-black/40 p-8 [perspective:900px]"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            setTilt({ x: -py * 28, y: px * 28 });
          }}
          onMouseLeave={() => setTilt({ x: -8, y: 14 })}
        >
          <div
            className="relative mx-auto h-56 w-40 rounded-2xl border border-white/10 bg-gradient-to-b from-[#232323] to-[#101010] shadow-2xl transition-transform duration-150"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-x-4 top-4 rounded-lg bg-[#e8533a] px-2 py-1 text-center text-[10px] font-black tracking-widest text-white"
              style={{ transform: "translateZ(46px)" }}
            >
              FISIK.APP
            </div>
            <div
              className="absolute inset-x-4 top-16 space-y-2"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="h-14 rounded-lg bg-gradient-to-br from-[#7dd3fc]/70 to-[#e8533a]/70" />
              <div className="h-2 w-3/4 rounded bg-white/25" />
              <div className="h-2 w-1/2 rounded bg-white/15" />
            </div>
            <div
              className="absolute inset-x-4 bottom-4 flex gap-2"
              style={{ transform: "translateZ(58px)" }}
            >
              <div className="h-7 flex-1 rounded-full bg-white text-center text-[10px] font-bold leading-7 text-black">
                Simulate
              </div>
              <div className="h-7 flex-1 rounded-full border border-white/30 text-center text-[10px] font-bold leading-7 text-white">
                Graphs
              </div>
            </div>
          </div>
          <p className="mt-5 text-center font-mono text-[11px] text-[#9ca3af]">
            rotateX({tilt.x.toFixed(1)}°) rotateY({tilt.y.toFixed(1)}°)
          </p>
        </div>
        <div className="text-sm leading-relaxed text-[#b0b0b0]">
          <p>
            The phone mockup, floating formula cards, and orbiting atom were
            built as layered 3D in After Effects — one-node cameras, depth of
            field, and parallax nulls sell the depth.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "1-node camera push-ins on every hook",
              "CC Environment / depth-mapped layers for the atom",
              "Parallax nulls: foreground type vs background grid",
              "Subtle DOF so diagrams snap into focus",
            ].map((li) => (
              <li key={li} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8e832]" />
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------ 5. physics diagram -------------------------- */

export function PhysicsDiagramDemo() {
  const [angle, setAngle] = useState(48);
  const [velocity, setVelocity] = useState(14);
  const [playKey, setPlayKey] = useState(0);

  const { points, range, height } = useMemo(() => {
    const g = 9.8;
    const rad = (angle * Math.PI) / 180;
    const t = (2 * velocity * Math.sin(rad)) / g;
    const r = (velocity ** 2 * Math.sin(2 * rad)) / g;
    const h = (velocity * Math.sin(rad)) ** 2 / (2 * g);
    const pts: string[] = [];
    for (let i = 0; i <= 40; i++) {
      const ti = (i / 40) * t;
      const x = velocity * Math.cos(rad) * ti;
      const y = velocity * Math.sin(rad) * ti - 0.5 * g * ti ** 2;
      pts.push(`${(x / (r * 1.15)) * 260 + 10},${150 - (y / (h * 1.35)) * 125}`);
    }
    return { points: pts.join(" "), range: r, height: h };
  }, [angle, velocity]);

  return (
    <Panel
      kicker="Interactive · 05"
      title="Physics diagrams, simulated live"
      hint="Same math as the video"
    >
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-xl bg-black/40 p-4">
          <svg viewBox="0 0 280 165" className="h-52 w-full">
            <line x1="10" y1="150" x2="270" y2="150" stroke="#333" strokeWidth="1.5" />
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={i}
                x1={10 + i * 30}
                y1="150"
                x2={10 + i * 30}
                y2="144"
                stroke="#444"
                strokeWidth="1"
              />
            ))}
            <polyline
              points={points}
              fill="none"
              stroke="#c8e832"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeDasharray="1 0"
            />
            <line
              x1="10"
              y1="150"
              x2={10 + 46 * Math.cos((angle * Math.PI) / 180)}
              y2={150 - 46 * Math.sin((angle * Math.PI) / 180)}
              stroke="#e8533a"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle r="6" fill="#fff" key={playKey}>
              {playKey > 0 && (
                <animateMotion dur="1.8s" fill="freeze" path={`M${points.split(" ").join(" L")}`} />
              )}
            </circle>
          </svg>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-[#9ca3af]">
              R = {range.toFixed(1)} m · H = {height.toFixed(1)} m
            </span>
            <button
              onClick={() => setPlayKey((k) => k + 1)}
              className="rounded-full bg-white px-4 py-1.5 font-bold text-black transition hover:bg-[#c8e832]"
            >
              ▶ Launch
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <label htmlFor="fisik-angle" className="text-[#9ca3af]">
                Launch angle
              </label>
              <span className="font-bold text-white">{angle}°</span>
            </div>
            <input
              id="fisik-angle"
              type="range"
              min={15}
              max={75}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full accent-[#c8e832]"
            />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <label htmlFor="fisik-vel" className="text-[#9ca3af]">
                Initial velocity
              </label>
              <span className="font-bold text-white">{velocity} m/s</span>
            </div>
            <input
              id="fisik-vel"
              type="range"
              min={6}
              max={22}
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full accent-[#c8e832]"
            />
          </div>
          <code className="rounded-xl bg-black/50 p-4 font-mono text-[11px] leading-relaxed text-[#7dd3fc]">
            R = v²·sin(2θ)/g<br />
            H = (v·sinθ)²/2g
            <br />// AE: shape path + trim-path reveal
          </code>
        </div>
      </div>
    </Panel>
  );
}

/* --------------------------------- AE stack -------------------------------- */

export function AeStackGraphic() {
  const layers = [
    { name: "TEXT / kinetic animators", color: "#e8533a", w: "92%" },
    { name: "3D phone + camera", color: "#7dd3fc", w: "78%" },
    { name: "Diagrams + trim paths", color: "#c8e832", w: "84%" },
    { name: "PosterizeTime adjustment", color: "#a78bfa", w: "100%" },
    { name: "Speed-graph ramps", color: "#f472b6", w: "70%" },
    { name: "SFX / whooshes", color: "#9ca3af", w: "62%" },
  ];
  return (
    <div className="my-8 rounded-2xl bg-[#1a1a1a] p-6">
      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e8533a]">
        Timeline
      </p>
      <h3 className="mb-5 text-lg font-bold text-white">
        How the AE comp was stacked
      </h3>
      <div className="space-y-2.5">
        {layers.map((l, i) => (
          <div key={l.name} className="group flex items-center gap-3">
            <span className="w-6 font-mono text-xs text-[#666]">
              {String(layers.length - i).padStart(2, "0")}
            </span>
            <div className="flex-1 overflow-hidden rounded-lg bg-black/50">
              <div
                className="rounded-lg px-3 py-2 text-[11px] font-bold text-black transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ width: l.w, background: l.color }}
              >
                {l.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

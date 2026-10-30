// Monochrome diagrams for the Tourism-to-Housing Impact Fund page.
// Kept deliberately neutral (no semantic colour on roles) and dark-theme native.
// Labels are English; the page gates these to the EN locale until the DE copy lands.

const STROKE = "#4a4a4a"
const LINE = "#6b6b6b"
const TEXT = "#cfcfcf"
const MUTED = "#9c9c9c"
const KICKER = "#f5f2e8"

function Arrowhead({ id }: { id: string }) {
  return (
    <marker id={id} markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0,0 L7,3 L0,6" fill="none" stroke={LINE} strokeWidth="1" />
    </marker>
  )
}

// The five-step flow, with the municipality underpinning all of it.
export function MechanismDiagram() {
  const nodes = [
    { n: "01", label: "Funders", sub: "operators +\ninvestors" },
    { n: "02", label: "Lender", sub: "holds the\nfund" },
    { n: "03", label: "Pool", sub: "first-loss\nguarantee" },
    { n: "04", label: "Homes", sub: "commons,\noff-market" },
    { n: "05", label: "Proof", sub: "verified +\ncertified" },
  ]
  const x0 = 16
  const w = 164
  const gap = 32
  const step = w + gap
  const boxY = 24
  const boxH = 96

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 980 240" className="w-full min-w-[760px]" role="img" aria-label="The five-step mechanism: funders, lender, pool, homes, proof, underpinned by the municipality.">
        <defs>
          <Arrowhead id="arr-mech" />
        </defs>
        {nodes.map((node, i) => {
          const x = x0 + i * step
          return (
            <g key={node.n}>
              <rect x={x} y={boxY} width={w} height={boxH} rx="4" fill="#0d1117" stroke={STROKE} strokeWidth="1" />
              <text x={x + 14} y={boxY + 26} fontFamily="monospace" fontSize="12" letterSpacing="2" fill={KICKER}>
                {node.n}
              </text>
              <text x={x + 14} y={boxY + 50} fontFamily="sans-serif" fontSize="19" fontWeight="300" fill={TEXT}>
                {node.label}
              </text>
              {node.sub.split("\n").map((line, j) => (
                <text key={line} x={x + 14} y={boxY + 72 + j * 15} fontFamily="monospace" fontSize="11.5" fill={MUTED}>
                  {line}
                </text>
              ))}
              {i < nodes.length - 1 && (
                <line
                  x1={x + w + 6}
                  y1={boxY + boxH / 2}
                  x2={x + w + gap - 4}
                  y2={boxY + boxH / 2}
                  stroke={LINE}
                  strokeWidth="1"
                  markerEnd="url(#arr-mech)"
                />
              )}
            </g>
          )
        })}

        {/* Municipality underlay */}
        <g>
          {nodes.map((_, i) => {
            const x = x0 + i * step + w / 2
            return <line key={i} x1={x} y1={boxY + boxH} x2={x} y2={168} stroke={STROKE} strokeWidth="1" strokeDasharray="2 3" />
          })}
          <rect x={x0} y={168} width={step * 4 + w} height={44} rx="4" fill="#0d1117" stroke={STROKE} strokeWidth="1" />
          <text x={x0 + 16} y={188} fontFamily="monospace" fontSize="11" letterSpacing="2" fill={KICKER}>
            UNDERPINNED BY
          </text>
          <text x={x0 + 16} y={204} fontFamily="sans-serif" fontSize="14" fontWeight="300" fill={TEXT}>
            The municipality: land, legal facilitation, political backing
          </text>
        </g>
      </svg>
    </div>
  )
}

// The two loops that make operators want in: capital and reputation.
function Loop({
  x,
  title,
  nodes,
  ret,
}: {
  x: number
  title: string
  nodes: string[]
  ret: string
}) {
  const pillW = 150
  const pillH = 52
  const gapY = 26
  const top = 56
  return (
    <g>
      <text x={x} y={28} fontFamily="monospace" fontSize="12" letterSpacing="2" fill={KICKER}>
        {title}
      </text>
      {nodes.map((label, i) => {
        const y = top + i * (pillH + gapY)
        return (
          <g key={label}>
            <rect x={x} y={y} width={pillW} height={pillH} rx="6" fill="#0d1117" stroke={STROKE} strokeWidth="1" />
            {label.split("\n").map((line, j) => (
              <text
                key={line}
                x={x + pillW / 2}
                y={y + (label.includes("\n") ? 22 : 31) + j * 15}
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize="13.5"
                fontWeight="300"
                fill={TEXT}
              >
                {line}
              </text>
            ))}
            {i < nodes.length - 1 && (
              <line
                x1={x + pillW / 2}
                y1={y + pillH + 3}
                x2={x + pillW / 2}
                y2={y + pillH + gapY - 3}
                stroke={LINE}
                strokeWidth="1"
                markerEnd="url(#arr-loop)"
              />
            )}
          </g>
        )
      })}
      {/* return arc from last node back up to the first */}
      <path
        d={`M ${x} ${top + (nodes.length - 1) * (pillH + gapY) + pillH / 2}
            C ${x - 44} ${top + (nodes.length - 1) * (pillH + gapY) + pillH / 2},
              ${x - 44} ${top + pillH / 2},
              ${x - 2} ${top + pillH / 2}`}
        fill="none"
        stroke={LINE}
        strokeWidth="1"
        strokeDasharray="3 3"
        markerEnd="url(#arr-loop)"
      />
      <text x={x - 48} y={top + ((nodes.length - 1) * (pillH + gapY)) / 2 + pillH / 2} textAnchor="middle" fontFamily="monospace" fontSize="10.5" fill={MUTED}>
        <tspan x={x - 50} dy="0">{ret.split("\n")[0]}</tspan>
        {ret.split("\n")[1] && <tspan x={x - 50} dy="13">{ret.split("\n")[1]}</tspan>}
      </text>
    </g>
  )
}

export function CircuitsDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 560 360" className="w-full min-w-[520px]" role="img" aria-label="Two loops run in parallel: a capital loop and a reputation loop.">
        <defs>
          <Arrowhead id="arr-loop" />
        </defs>
        <Loop
          x={120}
          title="THE CAPITAL LOOP"
          nodes={["Operators\ncontribute", "The pool\nlends", "Commons\ngrow", "Homes held\noff-market"]}
          ret={"returns +\ncertificate"}
        />
        <Loop
          x={390}
          title="THE REPUTATION LOOP"
          nodes={["Contribute", "Earn a\nverified star", "Listed in the\nimpact guide", "Travellers\nchoose"]}
          ret={"social licence,\nsmoother permits"}
        />
      </svg>
    </div>
  )
}

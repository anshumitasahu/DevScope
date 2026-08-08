import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  frame: "#B2AED1",
  face: "#000000",
  markCardinal: "#D9D9D9",
  markQuarter: "white",
  markMinor: "#2B2B2B",
  centerNut: "#D9D9D9",
  handPrimary: "white",
  handSecondary: "#A26BFF",
  handStroke: "white",
  hourHand: "#D9D9D9",
  glowStart: "#180020",
  glowEnd: "#E497FF",
} as const

type ClockColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<ClockColors>
  animate?: boolean
  rotationSpeed?: number
}

export default function Clock({
  className = "w-100",
  colors,
  animate = true,
  rotationSpeed = 5,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const paint0Id = `${uid}-paint0`
  const paint1Id = `${uid}-paint1`
  const paint2Id = `${uid}-paint2`
  const paint3Id = `${uid}-paint3`
  const paint4Id = `${uid}-paint4`
  const paint5Id = `${uid}-paint5`
  const maskId = `${uid}-mask`

  return (
    <div>
      <svg
        className={className}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 372 372"
      >
        <g id="clock">
          <g id="clock-frame">
            <circle cx="186.5" cy="185.5" r="170.5" fill={c.frame} />
            <ellipse cx="186.5" cy="187" rx="170.5" ry="169" fill={c.face} fillOpacity="0.84" />
            <ellipse cx="186" cy="187.5" rx="153" ry="154.5" fill={`url(#${paint0Id})`} />
            <circle cx="186" cy="186" r="153" fill={c.face} />
            <circle cx="186" cy="186" r="143.5" stroke={`url(#${paint1Id})`} strokeOpacity="0.39" />
            <path opacity="0.46" d="M357 188.5C357 232.924 339.037 275.528 307.062 306.94C275.087 338.353 231.719 356 186.5 356C141.281 356 97.9133 338.353 65.9383 306.94C33.9634 275.528 16 232.924 16 188.5L186.5 188.5H357Z" fill={`url(#${paint2Id})`} />
          </g>
          <g id="clock-mins">
            <g id="Group 2">
              <rect x="184.469" y="54.4686" width="2" height="9" fill={c.markCardinal} />
              <rect x="184.469" y="308.469" width="2" height="9" fill={c.markCardinal} />
              <rect x="317.469" y="184.469" width="2" height="9" transform="rotate(90 317.469 184.469)" fill={c.markCardinal} />
              <rect x="63.4688" y="185.469" width="2" height="9" transform="rotate(90 63.4688 185.469)" fill={c.markCardinal} />
            </g>
            <g id="Group 3">
              <rect x="163.417" y="56.4081" width="2" height="9" transform="rotate(-9.22094 163.417 56.4081)" fill={c.markMinor} />
              <rect x="204.118" y="307.126" width="2" height="9" transform="rotate(-9.22094 204.118 307.126)" fill={c.markMinor} />
              <rect x="315.53" y="163.416" width="2" height="9" transform="rotate(80.7791 315.53 163.416)" fill={c.markMinor} />
              <rect x="64.9717" y="205.105" width="2" height="9" transform="rotate(80.7791 64.9717 205.105)" fill={c.markMinor} />
            </g>
            <g id="Group 4">
              <rect x="144.43" y="61.1928" width="2" height="9" transform="rotate(-17.7599 144.43 61.1928)" fill={c.markMinor} />
              <rect x="221.907" y="303.088" width="2" height="9" transform="rotate(-17.7599 221.907 303.088)" fill={c.markMinor} />
              <rect x="310.745" y="144.429" width="2" height="9" transform="rotate(72.2401 310.745 144.429)" fill={c.markMinor} />
              <rect x="69.1543" y="222.859" width="2" height="9" transform="rotate(72.2401 69.1543 222.859)" fill={c.markMinor} />
            </g>
            <g id="Group 5">
              <rect x="125.145" y="69.371" width="2" height="9" transform="rotate(-26.8957 125.145 69.371)" fill={c.markMinor} />
              <rect x="240.047" y="295.896" width="2" height="9" transform="rotate(-26.8957 240.047 295.896)" fill={c.markMinor} />
              <rect x="302.567" y="125.144" width="2" height="9" transform="rotate(63.1043 302.567 125.144)" fill={c.markMinor} />
              <rect x="76.4932" y="240.938" width="2" height="9" transform="rotate(63.1043 76.4932 240.938)" fill={c.markMinor} />
            </g>
            <g id="Group 6">
              <rect x="107.404" y="80.5074" width="2" height="9" transform="rotate(-36.0315 107.404 80.5074)" fill={c.markMinor} />
              <rect x="256.814" y="285.916" width="2" height="9" transform="rotate(-36.0315 256.814 285.916)" fill={c.markMinor} />
              <rect x="291.43" y="107.403" width="2" height="9" transform="rotate(53.9685 291.43 107.403)" fill={c.markMinor} />
              <rect x="86.6094" y="257.623" width="2" height="9" transform="rotate(53.9685 86.6094 257.623)" fill={c.markMinor} />
            </g>
            <g id="Group 7">
              <rect x="91.6555" y="94.3196" width="2" height="9" transform="rotate(-45.1673 91.6555 94.3196)" fill={c.markQuarter} />
              <rect x="271.784" y="273.4" width="2" height="9" transform="rotate(-45.1673 271.784 273.4)" fill={c.markQuarter} />
              <rect x="277.618" y="91.6552" width="2" height="9" transform="rotate(44.8327 277.618 91.6552)" fill={c.markQuarter} />
              <rect x="99.2463" y="272.49" width="2" height="9" transform="rotate(44.8327 99.2463 272.49)" fill={c.markQuarter} />
            </g>
            <g id="Group 8">
              <rect x="78.3003" y="110.457" width="2" height="9" transform="rotate(-54.3031 78.3003 110.457)" fill={c.markMinor} />
              <rect x="284.578" y="258.665" width="2" height="9" transform="rotate(-54.3031 284.578 258.665)" fill={c.markMinor} />
              <rect x="261.481" y="78.3" width="2" height="9" transform="rotate(35.6969 261.481 78.3)" fill={c.markMinor} />
              <rect x="114.084" y="285.161" width="2" height="9" transform="rotate(35.6969 114.084 285.161)" fill={c.markMinor} />
            </g>
            <g id="Group 9">
              <rect x="67.6765" y="128.51" width="2" height="9" transform="rotate(-63.4389 67.6765 128.51)" fill={c.markMinor} />
              <rect x="294.869" y="242.087" width="2" height="9" transform="rotate(-63.4389 294.869 242.087)" fill={c.markMinor} />
              <rect x="243.427" y="67.6766" width="2" height="9" transform="rotate(26.5611 243.427 67.6766)" fill={c.markMinor} />
              <rect x="130.745" y="295.317" width="2" height="9" transform="rotate(26.5611 130.745 295.317)" fill={c.markMinor} />
            </g>
            <g id="Group 10">
              <rect x="60.054" y="148.021" width="2" height="9" transform="rotate(-72.5747 60.054 148.021)" fill={c.markMinor} />
              <rect x="302.397" y="224.084" width="2" height="9" transform="rotate(-72.5747 302.397 224.084)" fill={c.markMinor} />
              <rect x="223.917" y="60.0542" width="2" height="9" transform="rotate(17.4253 223.917 60.0542)" fill={c.markMinor} />
              <rect x="148.807" y="302.698" width="2" height="9" transform="rotate(17.4253 148.807 302.698)" fill={c.markMinor} />
            </g>
            <g id="Group 11">
              <rect x="55.6257" y="168.494" width="2" height="9" transform="rotate(-81.7105 55.6257 168.494)" fill={c.markMinor} />
              <rect x="306.972" y="205.115" width="2" height="9" transform="rotate(-81.7105 306.972 205.115)" fill={c.markMinor} />
              <rect x="203.443" y="55.6265" width="2" height="9" transform="rotate(8.28952 203.443 55.6265)" fill={c.markMinor} />
              <rect x="167.812" y="307.118" width="2" height="9" transform="rotate(8.28952 167.812 307.118)" fill={c.markMinor} />
            </g>
          </g>
          <g id="clock-hands">
            <motion.g
              id="min-hand-with-speed-background"
              animate={animate ? { rotate: 360 } : undefined}
              transition={
                animate
                  ? { duration: rotationSpeed, repeat: Infinity, ease: "linear" }
                  : undefined
              }
              style={{
                transformBox: "view-box",
                transformOrigin: "186px 189px",
              }}
            >
              <mask id={maskId} fill="white">
                <path d="M73.9985 189C73.9985 174.292 76.8955 159.728 82.524 146.139C88.1525 132.551 96.4024 120.204 106.803 109.804C117.203 99.4038 129.55 91.1539 143.138 85.5254C156.726 79.8968 171.29 76.9999 185.999 76.9999L185.999 189H73.9985Z" />
              </mask>
              <path d="M73.9985 189C73.9985 174.292 76.8955 159.728 82.524 146.139C88.1525 132.551 96.4024 120.204 106.803 109.804C117.203 99.4038 129.55 91.1539 143.138 85.5254C156.726 79.8968 171.29 76.9999 185.999 76.9999L185.999 189H73.9985Z" fill={`url(#${paint3Id})`} stroke={`url(#${paint4Id})`} strokeWidth="4" mask={`url(#${maskId})`} />
            </motion.g>
            <rect x="186.236" y="189.88" width="3" height="78.1619" transform="rotate(-82 186.236 189.88)" fill={`url(#${paint5Id})`} />
            <ellipse cx="185" cy="187.5" rx="15" ry="15.5" fill={c.centerNut} />
          </g>
        </g>
        <defs>
          <linearGradient id={paint0Id} x1="182" y1="138.815" x2="185.949" y2="342.001" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0" />
            <stop offset="1" stopColor="#F2E6FC" />
          </linearGradient>
          <linearGradient id={paint1Id} x1="186" y1="159.5" x2="186" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#707070" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={paint2Id} x1="186.5" y1="188.5" x2="186.5" y2="356" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.glowStart} stopOpacity="0" />
            <stop offset="0.387309" stopColor="#9000FF" stopOpacity="0.25" />
            <stop offset="0.634615" stopColor="#A200FF" stopOpacity="0.634615" />
            <stop offset="0.735577" stopColor="#B324FF" stopOpacity="0.735577" />
            <stop offset="1" stopColor={c.glowEnd} />
          </linearGradient>
          <linearGradient id={paint3Id} x1="188.999" y1="89.4999" x2="131.999" y2="142.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.handPrimary} />
            <stop offset="0.166553" stopColor="#FEC5FF" />
            <stop offset="0.325583" stopColor={c.handSecondary} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={paint4Id} x1="185.999" y1="76.9999" x2="113.499" y2="157.5" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.handStroke} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={paint5Id} x1="187.99" y1="251.9" x2="187.758" y2="170.554" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.hourHand} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

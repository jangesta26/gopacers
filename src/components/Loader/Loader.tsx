'use client'

import { motion } from 'framer-motion'

const dotVariants = {
  animate: (i: number) => ({
    scale: [0.8, 1.2, 0.8],
    backgroundColor: ['#b3d4fc', '#6793fb', '#b3d4fc'],
    boxShadow: [
      '0 0 0 0 rgba(178, 212, 252, 0.7)',
      '0 0 0 10px rgba(178, 212, 252, 0)',
      '0 0 0 0 rgba(178, 212, 252, 0.7)',
    ],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: i * 0.2 - 0.3,
    },
  }),
}

const logoVariants = {
  animate: (i: number) => ({
    scale: [1, 1.15, 1],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: i * 0.2 - 0.3,
    },
  }),
}

export default function LoaderDotsWithPulseLogo() {
  return (
    <div className="flex items-center justify-center h-screen w-full gap-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center space-y-1"
          style={{ minWidth: 32 }} // ensure consistent spacing
        >
          {/* Animated BrandLogo */}
          <motion.div
            className="w-6 h-6 flex-shrink-0 text-blue-600 dark:text-blue-400 overflow-visible"
            custom={i}
            variants={logoVariants}
            animate="animate"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1280.000000 1002.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1002.000000) scale(0.100000,-0.100000)" fill="#155dfc" stroke="none">
                    <path d="M4765 10014 c-22 -2 -80 -11 -130 -20 -496 -88 -933 -478 -1239 -1109 -65 -133 -82 -190 -130 -435 -70 -351 -99 -722 -85 -1070 9 -200 12 -222 69 -575 51 -315 60 -374 61 -432 1 -26 6 -1 10 57 16 198 41 302 162 680 36 113 84 264 107 335 155 496 415 991 636 1211 260 259 505 345 764 270 207 -60 373 -164 665 -415 55 -48 116 -99 135 -115 19 -16 99 -87 177 -158 198 -181 302 -260 418 -318 125 -63 189 -79 341 -87 234 -12 329 37 427 218 60 109 81 189 81 314 0 130 -17 190 -98 356 -192 386 -534 697 -1077 978 -256 133 -547 237 -779 281 -36 6 -87 16 -115 21 -54 11 -336 20 -400 13z" />
                    <path d="M8925 9614 c-102 -20 -140 -30 -205 -51 -284 -95 -514 -289 -644 -543 -97 -191 -130 -350 -114 -542 29 -343 246 -681 539 -842 185 -101 364 -148 569 -148 203 0 359 36 528 121 290 147 476 382 574 729 29 104 32 313 4 417 -39 150 -95 271 -189 408 -155 227 -451 404 -747 447 -63 9 -275 12 -315 4z" />
                    <path d="M12700 7683 c-18 -95 -47 -168 -143 -361 -128 -254 -265 -475 -419 -669 -237 -301 -787 -753 -1129 -928 -147 -75 -207 -95 -290 -95 -164 0 -334 100 -499 295 -99 116 -147 217 -290 605 -131 356 -247 549 -395 658 -81 59 -122 80 -213 103 -67 17 -85 18 -140 8 -81 -15 -158 -65 -240 -155 -152 -167 -219 -372 -209 -634 6 -146 19 -217 68 -374 171 -546 518 -1004 1009 -1333 95 -64 140 -86 234 -118 221 -74 509 -75 746 -1 334 103 761 377 1065 681 273 273 455 545 649 967 184 401 248 597 292 897 3 24 0 151 -7 282 l-13 239 -32 0 c-31 0 -32 -1 -44 -67z" />
                    <path d="M4205 5883 c-138 -16 -280 -77 -351 -149 -50 -52 -116 -179 -140 -269 -57 -217 -5 -491 130 -678 54 -77 136 -160 305 -311 131 -117 132 -118 114 -139 -225 -264 -861 -924 -1439 -1493 -741 -731 -1057 -1051 -1663 -1687 -156 -164 -419 -427 -585 -584 -276 -262 -579 -564 -572 -570 1 -2 38 6 82 18 149 39 670 336 1744 994 434 266 540 329 1470 875 744 437 872 515 1160 704 273 180 390 265 515 375 119 103 163 137 400 306 99 71 204 148 234 172 l53 43 112 -58 c138 -73 258 -150 358 -231 115 -92 125 -107 133 -195 7 -69 5 -77 -21 -122 -44 -77 -216 -241 -330 -317 -56 -37 -236 -137 -400 -221 -165 -84 -445 -231 -624 -326 -511 -270 -984 -498 -1295 -622 -167 -67 -390 -187 -375 -201 3 -3 55 -9 115 -14 117 -9 328 -2 528 16 67 6 174 16 237 22 330 29 556 70 845 150 226 63 261 73 550 149 556 148 852 248 1130 385 436 214 806 562 961 902 55 120 64 152 64 233 0 101 -30 214 -89 335 -63 130 -109 196 -260 385 -276 343 -520 595 -836 863 -71 61 -173 150 -225 198 -289 266 -789 630 -1045 761 -114 58 -538 233 -635 262 -60 19 -247 46 -295 44 -16 0 -43 -3 -60 -5z" />
                </g>
            </svg>
          </motion.div>

          {/* Animated Dot */}
          <motion.div
            className="w-5 h-5 rounded-full"
            custom={i}
            variants={dotVariants}
            animate="animate"
          />
        </div>
      ))}
    </div>
  )
}

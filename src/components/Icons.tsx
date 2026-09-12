import React from 'react';

// Path data for GARCIA logo with exact geometric proportions
const G_PATH = 'M 104,0 L 28,0 A 28 28 0 0 0 0,28 L 0,72 A 28 28 0 0 0 28,100 L 80,100 A 24 24 0 0 0 104,76 L 104,46 L 54,46 L 54,62 L 88,62 L 88,74 A 10 10 0 0 1 78,84 L 28,84 A 12 12 0 0 1 16,72 L 16,28 A 12 12 0 0 1 28,16 L 104,16 Z';
const A_PATH = 'M 49,0 L 57,0 L 106,100 L 88,100 L 53,28 L 18,100 L 0,100 Z';
const R_PATH = 'M 0,0 L 66,0 A 27 27 0 0 1 93,27 A 27 27 0 0 1 66,54 L 16,54 L 16,100 L 0,100 Z M 16,16 L 66,16 A 11 11 0 0 1 77,27 A 11 11 0 0 1 66,38 L 16,38 Z M 40,52 L 58,52 L 95,100 L 76,100 Z';
const C_PATH = 'M 100,0 L 28,0 A 28 28 0 0 0 0,28 L 0,72 A 28 28 0 0 0 28,100 L 100,100 L 100,84 L 28,84 A 12 12 0 0 1 16,72 L 16,28 A 12 12 0 0 1 28,16 L 100,16 Z';
const I_PATH = 'M 0,0 L 16,0 L 16,100 L 0,100 Z';

export function GarciaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 632 102"
      fill="currentColor"
      fillRule="evenodd"
      {...props}
    >
      <g id="GarciaBrandmark">
        {/* G */}
        <path d={G_PATH} />
        {/* A (chevron style) */}
        <path transform="translate(118, 0)" d={A_PATH} />
        {/* R */}
        <path transform="translate(238, 0)" d={R_PATH} />
        {/* C */}
        <path transform="translate(348, 0)" d={C_PATH} />
        {/* I */}
        <path transform="translate(462, 0)" d={I_PATH} />
        {/* A (chevron style) */}
        <path transform="translate(492, 0)" d={A_PATH} />
        {/* Registered Trademark symbol (R) */}
        <g transform="translate(608, 3)">
          <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text
            x="9"
            y="12.5"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            fontSize="9"
            fontWeight="bold"
            fill="currentColor"
            textAnchor="middle"
          >
            R
          </text>
        </g>
      </g>
    </svg>
  );
}

// Aliases for compatibility
export const DesktopLogo = GarciaLogo;
export const MobileLogo = GarciaLogo;

export function LoadingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" fill="none" {...props}>
      <g id="IconLoading">
        <path
          id="Circulo"
          opacity="0.4"
          d="M13 0C10.5277 0 8.11097 0.73311 6.05536 2.10662C3.99975 3.48014 2.3976 5.43236 1.45151 7.71643C0.505416 10.0005 0.257875 12.5138 0.740189 14.9386C1.2225 17.3633 2.41301 19.5906 4.16116 21.3388C5.90931 23.0869 8.13659 24.2774 10.5613 24.7597C12.9861 25.2421 15.4994 24.9945 17.7835 24.0484C20.0676 23.1023 22.0198 21.5002 23.3933 19.4446C24.7668 17.389 25.4999 14.9722 25.4999 12.5C25.4999 10.8584 25.1766 9.233 24.5484 7.71643C23.9202 6.19987 22.9995 4.82188 21.8388 3.66115C20.678 2.50043 19.3001 1.57968 17.7835 0.951503C16.2669 0.323321 14.6415 0 13 0ZM13 22.4999C11.0222 22.4999 9.08877 21.9134 7.44428 20.8146C5.79979 19.7158 4.51807 18.154 3.7612 16.3268C3.00433 14.4995 2.80629 12.4889 3.19214 10.5491C3.578 8.60926 4.5304 6.82744 5.92892 5.42892C7.32744 4.03039 9.10927 3.07799 11.0491 2.69214C12.9889 2.30629 14.9995 2.50432 16.8268 3.26119C18.654 4.01807 20.2158 5.29979 21.3146 6.94428C22.4134 8.58876 22.9999 10.5222 22.9999 12.5C22.9999 15.1521 21.9464 17.6956 20.071 19.571C18.1957 21.4464 15.6521 22.4999 13 22.4999Z"
          fill="currentColor"
        />
        <path
          id="CirculoPequeno"
          d="M23 12.5L25.5 12.5C25.5 10.8584 25.1766 9.233 24.5485 7.71643C23.9203 6.19987 22.9995 4.82188 21.8388 3.66115C20.6781 2.50043 19.3001 1.57968 17.7835 0.951503C16.267 0.323321 14.6415 0 13 0V2.49999C15.6522 2.49999 18.1957 3.55356 20.071 5.42892C21.9464 7.30427 23 9.8478 23 12.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" fill="none" {...props}>
      <path
        id="IconArrowBtn"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.65694 7.71102L1.99994 13.368L0.585938 11.954L5.53594 7.00401L0.585938 2.05401L1.99994 0.640015L7.65694 6.29701C7.84441 6.48454 7.94972 6.73885 7.94972 7.00401C7.94972 7.26918 7.84441 7.52349 7.65694 7.71102Z"
        fill="currentColor"
      />
    </svg>
  );
}

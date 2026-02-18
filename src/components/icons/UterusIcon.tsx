interface UterusIconProps {
    size?: number;
    className?: string;
}

export const UterusIcon: React.FC<UterusIconProps> = ({ size = 24, className = '' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Corpo do Útero */}
        <path d="M12 22c-1.5 0-4-4-4-9 0-3.5 1.8-6 4-6s4 2.5 4 6c0 5-2.5 9-4 9z" />
        {/* Trompa Esquerda */}
        <path d="M8.5 10C7 7.5 4 7.5 2.5 10.5" />
        {/* Trompa Direita */}
        <path d="M15.5 10C17 7.5 20 7.5 21.5 10.5" />
        {/* Ovário Esquerdo */}
        <ellipse cx="3" cy="13" rx="2.5" ry="3.5" transform="rotate(-15 3 13)" />
        {/* Ovário Direito */}
        <ellipse cx="21" cy="13" rx="2.5" ry="3.5" transform="rotate(15 21 13)" />
    </svg>
);

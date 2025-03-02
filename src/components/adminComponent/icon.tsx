import React from 'react';

interface IconProps {
    size?: number;
    fill?: string;
    width?: number;
    height?: number;
}

export const HomeIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
    </svg>
);

export const BookIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
    </svg>
);

export const KonsulIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
    </svg>
);

export const ProductIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
    </svg>
);

export const PenjualanIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
    </svg>
);

export const LayananIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
        />
    </svg>
);


export const TestimonialIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
    </svg>
);

export const LogoutIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
        />
    </svg>
);

export const AddCircleIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            stroke="#52525B"
            d="M0.5 10C0.5 4.76614 4.76614 0.5 10 0.5C15.2339 0.5 19.5 4.76614 19.5 10C19.5 15.2339 15.2339 19.5 10 19.5C4.76614 19.5 0.5 15.2339 0.5 10ZM11.25 14V11.25H14C14.6861 11.25 15.25 10.6861 15.25 10C15.25 9.31386 14.6861 8.75 14 8.75H11.25V6C11.25 5.31386 10.6861 4.75 10 4.75C9.31386 4.75 8.75 5.31386 8.75 6V8.75H6C5.31386 8.75 4.75 9.31386 4.75 10C4.75 10.6861 5.31386 11.25 6 11.25H8.75V14C8.75 14.6861 9.31386 15.25 10 15.25C10.6861 15.25 11.25 14.6861 11.25 14Z"/>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icons">
            <circle id="Cicle" cx="11" cy="11" r="7" stroke="#2A2A2E" strokeWidth="1.5" />
            <path
                id="Vector 1280"
                d="M16.5303 15.4697L16 14.9393L14.9393 16L15.4697 16.5303L16.5303 15.4697ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.4697 16.5303L18.9697 20.0303L20.0303 18.9697L16.5303 15.4697L15.4697 16.5303Z"
                fill="#2A2A2E"
            />
        </g>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0959 5.9473C17.7796 5.61865 14.4432 5.44934 11.117 5.44934C9.14509 5.44934 7.1732 5.54893 5.20132 5.74811L3.16968 5.9473" stroke="#F31260" strokeWidth="1.79262" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.64697 4.94147L8.86608 3.63684C9.02542 2.69072 9.14493 1.98364 10.828 1.98364H13.4372C15.1204 1.98364 15.2498 2.73057 15.3992 3.64679L15.6182 4.94147" stroke="#F31260" strokeWidth="1.79262" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.9557 9.09436L18.3083 19.1231C18.1987 20.6866 18.1091 21.9016 15.3305 21.9016H8.93685C6.15828 21.9016 6.06865 20.6866 5.9591 19.1231L5.31177 9.09436" stroke="#F31260" strokeWidth="1.79262" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.4678 16.4242H13.7841" stroke="#F31260" strokeWidth="1.79262" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.64307 12.4407H14.6226" stroke="#F31260" strokeWidth="1.79262" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const EditIcon: React.FC<IconProps> = ({ size = 19, fill = "none", width, height, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 19 19" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
        <g id="Frame">
            <path id="Vector" d="M10.6037 3.14255L4.4462 9.66006C4.2137 9.90756 3.9887 10.3951 3.9437 10.7326L3.6662 13.1626C3.5687 14.0401 4.1987 14.64 5.0687 14.4901L7.4837 14.0775C7.8212 14.0176 8.2937 13.7701 8.52619 13.515L14.6837 6.99755C15.7487 5.87255 16.2287 4.59005 14.5712 3.02254C12.9212 1.47004 11.6687 2.01755 10.6037 3.14255Z" stroke="#A1A1AA" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Vector_2" d="M9.57812 4.23022C9.90066 6.30022 11.5806 7.88273 13.6656 8.09273" stroke="#A1A1AA" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Vector_3" d="M2.91016 16.9426H16.4102" stroke="#A1A1AA" strokeWidth="1.35" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);

export const DetailIcon: React.FC<IconProps> = ({ size = 25, fill = "none", width, height, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 25 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.3465 9.44257C15.3465 10.9276 14.1466 12.1275 12.6616 12.1275C11.1766 12.1275 9.97656 10.9276 9.97656 9.44257C9.97656 7.95757 11.1766 6.75757 12.6616 6.75757C14.1466 6.75757 15.3465 7.95757 15.3465 9.44257Z" stroke="#A1A1AA" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.6591 15.6451C15.3066 15.6451 17.774 14.0852 19.4916 11.3852C20.1666 10.3277 20.1666 8.55016 19.4916 7.49266C17.774 4.79266 15.3066 3.23267 12.6591 3.23267C10.0116 3.23267 7.54406 4.79266 5.82656 7.49266C5.15156 8.55016 5.15156 10.3277 5.82656 11.3852C7.54406 14.0852 10.0116 15.6451 12.6591 15.6451Z" stroke="#A1A1AA" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

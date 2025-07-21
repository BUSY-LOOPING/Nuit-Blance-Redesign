    import React from 'react';

    interface MemoriesCardProps {
    src: string;
    }

    const MemoriesCard = ({src}: MemoriesCardProps) => {
    return (
        <div>
        <img src={src} alt="memory" className="object-contain w-[600px]" />
        </div>
    );
    }

    export default MemoriesCard

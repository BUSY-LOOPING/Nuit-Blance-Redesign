    import React from 'react';

    interface MemoriesCardProps {
    src: string;
    }

    const MemoriesCard = ({src}: MemoriesCardProps) => {
    return (
        <div>
        <img src={src} alt="memory" className="h-full object-cover w-full" />
        </div>
    );
    }

    export default MemoriesCard

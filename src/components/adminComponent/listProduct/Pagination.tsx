// components/PaginationControl.tsx
import { Button, Pagination } from '@nextui-org/react';
import React from 'react';

interface PaginationControlProps {
    page: number;
    pages: number;
    onPrevious: () => void;
    onNext: () => void;
    onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({ page, pages, onPrevious, onNext, onPageChange }) => {
    return (
        <div className="flex mt-4 items-center justify-center">
            <div className="flex w-[40%] justify-center items-center gap-2">
                <Button variant="light" onPress={onPrevious} disabled={page === 1}>Previous</Button>
                <Pagination
                    isCompact
                    total={pages}
                    initialPage={page}
                    onChange={onPageChange}
                    variant="light"
                />
                <Button variant="light" onPress={onNext} disabled={page === pages}>Next</Button>
            </div>
        </div>
    );
};

export default PaginationControl;

import React from "react";
import { Pagination, Button } from "@nextui-org/react";

export default function App() {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <div className="flex flex-row gap-2">
            <Button
                size="sm"
                variant="Light"
                onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                isDisabled={currentPage==1?true:false}
                className='font-semibold'
            >
                Prev
            </Button>
            <Pagination
                total={10}
                color="warning"
                page={currentPage}
                onChange={setCurrentPage}
            />
            <Button
                size="sm"
                variant="Light"
                onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                className='font-semibold'
            >
                Next
            </Button>
        </div>
    );
}

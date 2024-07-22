import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface Props {
  // Define your component's props here
}

const TransferGuide: React.FC<Props> = () => {
  // Implement your component logic here

  return (
    <div className="flex flex-col text-base font-semibold tracking-tight leading-6 text-zinc-700 max-md:max-w-full">
        <Accordion className="w-full" isCompact>
            <AccordionItem key="1" title="Petunjuk transfer ATM">
                {/* ordered list */}
                <ol className="list-decimal list-inside pl-4">
                    <li className="text-zinc">Transfer ke rekening bank yang tertera di halaman pembayaran</li>
                    <li className="text-zinc">Transfer sesuai dengan jumlah yang tertera</li>
                    <li className="text-zinc">Simpan bukti transfer sebagai referensi</li>
                </ol>
            </AccordionItem>
            <AccordionItem key="2" title="Petunjuk transfer mobile banking">
                {/* ordered list */}
                <ol className="list-decimal list-inside pl-4">
                    <li className="text-zinc">Transfer ke rekening bank yang tertera di halaman pembayaran</li>
                    <li className="text-zinc">Transfer sesuai dengan jumlah yang tertera</li>
                    <li className="text-zinc">Simpan bukti transfer sebagai referensi</li>
                </ol>

            </AccordionItem>
        </Accordion>
    </div>
  );
};

export default TransferGuide;

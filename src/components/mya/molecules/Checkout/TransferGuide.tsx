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
                    <li className="text-zinc">Pilih 'Transaksi' &gt; 'Transfer' &gt; Ke Rekening 'BCA'</li>
                    <li className="text-zinc">Masukkan nomor rekening yang tertera</li>
                    <li className="text-zinc">Foto atau Screenshoot bukti transfer</li>
                    <li className="text-zinc">Konfirmasi sudah transfer dengan mengirim bukti transfer ke WA +6281314485552</li>
                </ol>
            </AccordionItem>
            <AccordionItem key="2" title="Petunjuk transfer mBanking">
                {/* ordered list */}
                <ol className="list-decimal list-inside pl-4">
                    <li className="text-zinc">Pilih 'Transfer &gt Ke rekening 'BCA'</li>
                    <li className="text-zinc">Masukkan nomor rekening yang tertera</li>
                    <li className="text-zinc">Foto atau Screenshoot bukti transfer</li>
                    <li className="text-zinc">Konfirmasi sudah transfer dengan mengirim bukti transfer ke WA +6281314485552</li>
                </ol>

            </AccordionItem>
        </Accordion>
    </div>
  );
};

export default TransferGuide;

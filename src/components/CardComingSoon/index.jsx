import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
const CardComingSoon = ()=>{
    return(
        <>
            <Card className="flex flex-col bg-birumuda pt-[32px] gap-y-[32px]">
                    <div className="flex flex-col gap-y-[4px] w-[90%] mx-auto">
                        <span className="text-zinc text-roboto text-[12px] font-bold">NEW</span>
                        <h3 className="text-zinc text-roboto font-medium text-[24px]">Workshop Kecantikan Alami</h3>
                        <p className="font-sans text-[14px] font-normal">
                            Pelajari teknik kecantikan alami menggunakan bahan-bahan organik dan metode tradisional.
                        </p>
                    </div>
                    <div className="h-full">
                        <div className="min-h-[172px] w-4/5 bg-gray-100 mx-auto">
                            p anj
                        </div>
                        <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-[24px]">
                            <div>
                                <p>15 Juli 2024</p>
                                <p>10:00 - 12:00 WIB</p>
                            </div>
                            <Button color="primary" size="md">Daftar Acara</Button>
                        </div>
                    </div>
                </Card>
        </>
    )
}
export default CardComingSoon
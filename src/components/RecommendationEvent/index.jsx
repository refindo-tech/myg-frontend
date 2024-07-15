import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import icons from "@/components/icons/icon"
const RecommendationEvent = () => {
    const { PlaceIcon, CalendarIcon } = icons
    return (
        <div className="min-h-[648px] bg-birumuda flex items-center justify-center">
            <div className="container flex flex-col gap-y-[32px]">
                <h3 className="font-playfair font-bold text-[48px]">Acara Pilihan Bulan Ini</h3>
                <div className="grid grid-cols-2 h-[440px] gap-x-[20px] items-center">
                    <Image
                        alt="Recommendation Event"
                        // width={700}
                        // height={440}
                        src="/images/recommendation_event.png"
                    />
                    <div className="flex flex-col gap-y-[12px] h-[356px]">
                        <h3 className="font-playfair font-semibold text-[36px] text-wrap">Transformasi Diri dengan Make Up Artis profesional</h3>
                        <p className="text-zinc text-[20px] font-sans">
                            Pelajari teknik makeup dari artis profesional dan transformasikan penampilan Anda.
                        </p>
                        <div className="grid grid-cols-2 gap-[24px]">
                            <div className="flex flex-col gap-y-[12px]">
                                <div className="flex flex-row items-center gap-[8px]">
                                    <PlaceIcon className="h-[30px] [w-30px] text-zinc" />
                                    <h4 className="font-playfair font-semibold text-[24px] text-zinc">Where</h4>
                                </div>
                                <p className="font-sans font-semibold text-[20px] text-zinc text-wrap">
                                    Gedung Kesenian Kemayoran, Kemayoran, Jakarta Pusat.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-[12px]">
                                <div className="flex flex-row items-center gap-[8px]">
                                    <CalendarIcon className="h-[30px] [w-30px] text-zinc" />
                                    <h4 className="font-playfair font-semibold text-[24px] text-zinc">When</h4>
                                </div>
                                <div>
                                    <p className="font-sans font-semibold text-[20px] text-zinc text-wrap">
                                        10-21 Juni 2024
                                    </p>
                                    <p className="font-sans font-semibold text-[20px] text-zinc text-wrap">
                                        10:00 - 12:00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button color="primary" variant="solid" size="md"
                            className="font-sans font-semibold border-[2px] text-[14px] py-[12px] w-[148px] h-[48px]">Gabung Acara Ini</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecommendationEvent
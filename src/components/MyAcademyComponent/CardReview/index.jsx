import { Card } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
const CardReview = ({testimoni, user, role}) => {
    return (
        <>
            <Card className="min-h-[272px] w-full pb-6 bg-gray-200 gap-y-[20px]">
                <div>
                    {/* <p className="font-sans text-[120px] font-bold">&apos;&apos;</p> */}
                    <div className="flex justify-center mt-6">
                        <Image
                            alt="petik"
                            height={24}
                            width={42}
                            src="/petik.svg" />
                    </div>
                    <p className="w-[311px] mx-auto text-center mt-[12px]">
                        {`"${testimoni}."`}
                    </p>
                </div>
                <div className="flex flex-row h-[64px] items-center w-[325px] mx-auto gap-x-[16px] px-3 lg:px-0">
                    <div className="h-[48px] w-[48px] rounded-full bg-slate-400"></div>
                    <div>
                        <h1 className="font-sans font-semibold text-[18px]">{`${user}`}</h1>
                        <p>{`${role}`}</p>
                    </div>
                </div>
            </Card>
        </>
    )
}
export default CardReview
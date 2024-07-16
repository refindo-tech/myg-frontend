import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
const ViewMaterial = () => {
    return (
        <>
            <Card className="min-h-screen container mx-auto py-[44px] flex flex-col gap-y-[44px]">
                <div className="w-[90%] mx-auto">
                    <h3 className="font-semibold font-playfair text-[36px] text-biru">Workshop Kecantikan Alami</h3>
                    <p className="font-sans text-[18px] font-normal text-stone-900 mt-[10px]">Saturday, July 14, 2024 at 10:00 WIB</p>
                </div>
                <div className="w-[90%] mx-auto ">
                    <iframe src="https://www.youtube.com/embed/Ht83QKbvO6c" width="100%" height={500} className="rounded-lg" />
                </div>
                <div className="w-[90%] mx-auto flex flex-row gap-x-[20px]">
                    <Card className="min-h-[30vh] w-[30%] py-3">
                        <h4 className="text-zinc text-roboto font-medium text-[24px] w-[90%] mx-auto my-3 text-center">Workshop Kecantikan Alami</h4>
                        <div className="w-[100px] mx-auto">
                            <Image
                                alt="pdflogo"
                                src="/images/pdf.png"
                                width={100}
                                className="mx-auto"
                            />
                        </div>
                        <div className="flex justify-end px-3">
                            <Button color="primary" variant="solid" size="sm">Download</Button>
                        </div>
                    </Card>
                    <Card className="min-h-[30vh] w-[30%] py-3">
                        <h4 className="text-zinc text-roboto font-medium text-[24px] w-[90%] mx-auto my-3 text-center">Workshop Kecantikan Alami</h4>
                        <div className="w-[100px] mx-auto">
                            <Image
                                alt="pptlogo"
                                src="/images/ppt.png"
                                width={100}
                                className="mx-auto"
                            />
                        </div>
                        <div className="flex justify-end px-3">
                            <Button color="primary" variant="solid" size="sm">Download</Button>
                        </div>
                    </Card>
                </div>
            </Card>
        </>
    )
}
export default ViewMaterial
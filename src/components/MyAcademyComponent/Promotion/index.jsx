import { Button } from "@nextui-org/button"
import { Link } from '@nextui-org/link'
const Promotion = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col  items-center gap-y-[62px] py-[60px]">
                <h1 className="font-playfair font-bold text-biru text-[48px]">Jangan Lewatkan Acara Kami!</h1>
                <p className="font-sans text-[24px] text-center text-abumuda">
                    Segera daftar dan pastikan Anda mendapatkan tempat di acara yang paling Anda minati. Nikmati pengalaman belajar yang menyenangkan dan bermanfaat.
                </p>
                <div className="flex flex-row gap-3">
                    <Button color="primary" variant="bordered" size="lg" as={Link} href="/MyacademyTes/material"
                        className="font-sans font-semibold border-[2px] text-[14px] py-[12px]">Lihat Semua Acara</Button>
                    <Button color="primary" variant="solid" size="lg" as={Link} href="/MyacademyTes/exam"
                        className="font-sans font-semibold border-[2px] text-[14px] py-[12px]">Lihat Semua Ujian</Button>
                </div>
            </div>
        </>
    )
}
export default Promotion
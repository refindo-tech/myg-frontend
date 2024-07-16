// import { Card } from "@nextui-org/card"
// import { Button } from "@nextui-org/button"
// import { Image } from "@nextui-org/image"
import CardComingSoon from "@/components/CardComingSoon"
const ComingSoonEvent = () => {
    return (
        <div className="container mx-auto flex flex-col my-[60px]">
            <h3 className="font-bold font-playfair text-[48px]">Daftar Acara</h3>
            <div className="grid grid-cols-4 min-h-[440px] gap-x-[20px]">
                <CardComingSoon/>
                <CardComingSoon/>
                <CardComingSoon/>
                <CardComingSoon/>
            </div>
        </div>
    )
}
export default ComingSoonEvent
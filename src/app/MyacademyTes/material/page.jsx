import {Button} from "@nextui-org/button"
import NavbarMyAcademy from "@/components/NavbarMyAcademy"
import FooterMyAcademy from "@/components/FooterMyAcademy"
import CardComingSoonEvent from "@/components/CardComingSoon"
const Material = () => {
    return (
        <>
            <NavbarMyAcademy />
            <div className="container mx-auto flex flex-col gap-y-[60px] min-h-screen my-[50px]">
                <div className="flex flex-col gap-y-[30px]">
                    <h3 className="text-[48px] font-playfair font-bold text-abumuda">Daftar Acara</h3>
                    <div className="flex flex-row gap-x-[12px]">
                        <Button variant="solid" size="md" color="primary" className="font-semibold text-[16px] font-sans">Sedang diadakan</Button>
                        <Button variant="solid" size="md" className="bg-white text-primary-500 font-semibold text-[16px] font-sans">Sudah diadakan</Button>
                    </div>
                </div>
                <div className=" container mx-auto grid grid-cols-4 gap-y-[40px] gap-x-[24px]">
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                    <CardComingSoonEvent />
                </div>
            </div>
            <FooterMyAcademy />
        </>
    )
}
export default Material
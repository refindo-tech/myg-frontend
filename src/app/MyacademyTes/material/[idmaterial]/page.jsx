import NavbarMyAcademy from "@/components/NavbarMyAcademy"
import ViewMaterial from "@/components/ViewMaterial"
const DetailMaterial = () =>{
    return(
        <>
            <NavbarMyAcademy/>
            <div className="bg-gray-200 py-[60px]">
                <ViewMaterial/>
            </div>
        </>
    )
}
export default DetailMaterial
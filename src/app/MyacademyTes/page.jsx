import NavbarMyAcademy from "@/components/NavbarMyAcademy"
import FooterMyAcademy from "@/components/FooterMyAcademy.jsx"
import Promotion from "@/components/Promotion"
import Review from "@/components/Review"
import RecommendationEvent from "@/components/RecommendationEvent"
import ComingSoonEvent from "@/components/ComingSoonEvent"
const MyAcademyTes = () => {
    return (
        <>
            <NavbarMyAcademy />
            <p>Hello World</p>
            <ComingSoonEvent/>
            <RecommendationEvent/>
            <div className="hidden lg:block">
                <Promotion />
                <Review />
            </div>
            <FooterMyAcademy />
        </>
    )
}
export default MyAcademyTes
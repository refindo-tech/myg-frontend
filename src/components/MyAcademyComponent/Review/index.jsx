import CardReview from "@/components/MyAcademyComponent/CardReview"
import AddTestimoni from '@/components/MyAcademyComponent/AddTestimoni'
const Review = () => {
    return (
        <>
        <div className="container mx-auto">
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between  items-start py-[60px]">
                <div className="flex justify-center lg:justify-start items-center w-[506.54px] py-[90px] lg:py-[15%] h-full bg-[url('/images/bg-review.png')] bg-no-repeat bg-right">
                    <h1 className="w-[408px] text-center lg:text-right font-playfair font-bold text-6xl lg:text-[70px] text-wrap">Apa Kata Peserta Sebelumnya?</h1>
                </div>
                <div className="w-[90%] mx-auto lg:w-[826px] lg:mx-0 flex flex-col gap-y-[20px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                        <CardReview
                        testimoni={'Kesan jadi distributor, pengiriman cepat dan admin fast respon. Saya pakai serum biru, bikin kulit lebih cerah. Serum pink, bikin kulit lbh kencang. Milky infused, bikin lembab dan kulit lebih putih. Lotion day n night, bikin kulit tubuh lebih halus dan putih, wanginya enak!'}
                        user={'Linda'}
                        role={'Distributor MYA'}/>
                        <CardReview 
                        testimoni={'Thank you My Academy owner (Mama Mia) karena sudah mengajarkan ilmu aesthetic dari tekhnik yang mudah sampai yang sulit, dari yang tidak faham sampai faham dengan caranya. Detail banget kalau ajarin segala sesuatu ilmunya banyak tapi gak pelit ilmu, semua di share'} 
                        user={'Een Nurainin'} 
                        role={'Sahabat My Academy'}/>
                        <CardReview 
                        testimoni={'Alhamdulillah My Academy yang paling terbaik dalam segala hal karena selain materi ilmu yg diberikan juga dalam hal memberi pelayanan tanya jawab pun selalu ditanggapi dengan cepat pokoknya tidak pernah menyesal ikut dalam pelatihan serta menjadi bagian keluarga dengan ikut member My Academy'} 
                        user={'Maya Qorina'} 
                        role={'Sahabat My Academy'}/>
                        <AddTestimoni/>
                    </div>
                    {/* <div className="flex justify-center">
                        <CardReview />
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}
export default Review
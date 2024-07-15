import CardReview from "@/components/CardReview"
const Review = () => {
    return (
        <>
            <div className="flex justify-center mb-5">
                <div className="flex flex-row justify-between  items-start">
                    <div className="flex justify-start w-[506.54px] pt-[5%] h-full bg-[url('/images/bg-review.png')] bg-no-repeat bg-right">
                        <h1 className="w-[408px] text-right font-playfair font-bold text-[70px] text-wrap">Apa Kata Peserta Sebelumnya?</h1>
                    </div>
                    <div className="w-[826px] flex flex-col gap-y-[20px]">
                        <div className="grid grid-cols-2 gap-[20px]">
                            <CardReview />
                            <CardReview />
                        </div>
                        <div className="flex justify-center">
                            <CardReview />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Review
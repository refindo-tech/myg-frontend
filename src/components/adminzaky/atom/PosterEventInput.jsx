import icons from "@/components/icons/icon"
const PosterEventInput = () => {
    const {UploadFileIcon} = icons
    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Poster Acara</h2>
            <div className="flex flex-col gap-3 items-center py-4 border-2 border-dashed border-gray-300 rounded-lg">
                <label
                    htmlFor="posterevent"
                    className="cursor-pointer"
                >
                    <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full">
                        <UploadFileIcon/>
                    </div>
                </label>
                <input
                    type="file"
                    id="posterevent"
                    className="hidden"
                />
                <div className="flex flex-col items-center gap-1">
                    <h3 className="text-base"><span className="text-yellow-500 font-semibold">Click to Upload</span> or drag and drop</h3>
                    <h3 className="text-base">{`(Max. File size: 25 MB)`}</h3>
                </div>
            </div>
        </div>
    )
}
export default PosterEventInput
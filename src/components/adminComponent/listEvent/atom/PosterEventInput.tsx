"use client";
import React from "react";
import { useState } from "react";
import icons from "@/components/icons/icon";
const PosterEventInput:React.FC<{label:string; id:string;}> = ({ label, id }) => {
  const [error, setError] = useState<string | null>(null);
  const MAX_FILE_SIZE = 25 * 1024 * 1024;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError("File size too large. Max file size is 25MB");
        return;
      }
      //   setNewAdmin((prev) => ({
      //     ...prev,
      //     userProfile: { ...prev.userProfile, profilePicture: file },
      //   }));
      //   setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const { UploadFileIcon } = icons;
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="font-semibold text-base text-gray-500">{label}</h2>
      <div className="flex flex-col gap-3 items-center py-4 border-2 border-dashed border-gray-300 rounded-lg">
        <label htmlFor={id} className="cursor-pointer">
          <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full">
            <UploadFileIcon />
          </div>
        </label>
        <input
          type="file"
          id={id}
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base text-center">
            <span className="text-yellow-500 font-semibold px-2">
              Click to Upload
            </span>{" "}
            or drag and drop
          </h3>
          <h3 className="text-base">{`(Max. File size: 25 MB)`}</h3>
        </div>
      </div>
    </div>
  );
};
export default PosterEventInput;

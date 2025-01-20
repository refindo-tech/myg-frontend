"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import icons from "@/components/icons/icon";
interface propsPosterInput {
  hasPoster: string | File | undefined;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PosterEventInput: React.FC<propsPosterInput> = ({
  label,
  id,
  hasPoster,
  onChange,
}) => {
  const [previewHovered, setPreviewHovered] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const { UploadFileIcon, TrashIcon } = icons;
  const handleRemoveFile = () => {
    const inputRef = document.getElementById(id) as HTMLInputElement
    setPreviewUrl(undefined); // Hapus preview URL
    if (inputRef) {
      inputRef.value = "";
    }
  };
  useEffect(() => {
    if (hasPoster instanceof File) {
      setPreviewUrl(URL.createObjectURL(hasPoster));
    } else if (typeof hasPoster === "string") {
      setPreviewUrl(hasPoster);
    }
  }, [hasPoster]);
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="font-semibold text-base text-gray-500">{label}</h2>
      <div className="w-full flex flex-col gap-3 items-center py-4 border-2 border-dashed border-gray-300 rounded-lg">
        {hasPoster && previewUrl ? (
          <div
            className="relative rounded"
            onMouseEnter={() => {
              setPreviewHovered(true);
            }}
            onMouseLeave={() => {
              setPreviewHovered(false);
            }}
          >
            <Image alt="banner" src={previewUrl} height={250} width={250} className="rounded-lg"/>
            {previewHovered && (
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-gray-500/15 rounded">
                <button
                  onClick={handleRemoveFile}
                  className="text-gray-100 flex items-center justify-center p-5 rounded-full bg-gray-500/75"
                >
                  <TrashIcon />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-center">
            <label htmlFor={id} className="cursor-pointer">
              <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full">
                <UploadFileIcon />
              </div>
            </label>
            <input
              id={id}
              type="file"
              className="hidden"
              onChange={onChange}
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
        )}
      </div>
    </div>
  );
};
export default PosterEventInput;

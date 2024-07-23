//Rupiah converter
export const rupiah = (value: number) => {
    /**
   * `Konversi angka ke format rupiah`
    */
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

export const cutDescription = (description: string, length = 85) => {
  if (description.length > length) {
    return description.slice(0, length) + " (...)";
  }
  return description;
};

export const imageUrl = (image: string) => {
  return '/assets/images/product/' + image;
};
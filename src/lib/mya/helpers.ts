//Rupiah converter
export const rupiah = (value: number, negative = false) => {
    /**
   * `Konversi angka ke format rupiah`
    */

  if (negative) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value).replace("Rp", "- Rp");
  }
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

export const category = (category: string) => {
  switch (category) {
    case 'FACE_CARE':
      return 'Perawatan Wajah';
    case 'SKIN_CARE':
      return 'Perawatan Kulit';
    default:
      return 'Lainnya';
  }
}
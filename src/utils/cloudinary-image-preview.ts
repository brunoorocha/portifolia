
export const cloudinaryImagePreview = (imageUrl: string): string => {
  const splittedImageUrl = imageUrl.split('/upload/')
  return `${splittedImageUrl[0]}/upload/w_40/${splittedImageUrl[1]}`
}

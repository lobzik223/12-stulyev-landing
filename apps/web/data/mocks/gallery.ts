import { GalleryItem } from "@/types/gallery";
export const gallery: GalleryItem[] = Array.from({length:8}).map((_,i)=>({
  id:i+1, src:`/images/gallery/pic-${(i%4)+1}.jpg`, alt:"Сцена спектакля"
}));

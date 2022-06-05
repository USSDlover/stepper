import {IUploadedImage} from '../interfaces';

export class UploadedImage implements Partial<IUploadedImage> {
  file: File | undefined;
  preview: string | undefined;

  static create(imageFile: File): IUploadedImage {
    const uploadedImage = new UploadedImage();

    uploadedImage.file = imageFile;
    uploadedImage.preview = URL.createObjectURL(imageFile);

    return uploadedImage as IUploadedImage;
  }
}

export const cropPhoto = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Allow loading images from different origins
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const minSize = Math.min(img.width, img.height);
      const squareSize = 200;
      const x = (img.width - minSize) / 2;
      const y = (img.height - minSize) / 2;
      canvas.width = squareSize;
      canvas.height = squareSize;
      ctx.drawImage(img, x, y, minSize, minSize, 0, 0, squareSize, squareSize);

      const croppedPhotoSrc = canvas.toDataURL();
      resolve(croppedPhotoSrc);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = imageUrl;
  });
};

export const importAll = (r) => {
  let resources = {};
  for (const path in r) {
    resources[path.replace("./", "")] = r[path];
  }
  return resources;
};

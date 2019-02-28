/**
 * @desc 获取图片
 * @param {file} file 文件
 * @return {promise}
 */
function getImage (file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = function () {
      let image = new Image()
      image.src = this.result
      image.onload = function () {
        resolve(this)
      }

      image.onerror = function () {
        reject(new Error('Error: load image faile'))
      }
    }
    fr.onerror = function () {
      reject(new Error('Error: readAsDataURL faile'))
    }
  })
}

/**
 * @desc 获取base64
 * @param {image} image 图片
 * @param {number} quality 压缩比例
 * @return {promise}
 */
function getBase64 (image, quality) {
  return new Promise(resolve => {
    let width = image.width
    let height = image.height

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, width, height)
    resolve(canvas.toDataURL('image/jpeg', quality))
  })
}

/**
 * @desc base64转blob
 * @param {urlData} urlData base64
 * @return {blob}
 */
function convertBase64UrlToBlob (urlData) {
  let arr = urlData.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * @desc 压缩图片
 * @param {file} file 图片文件
 * @param {number} quality 压缩比例
 * @return {blob}
 */
export async function compressImage (file, quality = 0.75) {
  try {
    let image = await getImage(file)
    let urlData = await getBase64(image, quality)

    return {
      error: null,
      compressFile: convertBase64UrlToBlob(urlData),
      name: file.name
    }
  } catch (e) {
    return {
      error: e.message,
      compressFile: file,
      name: file.name
    }
  }
}

/**
 * @desc 压缩图片
 * @param {array} files 图片文件数组
 * @param {number} quality 压缩比例
 * @return {blob}
 */
export async function compressImages (files, quality = 0.75) {
  let images = []
  for (let i = 0; i < files.length; i++) {
    let data = await compressImage(files[i], quality)
    images.push(data)
  }
  return images
}

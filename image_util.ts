

export class ImageUtil {

    static resize (file:Blob, imageWidth:number, afterAction:(dataUrl:string)=>void) {
        
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext('2d')
        var image = new Image()

        canvas.width = 0
        canvas.height = 0

        image.src = URL.createObjectURL(file)
        image.onload = ()=> {

            var w = imageWidth
            var h = image.height * (imageWidth/image.width)

            canvas.width = w
            canvas.height = h

            ctx.drawImage(image, 0, 0, w, h)

            afterAction(canvas.toDataURL(file.type))
        }
    }
}
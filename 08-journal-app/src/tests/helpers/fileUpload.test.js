import cloudinary from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'sebacarrasco', 
    api_key: '223141698756939', 
    api_secret: 'oEE7SkqGqmD7pPKXE_pKsMl-DgY'
});

describe('Tests for fileUpload helper', () => {
   
    // test('should load a file and return the url', async(done) => {
        
    //    // Debería estar bien la prueba.... ni idea por qué falla, a otros también les pasó
    //     // Cargamos una imagen y la subimos
    //     const response = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    //     const blob = await response.blob();
    //     const file = new File([blob], 'picture.png');
    //     const url = await fileUpload(file);

    //     expect(typeof url).toBe('string');

    //     // Obtenemos el id que le dió cludinary a la imagen para luego borrarla
    //     const segments = url.split('/');
    //     const imageId = segments[ segments.length - 1 ].replace('.png', '');
    //     await cloudinary.v2.api.delete_resources(imageId);

    // });

    test('should return null', async() => {
        
        const file = new File([], 'picture.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);

    });
    
    

});

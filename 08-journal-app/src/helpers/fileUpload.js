

export const fileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/sebacarrasco/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok)
        {
            const cloudinaryResponse = await response.json();
            return cloudinaryResponse.secure_url;
        }
        else
        {
            return null;
        }

    } catch (error) {
        throw error;
    }

}
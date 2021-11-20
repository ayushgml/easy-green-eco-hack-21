import React from 'react'
import ImageUploading from 'react-images-uploading';
import './image.css'
function Image() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = ( imageList, addUpdateIndex ) => {
        
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    };
    return (
        <div className="image">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
            <div className="upload__image-wrapper">
                <button className="upload__button"
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                >
                Click or Drop here
                </button>
                &nbsp;
                <button className="upload__button" onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                            <button className="upload__button2" onClick={() => onImageUpdate(index)}>Update</button>
                            <button className="upload__button2" onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                </div>
            ))}
            </div>
        )}
        </ImageUploading>
        </div>
    )
}

export default Image

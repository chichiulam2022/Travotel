import React from 'react'
import PhotoAlbum from "react-photo-album";
import photos from './PhotoAlbum';

function PhotoAlbumCompo() {
    return (
        <PhotoAlbum layout='rows' photos={photos} />
    )
}

export default PhotoAlbumCompo
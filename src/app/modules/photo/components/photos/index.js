import React, { Component } from 'react';

export class Photos extends Component {
  componentDidMount = () => {
    const { getPhotos } = this.props;
    getPhotos();
  };

  render() {
    const { photosData } = this.props;
    return (
      <div>
        {photosData.map(photo => (
          <img
            width={150}
            height={150}
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="img-thumbnail float-left"
          />
        ))}
      </div>
    );
  }
}

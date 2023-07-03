import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imgUrl?imgUrl:"https://tutorialslink.com/images/default-news-image.png"}
            className="card-img-top"
            style={{width: '286px', height:'181px'}}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

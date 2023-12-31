import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 0,
                zIndex: 1
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://tutorialslink.com/images/default-news-image.png"
            }
            className="card-img-top"
            style={{ height: "200px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}... <span className="badge bg-secondary">New</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

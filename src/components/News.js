import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a costructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // fetch data here and set state with the fetched value
    console.log("componentDidMount");
    let url =
      "https://newsapi.org/v2/everything?q=nepal&apiKey=2f0a8bee177a4ce4a70fcfa205ab29c1&pageSize=21&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=nepal&apiKey=2f0a8bee177a4ce4a70fcfa205ab29c1&pageSize=21&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();;
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    window.scrollTo(0, 0);
  };

  handleNextClick = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/everything?q=nepal&apiKey=2f0a8bee177a4ce4a70fcfa205ab29c1&pageSize=21&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsChhorepatan - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.page >= 4}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

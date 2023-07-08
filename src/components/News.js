import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 21,
    country: "nepal",
    category: "",
  };

  static propsType = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Hello I am a costructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category.slice(9, 1000)
    )} - NewsChhorepatan`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=(nepal${this.props.category})&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: 100,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // fetch data here and set state with the fetched value
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
    window.scrollTo(0, 0);
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
    window.scrollTo(0, 0);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/everything?q=(nepal${this.props.category})&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: 100,
    });

    console.log(this.state.articles)
  };

  render() {
    return (
      <>
        <h1 className="text-center my-3">NewsChhorepatan - Top Headlines</h1>
        {/* {this.state.loading &&<Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
          endMessage={<p></p>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={
                        element.author === null ? "unknown" : element.author
                      }
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {!this.state.loading && (
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
              disabled={
                this.state.page + 1 >= Math.ceil(100 / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        )} */}
      </>
    );
  }
}

export default News;

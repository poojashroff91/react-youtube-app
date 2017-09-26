import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyCEZ_MDzTfw53Abtwlnv9a04QYqKzL4PL4";

// Create a new component
// This component should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  //This is called passing props.
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}  //Function that manipulates a component.
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector(".container"));

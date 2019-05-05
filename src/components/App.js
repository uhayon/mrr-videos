import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { searchYoutubeVideos } from '../apis/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const videos = await searchYoutubeVideos(term);
    this.setState({ videos, selectedVideo: null });
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo })
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              {selectedVideo && <VideoDetail video={selectedVideo} />}
            </div>
            <div className={`${selectedVideo ? 'five' : 'twelve'} wide column`}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App;
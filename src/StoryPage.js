import React from 'react';
import { useParams } from 'react-router-dom';
import './storypage.css';
import lionVideo from './videos/LionMouse.mp4';
import cinderellaVideo from './videos/cinderellaStory.mp4';
import thirstyCrowVideo from './videos/ThirstyCrow.mp4';

function StoryPage() {
  const { id } = useParams();

  const stories = {
    "lion-and-mouse": {
      title: "The Lion and the Mouse",
      video: lionVideo
    },

    "cinderella": {
      title: "Cinderella",
      video: cinderellaVideo
    },

    "the-thirsty-crow": {
      title: "The Thirsty Crow",
      video: thirstyCrowVideo
    },
  };

  const story = stories[id];

  if (!story) {
    return <h1>Story not found</h1>;
  }

  return (
    <div className="story-page">
      <div className='grid'>
        <button className="btn" onClick={() => window.history.back()}> Back </button>
      <h1 className="story-title">{story.title}</h1>
     
     </div>
      <video className='story-video' controls>
        <source src={story.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default StoryPage;
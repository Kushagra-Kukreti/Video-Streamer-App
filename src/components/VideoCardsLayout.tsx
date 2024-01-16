import VideoCard, { VideoCardProp } from './VideoCard';
import { data } from '../utils/api';
import { useSearchFilter } from '../contexts/SearchFilterContext';

const VideoCardsLayout = () => {

  const {searchValue} = useSearchFilter()
  return (
    <>
    <div 
      className="row"
      style={{
        marginLeft:"0.2rem",
        gap:"1rem"
      }}
      >
          {data.filter((currData:VideoCardProp)=>searchValue!==" "?currData.title.toLowerCase().startsWith(searchValue.toLowerCase()):currData).map((currItem: VideoCardProp,index:number) => {
            return (
              <VideoCard key={index}
              description={currItem.description}
              videoUrl={currItem.videoUrl}
                thumbnailUrl={currItem.thumbnailUrl}
                duration={currItem.duration}
                title={currItem.title}
                author={currItem.author}
                views={currItem.author}
              />
            );
          })}
        </div>
      
    </>
  )
}

export default VideoCardsLayout

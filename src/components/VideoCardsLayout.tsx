 
import { useSearchFilter } from '../contexts/SearchFilterContext';
import { VideoCardProp } from './SuggestionCard';
import { Skeleton } from '@mui/material';
import VideoCard from './VideoCard';
const VideoCardsLayout = () => {
  const {searchValue,data} = useSearchFilter()
    
  return (
    <>
    <div 
      className="row"
      style={{
        marginLeft:"0.2rem",
        gap:"1rem"
      }}
      >
        {data.length === 0?<Skeleton variant="rectangular" style={{width:"100%",height:"100%"}}/>:
         <>{data.filter((currData:VideoCardProp)=>searchValue!==" "?currData.title.toLowerCase().startsWith(searchValue.toLowerCase()):currData).map((currItem: VideoCardProp,index:number) => {
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
        })}</>
      }
        
        </div>
      
    </>
  )
}

export default VideoCardsLayout

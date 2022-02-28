import { useState } from 'react';
import {BsFillPauseFill, BsFillPlayFill} from 'react-icons/bs'
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atoms/playerAtom';

const Poster = ({track,chooseTrack}) => {

  const [play ,setPlay]=useRecoilState(playState)
  const [playingTrack,setPlayingTrack]=useRecoilState(playingTrackState)





    const handlePlay=()=>{
      chooseTrack(track)

      if(track.uri===playingTrack.uri){
        setPlay(!play)
      }
    }



  return (
    <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80
    cursor-pointer hover:scale-105 hover:text-white/100 transition group
    duration-200 ease-in-out mx-auto
     " onClick={handlePlay} >
      <img src={track.albumUrl} className='h-full w-full object-cover rounded-[50px] opacity-80 hover:opacity-100' alt="" />

      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
<div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center hover:bg-[#1db954]">
{track.uri===playingTrack.uri && play ? (
   <BsFillPauseFill className='text-xl' />

):
(
   <BsFillPlayFill className='text-xl' />

)}
</div>

<div className='text-[15px]'>
<h4 className='font-extrabold truncate w-44'>{track.title}</h4>
<h6 >{track.artist}</h6>

</div>

      </div>
    </div>
  );
}

export default Poster;

import { useEffect, useRef } from 'react';
import { Track } from '@prisma/client';
import { FaPlay, FaPause } from 'react-icons/fa';

interface MusicPlayerProps {
  track: Track;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function MusicPlayer({ track, isPlaying, onPlayPause }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, track.id]);

  return (
    <div className="text-white">
      <audio ref={audioRef} src={track.audioUrl} />
      
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={track.coverImage || '/default-cover.jpg'} 
          alt={track.title}
          className="w-24 h-24 rounded-lg"
        />
        <div>
          <h2 className="text-xl font-bold">{track.title}</h2>
          <p className="text-gray-400">{track.artist}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onPlayPause}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20"
        >
          {isPlaying ? (
            <FaPause className="text-white text-xl" />
          ) : (
            <FaPlay className="text-white text-xl" />
          )}
        </button>
      </div>
    </div>
  );
}

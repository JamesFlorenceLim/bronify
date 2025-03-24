"use client";
import { useState, useEffect, useRef } from 'react';
import { Track } from '@prisma/client';
import MusicPlayer from '../../../components/MusicPlayer';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => setTracks(data));
  }, []);

  const handlePlayPause = (track: Track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-white">King's Playlist</h1>
          <img 
            src="/lebron-logo.png" 
            alt="LeBron James Logo" 
            className="h-16 w-auto"
          />
        </header>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Tracks</h2>
            <div className="space-y-4">
              {tracks.map(track => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <img 
                      src={track.coverImage || '/default-cover.jpg'} 
                      alt={track.title}
                      className="w-12 h-12 rounded"
                    />
                    <div>
                      <h3 className="text-white font-medium">{track.title}</h3>
                      <p className="text-gray-400">{track.artist}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePlayPause(track)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    {currentTrack?.id === track.id && isPlaying ? (
                      <FaPause className="text-white" />
                    ) : (
                      <FaPlay className="text-white" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-black/50 rounded-xl p-6">
            {currentTrack && (
              <MusicPlayer 
                track={currentTrack} 
                isPlaying={isPlaying}
                onPlayPause={() => setIsPlaying(!isPlaying)}
              />
            )}
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
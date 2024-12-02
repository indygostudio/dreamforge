import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonaImage } from "@/utils/personaImage";
import { 
  Play, 
  Pause,
  SkipBack, 
  SkipForward, 
  Volume2, 
  Mic2,
  Music2,
  Settings,
  Save,
  Download,
  Share2,
  ChevronDown,
  Sliders,
  Plus,
  Trash2,
  Volume1,
  VolumeX,
  Mic
} from "lucide-react";
import { useState } from "react";

interface Track {
  id: number;
  name: string;
  artist: string;
  muted: boolean;
  solo: boolean;
  volume: number;
}

const TrackComponent = ({ track, onDelete }: { track: Track; onDelete: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(track.muted);
  const [volume, setVolume] = useState(track.volume);

  return (
    <div className="flex gap-4 group">
      {/* Track Controls */}
      <div className="w-60 flex-shrink-0">
        <Card className="bg-dreamaker-gray border-none p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume1 className="h-4 w-4" />}
              </Button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-20 accent-dreamaker-purple"
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={onDelete}
            >
              <Trash2 className="h-4 w-4 text-red-400" />
            </Button>
          </div>
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <PersonaImage
                name={`persona-examples/${track.artist}`}
                alt={track.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-sm">{track.name}</div>
              <div className="text-xs text-gray-400">{track.artist}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Waveform */}
      <div className="flex-1">
        <Card className="bg-dreamaker-gray/50 border-none h-[88px] relative">
          <div className="absolute inset-0 flex items-center">
            <div className="flex items-center h-16 gap-0.5 w-full px-4">
              {Array.from({ length: 100 }).map((_, i) => {
                const height = Math.abs(Math.sin(i * 0.2) * 100);
                return (
                  <div
                    key={i}
                    className="w-1 bg-dreamaker-purple/50 rounded-full"
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const StudioPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([
    { id: 1, name: "Lead Vocals", artist: "ember-knight", muted: false, solo: false, volume: 80 },
  ]);

  const addTrack = () => {
    if (tracks.length < 8) {
      const artists = ["ember-knight", "jaxon-stone", "luna-sol", "raven-white"];
      const newTrack = {
        id: tracks.length + 1,
        name: `Track ${tracks.length + 1}`,
        artist: artists[Math.floor(Math.random() * artists.length)],
        muted: false,
        solo: false,
        volume: 80
      };
      setTracks([...tracks, newTrack]);
    }
  };

  const deleteTrack = (id: number) => {
    setTracks(tracks.filter(track => track.id !== id));
  };

  return (
    <div className="min-h-screen bg-dreamaker-bg flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Music2 className="w-5 h-5" />
            </Button>
            <span className="text-gray-400">|</span>
            <Button variant="ghost" size="icon">
              <Mic2 className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-dreamaker-purple">
              <Save className="w-5 h-5 mr-2" />
              Save
            </Button>
            <Button variant="ghost">
              <Download className="w-5 h-5 mr-2" />
              Export
            </Button>
            <Button variant="ghost">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Project Info */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Untitled Project</h1>
              <p className="text-gray-400">Last saved: Just now</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                120 BPM
                <ChevronDown className="w-4 h-4" />
              </Button>
              {tracks.length < 8 && (
                <Button onClick={addTrack} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Track
                </Button>
              )}
            </div>
          </div>

          {/* Tracks */}
          <div className="space-y-4">
            {tracks.map((track) => (
              <TrackComponent 
                key={track.id} 
                track={track} 
                onDelete={() => deleteTrack(track.id)} 
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-4 py-4">
            {/* Transport Controls */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <SkipBack className="w-6 h-6" />
              </Button>
              <Button 
                className="w-16 h-16 rounded-full bg-dreamaker-purple hover:bg-dreamaker-purple-light"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="w-6 h-6" />
              </Button>
            </div>

            {/* Timeline */}
            <div className="w-full flex items-center gap-4">
              <span className="text-sm text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-gray-800 rounded-full">
                <div className="w-1/3 h-full bg-dreamaker-purple rounded-full" />
              </div>
              <span className="text-sm text-gray-400">3:45</span>
            </div>

            {/* Master Volume */}
            <div className="flex items-center gap-4">
              <Volume2 className="w-5 h-5 text-gray-400" />
              <input
                type="range"
                className="w-32 accent-dreamaker-purple"
                min="0"
                max="100"
                defaultValue="80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-dreamaker-gray border-l border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Effects</h2>
          <Button variant="ghost" size="icon">
            <Sliders className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {["Reverb", "Delay", "Compression", "EQ", "Auto-Tune"].map((effect) => (
            <Card key={effect} className="bg-black/20 border-none p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{effect}</h3>
                  <p className="text-sm text-gray-400">Default preset</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioPage;

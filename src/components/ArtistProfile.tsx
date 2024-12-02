import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonaImage } from "@/utils/personaImage";
import { Play, Heart, Share2, Clock, Music2, MoreHorizontal } from "lucide-react";
import { PERSONAS } from "@/constants/personas";

interface ArtistProfileProps {
  artistId: keyof typeof PERSONAS;
}

export const ArtistProfile = ({ artistId }: ArtistProfileProps) => {
  const artist = PERSONAS[artistId];

  const stats = [
    { icon: Music2, label: "Songs", value: artist.songs },
    { icon: Heart, label: "Followers", value: artist.followers },
    { icon: Clock, label: "Listen Time", value: artist.listenTime },
  ];

  return (
    <div className="min-h-screen bg-dreamaker-bg">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/persona-examples/${artist.imageName}.png')`,
            filter: 'blur(10px) brightness(0.5)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dreamaker-bg/50 to-dreamaker-bg" />

        {/* Artist Info Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-end gap-8">
              {/* Artist Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-dreamaker-purple shadow-2xl">
                <PersonaImage
                  name={`persona-examples/${artist.imageName}`}
                  alt={artist.imageName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Artist Info */}
              <div className="flex-grow">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {artist.imageName.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h1>
                <div className="flex flex-wrap gap-6 text-lg text-gray-300">
                  <div>{artist.style}</div>
                  <div>{artist.voice}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 md:mt-0">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl">
                  <Play className="w-6 h-6 mr-2" />
                  Play All
                </Button>
                <Button variant="outline" className="border-2 border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white px-6 py-6 text-lg rounded-xl">
                  <Heart className="w-6 h-6" />
                </Button>
                <Button variant="outline" className="border-2 border-dreamaker-purple text-dreamaker-purple hover:bg-dreamaker-purple hover:text-white px-6 py-6 text-lg rounded-xl">
                  <Share2 className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-dreamaker-gray border-none p-8 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-dreamaker-purple/10 rounded-xl">
                  <stat.icon className="w-8 h-8 text-dreamaker-purple" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Songs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Songs</h2>
          <Card className="bg-dreamaker-gray border-none rounded-xl overflow-hidden">
            {artist.popularSongs.map((song, index) => (
              <div 
                key={song.title}
                className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-none"
              >
                <div className="flex items-center gap-6">
                  <div className="text-gray-400 w-6 text-right">{index + 1}</div>
                  <Button variant="ghost" className="p-3 hover:bg-dreamaker-purple/20 rounded-xl">
                    <Play className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                  <div>
                    <div className="font-medium text-lg">{song.title}</div>
                    <div className="text-sm text-gray-400">{song.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-gray-400">{song.plays} plays</div>
                  <Button variant="ghost" className="p-2 hover:bg-dreamaker-purple/20 rounded-xl">
                    <Heart className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                  <Button variant="ghost" className="p-2 hover:bg-dreamaker-purple/20 rounded-xl">
                    <MoreHorizontal className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <Card className="bg-dreamaker-gray border-none p-8 rounded-xl">
            <p className="text-gray-300 leading-relaxed text-lg">
              A groundbreaking AI-generated artist pushing the boundaries of {artist.style.toLowerCase()}. 
              With a unique voice trained on {artist.voice.toLowerCase()} characteristics, this virtual artist creates 
              immersive sonic experiences that blend human emotion with artificial creativity. 
              Each track is carefully crafted using cutting-edge AI technology while maintaining 
              the authentic feel of traditional {artist.style.split('•')[0].trim().toLowerCase()} music.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;

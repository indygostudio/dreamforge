import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PERSONAS } from "@/constants/personas";
import { PersonaImage } from "@/utils/personaImage";
import { Play, Heart, Share2, MoreHorizontal, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const BrowsePage = () => {
  const trendingArtists = Object.entries(PERSONAS).slice(0, 4);
  const featuredSongs = [
    {
      title: "Neon Dreams",
      artist: "Luna Sol",
      plays: "1.2M",
      duration: "3:45",
      image: "luna-sol"
    },
    {
      title: "Electric Heart",
      artist: "Ember Knight",
      plays: "980K",
      duration: "4:12",
      image: "ember-knight"
    },
    {
      title: "Midnight Drive",
      artist: "Jaxon Stone",
      plays: "850K",
      duration: "3:58",
      image: "jaxon-stone"
    },
    {
      title: "Soul Rhythm",
      artist: "Raven White",
      plays: "720K",
      duration: "4:05",
      image: "raven-white"
    }
  ];

  return (
    <div className="min-h-screen bg-dreamaker-bg">
      {/* Header */}
      <div className="bg-dreamaker-gray/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Browse</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search artists, songs..."
                  className="bg-dreamaker-gray pl-10 pr-4 py-2 rounded-xl border-none focus:ring-2 focus:ring-dreamaker-purple w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Trending Artists */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Artists</h2>
            <Button variant="ghost" className="text-dreamaker-purple hover:text-dreamaker-purple-light">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingArtists.map(([id, artist]) => (
              <Link to={`/artist/${id}`} key={id}>
                <Card className="bg-dreamaker-gray border-none overflow-hidden hover:scale-105 transition-transform duration-300 group">
                  <div className="relative aspect-square">
                    <PersonaImage
                      name={`persona-examples/${artist.imageName}`}
                      alt={artist.imageName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 w-full p-4">
                        <Button className="w-full bg-dreamaker-purple hover:bg-dreamaker-purple-light">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">
                      {artist.imageName.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </h3>
                    <p className="text-gray-400 text-sm">{artist.style}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Songs */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Songs</h2>
            <Button variant="ghost" className="text-dreamaker-purple hover:text-dreamaker-purple-light">
              View All
            </Button>
          </div>
          <Card className="bg-dreamaker-gray border-none rounded-xl overflow-hidden">
            {featuredSongs.map((song, index) => (
              <div 
                key={song.title}
                className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-none"
              >
                <div className="flex items-center gap-6">
                  <div className="text-gray-400 w-6 text-right">{index + 1}</div>
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden group">
                    <PersonaImage
                      name={`persona-examples/${song.image}`}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                    <Button 
                      variant="ghost" 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-0"
                    >
                      <Play className="w-6 h-6 text-white" />
                    </Button>
                  </div>
                  <div>
                    <div className="font-medium text-lg">{song.title}</div>
                    <div className="text-sm text-gray-400">{song.artist}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-gray-400">{song.plays} plays</div>
                  <div className="text-gray-400">{song.duration}</div>
                  <Button variant="ghost" className="p-2 hover:bg-dreamaker-purple/20 rounded-xl">
                    <Heart className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                  <Button variant="ghost" className="p-2 hover:bg-dreamaker-purple/20 rounded-xl">
                    <Share2 className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                  <Button variant="ghost" className="p-2 hover:bg-dreamaker-purple/20 rounded-xl">
                    <MoreHorizontal className="w-5 h-5 text-dreamaker-purple" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BrowsePage;

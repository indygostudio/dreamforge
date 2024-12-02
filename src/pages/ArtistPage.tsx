import { ArtistProfile } from "@/components/ArtistProfile";
import { useParams } from "react-router-dom";
import { PERSONAS } from "@/constants/personas";

const ArtistPage = () => {
  const { id } = useParams();
  
  if (!id || !(id in PERSONAS)) {
    return (
      <div className="min-h-screen bg-dreamaker-bg pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Artist Not Found</h1>
          <p className="text-gray-400">The artist you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <ArtistProfile artistId={id as keyof typeof PERSONAS} />;
};

export default ArtistPage;

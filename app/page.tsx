
import Header from "@/components/Header";
import ListItems from "@/components/ListItems";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-hidden bg-neutral-900 rounded-lg">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItems 
              image="/images/heart-liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-semibold text-2xl">Latest Songs</h1>
        </div>
        <div>
          List of songs
        </div>
      </div>
    </div>
  );
}

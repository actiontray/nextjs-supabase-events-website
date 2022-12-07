import Head from "@/components/Head";

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <h1 className="text-center text-4xl py-4 px-2">New event</h1>

        <form>
          <div className="py-4 px-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="py-4 px-2">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div className="py-4 px-2">
            <label htmlFor="possible-timeframes">Possible timeframes</label>
            <input type="text" id="possible-timeframes" />
          </div>
          <div className="py-4 px-2">
            <label htmlFor="excluded-timeframes">Excluded timeframes</label>
            <input type="text" id="excluded-timeframes" />
          </div>
          <div className="py-4 px-2">
            <label htmlFor="repeats">Repeats</label>
            <input type="text" id="repeats" />
          </div>
          <div className="py-4 px-2">
            <label htmlFor="members">Members</label>
            <input type="text" id="members" />
          </div>
        </form>
      </main>
    </div>
  );
}

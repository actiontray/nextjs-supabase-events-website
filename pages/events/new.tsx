import Head from "@/components/Head";

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <h1 className="text-center text-4xl py-4 px-2">New event</h1>

        <form>
          <div className="py-2 px-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="repeats">Repeats</label>
            <input type="text" id="repeats" />
          </div>
          <h2 className="text-2xl pt-8 pb-4 px-2">
            Optimal (soft constraints)
          </h2>
          <div className="py-2 px-2">
            <label htmlFor="optimal-possible-timeframes">
              Possible timeframes
            </label>
            <input type="text" id="optimal-possible-timeframes" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="optimal-excluded-timeframes">
              Excluded timeframes
            </label>
            <input type="text" id="optimal-excluded-timeframes" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="optimal-members">Members</label>
            <input type="text" id="optimal-members" />
          </div>
          <h2 className="text-2xl pt-8 pb-4 px-2">
            Required (hard constraints)
          </h2>
          <div className="py-2 px-2">
            <label htmlFor="required-possible-timeframes">
              Possible timeframes
            </label>
            <input type="text" id="required-possible-timeframes" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="required-excluded-timeframes">
              Excluded timeframes
            </label>
            <input type="text" id="required-excluded-timeframes" />
          </div>
          <div className="py-2 px-2">
            <label htmlFor="required-members">Members</label>
            <input type="text" id="required-members" />
          </div>
        </form>
      </main>
    </div>
  );
}

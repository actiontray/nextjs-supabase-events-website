import Head from "@/components/Head";

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <h1 className="text-center text-4xl">New event</h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
        </form>
      </main>
    </div>
  );
}

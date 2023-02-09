import { type NextPage } from "next";
import Head from "next/head";
import FloorSelection from "../components/FloorSelection";
import ParkingMap from "../components/ParkingMap";
import ParkingStatus from "../components/ParkingStatus";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row">
        {/* floor selection */}
        <FloorSelection />

        <div className="flex h-screen w-full flex-col justify-between">
          {/* parking map  */}
          <ParkingMap />
          {/* parking text status */}
          <ParkingStatus />
        </div>
      </main>
    </>
  );
};

export default Home;


"use client";
import { useRouter } from "next/navigation";
import BarChart from "../components/dashboard/BarChart";
import LineChart from "../components/dashboard/LineChart";



export default function Dashboard() {
    const router = useRouter();

    const back = () => {
        router.push("/");
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={back}>Back</button>
        <h1>Dashboard Page</h1>
        <BarChart />
        <LineChart />
      </main>
    );
  }
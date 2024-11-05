import localFont from "next/font/local";
import { TaskList } from "@/components/TaskList";

// React Tabs
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} mx-auto p-8 bg-white`}
    >
      <Tabs selectedTabClassName="bg-black/50 text-white rounded-xl">
        <TabList className="flex justify-between mb-12 uppercase font-black">
          <Tab>🔴 Open</Tab>
          <Tab>🟡 In Progress</Tab>
          <Tab>✅ Closed</Tab>
        </TabList>

        <TabPanel>
          <TaskList tasks={tasks.filter((task) => task.status == "open")} />
        </TabPanel>

        <TabPanel>
          <TaskList
            tasks={tasks.filter((task) => task.status == "in-progress")}
          />
        </TabPanel>

        <TabPanel>
          <TaskList tasks={tasks.filter((task) => task.status == "closed")} />
        </TabPanel>
      </Tabs>
    </main>
  );
}

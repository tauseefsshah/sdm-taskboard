import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { TaskList } from "@/components/TaskList";

// React Tabs
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Head from "next/head";

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

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "1") {
        setTabIndex(0);
      } else if (event.key === "2") {
        setTabIndex(1);
      } else if (event.key === "3") {
        setTabIndex(2);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <>
      <Head>
        <title>SDM Taskboard</title>
      </Head>
      <main
        className={`${geistSans.variable} ${geistMono.variable} mx-auto p-2 bg-white lg:p-8`}
      >
        <Tabs
          autoFocus={true}
          defaultFocus={true}
          disableUpDownKeys={true}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName="bg-black/50 text-white rounded-xl"
        >
          <TabList className="flex justify-between mb-12 uppercase font-bold text-sm lg:text-md">
            <Tab>🔴 Open</Tab>
            <Tab>🟡 In Progress</Tab>
            <Tab>✅ Closed</Tab>
          </TabList>

          <TabPanel>
            <TaskList status="open" allTasks={tasks} setAllTasks={setTasks} />
          </TabPanel>

          <TabPanel>
            <TaskList
              status="in-progress"
              allTasks={tasks}
              setAllTasks={setTasks}
            />
          </TabPanel>

          <TabPanel>
            <TaskList status="closed" allTasks={tasks} setAllTasks={setTasks} />
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
}

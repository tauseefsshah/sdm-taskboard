import { useEffect, useState } from "react";
import localFont from "next/font/local";

// React Tabs
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// React Sortable
import { ReactSortable } from "react-sortablejs";

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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      assignee: "Tauseef Shah",
      name: "File upload for chats",
      labels: [
        "Update pending"
      ],
      status: "Open",
      created_at: "2023-11-22T13:10:13.649Z",
      updated_at: "2023-11-22T13:10:13.649Z",
      due_at: "2023-11-22T13:10:13.649Z",
      priority: "Urgent"
    },
    {
      id: 2,
      assignee: "Tauseef Shah",
      name: "File upload for chats",
      labels: [
        "Update pending"
      ],
      status: "Open",
      created_at: "2023-11-22T13:10:13.649Z",
      updated_at: "2023-11-22T13:10:13.649Z",
      due_at: "2023-11-22T13:10:13.649Z",
      priority: "Urgent"
    },
    {
      id: 3,
      assignee: "Tauseef Shah",
      name: "File upload for chats",
      labels: [
        "Update pending"
      ],
      status: "Open",
      created_at: "2023-11-22T13:10:13.649Z",
      updated_at: "2023-11-22T13:10:13.649Z",
      due_at: "2023-11-22T13:10:13.649Z",
      priority: "Urgent"
    },
  ]);

  const [taskIndex, setTaskIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && taskIndex != tasks.length - 1) {
      setTaskIndex(taskIndex + 1);
    }

    if (e.key === "ArrowUp" && taskIndex != 0) {
      setTaskIndex(taskIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} mx-auto p-8 bg-white`}
    >
      <Tabs
        selectedTabClassName="bg-black/50 text-white rounded-xl"
      >
        <TabList className="flex justify-between mb-12 uppercase font-black">
          <Tab>🔴 Open</Tab>
          <Tab>🟡 In Progress</Tab>
          <Tab>✅ Closed</Tab>
        </TabList>

        <TabPanel>
          <table className="w-full">
            <thead>
              <tr className="flex gap-2 justify-between items-center">
                <th>#</th>
                <th>Name</th>
                <th>Labels</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              {/* <ReactSortable list={tasks} setList={setTasks}> */}
              {tasks.map((task, index) => (
                <tr key={task.id} className={
                  `flex gap-2 justify-between items-center px-2 py-4 ` + (taskIndex == index ? "bg-black/10" : "")
                } onClick={() => setTaskIndex(index)}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.labels[0]}</td>
                  <td>{task.status}</td>
                  <td>{task.priority}</td>
                  <td>{task.assignee}</td>
                </tr>
              ))}
              {/* </ReactSortable> */}
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <h2>In Progress Tasks</h2>
        </TabPanel>
        <TabPanel>
          <h2>Closed Tasks</h2>
        </TabPanel>
      </Tabs>
    </main>
  );
}

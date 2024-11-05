import localFont from "next/font/local";
import { TaskList } from "@/components/TaskList";

// React Tabs
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
  const tasks = [
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
  ];

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
          <TaskList tasks={tasks} />
        </TabPanel>

        <TabPanel>
          <TaskList tasks={tasks} />
        </TabPanel>

        <TabPanel>
          <TaskList tasks={tasks} />
        </TabPanel>
      </Tabs>
    </main>
  );
}

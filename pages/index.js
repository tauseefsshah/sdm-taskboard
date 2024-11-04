import localFont from "next/font/local";

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
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} mx-auto p-8 bg-white`}
    >
      <p>.</p>
      <Tabs>
        <TabList>
          <Tab>Open</Tab>
          <Tab>In Progress</Tab>
          <Tab>Closed</Tab>
        </TabList>

        <TabPanel>
          <h2>Open Tasks</h2>
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

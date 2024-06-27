import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-400 p-4 text-center">Header</header>
      <div className="flex flex-1">
        <aside className="bg-gray-100 w-1/4 p-4 flex flex-col space-y-4">
          <label htmlFor="email">Email address</label>
          <Input id="email" type="email" placeholder="Your email address" />
          <label htmlFor="password">Your Password</label>
          <Input id="password" type="password" placeholder="Your password" />
          <Button className="mt-4">Sign in</Button>
        </aside>
        <main className="bg-white flex-1 p-4">
          <ul className="space-y-2">
            <li className="border-b pb-2">
              <a href="#" className="text-blue-600">AI headphones let you listen to a single person in crowd, by looking at them</a>
              <p className="text-gray-600">373 points by jdoe 6 hours ago | 143 comments</p>
            </li>
            <li className="border-b pb-2">
              <a href="#" className="text-blue-600">Three Laws of Software Complexity</a>
              <p className="text-gray-600">5 points by rfum 2 hours ago | 24 comments</p>
            </li>
            <li className="border-b pb-2">
              <a href="#" className="text-blue-600">TTE: Terminal Text Effects</a>
              <p className="text-gray-600">1322 points by malapkf 14 hours ago | 209 comments</p>
            </li>
            {/* Add more list items as needed */}
          </ul>
        </main>
      </div>
      <footer className="bg-blue-400 p-4 text-center">Footer</footer>
    </div>
  );
};

export default Index;
import React from "react";

const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-400 p-4 text-center">Header</header>
      <div className="flex flex-1">
        <aside className="bg-blue-500 w-1/4 p-4">Sider</aside>
        <main className="bg-blue-600 flex-1 p-4">Content</main>
      </div>
      <footer className="bg-blue-400 p-4 text-center">Footer</footer>
    </div>
  );
};

export default Index;
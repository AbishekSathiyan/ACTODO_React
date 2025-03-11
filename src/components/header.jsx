import React from "react";

function Header({ username }) {
  return (
    <div>
      <h1 className="text-3xl font-medium bg-green-400 mt-5 p-1 border border-white rounded-2xl text-white">
        Activity Manager
      </h1>

      <h1 className="text-3xl font-medium bg-yellow-300 mt-5 p-1 border border-green rounded-2xl text-black left-0">
        Hi, {username ? username : "User"} {/* Default to 'User' if username is empty */}
      </h1>

      <p className="text-xl font-small p-4">
        I help you manage your activities :)
      </p>
    </div>
  );
}

export default Header;

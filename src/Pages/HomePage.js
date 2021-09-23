import React from "react";

export default function HomePage() {
  return (
    <div style={{ margin: "20px 0px 0px 20px" }}>
      <h1>Home Page</h1>
      <div>
        <small>
          Hi, this is ProlenoDev's first React sandbox: Navbar class component
          rewritten in hooks.
          <div>
            {" "}
            Refer to the 'About' page for Navbar class component link.{" "}
          </div>
          Please spare me if there's mistake, I learn coding by myself, as I
          haven't had the money to afford a tutor.
        </small>
      </div>
      <br />
      <br />
      <h5>
        Type some search text in the Search Bar above, then hit the Search
        Button!
      </h5>
      <p>Try these searches:</p>
      <ul>
        <li>a</li>
        <li>ab</li>
        <li>lo</li>
      </ul>
    </div>
  );
}

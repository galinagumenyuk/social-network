import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
          alt=""
        ></img>
      </header>
      <nav className="nav">
        <div>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Profile
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Messages
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            News
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Music
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Settings
          </a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"
            width="1000px"
            height="200px"
            alt=""
          ></img>
        </div>
        <div>
          {" "}
          ava+description
          <img
            src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
            width="50px"
            alt=""
          ></img>
        </div>
        <div>
          my post
          <div>new post</div>
          <div> post1</div>
          <div> post2</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <>
    <div class="container">
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-light bg-dark fixed-top" style={{width: '280px', marginLeft: '30px', marginTop: '-10px'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="sweeter" style={{maxWidth: '100%', width: '50px', backgroundBlendMode: 'darken'}} />
    </a>
    <ul class="nav nav-pills flex-column mb-auto py-1">
      <li className="py-1">
        <a href="/" class="nav-link text-light fw-bold fs-5">
          <i className="fa fa-home"></i>
          <span className="py-0 p-2">Home</span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-hashtag"></i>
          <span className="py-0 p-2">
            Explore
          </span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-bell"></i>
          <span className="py-0 p-2">Notifications</span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-envelope"></i>
          <span className="py-0 p-2">Messages</span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-bookmark"></i>
          <span className="py-0 p-2">Bookmark</span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-list"></i>
          <span className="py-0 p-2">
            Lists
          </span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-user"></i>
          <span className="py-0 p-2">Profile</span>
        </a>
      </li>
      <li className="py-1">
      <a href="/" class="nav-link text-light fs-5">
          <i className="fa fa-ellipsis-v py-0 p-1"></i>
          <span className="py-0 p-2">More</span>
        </a>
      </li>
      <div className="py-2"></div>
      <button className="btn btn-primary rounded-pill py-3 text-center fw-bold">
        Tweet
      </button>
      <div class="row py-4 p-2">
        <div class="col-md-3">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-9">
          <div class="container-item">
            <p class="text-light fw-bold py-1">
              Badri Vishal Mani ...
            </p>
            <p class="text-muted" style={{marginTop: "-22px"}}>
              @imBvishal
            </p>
          </div>
        </div>
      </div>
    </ul>
  </div>
  </div>
    <section id="home" class="home bg-dark shadow-lg" style={{maxWidth: '100%', width: '600px'}}>
      <div class="container p-5">
        <h4 class="fw-bold text-light text-center">
          Welcome! Badri Vishal Mani Tripathi
        </h4>
        <h5 class="text-muted text-center">
          Here are some viral tweets of this day, Check it out!
        </h5>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '-25px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '5px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src="https://pbs.twimg.com/media/FB4ZFuMVgAIQxRW?format=jpg&name=small" class="col-md-12" style={{borderRadius: '25px'}} />
          </div>
        </div>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '25px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '15px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src="https://pbs.twimg.com/media/FB4ZFuMVgAIQxRW?format=jpg&name=small" class="col-md-12" style={{borderRadius: '25px'}} />
          </div>
        </div>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '25px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="row p-5 py-0" style={{marginTop: '15px'}}>
        <div class="col-md-1">
          <div class="container-item">
            <img src="https://avatars.githubusercontent.com/u/79777609?s=48&v=4" class="rounded-circle" />
          </div>
        </div>
        <div class="col-md-10 py-0 username-u" style={{marginLeft: '15px'}}>
          <div class="container-item">
            <p class="text-light fw-bold">
              Badri Vishal Mani Tripathi
            </p>
            {/* <br /> */}
            <p class="text-muted" style={{marginTop: '-15px'}}>
              @imBvishal
            </p>
            <p class="text-light tl" style={{marginTop: '-10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src="https://pbs.twimg.com/media/FB4ZFuMVgAIQxRW?format=jpg&name=small" class="col-md-12" style={{borderRadius: '25px'}} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;

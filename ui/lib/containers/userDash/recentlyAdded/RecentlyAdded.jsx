ReactDOM.render(
  <div>
    <h3>
      <ContainerHeader text={"Recently Added"}/>
    </h3>
    <RecentlyAddedVideos largeVideos={1} mediumVideos={11}/>
  </div>,
  document.getElementById('recent')
);

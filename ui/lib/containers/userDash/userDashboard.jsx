ReactDOM.render(
  <div>
    <div id="slide">
      <SlideShow />
    </div>
    <div id="toggle">
      <ToggleSwitch />
    </div>
    <div id="recent">
      <RecentlyAdded />
    </div>
    <div id="staff">
      <StaffPicked />
    </div>
  </div>,
  document.getElementById("container");
)

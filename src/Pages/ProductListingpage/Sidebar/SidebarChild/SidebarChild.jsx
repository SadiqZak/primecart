const SidebarChild = () => {
  return (
    <>
      <div className="sidebar-child">
        <div className="sidebar-child-wrapper">
        <small>Prices:</small>
          <div>Price high to low</div>
          <div>Price low to high</div>
        </div>
        <div className="sidebar-child-wrapper">
          <small>Categories:</small>
          <div>Boys</div>
          <div>Girls</div>
        </div>
        <div className="sidebar-child-wrapper">
        <small>Ratings:</small>
          <div>4 stars & above</div>
          <div>3 stars & above</div>
          <div>2 stars & above</div>
          <div>1 star & above</div>
        </div>
      </div>
    </>
  );
};

export default SidebarChild;

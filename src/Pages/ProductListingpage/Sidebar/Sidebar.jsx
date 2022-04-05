import SidebarChild from "./SidebarChild/SidebarChild";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <h3>Filter</h3>
          <SidebarChild/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

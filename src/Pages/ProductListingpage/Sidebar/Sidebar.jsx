import SidebarChild from "./SidebarChild/SidebarChild";

const Sidebar = ({filter}) => {
  return (
    <>
    <div className={`sidebar ${filter && `visibility-visible`}`}>
        <div className="sidebar-wrap">
          <h3>Filter</h3>
          <SidebarChild/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


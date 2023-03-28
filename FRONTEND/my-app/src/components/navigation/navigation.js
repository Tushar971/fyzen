import './navigation.css'
const Navigation= ({RouteChange}) =>{
  return (
  <div>
    <nav className="dt w-100 border-box pa3 ph5-ns">
    <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
        <h1 className="logo">interwiu.com</h1>
    </a>

    <a className="dtc v-mid mid-gray link dim w-25" href="#" title="About"
        onClick={() => RouteChange("AddUser")}
        >Add user</a>
    <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Store"
        onClick={() => RouteChange("ViewUser")}
        >View User</a>

    <div className="dtc v-mid w-75 tr">
        <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
    </div>
    </nav>
  </div>
  );
}
export default Navigation;
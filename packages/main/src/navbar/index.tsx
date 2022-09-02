import React from 'react-dom';
import { apps } from '../mircoApps';
// import './index.scss';

const NavBar = ()=>{

  const goto = (item)=>{
      history.pushState(null, item.activeRule, item.activeRule)
      // this.current = item.name
    
  }
    return(
      <div className="layout-wrapper">
      <div className="layout-header">
        <div className="logo">QIANKUN-EXAMPLE</div>
        <ul className="sub-apps">
        {
          apps?.map(item=>
            <li onClick={()=>goto(item)}>{item.name}</li>
          )
        }
       </ul>

        {/* <div class="userinfo">主应用的state：{{ JSON.stringify(state) }}</div> */}
      </div>
      <div id="container"></div>
    </div>
    )
}

export default NavBar;
 
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem,
  CSidebarFooter,
} from "@coreui/react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { intersection } from 'lodash';

// import { sideBarChange } from "../"
import { sideBarChange } from "../../service/apiActions/changeStateAction"

// sidebar nav config
import navigation from "../../_nav"

// react icons
import * as BiIcons from "react-icons/bi"
import GetAllowedRoutes from "src/_helper/GetAllowedRoutes"
import { Roles } from "src/router/config"

class AppSidebar extends Component {
  state = {
    sidebarShow: false,
    nav: []
  }
  componentDidMount() {

    this.handleAllowedRoutes();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.changeStateResponse !== this.props.changeStateResponse) {
      this.setState({
        sidebarShow: this.props.changeStateResponse.state.sidebarState,
      })
    }
  }
  isArrayWithLength(arr) {
    return (Array.isArray(arr) && arr.length)
  }
  handleAllowedRoutes = () => {
    // const credentials = this.props.userResponse.credentials;
    const roles = [Roles.ADMIN];

    let allowed = navigation.filter(({ permission }) => {

      if (!permission) return true;
      else if (!this.isArrayWithLength(permission)) return true;
      else return intersection(permission, roles).length;
    })
    this.setState({
      nav: allowed
    })
  }

  render() {
    const { sidebarShow, nav } = this.state
    const { userResponse } = this.props;
    return (
      <CSidebar
        position="fixed"
        selfHiding="md"
        unfoldable={false}
        show={sidebarShow}
        // onShow={() => console.log("show")}?
        onHide={() => {
          this.props.sideBarChange(!sidebarShow)
        }}
      >
        <CSidebarBrand className=" d-md-flex" to="/">
          Welcome, {userResponse.credentials.username}
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <CCreateNavItem items={nav} />
          </SimpleBar>
        </CSidebarNav>
        {/* <CSidebarToggler
          className=" d-lg-flex"
          onClick={() => this.props.sidebarUnfoldChange(!sidebarUnfoldable)}
        /> */}
        <CSidebarFooter className="d-flex justify-content-between ">
          <span className="font-weight-lighter ">Log out</span>
          <BiIcons.BiLogOut size={20} />
        </CSidebarFooter>
      </CSidebar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    changeStateResponse: state.changeStateResponse,
    userResponse: state.userResponse
  }
}

export default withRouter(
  connect(mapStateToProps, {
    sideBarChange,
    // sidebarUnfoldChange,
  })(AppSidebar),
)

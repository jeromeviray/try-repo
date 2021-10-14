import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CAvatar,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"

import { AppBreadcrumb } from "./index"

import { AppHeaderDropdown } from "./index"

// import { sideBarChange } from "../../service/apiActions/changeStateAction"
import { sideBarChange } from "src/service/apiActions/changeStateAction"
import { getStoreInformation } from "src/service/apiActions/storeAction/StoreInformationAction"

class AppHeader extends Component {
  state = {
    sidebarUnfoldable: false,
    sidebarShow: false,
    storeInfo: [],
  }
  componentDidMount() {
    this.props.getStoreInformation()
  }
  componentDidUpdate(prevProps, prevState) {
    this.manageStoreInformationResponse(prevProps, prevState)

    if (prevProps.changeStateResponse !== this.props.changeStateResponse) {
      this.setState({
        sidebarShow: this.props.changeStateResponse.state.sidebarState,
      })
    }
  }

  manageStoreInformationResponse = (prevProps, prevState) => {
    if (
      prevProps.storeInformationResponse !== this.props.storeInformationResponse
    ) {
      const { action, status, data } = this.props.storeInformationResponse
      if (action === "GET_STORE_INFORMATION" && status === 200) {
        this.setState({
          storeInfo: data.storeInfo,
        })
      }
    }
  }
  render() {
    const margin = {
      marginBottom: "12px",
    }
    const { sidebarShow, storeInfo } = this.state
    return (
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ms-md-3 d-lg-none d-md-block"
            onClick={() => this.props.sideBarChange(!sidebarShow)}
          >
            <FaIcons.FaBars size={20} />
          </CHeaderToggler>
          {storeInfo.storeName ? (
            <strong style={{ ...margin }}>
              <Link to="/" className="nav-link">
                {storeInfo.storeName}
              </Link>
            </strong>
          ) : (
            <strong style={{ ...margin }}>
              <Link to="/" className="nav-link">
                IMS
              </Link>
            </strong>
          )}

          <CHeaderNav className="ms-3">
            <AppHeaderDropdown />
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    changeStateResponse: state.changeStateResponse,
    storeInformationResponse: state.storeInformationResponse,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    sideBarChange,
    getStoreInformation,
  })(AppHeader),
)

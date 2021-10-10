import React, { Component, lazy } from "react"
import {
  CHeader,
  CContainer,
  CCol,
  CRow,
  CCardGroup,
  CCard,
  // CFormFeedback,
  CButton,
  CCardBody,
  CForm,
  CFormFloating,
  CInputGroup,
  CFormControl,
  CFormLabel,
  CSpinner,
  CFormFeedback,
} from "@coreui/react"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { createAccount } from "src/service/apiActions/userAction/userAction"
import { history } from "src/_helper/history"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import Roles from "src/router/config"
import { Link } from "react-router-dom"

const RightFormCard = lazy(() =>
  import("../../../../components/public/RightFormCard"),
)

export class Register extends Component {
  constructor(props) {
    super(props)
    history.listen((location) => {
      clearMessage() // clear message when changing location
    })
  }
  state = {
    userCredentials: this.userCredentials,
    type: "password",
    validated: false,
    loading: false,
    successful: false,
    message: "",
    isLoggedIn: false,
    permission: "",
  }
  userCredentials = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  }
  onResetValue = () => {
    this.setState(() => this.userCredentials)
  }
  handleOnChange = (event) => {
    const name = event.target.name

    this.setState({
      [name]: event.target.value,
    })
  }

  handleShowPassword = (event) => {
    const { type } = this.state
    event.preventDefault()
    this.setState({
      type: type === "password" ? "text" : "password",
    })
  }
  handleSubmit = (event) => {
    const { username, password, email, firstName, lastName, phoneNumber } =
      this.state
    event.preventDefault()

    this.setState({
      validation: true,
      loading: true,
      successful: false,
    })
    if (username.length !== 0 && password.length !== 0 && email.length !== 0) {
      this.props
        .createAccount(
          username,
          password,
          email,
          firstName,
          lastName,
          phoneNumber,
        )
        .then(() => {
          const successResponse = this.props.messageResponse.data.message;
          this.setState({
            loading: false,
            successful: true,
            message: successResponse,
          })
          this.onResetValue()
        })
        .catch(() => {
          this.setState({
            loading: false,
            successful: false,
          })
          this.onResetValue()
        })
    }
  }
  componentDidMount() {
    this.redirectAuthenticated()
  }
  redirectAuthenticated() {
    const isLoggedIn = this.props.userResponse.isLoggedIn
    if (isLoggedIn) {
      let roleName = this.props.userResponse.credentials.roles.roleName
      let permission = roleName
        ? roleName
        : this.props.userResponse.credentials.roles

      this.setState({
        isLoggedIn: isLoggedIn,
        permission: permission,
      })
    }
  }
  render() {
    let {
      username,
      password,
      email,
      firstName,
      lastName,
      phoneNumber,
      type,
      loading,
      successful,
      message,
      isLoggedIn,
      permission,
    } = this.state

    if (isLoggedIn) {
      if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
        return <Redirect to="/app" />
      } else {
        return <Redirect to="/home" />
      }
    }
    return (
      <>
        <CHeader position="sticky">
          <CContainer>
            <Link className="nav-link" to="/home" style={{ cursor: "pointer" }}>
              <h2 className="nav-item">Logo</h2>
            </Link>
          </CContainer>
        </CHeader>
        <div className="min-vh-100 d-flex flex-row align-items-center text-dark ">
          <CContainer>
            <CRow className="justify-content-center align-items-center">
              <CCol>
                <CCardGroup className="shadow-lg">
                  <CCard className="p-4 m-0 left-to-right form-container border-0">
                    <CCardBody>
                      {!loading ? (
                        <CForm onSubmit={this.handleSubmit}>
                          <CCol
                            sm="12"
                            md="12"
                            lg="12"
                            className="d-flex justify-content-center p-3"
                          >
                            <h2 className="text-dark">Register</h2>
                          </CCol>
                          <CRow>
                            <CCol xs="12" sm="12" md="6" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark ">
                                    <CFormControl
                                      name="firstName"
                                      type="text"
                                      autoCorrect="false"
                                      id="floatingFirstName"
                                      placeholder="First name"
                                      onChange={this.handleOnChange}
                                      value={firstName}
                                      required
                                      className="rounded-pill  ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="floatingFirstName "
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaUser size={18} />
                                      <span className="ps-2">First name</span>
                                    </CFormLabel>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                            <CCol xs="12" sm="12" md="6" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark ">
                                    <CFormControl
                                      name="lastName"
                                      type="text"
                                      autoCorrect="false"
                                      id="floatingLastName"
                                      placeholder="Last name"
                                      onChange={this.handleOnChange}
                                      value={lastName}
                                      required
                                      className="rounded-pill  ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="floatingLastName"
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaUser size={18} />
                                      <span className="ps-2">Last name</span>
                                    </CFormLabel>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md="6" sm="12" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark ">
                                    <CFormControl
                                      name="phoneNumber"
                                      type="number"
                                      autoCorrect="false"
                                      id="floatingPhoneNumber"
                                      placeholder="Phone number"
                                      onChange={this.handleOnChange}
                                      value={phoneNumber}
                                      required
                                      className="rounded-pill  ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="floatingPhoneNumber "
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaPhone size={18} />
                                      <span className="ps-2">Phone number</span>
                                    </CFormLabel>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                            <CCol md="6" sm="12" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark position-relative">
                                    <CFormControl
                                      name="email"
                                      type="email"
                                      id="floatingEmail"
                                      autoCorrect="false"
                                      placeholder="Email"
                                      onChange={this.handleOnChange}
                                      value={email}
                                      required
                                      className="rounded-pill ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="exampleFormControlTextarea1 "
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaEnvelope size={18} />
                                      <span className="ps-2">Email</span>
                                    </CFormLabel>
                                    <CFormFeedback invalid>
                                      Please provide a valid username
                                    </CFormFeedback>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md="6" sm="12" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark ">
                                    <CFormControl
                                      name="username"
                                      type="text"
                                      autoCorrect="false"
                                      id="floatingInput"
                                      placeholder="username"
                                      onChange={this.handleOnChange}
                                      value={username}
                                      required
                                      className="rounded-pill  ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="floatingInput "
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaUserCircle size={18} />
                                      <span className="ps-2">Username</span>
                                    </CFormLabel>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                            <CCol md="6" sm="12" lg="6">
                              <CInputGroup>
                                <CCol xs="12" sm="12" md="12" lg="12">
                                  <CFormFloating className="mb-3 text-dark position-relative">
                                    <CFormControl
                                      name="password"
                                      type={type}
                                      id="floatingPassword"
                                      autoCorrect="false"
                                      placeholder="Password"
                                      onChange={this.handleOnChange}
                                      value={password}
                                      required
                                      className="rounded-pill ps-4 pe-4"
                                    />
                                    <CFormLabel
                                      htmlFor="exampleFormControlTextarea1 "
                                      className="ps-4 pe-4"
                                    >
                                      <FaIcons.FaLock size={18} />
                                      <span className="ps-2">Password</span>
                                    </CFormLabel>
                                    <span
                                      onClick={this.handleShowPassword}
                                      className="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4"
                                    >
                                      {type === "password" ? (
                                        <FaIcons.FaEyeSlash size={20} />
                                      ) : (
                                        <FaIcons.FaEye size={20} />
                                      )}
                                    </span>
                                    <CFormFeedback invalid>
                                      Please provide a valid username
                                    </CFormFeedback>
                                  </CFormFloating>
                                </CCol>
                              </CInputGroup>
                            </CCol>
                          </CRow>
                          <CCol
                            sm="12"
                            md="12"
                            lg="12"
                            className="d-flex flex-column justify-content-center"
                          >
                            <CButton
                              type="submit"
                              color="success"
                              size="lg"
                              style={{ margin: "20px auto", width: "50%" }}
                              className="d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn"
                            >
                              {loading ? (
                                <CSpinner size="sm" />
                              ) : (
                                <span className="d-flex align-items-center login-icon me-2">
                                  <BsIcons.BsFillPersonPlusFill size={20} />
                                </span>
                              )}
                              <span className="label-btn ">Register</span>
                            </CButton>
                          </CCol>
                          {message && (
                            <div className="form-group">
                              <div
                                className={
                                  successful
                                    ? "alert alert-success"
                                    : "alert alert-danger"
                                }
                                role="alert"
                              >
                                {message}
                              </div>
                            </div>
                          )}
                        </CForm>
                      ) : (
                        <CSpinner />
                      )}
                    </CCardBody>
                  </CCard>
                  <RightFormCard button="login" />
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userResponse: state.userResponse,
    messageResponse: state.messageResponse,
  }
}
export default connect(mapStateToProps, {
  createAccount,
  clearMessage,
})(Register)

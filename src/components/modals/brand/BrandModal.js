import React, { Component } from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton,
    CModalTitle,
    CSpinner,
    CForm,
    CFormFloating,
    CFormControl,
    CFormLabel, CToast,
    CToastBody, CToastClose, CToaster,

} from '@coreui/react'
import { connect } from 'react-redux'
import { addBrandModal } from 'src/service/apiActions/modalAction/modalAction'
import { savingBrand, updateBrand } from 'src/service/apiActions/brandAction/brandAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'

export class BrandModal extends Component {
    state = {
        visible: false,
        icon: '',
        action: '',
        loading: false,
        toast: '',
        brandName: '',
        brandId: ''
    }
    // componentDidMount() {

    // }
    componentDidUpdate(prevProps, prevState) {
        this.manageBrandModal(prevProps, prevState);
    }

    manageBrandModal = (prevProps, prevState) => {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            let { visible, action, brand, icon } = this.props.modalVisible;
            if (action === "Add") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                })
            } else if (action === "Edit") {
                this.setState({
                    visible: visible,
                    action: action,
                    icon: icon,
                    brandName: brand.brand,
                    brandId: brand.id
                })
            } else {
                this.setState({
                    visible: visible,
                    action: '',
                    icon: '',
                    brandName: '',
                    brandId: ''
                })
            }
        }
    }

    handleOnChange = (event) => {
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        })

        let { brandName, brandId, action } = this.state;

        let { accessToken, type } = this.props.userResponse.credentials;

        let token = type + accessToken;

        if (brandName && brandName.length > 0) {
            if (action === "Add") {
                this.handleSaveBrand(brandName, token);
            } else if (action === "Edit") {
                this.handleUpdateBrand(brandId, brandName, token);
            }
        } else {
            this.setState({
                loading: false
            })
        }

    }
    handleSaveBrand(brandName, token) {
        this.props.savingBrand(brandName, token)
            .then(() => {
                let { status, data } = this.props.messageResponse;
                if (status === 200) {
                    this.setState({
                        brandName: '',
                        message: data.message,
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
                setInterval(() => {
                    this.props.clearMessage();
                    window.location.reload();
                }, 1000)
            }).catch(() => {
                let { status, data } = this.props.messageResponse;
                this.setState({
                    message: data && data.message,
                    loading: false,
                })
                if (status > 400 && status <= 403) {
                    this.props.logout();
                    this.props.clearMessage();

                } else {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
            })
    }
    handleUpdateBrand = (brandId, brandName, token) => {
        this.props.updateBrand(brandId, brandName, token)
            .then(() => {
                let { status, data } = this.props.messageResponse;
                if (status === 200) {
                    this.setState({
                        brandName: '',
                        message: data.message,
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
                setInterval(() => {
                    this.props.clearMessage();
                    window.location.reload();
                }, 1000)
            })
            .catch(() => {
                let { status, data } = this.props.messageResponse;
                this.setState({
                    message: data && data.message,
                    loading: false,
                })
                if (status > 400 && status <= 403) {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false,
                        toast: this.toastComponent()
                    })
                    setInterval(() => {
                        this.props.logout();
                        this.props.clearMessage();
                    }, 1000)

                } else {
                    this.setState({
                        message: data && data.message,
                        successFully: false,
                        loading: false,
                        toast: this.toastComponent()
                    })
                }
            })
    }
    toastComponent() {
        let { data, status } = this.props.messageResponse;
        let color = '';
        if (status === 200) {
            color = "success"
        } else if (status > 400 && status <= 403) {
            color = "danger"
        } else if (status > 405 && status <= 500) {
            color = "warning"
        } else {
            color = "primary"
        }
        return (
            <CToast color={color} className="text-white align-items-center" delay={3000}>
                <div className="d-flex">
                    <CToastBody>{data.message}</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                </div>
            </CToast>
        )
    }
    render() {
        let { visible, icon, action, brandName, loading, toast } = this.state;
        return (
            <div>
                <CToaster push={toast} placement="top-end" />
                <CModal visible={visible}>
                    <CModalHeader onDismiss={() => {
                        this.props.addBrandModal(false, 'close', '', '');
                        this.props.clearMessage();
                    }}>
                        <CModalTitle >
                            <div className="d-flex align-items-center">
                                {icon}
                                {action + " Brand"}
                            </div>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm id="brand-form" onSubmit={this.handleOnSubmit}>
                            <div className="mb-3">
                                <CFormFloating className="mb-3">
                                    <CFormControl
                                        name="brandName"
                                        value={brandName}
                                        onChange={this.handleOnChange}
                                        type="text"
                                        id="floatingBrandInput"
                                        placeholder="Enter Brand Name"
                                    />
                                    <CFormLabel htmlFor="floatingBrandInput">Enter Brand Name</CFormLabel>
                                </CFormFloating>
                            </div>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="dark" variant="ghost" onClick={() => {
                            this.props.addBrandModal(false, 'close', '', '');
                            this.props.clearMessage();
                        }}>
                            Close
                        </CButton>
                        <CButton type="submit"
                            color="primary"
                            disabled={loading}
                            form="brand-form"
                        >
                            {loading && <CSpinner size="sm" className="ms-1" />}
                            Save {action === "Edit" ? "Changes" : "Brand"}
                        </CButton>
                    </CModalFooter>
                </CModal>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        modalVisible: state.modalVisibleResponse,
        brandResponse: state.brandResponse,
        userResponse: state.userResponse,
        messageResponse: state.messageResponse
    }
}
export default connect(mapStateToProps, {
    addBrandModal,
    savingBrand,
    updateBrand,
    logout,
    clearMessage
})(BrandModal)
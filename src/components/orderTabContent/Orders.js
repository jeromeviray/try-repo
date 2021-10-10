import React, { Component } from 'react'
import {
    CCard,
    CCardBody, CCardHeader, CCardFooter,
    CRow, CCol,
    CContainer, CImage,
    CButton
} from '@coreui/react'
import { Link } from 'react-router-dom'
//action 
import { getOrders, updateOrderStatus } from 'src/service/apiActions/orderAction/orderAction'
import { logout } from 'src/service/apiActions/userAction/userAction'
import { clearMessage } from 'src/service/apiActions/messageAction/messageAction'
import { connect } from 'react-redux'
import OrderCard from './OrderCard'
import Roles from 'src/router/config'
import ReactPaginate from 'react-paginate'

export class Orders extends Component {
    state = {
        message: '',
        status: '',
        action: '',
        orders: [],
        token: '',
        permission: '',
        path: ''
    }

    constructor(props) {
        super(props);
        this.state.status = props.status;
    }
    componentDidMount() {
        let { type, accessToken, roles } = this.props.userResponse.credentials;
        let token = type + accessToken;
        let roleName = roles.roleName;
        let getPermission = roleName ? roleName : roles;
        let href = this.manageHrefLinkBasedInPermission(getPermission);

        this.setState({
            token: token,
            permission: roles.roleName ? roles.roleName : roles,
            path: href
        })

        this.props.getOrders(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        this.manageorderRepsonse(prevProps, prevState);
    }

    manageorderRepsonse = (prevProps, prevState) => {
        if (prevProps.orderResponse !== this.props.orderResponse) {
            let { status, action, data } = this.props.orderResponse;
            console.log(this.props.orderResponse);
            if (status === 200 && action === "GET_ORDERS") {
                this.setState({
                    orders: data.orders
                })
            }
        }
    }

    manageHrefLinkBasedInPermission = (permission) => {
        if (permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) {
            return "/app/order/";
        } else {
            return "/user/order/"
        }
    }

    handleOrder(orderData, orderStatus) {
        let orderId = orderData.orderId;
        this.props.updateOrderStatus(orderId, orderStatus).then(() => {
            let orders = this.state.orders;
            const order = this.props.orderResponse.data;
            const index = orders.findIndex((o) => o.orderId == orderId);
            orders.splice(index, 1);
            console.log(orders)
            if (orders.length == 0) {
                this.props.getOrders(this.state.status, 0, 10);
            } else {
                let totalCounts = this.props.totalCounts;
                if (typeof totalCounts[orderStatus.toUpperCase()] == 'undefined') {
                    totalCounts[orderStatus.toUpperCase()] = 0;
                }
                totalCounts[orderData.orderStatus.toUpperCase()]--;
                totalCounts[orderStatus.toUpperCase()]++;
                this.props.totalCountChange(totalCounts);
                this.setState({
                    orders: orders
                });
            }
        })
    }

    renderOrderAction(orderStatus, order) {
        let orderButton = <></>;
        console.log(orderStatus)
        switch (orderStatus.toLowerCase()) {
            case 'pending':
                orderButton = <CButton onClick={() => { this.handleOrder(order, 'confirmed') }}>Confirm Order</CButton>;
                break;
            case 'confirmed':
                orderButton = <CButton onClick={() => { this.handleOrder(order, 'shipped') }}>Mark as Shipped</CButton>;
                break;
            case 'shipped':
                orderButton = <CButton onClick={() => { this.handleOrder(order, 'delivered') }}>Mark as Delivered</CButton>;
                break;
            case 'delivered':
                orderButton = <CButton onClick={() => { this.handleOrder(order, 'payment_received') }}>Mark as Payment Received</CButton>;
                break;
        }
        return orderButton;
    }

    render() {
        let { message, orders, permission, path } = this.state;
        const fontStyle = {
            fontSize: "14px",
            fontWeight: "400"
        }
        return (
            <>
                {message && (
                    <CCard className="mb-3">
                        <CCardBody>
                            {/* <div className="form-group d-flex justify-content-center align-items-center"> */}
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                            {/* </div> */}
                        </CCardBody>
                    </CCard>
                )}
                {orders.length === 0 ? (
                    <CCard>
                        <CCardBody>
                            <div className="text-center">No Order Data</div>
                        </CCardBody>
                    </CCard>
                ) : (
                    orders.map((order, index) => {
                        const { firstName, lastName, street, barangay, province, region, city, phoneNumber } = order.customerAddress;
                        return (
                            <CCard className="mb-3" key={index}>
                                <CCardHeader>
                                    <CRow className="p-2">
                                        <span
                                            style={{ fontSize: "14px", fontWeight: "400" }}
                                            className="text-black-50"
                                        >
                                            Order ID: {order.orderId}
                                        </span>
                                        <span
                                            style={{ fontSize: "14px", fontWeight: "400" }}
                                            className="text-black-50"
                                        >
                                            Customer Name: {firstName + " " + lastName}
                                        </span>
                                        <span
                                            style={{ fontSize: "14px", fontWeight: "400" }}
                                            className="text-black-50"
                                        >
                                            Mobile: {phoneNumber}
                                        </span>
                                        <span
                                            style={{ fontSize: "14px", fontWeight: "400" }}
                                            className="text-black-50"
                                        >
                                            Address: {street + " " + " " + barangay + ", " + city + ", " + province}
                                        </span>
                                    </CRow>
                                </CCardHeader>
                                <CCardBody>
                                    <CContainer>
                                        {order.orderItems.map((item, index) => {
                                            return <OrderCard item={item} key={index} />
                                        })}
                                    </CContainer>
                                    {(order.orderStatus == "DELIVERED" || order.orderStatus == "PAYMENT_RECEIVED") &&
                                        <CButton style={{ float: "right" }}>Submit Product Review</CButton>
                                    }

                                </CCardBody>
                                <CCardFooter className="p-4">
                                    <div className="d-flex justify-content-between align-items-end">
                                        <div className="d-flex align-items-bottom">
                                            {/* {order.orderItems.map((item, index) => {
                                                return (

                                                )

                                            })} */}
                                            <Link
                                                to={{
                                                    pathname: path + order.orderId,
                                                    state: order.orderId,
                                                }}
                                                className="m-2"
                                            >
                                                View More
                                            </Link>

                                            {(permission === Roles.SUPER_ADMIN || permission === Roles.ADMIN) ?
                                                this.renderOrderAction(this.state.status, order)
                                                :
                                                <></>
                                            }
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div style={fontStyle} className="mt-2">
                                                <span className="text-black-50 me-2">
                                                    Date of Ordered:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>
                                                    {order.orderedAt}
                                                </span>
                                            </div>

                                            <div style={fontStyle} className="mt-2">
                                                <span
                                                    style={fontStyle}
                                                    className="text-black-50 me-2"
                                                >
                                                    Payment Method:
                                                </span>
                                                <span style={{ fontWeight: "500" }}>
                                                    {order.paymentMethod.paymentMethod}
                                                </span>
                                            </div>
                                            <div style={fontStyle} className="mt-2">
                                                <span
                                                    style={fontStyle}
                                                    className="text-black-50 me-2"
                                                >
                                                    Order Status:
                                                </span>
                                                <span
                                                    className="text-danger"
                                                    style={{ fontWeight: "500" }}
                                                >
                                                    {order.orderStatus}
                                                </span>
                                            </div>
                                            <div className="mt-2">
                                                <span
                                                    style={fontStyle}
                                                    className="text-black-50 me-2"
                                                >
                                                    Total Amount
                                                </span>
                                                <span style={{ fontWeight: "500" }}>
                                                    &#8369;{order.totalAmount.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CCardFooter>
                            </CCard>
                        )
                    })
                )}
                {/* <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    // pageCount={inventories.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                /> */}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        orderResponse: state.orderResponse,
        messageResponse: state.messageResponse,
        userResponse: state.userResponse
    }
}
export default connect(mapStateToProps, {
    getOrders,
    logout,
    clearMessage,
    updateOrderStatus
})(Orders)

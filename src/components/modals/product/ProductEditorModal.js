import React, { Component } from "react"
import { connect } from "react-redux"
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CContainer,
  CRow,
  CCol,
  CAlert,
  CFormFloating,
  CFormControl,
  CFormLabel,
  CForm,
  CSpinner,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
  CFormSelect,
  CFormCheck,
} from "@coreui/react"

//icons
// import * as FaIcons from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import { RiEdit2Line } from "react-icons/ri"

// npm packages
import ImageUploading from "react-images-uploading"
import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
// import { convertToHTML } from "draft-convert"
import draftToHtml from "draftjs-to-html"

// action
import { saveProduct } from "src/service/apiActions/productAction/productAction"
import { setProductModal } from "../../../service/apiActions/modalAction/modalAction"
import { logout } from "src/service/apiActions/userAction/userAction"
import { clearMessage } from "src/service/apiActions/messageAction/messageAction"
import { getImage } from "src/service/apiActions/productAction/productAction"
//api
import ProductApiService from "src/service/restAPI/ProductApiService"

export class ProductEditorModal extends Component {
  constructor(props) {
    super(props)

    this.removeImage = this.removeImage.bind(this)

    this.state = {
      visible: false,
      alert: true,
      loading: false,
      successFully: false,
      message: "",
      status: "",
      productDetails: this.productDetail,
      action: "",
      icon: "",
      images: [],
      productImage: [],
      removedImages: [],
      toast: "",
      editorState: EditorState.createEmpty(),
      autoGenerateBarcode: false,
    }
  }

  productDetail = {
    productName: "",
    productPrice: 0,
    productDescriptions: "",
    productImage: [],
    barcode: "",
    brandName: "",
    brandId: "",
    categoryName: "",
    categoryId: "",
    threshold: 0,
  }
  onResetValue = () => {
    this.setState(() => this.productDetail)
  }
  componentDidMount() {
    this.loadImage()
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.manageModalVisible(prevProps, prevState)
  }
  manageModalVisible = (prevProps, prevState) => {
    if (prevProps.modalVisibleResponse !== this.props.modalVisibleResponse) {
      let { action, visible, icon } = this.props.modalVisibleResponse
      if (action === "Add") {
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
        })
      } else if (action === "Edit") {
        let { product, action, visible, icon } = this.props.modalVisibleResponse
        this.setState({
          visible: visible,
          action: action,
          icon: icon,
          productName: product.productName,
          productPrice: product.productPrice,
          editorState: product.productDescription
            ? EditorState.createWithContent(
                convertFromRaw(JSON.parse(product.productDescription)),
              )
            : EditorState.createEmpty(),
        })
        this.getImages(product.fileImages)
      } else if (action === "close") {
        this.props.clearMessage()
        this.setState({
          visible: this.props.modalVisibleResponse.visible,
          productName: "",
          productPrice: "",
          editorState: EditorState.createEmpty(),
          productImage: [],
        })
      }
    }
  }
  async getImages(fileImages) {
    let { accessToken, type } = this.props.credentials
    let token = type + accessToken
    for (let i = 0; i < fileImages.length; i++) {
      ProductApiService.getImage(fileImages[i].fileName, token)
        .then((response) => {
          this.loadImage(response.data, fileImages[i].fileName)
        })
        .catch((error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.error_message ||
            error.toString()

          const status =
            (error.response &&
              error.response.data &&
              error.response.data.code) ||
            error.status ||
            error.toString()
          this.setState({
            status: status,
            message: message,
          })
        })
    }
  }

  loadImage = (image, fileName) => {
    let { productImage } = this.state
    if (!image) {
      return
    }
    let reader = new FileReader()
    reader.onloadend = () => {
      productImage.push({
        data_url: reader.result,
        file: null,
        image_created: true,
        filename: fileName,
      })
      this.setState({
        productImage: productImage,
      })
    }
    if (image) {
      reader.readAsDataURL(image)
    }
  }

  handleVisibility = (state) => {
    this.setState({
      visible: false,
    })
  }

  handleImageOnchange = (imageList, addUpdateIndex) => {
    this.setState({
      productImage: imageList,
    })
  }

  onEditorStateChange = (editorState) => {
    const rawState = editorState.getCurrentContent()
    this.setState({
      editorState,
    })
  }

  handleOnChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let {
      productName,
      productPrice,
      productImage,
      action,
      removedImages,
      barcode,
      editorState,
    } = this.state
    let productData = new FormData()
    if (productImage) {
      if (productImage.length > 0) {
        this.setState({
          loading: true,
        })

        for (let i = 0; i < productImage.length; i++) {
          if (productImage[i].file) {
            productData.append("productImages[]", productImage[i].file)
          }
        }
        productData.append("removedImages", removedImages)
        productData.append("barcode", barcode)
        productData.append("productName", productName)
        productData.append("productPrice", productPrice)
        productData.append(
          "productDescription",
          JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        )

        // if (action === "Add") {
        //   this.saveProduct(productData)
        // } else if (action === "Edit") {
        //   this.editProduct(productData)
        // } else {
        //   this.setState({
        //     visible: this.props.modalVisibleResponse.visible,
        //   })
        // }
      }
    } else {
      console.log("Select images")
    }
  }

  saveProduct = (productData) => {
    this.props
      .saveProduct(productData)
      .then(() => {
        this.onResetValue()
        const successMessage = this.props.messageResponse
        if (successMessage.status === 200) {
          this.setState({
            loading: false,
            successFully: true,
            toast: this.toastComponent(),
            editorState: EditorState.createEmpty(),
          })
        } else {
          this.setState({
            loading: false,
            successFully: false,
            editorState: EditorState.createEmpty(),
          })
        }
      })
      .catch(() => {
        this.onResetValue()
        let { status, data } = this.props.messageResponse

        if (status > 400 && status <= 403) {
          this.props.logout()
          this.props.clearMessage()
          this.setState({
            loading: false,
            toast: this.toastComponent(),
            editorState: EditorState.createEmpty(),
          })
        }
        this.setState({
          loading: false,
          toast: this.toastComponent(),
          editorState: EditorState.createEmpty(),
        })
      })
  }

  editProduct = (productData, token) => {}

  removeImage(index) {
    let { productImage, removedImages } = this.state
    if (productImage[index].filename) {
      removedImages.push(productImage[index].filename)
    }
  }
  toastComponent() {
    let { data, status } = this.props.messageResponse
    let color = ""
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
      <CToast
        color={color}
        className="text-white align-items-center"
        delay={3000}
      >
        <div className="d-flex">
          <CToastBody>{data.message}</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
    )
  }
  render() {
    let {
      visible,
      alert,
      productName,
      productPrice,
      productImage,
      barcode,
      editorState,
      loading,
      successFully,
      message,
      action,
      icon,
      toast,
      categoryName,
      categoryId,
      brandName,
      brandId,
      threshold,
      autoGenerateBarcode,
    } = this.state
    return (
      <>
        <CToaster push={toast} placement="top-end" />

        <CModal size="xl" visible={visible} fullscreen="lg" scrollable>
          <CModalHeader
            onDismiss={() => {
              this.props.setProductModal(false, "close")
            }}
            className="modal-header"
          >
            <CModalTitle>{action} Product</CModalTitle>
          </CModalHeader>
          <CForm
            onSubmit={this.handleSubmit}
            className="modal-product-form"
            id="a-form"
          >
            <CModalBody>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successFully
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CAlert color="warning" dismissible visible={alert}>
                <strong>Maximum 10 images</strong>
              </CAlert>
              <ImageUploading
                multiple
                value={productImage}
                onChange={this.handleImageOnchange}
                maxNumber={10}
                dataURLKey="data_url"
                onError={() =>
                  this.setState({
                    toastVisible: false,
                  })
                }
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <CContainer className="upload-container">
                      <button
                        className="upload-btn"
                        style={
                          isDragging
                            ? {
                                backgroundColor: "#8E9293",
                                border: "4px dashed #ffffff",
                              }
                            : undefined
                        }
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Select Image or Drag Here
                      </button>
                    </CContainer>
                    <CRow className=" images-contianer shadow ">
                      {imageList.map((image, index) => (
                        <CCol key={index} sm="4" md="2" lg="3">
                          <div className="image-item d-flex ">
                            <img src={image["data_url"]} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <RiEdit2Line
                                size={30}
                                color="#007CFF"
                                onClick={() => onImageUpdate(index)}
                              />
                              <MdDelete
                                size={30}
                                color="#FF0000"
                                onClick={() => {
                                  this.removeImage(index)
                                  onImageRemove(index)
                                }}
                              />
                            </div>
                          </div>
                        </CCol>
                      ))}
                    </CRow>
                  </div>
                )}
              </ImageUploading>
              <CRow className="mt-5">
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="text"
                      id="floatingInputProductName"
                      placeholder="Product Name"
                      name="productName"
                      value={productName}
                      onChange={this.handleOnChange}
                      required
                    />
                    <CFormLabel htmlFor="floatingInputProductName">
                      Product Name
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="number"
                      id="floatingProductPrice"
                      placeholder="Product Price"
                      name="productPrice"
                      value={productPrice}
                      onChange={this.handleOnChange}
                      required
                    />
                    <CFormLabel htmlFor="floatingInput">
                      Product Price
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CRow className="align-items-end">
                    <CCol sm="8" md="8" lg="8">
                      <CFormFloating className="mb-3">
                        <CFormControl
                          type="number"
                          id="floatingBarcode"
                          placeholder="Product Barcode"
                          name="barcode"
                          value={barcode}
                          onChange={this.handleOnChange}
                          required
                          disabled={autoGenerateBarcode}
                        />
                        <CFormLabel htmlFor="floatingBarcode">
                          Product Barcode
                        </CFormLabel>
                      </CFormFloating>
                    </CCol>
                    <CCol sm="4" md="4" lg="4">
                      <CFormCheck
                        value={autoGenerateBarcode}
                        onChange={() =>
                          this.setState({
                            autoGenerateBarcode: !autoGenerateBarcode,
                          })
                        }
                        name="autoGenerateBarcode"
                        className="mb-3"
                        id="autoGenerateBarcode"
                        label="Generate Barcode"
                      />
                    </CCol>
                  </CRow>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormControl
                      type="number"
                      id="floatingThreshold"
                      placeholder="Product Threshold"
                      name="threshold"
                      value={threshold}
                      onChange={this.handleOnChange}
                      required
                    />
                    <CFormLabel htmlFor="floatingThreshold">
                      Product Threshold
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormSelect
                      value={brandName}
                      onChange={this.handleOnChange}
                      name="brandName"
                      id="floatingSelectBrand"
                      aria-label="Brand Names"
                    >
                      <option>Choose Brand</option>
                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectBrand">Brand</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol sm="12" md="6" lg>
                  <CFormFloating className="mb-3">
                    <CFormSelect
                      value={categoryName}
                      onChange={this.handleOnChange}
                      name="branch"
                      id="floatingSelectCategory"
                      aria-label="Categories"
                    >
                      <option>Choose Category</option>
                    </CFormSelect>
                    <CFormLabel htmlFor="floatingSelectCategory">
                      Category
                    </CFormLabel>
                  </CFormFloating>
                </CCol>

                <CCol sm="12" md="12" lg="12">
                  <Editor
                    editorState={editorState}
                    wrapperClassName="editor-wrapper"
                    editorClassName="editor"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Product Description"
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                        "list",
                        "textAlign",
                        "colorPicker",
                        "emoji",
                        "remove",
                        "history",
                      ],
                    }}
                  />
                </CCol>
              </CRow>
            </CModalBody>
          </CForm>
          <CModalFooter className="modal-footer">
            <CButton
              color="secondary"
              variant="ghost"
              onClick={() => this.props.setProductModal(!visible, "close")}
              className="text-body"
            >
              Close
            </CButton>
            <CButton
              type="submit"
              color="info"
              form="a-form"
              className="d-flex justify-content-center align-items-center position-relative "
              disabled={loading}
            >
              {loading ? (
                <CSpinner size="sm" />
              ) : (
                <span className="d-flex align-items-center login-icon me-2">
                  {icon}
                </span>
              )}
              {action === "Edit" ? "Update" : "Create"} Product
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalVisibleResponse: state.modalVisibleResponse,
    messageResponse: state.messageResponse,
    credentials: state.userResponse.credentials,
    productResponse: state.productResponser,
  }
}
export default connect(mapStateToProps, {
  setProductModal,
  saveProduct,
  logout,
  clearMessage,
  getImage,
})(ProductEditorModal)

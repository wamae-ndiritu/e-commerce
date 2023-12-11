import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import app from "../../utilities/firebase";
import { toast } from "react-toastify";
import Toast from "../../utilities/Toast";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { createProduct } from "../../Redux/Actions/productActions";
import Message from "../../utilities/Message";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProduct = () => {
  const bucket_url = process.env.REACT_APP_BUCKET_URL;

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  const [inputs, setInputs] = useState({
    productName: "",
    price: "",
  });
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [variation, setVariation] = useState("all");
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategory = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleBrand = (e) => {
    setBrands(e.target.value.split(","));
  };

  const handleQuantity = (e) => {
    setQuantities(e.target.value.split(","));
  };

  const handleSuppliers = (e) => {
    setSuppliers(e.target.value.split(","));
  };

  useEffect(() => {
    if (product) {
      console.log(product);
      toast.success("Product Added", ToastObjects);
      setInputs({
        price: "",
        productName: "",
        variation: "",
      });
      setDescription("");
      setCategories([]);
      setBrands([]);
      setSuppliers([]);
      setQuantities([]);
      setImages([]);
      setUrls([]);
      setProgress(0);
      setProgressShow(false);
    }
  }, [product]);

  useEffect(() => {
    if (loading) {
      console.log("Loading...");
    } else if (error) {
      console.log(`Error: ${error}`);
    }
  }, [error, loading]);

  const handleImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const uploadImages = (e) => {
    e.preventDefault();
    setProgressShow(true);
    const promises = [];
    images.forEach((image) => {
      const fileName = new Date().getTime() + image.name;
      const storage = getStorage(app, bucket_url);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          //console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const product = {
      ...inputs,
      productImages: urls,
      description,
      quantities,
      brands,
      suppliers,
      categories,
      variation,
    };
    dispatch(createProduct(product));
  };

  return (
    <div className='container'>
      <Toast />
      <div className='mt-3 mb-5'>
        <div className='product-form-cont shadow-lg'>
          {loading ? (
            <div className='d-flex justify-content-center mt-3 mx-3'>
              <div class='spinner-border text-success' role='status'>
                <span class='visually-hidden'>Loading...</span>
              </div>
            </div>
          ) : (
            error && <Message variant='alert-danger'>{error}</Message>
          )}
          <div className='page-header-btn-cont mb-3'>
            <div className='btn-item-1'>
              <Link to='/products'>
                <button
                  className='btn btn-main'
                  style={{ backgroundColor: "red" }}
                >
                  Back to Products
                </button>
              </Link>
            </div>
            <h4 className='text-center mt-3'>Add Product</h4>
            <div className='btn-item-2'>
              <button className='btn btn-main' onClick={submitHandler}>
                Publish Product
              </button>
            </div>
          </div>
          <form className='add-form'>
            <div className='add-form-1'>
              <div className='mb-3'>
                <h6>Product Title</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='New Product title'
                  name='productName'
                  value={inputs.productName}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <h6>Categories</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='floor,sugar,utensils, etc.'
                  name='categories'
                  value={categories}
                  onChange={handleCategory}
                />
              </div>
              <div className='mb-3'>
                <h6>Quantity</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Bundle,12 pcs packet, etc.'
                  name='quantity'
                  value={quantities}
                  onChange={handleQuantity}
                />
              </div>
              <div className='mb-3'>
                <h6>Brand</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Raha Premium,Soko Ugali,Kafagara,etc'
                  name='brands'
                  value={brands}
                  onChange={handleBrand}
                />
              </div>
              <div className='mb-3'>
                <h6>Suppliers</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Menengai Distributors,Sony Max,etc.'
                  name='suppliers'
                  value={suppliers}
                  onChange={handleSuppliers}
                />
              </div>
              <div className='mb-3'>
                <h6>Images</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Please don't type here"
                  name='images'
                  value={urls}
                  onChange={(e) => setImages(e.target.value)}
                />
              </div>
            </div>
            <div className='add-form-2'>
              <div className='mb-3'>
                <h6>Price</h6>
                <input
                  type='text'
                  className='form-control'
                  placeholder='10 000'
                  name='price'
                  value={inputs.price}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <h6>Product Variation</h6>
                <select
                  className='form-control'
                  name='variation'
                  onChange={(e) => setVariation(e.target.value)}
                >
                  <option value='all'>All</option>
                  <option value='wholesale'>Wholesale</option>
                  <option value='retail'>Retail</option>
                </select>
              </div>
              <div className='mb-3'>
                <h6>Product Image</h6>
                <input
                  type='file'
                  className='form-control'
                  multiple
                  name='images'
                  onChange={handleImages}
                />
              </div>
              <div className='mb-3'>
                <h6>Description</h6>
                <textarea
                  type='text'
                  className='form-control'
                  rows='5'
                  placeholder='Type your product description here...'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='mb-3'>
                <button className='btn btn-main' onClick={uploadImages}>
                  Upload Images
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

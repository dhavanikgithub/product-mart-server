import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';
// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {

  console.log(req.user);
  const cart = await Cart.findOne({ user: req.user._id }).populate('cartItems.product');
  if (cart) {
    res.json(cart);
  } else {
    res.status(404);
    throw new Error('Cart not found');
  }
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
// Example controller function to add item to cart
const addToCart = asyncHandler(async (req, res) => {
  const { product, qty } = req.body;

  // Retrieve product details from database
  const productDetails = await Product.findById(product);

  if (productDetails) {
    const cartItem = {
      product: productDetails._id,
      qty,
      name: productDetails.name,
      image: productDetails.image,
      price: productDetails.price,
      countInStock: productDetails.countInStock,
    };

    // Add to user's cart
    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      const itemIndex = cart.cartItems.findIndex(
        (item) => item.product.toString() === product
      );

      if (itemIndex > -1) {
        cart.cartItems[itemIndex].qty = qty;
      } else {
        cart.cartItems.push(cartItem);
      }

      await cart.save();
      res.status(201).json(cart);
    } else {
      const newCart = new Cart({
        user: req.user._id,
        cartItems: [cartItem],
      });

      await newCart.save();
      res.status(201).json(newCart);
    }
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});


// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
const removeFromCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = cart.cartItems.filter((item) => item.product.toString() !== req.params.id);
    await cart.save();
    res.json(cart);
  } else {
    res.status(404);
    throw new Error('Cart not found');
  }
});

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = [];
    await cart.save();
    res.json(cart);
  } else {
    res.status(404);
    throw new Error('Cart not found');
  }
});


export { getCart, addToCart, removeFromCart, clearCart };

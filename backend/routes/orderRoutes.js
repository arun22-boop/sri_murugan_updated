import express from "express";
import Order from "../models/Order.js";

const router = express.Router();



// ===================================
// GET ALL ORDERS
// ===================================

router.get("/", async (req, res) => {
  try {

    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to load orders",
    });

  }
});



// ===================================
// GET SINGLE ORDER
// ===================================

router.get("/:id", async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order Not Found",
      });
    }

    res.json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
});



// ===================================
// CREATE ORDER
// ===================================

router.post("/", async (req, res) => {

  try {

    const {

      customerName,
      phone,
      address,
      notes,
      products,
      totalAmount,
      paymentMethod,
      paymentStatus,
      status

    } = req.body;



    if (!customerName || !phone || !address) {

      return res.status(400).json({

        message: "Customer details required",

      });

    }



    if (!products || products.length === 0) {

      return res.status(400).json({

        message: "Products required",

      });

    }



    const totalItems = products.reduce(

      (sum, item) => sum + Number(item.quantity),

      0

    );



    const updatedProducts = products.map(item => ({

      ...item,

      subtotal: Number(item.price) * Number(item.quantity),

    }));



    const order = new Order({

      customerName,
      phone,
      address,
      notes,

      products: updatedProducts,

      totalItems,

      totalAmount,

      paymentMethod: paymentMethod || "Cash",

      paymentStatus: paymentStatus || "Pending",

      status: status || "Pending",

    });



    const savedOrder = await order.save();

    res.status(201).json(savedOrder);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Order Save Failed",

    });

  }

});




// ===================================
// UPDATE STATUS
// ===================================

router.put("/:id", async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(

      req.params.id,

      { status },

      { new: true }

    );



    if (!order) {

      return res.status(404).json({

        message: "Order Not Found",

      });

    }



    res.json(order);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Update Failed",

    });

  }

});




// ===================================
// DELETE ORDER
// ===================================

router.delete("/:id", async (req, res) => {

  try {

    const order = await Order.findByIdAndDelete(

      req.params.id

    );



    if (!order) {

      return res.status(404).json({

        message: "Order Not Found",

      });

    }



    res.json({

      message: "Order Deleted Successfully",

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Delete Failed",

    });

  }

});



export default router;
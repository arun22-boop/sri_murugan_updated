import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        tamilName: {
          type: String,
          default: "",
        },

        brand: {
          type: String,
          default: "",
        },

        category: {
          type: String,
          default: "",
        },

        unit: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },

        price: {
          type: Number,
          required: true,
          default: 0,
        },

        quantity: {
          type: Number,
          required: true,
          default: 1,
        },

        subtotal: {
          type: Number,
          default: 0,
        },
      },
    ],

    totalItems: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    paymentMethod: {
      type: String,
      default: "Cash",
      enum: ["Cash", "Online", "UPI"],
    },

    paymentStatus: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Paid"],
    },

    status: {
      type: String,
      default: "Pending",
      enum: [
        "Pending",
        "Confirmed",
        "Processing",
        "Delivered",
        "Cancelled",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
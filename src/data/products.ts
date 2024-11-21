import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "LB-5000 Processing Unit",
    price: 2499,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "High-performance neural processing unit with advanced quantum computing capabilities. Perfect for AI research and development.",
    specifications: {
      "Processing Power": "50 TFLOPS",
      "Memory": "128GB HBM3",
      "Interface": "Neural Link 2.0",
      "Power Consumption": "280W",
      "Manufacturing Date": "2023",
      "Warranty": "6 months"
    },
    seller: {
      name: "Tech Solutions Ltd",
      rating: 4.8,
      totalSales: 156
    }
  },
  {
    id: 2,
    title: "Neural Network Module",
    price: 1899,
    condition: "Excellent",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80",
    description: "Advanced neural network module with self-learning capabilities. Ideal for pattern recognition and data analysis.",
    specifications: {
      "Neural Cores": "1024",
      "Learning Rate": "0.001-0.1",
      "Memory": "64GB DDR5",
      "Connectivity": "Quantum Bus",
      "Manufacturing Date": "2023",
      "Warranty": "12 months"
    },
    seller: {
      name: "AI Systems Inc",
      rating: 4.9,
      totalSales: 89
    }
  },
  {
    id: 3,
    title: "Quantum Sensor Array",
    price: 3299,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80",
    description: "High-precision quantum sensor array with multi-dimensional scanning capabilities. Perfect for environmental analysis.",
    specifications: {
      "Sensors": "256 Quantum Units",
      "Resolution": "0.001nm",
      "Scan Rate": "1000Hz",
      "Field Range": "500m³",
      "Manufacturing Date": "2022",
      "Warranty": "3 months"
    },
    seller: {
      name: "Quantum Dynamics",
      rating: 4.7,
      totalSales: 234
    }
  },
  {
    id: 4,
    title: "Advanced Memory Bank",
    price: 1299,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "Next-generation memory storage system with quantum encryption and instant access capabilities.",
    specifications: {
      "Capacity": "1 Petabyte",
      "Access Speed": "100TB/s",
      "Encryption": "256-bit Quantum",
      "Interface": "Universal Port",
      "Manufacturing Date": "2023",
      "Warranty": "24 months"
    },
    seller: {
      name: "Memory Solutions",
      rating: 4.6,
      totalSales: 312
    }
  }
];
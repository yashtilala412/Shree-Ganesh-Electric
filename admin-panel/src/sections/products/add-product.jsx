import axios from 'axios';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';

export default function AddProduct() {
  const theme = useTheme();
  const router = useRouter();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImage, setProductImage] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleImageUpload = (event) => {
    // const file = event.target.files[0];
    const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setProductImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error ", error);
        }
    }
//     const handleSubmit = () => {
//     router.push('/');
//   };
  const handleSubmit = () => {
    const categoryid = "66264a3f2ed00fa9637cd788";
    const formData = {
        name: productName,
        description: productDescription,
        image: productImage,
        price: productPrice,
        stockQuantity: productQuantity,
        categoryId:categoryid
       
    };
    // console.log(formData);
    axios
      .post('http://localhost:3000/api/product', formData)
      .then((res) => {
        console.log('Response:', res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductQuantity('');
    setProductImage(null);

    router.push('/');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: alpha(theme.palette.background.default, 0.9),
      }}
    >
      <Card sx={{ p: 5, width: '100%', maxWidth: 420 }}>
        <Typography variant="h4" gutterBottom>
          Add Product
        </Typography>

        <TextField
          fullWidth
          label="Product Name"
          value={productName}
          onChange={handleProductNameChange}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Product Description"
          value={productDescription}
          onChange={handleProductDescriptionChange}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          type="number"
          label="Product Price"
          value={productPrice}
          onChange={handleProductPriceChange}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          type="number"
          label="Product Quantity"
          value={productQuantity}
          onChange={handleProductQuantityChange}
          sx={{ mb: 3 }}
        />

        <input type="file" accept="image/*" onChange={handleImageUpload}/>

        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>

        <Divider sx={{ my: 3 }} />

        <Button fullWidth variant="outlined" onClick={() => router.push('/')}>
          Cancel
        </Button>
      </Card>
    </Box>
  );
}

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import { alpha, useTheme } from '@mui/material/styles';
// import { useRouter } from 'src/routes/hooks';

// // ----------------------------------------------------------------------

// export default function AddCategory() {
//   const theme = useTheme();
//   const router = useRouter();

//   const [categoryName, setCategoryName] = useState('');
//   const [categoryDescription, setCategoryDescription] = useState('');

//   const handleCategoryNameChange = (event) => {
//     setCategoryName(event.target.value);
//   };

//   const handleCategoryDescriptionChange = (event) => {
//     setCategoryDescription(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Here you can handle the form submission, for now let's just log the inputs
//     console.log('Category Name:', categoryName);
//     console.log('Category Description:', categoryDescription);

//     // Redirect to another page after submission, you can change '/dashboard' to any desired route
//     router.push('/blog');
//   };

//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: alpha(theme.palette.background.default, 0.9),
//       }}
//     >
//       <Card sx={{ p: 5, width: '100%', maxWidth: 420 }}>
//         <Typography variant="h4" gutterBottom>
//           Add Category
//         </Typography>

//         <TextField
//           fullWidth
//           label="Category Name"
//           value={categoryName}
//           onChange={handleCategoryNameChange}
//           sx={{ mb: 3 }}
//         />

//         <TextField
//           fullWidth
//           multiline
//           rows={4}
//           label="Category Description"
//           value={categoryDescription}
//           onChange={handleCategoryDescriptionChange}
//           sx={{ mb: 3 }}
//         />

//         <Button fullWidth variant="contained" onClick={handleSubmit}>
//           Submit
//         </Button>

//         <Divider sx={{ my: 3 }} />

//         <Button fullWidth variant="outlined" onClick={() => router.push('/blog')}>
//           Cancel
//         </Button>
//       </Card>
//     </Box>
//   );
// }

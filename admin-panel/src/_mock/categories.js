// import axios from "axios";
// function  getCategorydata() async{
//       try {
//         const response = await axios.get("http://localhost:3000/api/category");
//         category=response.data.category;
//         console.log(category);
//       } catch (error) {
//         console.error("Error:", error);
//       }
// }
export const categories = [
  {
    id: "1",
    name: "Technology",
    description: "Articles related to latest technologies and innovations.",
    status: "active",
    createdAt: "2024-05-03T08:00:00Z",
    updatedAt: "2024-05-03T08:00:00Z"
  },
  {
    id: "2",
    name: "Travel",
    description: "Explore beautiful destinations and travel tips.",
    status: "active",
    createdAt: "2024-05-02T10:30:00Z",
    updatedAt: "2024-05-02T15:45:00Z"
  },
  {
    id: "3",
    name: "Food & Cooking",
    description: "Discover delicious recipes and cooking techniques.",
    status: "active",
    createdAt: "2024-05-01T09:15:00Z",
    updatedAt: "2024-05-03T11:20:00Z"
  },
  {
    id: "4",
    name: "Health & Fitness",
    description: "Tips for a healthy lifestyle and fitness routines.",
    status: "inactive",
    createdAt: "2024-04-30T14:20:00Z",
    updatedAt: "2024-05-01T16:30:00Z"
  },
  {
    id: "5",
    name: "Fashion",
    description: "Trending fashion styles and beauty tips.",
    status: "active",
    createdAt: "2024-04-29T11:45:00Z",
    updatedAt: "2024-05-03T09:10:00Z"
  }
];

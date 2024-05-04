// import { sample } from 'lodash';
// import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

// export const users = [...Array(24)].map((_, index) => ({
//   id: faker.string.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.person.fullName(),
//   company: faker.company.name(),
//   verified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));
export const users = [
  {
    id: "e2aebdb0-6041-46e2-8503-aa3dc2c2e128",
    avatarUrl: "/assets/images/avatars/avatar_1.jpg",
    name: "Arjun Kukadiya",
    email: "arjun@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "8d1c5cfd-3414-4d3c-b593-2d72ad3b14a7",
    avatarUrl: "/assets/images/avatars/avatar_2.jpg",
    name: "Jane Smith",
    email: "jane@example.com",
    verified: false,
    status: "banned"
  },
  {
    id: "73a8af98-7b2d-4c19-8cc9-1b4f6c62c5d5",
    avatarUrl: "/assets/images/avatars/avatar_3.jpg",
    name: "Alice Johnson",
    email: "alice@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "d58a4f7f-6f61-4b92-a5c5-92cfd39b5c4f",
    avatarUrl: "/assets/images/avatars/avatar_4.jpg",
    name: "Michael Brown",
    email: "michael@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "93a9e36d-3d04-4a49-8823-40bc25e59d1c",
    avatarUrl: "/assets/images/avatars/avatar_5.jpg",
    name: "Emily Williams",
    email: "emily@example.com",
    verified: false,
    status: "active"
  },
  {
    id: "c6507917-b3f5-4b3a-9e1f-4fe39d8b46d8",
    avatarUrl: "/assets/images/avatars/avatar_6.jpg",
    name: "David Wilson",
    email: "david@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "ec0905d0-0f0c-41f0-97dc-7f430090587f",
    avatarUrl: "/assets/images/avatars/avatar_7.jpg",
    name: "Sarah Miller",
    email: "sarah@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "90d8c34d-25d4-4314-84f6-d6f44c0f53d9",
    avatarUrl: "/assets/images/avatars/avatar_8.jpg",
    name: "Daniel Jones",
    email: "daniel@example.com",
    verified: true,
    status: "active"
  },
  {
    id: "9a104c53-1e3a-42e3-bef6-f4e9de4ff837",
    avatarUrl: "/assets/images/avatars/avatar_9.jpg",
    name: "Olivia Martinez",
    email: "olivia@example.com",
    verified: false,
    status: "active"
  },
  {
    id: "c9a6b9b3-fc98-47e2-a19e-4b7034b17975",
    avatarUrl: "/assets/images/avatars/avatar_10.jpg",
    name: "William Brown",
    email: "william@example.com",
    verified: true,
    status: "active"
  }
];


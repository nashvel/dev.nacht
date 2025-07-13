export const fileTree = {
  name: 'Portfolio',
  isFolder: true,
  children: [
    {
      name: 'about',
      isFolder: true,
      children: [
        { name: 'README.md', isFolder: false },
      ],
    },
    {
      name: 'projects',
      isFolder: true,
      children: [
        { name: 'QuickMart.tsx', isFolder: false },
        { name: 'ComputerTerminal3D.tsx', isFolder: false },
        { name: 'FoodDeliveryApp.tsx', isFolder: false },
        { name: 'Nashiyomi.tsx', isFolder: false },
      ],
    },
    { name: 'resume.pdf', isFolder: false },
    { name: 'skills.tsx', isFolder: false },
    { name: 'contact.tsx', isFolder: false },
    { name: 'package.json', isFolder: false },
  ],
};

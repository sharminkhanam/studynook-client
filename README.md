This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## StudyNook README.md##

## 
Project name : studyNook
server side : studynook2-server
client-side : studynook2

Description : StudyNook is a full-stack web application where users can browse,book, and manage study rooms in a library. Room owners can list their rooms,and users can book available time slots within any conflicts

## Deploy on Vercel

Features :
* Secure authentication uusing JWT 
* Add, update, and delete study rooms 
* Book rooms with date and time slot selection
* My Bookings for users
* My Listings for room owners 
* Responsive

*Frontend :
* Next.js , react-hot-toast,react-icon,heroUi

Backend: Express.js, mongodb, jwt,cors
Authentication :
 *Email/password login 
* Google OAuth login 
* Protected routes
## APi Featuers 
*Room
- get/room
- post/room
-get/room/:id
- patch/room:id
- delete/room:id
## Bookings
- get/bookings
-get/bookings/:userId
 - post/bookings
 - delete/booking/:bookingId
 * get/my-bookings
 *get/my-listing

 
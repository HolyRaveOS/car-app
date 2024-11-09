# Car Dealer App

A modern web application built with Next.js that allows users to explore and filter vehicles by make and year. This application utilizes the NHTSA (National Highway Traffic Safety Administration) Vehicle API to provide comprehensive vehicle information.

[Live Demo](https://cars-dealer-app.vercel.app/)

## 🚀 Features

- Server-side rendering with Next.js 14+ App Router
- TypeScript for enhanced type safety
- Dynamic vehicle data fetching from NHTSA API
- Vehicle filtering by make and year
- Responsive design using Tailwind CSS
- Loading states with React Suspense
- Error handling with custom API client

## 📁 Project Structure

```
├── app/
│   ├── _components/
│   │   ├── ui/         # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── combobox.tsx
│   │   │   ├── command.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── popover.tsx
│   │   │   └── skeleton.tsx
│   │   └── vehicles/   # Vehicle-specific components
│   │       ├── Vehicle.tsx
│   │       └── VehiclesList.tsx
│   ├── _lib/
│   │   ├── fetchClient.ts     # Custom API client
│   │   ├── services/
│   │   │   └── data-service.ts   # API service functions
│   │   └── utils/
│   │       └── index.ts       # Helper functions
│   ├── _types/
│   │   ├── Vehicle.ts
│   │   └── VehicleParams.ts
│   ├── enums/
│   │   └── routes.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── vehicles/
│       └── [makeId]/
│           └── [year]/
│               └── page.tsx
├── public/
│   └── images/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **API**: NHTSA Vehicle API
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/HolyRaveOS/Car-Dealer-App.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚥 API Integration

The application integrates with the NHTSA Vehicle API to fetch:

- Vehicle makes
- Models by make and year
- Detailed vehicle information

Example API endpoints:

- `/vehicles/GetMakesForVehicleType/car`
- `/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}`

## 🧩 Key Components

### Home Page

- Vehicle make selection
- Year selection
- Dynamic routing to vehicle listings

### Vehicles List Page

- Displays vehicles based on selected make and year
- Loading states with Suspense
- Error handling
- Back navigation

### Vehicle Component

- Displays individual vehicle information
- Responsive design for different screen sizes

## 🔄 Data Flow

1. User selects vehicle make and year on home page
2. Application routes to `/vehicles/[makeId]/[year]`
3. Server-side data fetching occurs
4. Vehicle list is rendered with loading states
5. Error boundaries catch and handle any API errors

## 🚀 Deployment

The application is deployed on Vercel. Each push to the main branch triggers an automatic deployment.

## 📈 Performance

- Server-side rendering for optimal performance
- Dynamic imports for code splitting
- Suspense boundaries for smooth loading states
- TypeScript for code reliability
- Custom error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- NHTSA for providing the vehicle data API
- Shadcn UI for the component library
- Vercel for hosting the application

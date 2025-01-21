
# CoopHive - Decentralized Cooperative Housing Society Platform

Welcome to **CoopHive**, a decentralized platform designed for cooperative housing societies, providing streamlined fund management, transparent proposal handling, and secure asset tracking through blockchain.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Contributors](#contributors)

## Project Overview
**CoopHive** was developed as part of the **Timechain Summer of Code 2024 Sprint**. It empowers cooperative housing societies to manage funds transparently and engage in secure asset and proposal management via blockchain technology.

## Tech Stack
- **Frontend**: Sveltekit
- **Backend**: NestJS, Prisma, PostgreSQL
- **Tools**: Postman, Swagger

## Features

### Project Structure Overview
- **Home**
  - **Login** / **Register**
  - **Dashboard**
    - **CHS Creation**
      - Create and Manage CHS
    - **Proposals**
      - Browse and View Proposals
      - Invest in Proposals
    - **Fund Management**
      - View Expenditures
      - Request Funds
    - **Account Settings**
    - **Logout**

### Core Functionalities
1. **CHS Creation**: Allows admins to establish and maintain cooperative housing societies.
2. **Proposal Management**: Members can explore, view details, and invest in proposals.
3. **Fund Management**: Transparent tracking of expenses and fund requests via smart contracts.

## Frontend Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jhanvimadan/coophive.git
   ```
2. **Navigate to Frontend Directory** and Install Dependencies:
   ```bash
   cd coophive/frontend && pnpm install
   ```
3. **Run Development Server**:
   ```bash
   pnpm run dev --open
   ```

## Backend Setup
1. **Navigate to Backend Directory** and Install Dependencies:
   ```bash
   cd coophive/backend && pnpm install
   ```
2. **Configure Environment Variables** in `.env` with database and JWT details.
3. **Run Prisma Migrations**:
   ```bash
   pnpx prisma migrate dev --name init
   ```
4. **Start Backend Server**:
   ```bash
   pnpm run start:dev
   ```

## Contributors
- **Jhanvi Madan 1** - [GitHub Profile](https://github.com/Jhanvimadan)

--- 

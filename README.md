# simple-feedback-management-system
# Simple Feedback Management System

## Overview

A simple feedback management system with a Node.js backend and a React frontend.

## Backend

### Setup

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Run the server: `npx ts-node-dev src/app.ts`.

### Endpoints

- `GET /feedback` - Retrieve all feedback entries.
- `POST /feedback` - Submit new feedback (body: `{ name: string, feedback: string }`).

## Frontend

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

### Features

- Submit new feedback.
- Display a list of all feedback entries.

## Additional Notes

- Ensure the backend is running on `http://localhost:5000` for the frontend to communicate with it.

# Feedback Collector 📝

A simple and elegant micro-application that allows users to submit feedback and enables admins to view submitted entries in a clean interface.

## 🌐 Live Demo

🔗 [Live on Netlify](https://feedback-assignment.netlify.app/)  
📂 [GitHub Repository](https://github.com/Aryam2121/feedback-assignment)

---

## 🚀 Tech Stack

- **Frontend**: React (with Vite or Next.js)
- **Styling**: Tailwind CSS
- **Backend**: Netlify Functions (Serverless API)
- **Hosting**: Netlify

---

## 📦 Features

### 🖊️ Feedback Form
- Full Name (Text Input)
- Email (with validation)
- Feedback message (Textarea)
- Submit button with loading state
- Form-level validation with user-friendly messages

### 🔐 Admin View
- Toggle button: **"View Submitted Feedback"**
- Displays feedback entries in a clean, card-style layout
- Timestamps for each submission

### 💅 UI & UX
- Fully responsive
- Clean and minimalistic design
- Footer watermark with your name and submission info
- Optional: Dark/Light theme toggle
- Smooth transitions and animations

---

## 📁 Folder Structure

```bash
feedback-collector/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── netlify/functions/
│   ├── submit-feedback.js
│   └── get-feedbacks.js
├── tailwind.config.js
├── package.json
└── README.md

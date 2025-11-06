# 🏛️ Legal Document Search Portal

The **Legal Document Search Portal** is a modern web application that enables users to **search legal documents**, **view data**, and **generate AI-powered summaries instantly**.  
The platform is designed to make navigating large sets of legal documents easier, faster, and more intuitive.

---

## 🎯 Project Purpose

Legal documents can be long, complex, and time-consuming to analyze.  
This tool solves that problem by allowing a user to:

1. **Search documents by keywords**
2. **Browse structured results**
3. **Select a document to view important details**
4. **Generate a concise AI summary** that highlights key points
---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🔍 **Document Search** | Enter a keyword to search related legal documents. |
| 📑 **Clean Results Display** | Displays title, type, and date for each document. |
| 🏷️ **Document data View** | Clearly shows document attributes. |
| 🤖 **AI-Powered Summary** | Generates an easy-to-understand summary for selected documents. |
| 🎨 **Modern UI** | Beautiful gradients, animations, and smooth interactions. |
| 📱 **Fully Responsive** | Works across desktop, tablet, and mobile devices. |

---

## 🛠️ Tech Stack

### **Frontend**
- React (TypeScript)
- TailwindCSS
- React Icons

### **Backend (Hosted separately)**
- Node.js + Express
> The backend is accessed via REST API.  

---

## 🧠 How It Works (Workflow)
User enters keyword in search bar <br/>
↓ <br/>
Frontend calls backend API: /?query=... <br/>
↓ <br/>
Backend searches indexed legal documents <br/>
↓ <br/>
Search results returned to UI and displayed <br/>
↓ <br/>
User selects a document <br/>
↓ <br/>
Document summary is displayed <br/>

---

## 📂 Project Structure

src/ <br/>
├── components/ <br/>
│ ├── Footer/ <br/>
│ ├── Header/ <br/>
│ ├── HeroSection/ <br/>
│ ├── Searchbar/ <br/>
│ ├── DocumentsView/ <br/>
│ ├── DocumentCard/ <br/>
│ └── Summary/ <br/>
├── pages/ <br/>
│ └── Home/ <br/>
├── types/ <br/>
│ └── types.ts <br/>
└── App.tsx <br/>

## ⚙️ Setup & Installation

1. **Clone the repository**
1. **Install Dependencies**
npm install


2. **Run the Development Server**
npm run dev


3. **Open in your Browser**

http://localhost:5173

## Live URL
https://legal-document-search-portal.netlify.app/


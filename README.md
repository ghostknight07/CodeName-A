# TimeJump Movie Site

---

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Navbar](#navbar)
  - [MoviePoster](#movieposter)
  - [NotFound](#notfound)
- [Pages](#pages)
  - [Home](#home)
  - [Movies](#movies)
  - [Blog](#blog)
  - [Request](#request)
- [Routing](#routing)
- [Styles](#styles)
- [Dependencies](#dependencies)

---

## Introduction
**TimeJump** is a movie site built using React, React Router, and Vite. The site allows users to navigate through different pages, including a home page, movie page, blog page, and request page.

---

## Project Structure
src/ # Contains the source code for the project components/ # Reusable React components pages/ # Page-level components App.jsx # The main application component main.jsx # The entry point for the application public/ # Static assets, such as images and fonts vite.config.js # Vite configuration file


---

## Components
The project includes the following reusable components:

### Navbar
A navigation bar component that appears on every page.

### MoviePoster
A component that displays a movie poster.

### NotFound
A component that displays a "not found" message when a page is not found.

---

## Pages
The project consists of the following pages:

### Home
The main page of the site.

### Movies
A page that displays a list of movies.

### Blog
A page that displays a list of blog posts.

### Request
A page that allows users to request a movie.

---

## Routing
TimeJump uses **React Router** to manage client-side routing. All routes are defined in `main.jsx`.

---

## Styles
The project uses **CSS Modules** for managing styles. Each component has its own CSS file, which is imported into the respective component.

---

## Dependencies
The project relies on the following packages:

- `react`
- `react-dom`
- `react-router-dom`
- `vite`
- `@vitejs/plugin-react`
- `prop-types`
- `boxicons`

> **Note:** This is not an exhaustive list of dependencies but highlights the most important ones.

---

Enjoy exploring and enhancing **TimeJump**! 🚀

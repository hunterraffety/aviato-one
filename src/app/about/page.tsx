'use client'

import React from 'react'
import {
  FaProjectDiagram,
  FaStore,
  FaUserFriends,
  FaTools,
  FaRocket,
} from 'react-icons/fa'
import ComponentLibrary from '../components/ComponentLibrary'
import TestShowcase from '../components/TestShowcase'
import MarkdownDisplay from '../components/MarkdownDisplay'

interface Criterion {
  title: string
  description: string
  icon: React.ReactElement
}

const aboutMarkdown = `
# Aviato

**Aviato** – A Next.js App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)

---

## Introduction

Welcome to **Aviato**, from the famed Silicon Valley, they're back at it again. I've tried to adhere to the project guidelines as best as I can within a reasonable amount of time

## Features

- **Responsive Design:** all responsive
- **Dynamic Content:** components Hero and UsersList deal w/ dynamic data handling and animations
- **Accessibility:** meets accessibility standards with proper ARIA attributes and semantic HTML
- **Testing:** implements unit tests for critical components to ensure functionality and prevent regressions
- **Component Library:** reusable components for consistent design and codebase
- **Test Showcase:** in the about page, a showcase of the tests that have been implemented

## Technologies Used

- **Next.js:** React framework for server-rendered applications
- **TypeScript:** Adds static typing to JavaScript for improved developer experience
- **Jest:** JavaScript testing framework for unit and integration tests
- **React Testing Library:** Facilitates testing React components with a focus on user interactions
- **Framer Motion:** Library for declarative animations in React
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development
- **React Syntax Highlighter:** Library for displaying syntax-highlighted code snippets
- **GraphQL/Apollo:** Data interfacing for fetching and managing data from a GraphQL API
`

const criteria: Criterion[] = [
  {
    title: 'organization',
    description:
      "you can make a strong argument that this is designed for scalability, and i'd like to think that the addition of new features and areas should be fairly easy to bang out a component here and there, so there's a pattern of reusable components, also contributing to the overall skeleton of the app",
    icon: <FaProjectDiagram size={40} className="text-blue-500" />,
  },
  {
    title: 'state management',
    description:
      "i chose to use context api for this. i know there's redux, but i felt it was overkill and not necessarily prohibitive to use context",
    icon: <FaStore size={40} className="text-green-500" />,
  },
  {
    title: 'ux',
    description:
      "it's a simple layout for the most part, but the lines are clean, there are some snappy animations (thx framer motion), and a handful of other nice to haves like toast notifications etc",
    icon: <FaUserFriends size={40} className="text-purple-500" />,
  },
  {
    title: 'maintainability',
    description:
      "i chose to write some tests w/ rtl and jest. also this project is written in ts which helps w/ type safety, bomb.com, let's minimize runtime errors and facilitate easier code management.",
    icon: <FaTools size={40} className="text-yellow-500" />,
  },
  {
    title: 'more than out of the box',
    description:
      'i included a bunch of existing frameworks and libraries, not to impress or anything but to avoid reinveting the wheel, i also threw in some custom hooks to make life a bit easier for routine ops for devs. using this approach ensures that our tools and integrations are optimized for scalability and team collaboration.',
    icon: <FaRocket size={40} className="text-red-500" />,
  },
]

const About: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">architectural notes</h2>
          </div>

          {/* grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">{criterion.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">
                  {criterion.title}
                </h3>
                <p className="text-gray-600">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarkdownDisplay markdown={aboutMarkdown} />
      <ComponentLibrary />
      <TestShowcase />
    </>
  )
}

export default About

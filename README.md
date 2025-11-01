# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Shadcn](https://ui.shadcn.com/) - UI library
- [Tailwind css](https://tailwindcss.com/) - For styles
- [React-Hook-Form](https://react-hook-form.com/) - Form state management library
- [Zod](https://zod.dev/) - Form validation library
- [React-Hot-Toast](https://react-hot-toast.com/) - Toast library

### What I learned

tsx: How to split the codes for contents into a small component.
css: How to modify the break point for custom responsive design in the global.

see below:

```css
@theme {
  --breakpoint-*: initial;
  /* Mobile */
  --breakpoint-xs: 320px;
  /* Desktop */
  --breakpoint-sm: 375px;
  --breakpoint-md: 600px;
  --breakpoint-lg: 800px;
  --breakpoint-xl: 1000px;
  --breakpoint-2xl: 1200px;
  --breakpoint-3xl: 1440px;
}
```

```tsx
export const Content = () => {
  return (
    <CardContent className="flex flex-col justify-center items-center gap-6 py-3">
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <LoginInput name="firstName" label="First Name" />
        <LoginInput name="lastName" label="Last Name" />
      </div>
      <div className="w-full">
        <LoginInput name="emailAddress" label="Email Address" type="email" />
      </div>
      <div className="w-full">
        <LoginRadioGroup
          name="queryType"
          radioGroupLabels={[
            "Query Type",
            "General Enquiry",
            "Support Request",
          ]}
          radioGroupValues={["generalEnquiry", "supportRequest"]}
        />
      </div>
      <div className="w-full">
        <LoginTextarea name="message" label="Message" />
      </div>
      <div className="w-full">
        <LoginCheckbox
          name="isConsented"
          label="I consent to being contacted by the team"
        />
      </div>
    </CardContent>
  );
};
```

### Continued development

I would like to learn design principle such as SLID principle for ReactJs application in order to enhance maintainability, readability and reusability.

## Author

- GitHub - [kkr0423](https://github.com/)
- Frontend Mentor - [@Ogasawara Kakeru](https://www.frontendmentor.io/home)

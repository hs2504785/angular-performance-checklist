---
title: Image Optimization
---

# Problem

Impact LCP

# Solution

- Use npm packages to optimize images
- Use angular NgOptimizedImage module
- Use srcset (RWD)

```html
<img
  srcset="cat-s.jpg 300w, cat-m.jpg 600w, cat-l.jpg 1200w, cat-xl.jpg 2000w"
/>
```

# Resources

- [NgOptimizedImage](https://angular.io/guide/image-directive) - Official documentation for image optimization

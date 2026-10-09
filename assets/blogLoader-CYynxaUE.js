var e=`---
title: "Test Post"
date: "2026-02-27"
author: "Joona"
excerpt: "This is a test post."
heroImage: "/images/test-1-steissi.webp"
---

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Heading 2

Bullet 0
- Bullet 1
- Bullet 2
  - Bullet 2.1

![meitsi](/images/test-0-meitsi.webp)
![steissi](/images/test-1-steissi.webp)
![uusikatu](/images/test-2-uusikatu.webp)

### Heading 3

Code snippet:

\`\`\`javascript
const greeting = "Moi kaikki";
console.log(greeting);
\`\`\`

`,t=`---
title: "Project Management for Media Environments - Hashidoi"
date: "2026-10-06"
author: "Joona"
excerpt: "A custom built web platform to create, manage and share different kinds of projects."
---

# The problem

I have a lot of fleeting ideas for different kinds of creative work. The issue is that I don't have a proper way to
actually manage them, work on them and to keep track with them. As I come from an engineering background, I tend 
to think about every problem as structured, and that they can be solved with a proper system. I don't have much experience with 
project management, but I have done quite a bit of software, and specifically web development. When I couldn't find 
exactly what I was looking for, I decided to go down the route of vibe coding a custom platform for myself.

# In the beginning...

I started with drafting the database layout: what kind of data I would need to store, and how it would relate to each 
other. I also started to think what software stack to use and how the user interface should look like. I ended up using 
what I've already become accustomed to: A Next.js frontend with Prisma ORM managing a PostgreSQL database. The platform 
is monolithic, as opposed to using microservices which I'd like to explore in the future. I think that a monolithic 
architecture is a good fit for my needs as I'm building a single-/few-user platform, and it's easier to manage. 
Because I knew that building this myself would've taken forever, I started using AI pretty heavily early on in the 
project. The exact tool I used was Google's Gemini-CLI (later renamed/upgraded to Antigravity-CLI).

# The development process

As a bit of a surprise, using AI in the development process has been a very positive experience. I have to admit that I 
don't exactly enjoy writing code that much; I'd rather focus on the design and system operation. AI speeds things up 
dramatically, though it doesn't get everything 100 % correct. And I don't mean this in a way that "it can't read my 
mind, therefore it's not perfect", I mean that it might do something stupid like entirely neglecting user 
authentication, straight up showing private website content to anyone who has the URL. This means that a lot of 
experience with programming is still required to understand what the AI is actually doing, and to keep vigilant for 
any potential mistakes, even regarding basic stuff.

---

**To be continued...**  
_(I accidentally bundled the draft post with the deployment and I will finish writing this later)_`,n=e=>{if(!e.startsWith(`---`))return{data:{},content:e};let t=e.indexOf(`
---`,3);if(t===-1)return{data:{},content:e};let n=e.slice(3,t).trim(),r=e.slice(t+3+1).trimStart(),i={};return n.split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t===-1)return;let n=e.slice(0,t).trim(),r=e.slice(t+1).trim().replace(/^"|"$/g,``);n&&(i[n]=r)}),{data:i,content:r}},r=Object.assign({"../blogs/example-post-1.md":e,"../blogs/hashidoi-project-description.md":t}),i=e=>(e.split(`/`).pop()||``).replace(`.md`,``),a=()=>Object.keys(r).map(i),o=e=>{let t=Object.keys(r).find(t=>i(t)===e);return t?r[t]:null},s=async e=>{try{let t=o(e);if(!t)return null;let{data:r,content:i}=n(t);return{slug:e,title:r.title||`No Title`,date:r.date||``,author:r.author||`Unknown`,excerpt:r.excerpt||``,heroImage:r.heroImage||`/images/placeholder-image.webp`,content:i}}catch(t){return console.error(`Error fetching blog post ${e}:`,t),null}},c=async()=>(await Promise.all(a().map(async e=>{let t=await s(e);return t?{slug:t.slug,title:t.title,date:t.date,author:t.author,heroImage:t.heroImage,excerpt:t.excerpt}:null}))).filter(e=>e!==null).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());export{s as n,c as t};
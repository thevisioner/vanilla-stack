# Steps to take to adapt starter to a specific project

1. Add `Favicon.tsx` component to `pages/_document.tsx` and generate favicons.

2. Add `Metadata.tsx` component to `pages/_app.tsx` and include some metadata.

3. Add `FontProvider` as a wrapper component for `<Component {...pageProps} />`  
   at `pages/_app.tsx`; include and reference project specific font files.

4. Add `Layout.tsx` as a wrapper component for `<Component {...pageProps} />`  
   ar `pages/_app.tsx`; include `<Header />` and `<Footer />` components.

   ```jsx
   // pages/_app.tsx
   <>
     <Metadata />
     <FontProvider>
       <Layout>
         <Header />
         <Component {...pageProps} />
         <Footer />
       </Layout>
     </FontProvider>
   </>
   ```

5. ...

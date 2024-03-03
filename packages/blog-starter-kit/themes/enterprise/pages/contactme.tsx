// import Head from 'next/head';
// import { Layout } from '../components/layout';
// import { Header } from '../components/header';
// import { Container } from '../components/container';
// import { Footer } from '../components/footer';
// import {AppProvider} from "../components/contexts/appContext";
// import { PublicationFragment } from '../generated/graphql';
// type ContactProps = {
//   publication: PublicationFragment;
// };
//
//
// export default function Contact({ publication }: ContactProps) {
//   return (
//     <AppProvider publication={publication}>
//     <Layout>
//       <Head>
//         <title>Contact Me - Your Site Name</title>
//         <meta name="description" content="How to contact me"/>
//       </Head>
//       <Header/>
//       <Container className="flex flex-col items-center justify-center py-10">
//         <h1 className="text-4xl font-bold text-center">Contact Me</h1>
//         <p className="mt-4 text-lg text-center">Feel free to get in touch via email at <a
//           href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a></p>
//         <p className="text-lg text-center">Or call me at <a href="tel:+1234567890"
//                                                             className="text-blue-600 hover:underline">+1 234 567 890</a>
//         </p>
//       </Container>
//       <Footer/>
//     </Layout>
//     </AppProvider>
//   );
// }

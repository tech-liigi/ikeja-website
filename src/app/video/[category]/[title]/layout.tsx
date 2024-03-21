import type { Metadata, ResolvingMetadata  } from "next";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
type Props = {
    params: { category: string, title:string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const category = params.category;
    const title = params.title;

    return {
        title: `ikeja Video & ${category.charAt(0).toUpperCase() + category.slice(1, category.length)} & ${title}`,
        description: "For all the latest Ikeja news, visit the official website of the Ikeja.",
        icons: {
            icon: "/Ikeja_FC_Logo.png"
        },
        openGraph: {
            title: `Ikeja Video & ${category.charAt(0).toUpperCase() + category.slice(1, category.length)} & ${title}`,
            description: "For all the latest LiiGi news, visit the official website of the Ikeja.",
            images:["/Ikeja_FC_Logo.png"]
        },
    }
}
export default function Page({
                                 children,
                             }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={roboto.className}>{children}</body>
        </html>
    );
}

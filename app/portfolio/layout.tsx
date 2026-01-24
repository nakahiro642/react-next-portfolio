import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
    title: "制作記録・作品集"
};

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="Portfolio" sub="制作記録・作品集" />
            <Sheet>{children}</Sheet>
        </>
    );
}

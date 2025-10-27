import { login, register } from "@/routes";
import { BakedGoodResource, SharedData } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Home({bakedGoods}: {bakedGoods: BakedGoodResource}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <Link
                    href={login()}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                    Log in
                </Link>
                <Link
                    href={register()}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                    Register
                </Link>
                <h1>Baked Goods Home</h1>
                <pre>{JSON.stringify(bakedGoods, null, 2)}</pre>
                {/* Use bakedGoods to iterate and display baked goods here. */}
            </div>
        </>
    );
}
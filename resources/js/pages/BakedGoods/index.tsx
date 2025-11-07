import DefaultLayout from "@/layouts/app/bakers-dozen-layout";
import { BakedGoodResource } from "@/types";

export default function Home({bakedGoods}: {bakedGoods: BakedGoodResource}) {
    return (
        <DefaultLayout>
            <div>
                <h1>Baked Goods List</h1>
                <pre>{JSON.stringify(bakedGoods, null, 2)}</pre>
                {/* Use bakedGoods to iterate and display baked goods here. */}
            </div>
        </DefaultLayout>
    );
}
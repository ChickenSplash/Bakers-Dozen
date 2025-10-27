import { BakedGoodResource } from "@/types";

export default function Home({bakedGoods}: {bakedGoods: BakedGoodResource}) {
    return (
        <div>
            <h1>Baked Goods Home</h1>
            <pre>{JSON.stringify(bakedGoods, null, 2)}</pre>
            {/* Use bakedGoods to iterate and display baked goods here. */}
        </div>
    );
}